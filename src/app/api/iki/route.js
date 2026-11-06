// Iki, la mascotte di Mappa Ikigai: unico punto di contatto tra l'app e Claude.
// L'app manda solo dati strutturati per compiti fissi; i prompt stanno qui, sul server.
// Niente contenuti delle risposte nei log: si registrano solo esiti e codici d'errore.

import { createHash } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_URL = process.env.IKIGAI_API_URL || "https://api.anthropic.com/v1/messages";
const MODELS = [process.env.IKIGAI_MODEL, "claude-haiku-5-5", "claude-haiku-4-5"].filter(Boolean);
let workingModel = null;

const LIMITS = {
  ipPerDay: Number(process.env.IKIGAI_LIMIT_IP_DAY || 150), // chiamate a Claude per persona al giorno
  allPerDay: Number(process.env.IKIGAI_LIMIT_DAY || 4000), // tetto giornaliero complessivo
  checksPerDay: 40, // tentativi di codice per persona al giorno
};

const PERSONA =
  "Sei Iki, la mascotte coach di un'app chiamata Mappa Ikigai, in stile fumetto. Nell'app le quattro aree sono quattro cristalli sospesi nello spazio: rubino (ciò che ami), zaffiro (ciò in cui sei bravo), topazio (ciò per cui ti pagano), smeraldo (ciò di cui il mondo ha bisogno). Ogni incrocio tra due cristalli vicini è un frammento del cristallo centrale, l'ikigai: un frammento può essere incastrato, quasi o staccato, e la persona lo avvicina completando delle missioni. La persona può anche toccare un cristallo per guardarlo da vicino e parlarne con te. Usa questa immagine con leggerezza. Le tue parole appaiono in fumetti brevi: scrivi in italiano corretto e naturale, dai del tu, tono caldo e diretto, frasi corte, niente markdown (niente asterischi, titoli o elenchi con simboli), niente frasi motivazionali vuote. Le note tra parentesi nei messaggi della persona sono aggiornamenti dell'app: tienine conto senza citarle alla lettera.\n\n" +
  "Confini: parli di ikigai, passioni, talenti, lavoro, bisogni del mondo, scelte e piccoli passi concreti. Se ti chiedono altro (compiti, codice, notizie, temi che non c'entrano) riporta con gentilezza la conversazione sul suo percorso. Non fai diagnosi e non dai consigli medici, legali o finanziari specifici. Se la persona esprime un disagio forte, rispondi con calore e suggerisci di parlarne con una persona di fiducia o con un professionista. Non dire mai che sei un altro modello o un altro servizio: sei Iki, e se te lo chiedono puoi dire che funzioni grazie a Claude di Anthropic.";

const ZONES = ["passione", "missione", "professione", "vocazione"];

/* ---------- utilità ---------- */
function bad(code, status = 400) {
  return Response.json({ error: code }, { status, headers: { "Cache-Control": "no-store" } });
}
function str(v, max) {
  return typeof v === "string" ? v.slice(0, max) : "";
}
function strList(v, maxItems, maxLen) {
  return Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, maxItems).map((x) => x.slice(0, maxLen)) : [];
}
function normCode(c) {
  return String(c || "").toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 40);
}
function validCodes() {
  return (process.env.IKIGAI_INVITE_CODES || "")
    .split(",")
    .map(normCode)
    .filter(Boolean);
}
function clientId(req) {
  const ip =
    req.headers.get("x-nf-client-connection-ip") ||
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "sconosciuto";
  // si conserva solo un'impronta, mai l'indirizzo
  return createHash("sha256").update("mappa-ikigai:" + ip).digest("hex").slice(0, 24);
}
function parseJson(text) {
  if (typeof text !== "string") return null;
  const a = text.indexOf("{");
  const b = text.lastIndexOf("}");
  if (a < 0 || b <= a) return null;
  try {
    return JSON.parse(text.slice(a, b + 1));
  } catch {
    return null;
  }
}

/* ---------- limiti d'uso (Netlify Blobs; in locale si passa oltre) ---------- */
let storePromise = null;
async function store() {
  if (!storePromise) {
    storePromise = import("@netlify/blobs")
      .then((m) => m.getStore({ name: "ikigai-limiti", consistency: "strong" }))
      .catch(() => null);
  }
  return storePromise;
}
async function bump(key, max) {
  try {
    const s = await store();
    if (!s) return true;
    const n = Number((await s.get(key)) || 0);
    if (n >= max) return false;
    await s.set(key, String(n + 1));
    return true;
  } catch {
    return true; // un guasto del contatore non deve bloccare l'app
  }
}
function today() {
  return new Date().toISOString().slice(0, 10);
}

/* ---------- Claude ---------- */
async function claude({ messages, system = PERSONA, maxTokens = 400, temperature = 0.7 }) {
  const key = process.env.IKIGAI_ANTHROPIC_KEY;
  if (!key) throw Object.assign(new Error("chiave assente"), { code: "not_configured" });
  const order = workingModel ? [workingModel, ...MODELS.filter((m) => m !== workingModel)] : MODELS;
  let lastErr = null;
  for (const model of order) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 22000);
    let res;
    try {
      res = await fetch(API_URL, {
        method: "POST",
        signal: ctrl.signal,
        headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
        body: JSON.stringify({ model, max_tokens: maxTokens, temperature, system, messages }),
      });
    } catch (e) {
      clearTimeout(timer);
      throw Object.assign(new Error("rete"), { code: "busy" });
    }
    clearTimeout(timer);
    if (res.ok) {
      const j = await res.json();
      workingModel = model;
      const text = (j.content || []).filter((c) => c.type === "text").map((c) => c.text).join("").trim();
      return text;
    }
    let detail = "";
    try {
      detail = JSON.stringify(await res.json()).slice(0, 300);
    } catch {}
    console.error(`[iki] Claude ${res.status} con ${model}: ${detail.replace(/"message":"[^"]*"/, '"message":"…"')}`);
    if (res.status === 404 || (res.status === 400 && /model/i.test(detail))) {
      lastErr = Object.assign(new Error("modello"), { code: "busy" });
      continue; // modello non disponibile: si prova il successivo
    }
    if (res.status === 401 || res.status === 403) throw Object.assign(new Error("chiave"), { code: "not_configured" });
    if (res.status === 429) throw Object.assign(new Error("limite"), { code: "rate_limited" });
    throw Object.assign(new Error("errore"), { code: "busy" });
  }
  throw lastErr || Object.assign(new Error("nessun modello"), { code: "busy" });
}
async function claudeJson(prompt, maxTokens) {
  const text = await claude({ messages: [{ role: "user", content: prompt }], maxTokens, temperature: 0.6 });
  return parseJson(text);
}

/* ---------- compiti ---------- */
const TASKS = {
  async classify(d) {
    const domanda = str(d.domanda, 300);
    const opzioni = strList(d.opzioni, 12, 120);
    const testo = str(d.testo, 600);
    if (!domanda || !opzioni.length || !testo) return { scelte: [] };
    const j = await claudeJson(
      `Domanda: ${domanda}\nOpzioni:\n${opzioni.map((o, i) => `${i}: ${o}`).join("\n")}\n\nRisposta libera della persona: "${testo}"\n\nQuali opzioni rispecchia la risposta? Scegli da 0 a 2 indici, solo se il legame è chiaro. Rispondi solo con JSON: {"scelte":[indici]}`,
      60
    );
    const arr = j && Array.isArray(j.scelte) ? j.scelte : [];
    return { scelte: arr.map(Number).filter((n, i, a) => Number.isInteger(n) && n >= 0 && n < opzioni.length && a.indexOf(n) === i).slice(0, 2) };
  },

  async follow(d) {
    const cristallo = str(d.cristallo, 60);
    const risposte = str(d.risposte, 1500);
    const j = await claudeJson(
      `La persona ha appena risposto alle domande sul cristallo "${cristallo}":\n${risposte}\n\nScrivi UNA domanda di approfondimento aperta, in italiano corretto, dando del tu, al massimo 20 parole, concreta, che parta dalle sue risposte e le chieda un esempio reale o un dettaglio. Niente premesse. Rispondi solo con JSON: {"domanda":"..."}`,
      120
    );
    const q = j && typeof j.domanda === "string" ? j.domanda.trim().slice(0, 200) : "";
    return { domanda: q };
  },

  async chat(d) {
    const raw = Array.isArray(d.messages) ? d.messages.slice(-24) : [];
    const msgs = [];
    for (const m of raw) {
      if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") continue;
      const max = msgs.length === 0 ? 5000 : 1200;
      const content = m.content.slice(0, max);
      if (msgs.length && msgs[msgs.length - 1].role === m.role) msgs[msgs.length - 1].content += "\n\n" + content;
      else msgs.push({ role: m.role, content });
    }
    while (msgs.length && msgs[0].role !== "user") msgs.shift();
    if (!msgs.length || msgs[msgs.length - 1].role !== "user") throw Object.assign(new Error("conversazione"), { code: "bad_request" });
    const total = msgs.reduce((n, m) => n + m.content.length, 0);
    if (total > 16000) throw Object.assign(new Error("troppo lunga"), { code: "bad_request" });
    const text = await claude({ messages: msgs, maxTokens: 450 });
    return { text: text.slice(0, 1600) };
  },

  async missions(d) {
    const profilo = str(d.profilo, 4000);
    const stato = str(d.stato, 300);
    const fatte = strList(d.fatte, 20, 120);
    const j = await claudeJson(
      `Profilo della persona:\n${profilo}\n\nStato attuale dei frammenti: ${stato}.${fatte.length ? `\nMissioni già completate: ${fatte.join("; ")}.` : ""}\n\nCrea 3 missioni nuove e concrete da fare nelle prossime due settimane per rafforzare i frammenti più deboli (prima gli staccati, poi quelli quasi incastrati). Ogni missione deve essere un'azione verificabile e specifica per questa persona, non un consiglio generico. Scrivi in italiano corretto, dando del tu.\nRispondi solo con JSON: {"missioni":[{"titolo":"verbo all'imperativo, massimo 70 caratteri","zona":"passione | missione | professione | vocazione","perche":"massimo 100 caratteri"}]}`,
      700
    );
    const arr = j && Array.isArray(j.missioni) ? j.missioni : [];
    return { missioni: arr.slice(0, 3).map(cleanMission).filter(Boolean) };
  },

  async mission(d) {
    const profilo = str(d.profilo, 4000);
    const stato = str(d.stato, 300);
    const aperte = strList(d.aperte, 20, 120);
    const label = str(d.label, 80);
    const zone = strList(d.zone, 4, 20).filter((z) => ZONES.includes(z));
    const j = await claudeJson(
      `Profilo della persona:\n${profilo}\n\nStato dei frammenti: ${stato}.${aperte.length ? `\nMissioni già aperte (non ripeterle): ${aperte.join("; ")}.` : ""}\n\nCrea UNA missione concreta da fare nei prossimi giorni per sviluppare ${label}. Scegli la zona tra: ${(zone.length ? zone : ZONES).join(", ")}, preferendo quella più debole. Deve essere un'azione verificabile e specifica per questa persona. Italiano corretto, dai del tu.\nRispondi solo con JSON: {"titolo":"verbo all'imperativo, massimo 70 caratteri","zona":"...","perche":"massimo 100 caratteri"}`,
      260
    );
    return cleanMission(j) || {};
  },
};
function cleanMission(m) {
  if (!m || typeof m.titolo !== "string" || !m.titolo.trim()) return null;
  return {
    titolo: m.titolo.trim().slice(0, 110),
    zona: String(m.zona || "").toLowerCase().trim().slice(0, 20),
    perche: String(m.perche || "").trim().slice(0, 140),
  };
}

/* ---------- ingresso ---------- */
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return bad("bad_request");
  }
  const task = String(body?.task || "");
  const code = normCode(body?.code);
  const who = clientId(req);
  const day = today();

  if (task === "check") {
    if (!(await bump(`${day}:check:${who}`, LIMITS.checksPerDay))) return bad("rate_limited", 429);
    const codes = validCodes();
    if (!codes.length) return bad("not_configured", 503);
    return codes.includes(code) ? Response.json({ result: { ok: true } }) : bad("invite_invalid", 403);
  }

  if (!Object.hasOwn(TASKS, task)) return bad("bad_request");
  const codes = validCodes();
  if (!codes.length) return bad("not_configured", 503);
  if (!codes.includes(code)) return bad("invite_invalid", 403);
  if (!(await bump(`${day}:ip:${who}`, LIMITS.ipPerDay))) return bad("rate_limited", 429);
  if (!(await bump(`${day}:tutti`, LIMITS.allPerDay))) return bad("rate_limited", 429);

  try {
    const result = await TASKS[task](body.data || {});
    return Response.json({ result }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    const c = e?.code || "busy";
    console.error(`[iki] ${task}: ${c}`);
    const status = c === "rate_limited" ? 429 : c === "not_configured" ? 503 : c === "bad_request" ? 400 : 502;
    return bad(c, status);
  }
}

// Controllo di salute: senza parametri dice solo che il servizio c'è.
// Con ?prova=CODICE fa una chiamata minima a Claude e riporta il modello in uso (conta nei limiti).
export async function GET(req) {
  const h = { "Cache-Control": "no-store" };
  const code = normCode(new URL(req.url).searchParams.get("prova"));
  if (!code) return Response.json({ ok: true, servizio: "Iki · Mappa Ikigai" }, { headers: h });
  const codes = validCodes();
  if (!codes.length) return bad("not_configured", 503);
  if (!codes.includes(code)) return bad("invite_invalid", 403);
  if (!(await bump(`${today()}:ip:${clientId(req)}`, LIMITS.ipPerDay))) return bad("rate_limited", 429);
  try {
    const t = await claude({ messages: [{ role: "user", content: "Rispondi solo con la parola: ok" }], maxTokens: 5, temperature: 0 });
    return Response.json({ ok: true, modello: workingModel, risposta: t.slice(0, 20) }, { headers: h });
  } catch (e) {
    return Response.json({ ok: false, errore: e?.code || "busy" }, { status: 502, headers: h });
  }
}
