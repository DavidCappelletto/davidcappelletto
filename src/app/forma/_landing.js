"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PRIVACY = "https://www.iubenda.com/privacy-policy/65493035";
const FORM = "preregistrazione-forma";

const steps = [
  {
    n: "01",
    h: "Un esercizio alla volta",
    p: "Illustrazione, serie, ripetizioni e carico. Tocchi «Fatto · Prossimo» e Forma ti porta al successivo.",
    img: "/forma/esercizio.webp",
    alt: "Schermata di un esercizio in Forma con illustrazione e carico",
  },
  {
    n: "02",
    h: "Recupero senza uscire",
    p: "Il timer parte dall'esercizio: metti in pausa o aggiungi 15 secondi, poi riprendi.",
    img: "/forma/recupero.webp",
    alt: "Timer di recupero in Forma",
  },
  {
    n: "03",
    h: "Il tuo circuito",
    p: "Scegli gli esercizi, riordina la sequenza, imposta i giri e salvalo tra le tue schede.",
    img: "/forma/circuito.webp",
    alt: "Creazione di un circuito personalizzato in Forma",
  },
  {
    n: "04",
    h: "La costanza si vede",
    p: "Ogni sessione completata colora il giorno nel calendario.",
    img: "/forma/calendario.webp",
    alt: "Calendario delle sessioni in Forma",
  },
];

const facts = [
  "60 esercizi illustrati",
  "Filtri per gruppo muscolare e attrezzo",
  "Circuiti personalizzati",
  "Timer di recupero",
  "Calendario delle sessioni",
];

function encode(data) {
  return Object.keys(data).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");
}

function PreForm({ id }) {
  const [state, setState] = useState("idle");
  const [fonte, setFonte] = useState("diretto");

  useEffect(() => {
    try {
      const u = new URL(window.location.href);
      const src = u.searchParams.get("utm_source") || u.searchParams.get("da");
      if (src) setFonte(src.slice(0, 40));
    } catch {}
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = {
      "form-name": FORM,
      "bot-field": f["bot-field"].value,
      nome: f.nome.value.trim(),
      email: f.email.value.trim(),
      consenso: f.consenso.checked ? "sì" : "",
      fonte,
    };
    if (!data.email || !data.consenso) return;
    setState("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setState(res.ok ? "ok" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "ok") {
    return (
      <div className="fm-form fm-done" id={id}>
        <span className="fm-done-mark" aria-hidden="true">✓</span>
        <div>
          <strong>Ci sei!</strong>
          <p>Ti scrivo appena la beta di Forma è pronta. Nel frattempo, la fotocopia della scheda puoi riciclarla.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="fm-form" id={id} onSubmit={onSubmit} name={FORM}>
      <p className="fm-form-title">Pre-registrati e prova la beta tra i primi</p>
      <input type="hidden" name="form-name" value={FORM} />
      <p className="fm-hp" aria-hidden="true">
        <label>Non compilare<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <label className="fm-field">
        <span>Nome</span>
        <input name="nome" type="text" autoComplete="given-name" placeholder="Come ti chiami?" maxLength={60} />
      </label>
      <label className="fm-field">
        <span>Email *</span>
        <input name="email" type="email" required autoComplete="email" placeholder="nome@email.it" maxLength={120} />
      </label>
      <label className="fm-check">
        <input name="consenso" type="checkbox" required />
        <span>
          Accetto di ricevere un&apos;email quando la beta di Forma sarà disponibile e ho letto la{" "}
          <a href={PRIVACY} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </span>
      </label>
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Invio…" : "Entra in Forma"}
      </button>
      {state === "error" && <p className="fm-err">Qualcosa non è andato. Riprova tra poco.</p>}
      <p className="fm-note">Niente spam: solo l&apos;avviso di apertura della beta. Puoi cancellarti quando vuoi.</p>
    </form>
  );
}

export default function FormaLanding() {
  return (
    <main className="fm">
      <div className="fm-dots" aria-hidden="true" />
      <header className="fm-top">
        <Link href="/" className="fm-home">David Cappelletto</Link>
        <a href="#pre" className="fm-top-cta">Pre-registrati</a>
      </header>

      <section className="fm-hero">
        <div className="fm-hero-copy">
          <p className="fm-eyebrow">FORMA · BETA IN ARRIVO</p>
          <h1>Schede stropicciate o perse? <span>Entra in Forma.</span></h1>
          <p className="fm-lead">
            Forma ti guida in palestra un esercizio alla volta: illustrazioni, carichi, timer di recupero, circuiti
            su misura e un calendario che si colora a ogni sessione.
          </p>
          <PreForm id="pre" />
        </div>
        <div className="fm-phone" aria-label="Video di presentazione di Forma">
          <video src="/forma/reel.mp4" poster="/forma/poster.jpg" controls playsInline preload="metadata" />
        </div>
      </section>

      <section className="fm-section">
        <p className="fm-eyebrow">COME FUNZIONA</p>
        <h2>La scheda smette di essere un foglio</h2>
        <div className="fm-steps">
          {steps.map((s) => (
            <article key={s.n} className="fm-step">
              <div className="fm-shot"><img src={s.img} alt={s.alt} loading="lazy" width="585" height="1266" /></div>
              <span>{s.n}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fm-section fm-archive">
        <div className="fm-shot fm-shot-lg"><img src="/forma/archivio.webp" alt="Archivio esercizi di Forma" loading="lazy" width="585" height="1266" /></div>
        <div>
          <p className="fm-eyebrow">DENTRO L&apos;APP</p>
          <h2>Tutto quello che serve, niente di più</h2>
          <ul className="fm-facts">
            {facts.map((f) => (
              <li key={f}><i />{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fm-section fm-why">
        <p className="fm-eyebrow">PERCHÉ ESISTE</p>
        <h2>Nata in palestra, non in una riunione</h2>
        <p>
          Il punto di partenza era semplice: allenarsi senza una fotocopia in mano. Forma è ancora in sviluppo e la
          beta serve a capire cosa funziona davvero per chi si allena, prima di aggiungere altro.
        </p>
      </section>

      <section className="fm-section fm-final">
        <h2>Vuoi provarla tra i primi?</h2>
        <PreForm id="pre-2" />
      </section>

      <footer className="fm-foot">
        <p>
          Forma è ideata e sviluppata da <Link href="/">David Cappelletto</Link> ·{" "}
          <Link href="/progetti/forma">Il progetto</Link> ·{" "}
          <a href={PRIVACY} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </p>
      </footer>

      <style>{`
        .fm{--bg:#060912;--fg:#F1F4FF;--muted:#9AA3C7;--sub:#C9D0EC;--line:rgba(140,170,255,.18);--cta:#FFD84D;--blue:#3B82F6;--green:#22C55E;
          position:relative;min-height:100vh;background:radial-gradient(1100px 700px at 75% -10%,rgba(37,99,235,.35),transparent 60%),radial-gradient(900px 600px at -10% 40%,rgba(34,197,94,.08),transparent 60%),var(--bg);
          color:var(--fg);overflow:hidden;font-family:'DM Sans',system-ui,sans-serif}
        .fm-dots{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,.07) 1.4px,transparent 1.6px);background-size:34px 34px}
        .fm>*{position:relative}
        .fm-top{display:flex;justify-content:space-between;align-items:center;width:min(1160px,92vw);margin:0 auto;padding:22px 0}
        .fm-home{color:var(--fg);text-decoration:none;font-weight:800;font-size:15px;letter-spacing:-.01em}
        .fm-top-cta{color:#14131C;background:var(--cta);text-decoration:none;font-weight:800;font-size:13px;padding:9px 14px;border-radius:999px}
        .fm-hero{width:min(1160px,92vw);margin:0 auto;padding:24px 0 72px;display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center}
        .fm-eyebrow{margin:0 0 14px;color:var(--blue);font-size:12px;font-weight:800;letter-spacing:.16em}
        .fm h1{font-size:clamp(40px,5.2vw,66px);line-height:1.02;letter-spacing:-.045em;margin:0 0 20px}
        .fm h1 span{display:block;color:var(--blue);text-shadow:0 0 40px rgba(59,130,246,.45)}
        .fm-lead{color:var(--sub);font-size:19px;line-height:1.6;margin:0 0 28px;max-width:560px}
        .fm-phone{justify-self:center;width:min(340px,80vw);aspect-ratio:9/16;border-radius:42px;padding:10px;background:linear-gradient(150deg,#3a3d4e,#14151e 40%,#0b0c12 70%,#2a2c39);box-shadow:0 40px 90px rgba(0,0,0,.6),inset 0 0 0 2px #4a4d5e}
        .fm-phone video{width:100%;height:100%;object-fit:cover;border-radius:33px;background:#000;display:block}
        .fm-form{display:grid;gap:12px;max-width:520px;padding:22px;border:1px solid var(--line);border-radius:20px;background:rgba(14,20,40,.75);backdrop-filter:blur(8px)}
        .fm-form-title{margin:0 0 2px;font-weight:800;font-size:18px}
        .fm-field{display:grid;gap:6px}
        .fm-field span{font-size:12px;font-weight:700;color:var(--muted)}
        .fm-field input{font:inherit;font-size:16px;color:var(--fg);background:rgba(6,9,18,.7);border:1px solid var(--line);border-radius:12px;padding:12px 14px;outline:none}
        .fm-field input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(59,130,246,.25)}
        .fm-check{display:flex;gap:10px;align-items:flex-start;font-size:13px;line-height:1.45;color:var(--muted)}
        .fm-check input{margin-top:3px;width:17px;height:17px;accent-color:var(--cta);flex:none}
        .fm-check a,.fm-foot a{color:#8DB5FF}
        .fm-form button{font:inherit;font-weight:800;font-size:16px;color:#14131C;background:var(--cta);border:0;border-radius:12px;padding:14px 18px;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
        .fm-form button:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(255,216,77,.25)}
        .fm-form button:disabled{opacity:.6;cursor:default;transform:none}
        .fm-note{margin:0;font-size:12px;color:var(--muted)}
        .fm-err{margin:0;font-size:13px;color:#FF8DB3}
        .fm-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
        .fm-done{display:flex;gap:16px;align-items:center}
        .fm-done-mark{flex:none;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;font-size:26px;font-weight:800;color:#06210F;background:var(--green);box-shadow:0 0 30px rgba(34,197,94,.45)}
        .fm-done strong{font-size:20px}
        .fm-done p{margin:4px 0 0;color:var(--muted);line-height:1.5}
        .fm-section{width:min(1160px,92vw);margin:0 auto;padding:64px 0;border-top:1px solid var(--line)}
        .fm h2{font-size:clamp(28px,3.4vw,42px);line-height:1.1;letter-spacing:-.035em;margin:0 0 28px}
        .fm-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .fm-step{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:rgba(14,20,40,.55);padding-bottom:20px}
        .fm-shot{background:linear-gradient(160deg,#16244a,#0b1124);padding:18px 18px 0;overflow:hidden}
        .fm-shot img{display:block;width:100%;height:auto;aspect-ratio:585/820;object-fit:cover;object-position:top;border-radius:18px 18px 0 0;box-shadow:0 10px 30px rgba(0,0,0,.45)}
        .fm-step span{display:block;margin:18px 20px 6px;color:var(--blue);font-weight:800;font-size:12px;letter-spacing:.12em}
        .fm-step h3{margin:0 20px 8px;font-size:20px;letter-spacing:-.02em}
        .fm-step p{margin:0 20px;color:var(--muted);line-height:1.55;font-size:15px}
        .fm-archive{display:grid;grid-template-columns:.7fr 1.3fr;gap:56px;align-items:center}
        .fm-shot-lg{border-radius:22px;border:1px solid var(--line)}
        .fm-facts{list-style:none;margin:0;padding:0;display:grid;gap:12px}
        .fm-facts li{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:rgba(14,20,40,.55);font-weight:700}
        .fm-facts i{width:14px;height:14px;border-radius:3px;transform:rotate(45deg);flex:none;background:var(--blue);box-shadow:0 0 16px var(--blue)}
        .fm-why p{color:var(--sub);font-size:18px;line-height:1.65;margin:0;max-width:720px}
        .fm-final{display:grid;justify-items:center;text-align:center}
        .fm-final .fm-form{text-align:left;width:100%}
        .fm-foot{width:min(1160px,92vw);margin:0 auto;padding:28px 0 40px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
        @media (max-width:1000px){.fm-steps{grid-template-columns:repeat(2,1fr)}}
        @media (max-width:860px){
          .fm-hero{grid-template-columns:1fr;gap:36px;padding-top:8px}
          .fm-phone{order:2;width:min(300px,78vw)}
          .fm-lead{font-size:17px}
          .fm-archive{grid-template-columns:1fr;gap:28px}
          .fm-shot-lg{max-width:320px}
          .fm-section{padding:44px 0}
        }
        @media (max-width:560px){.fm-steps{grid-template-columns:1fr}}
      `}</style>
    </main>
  );
}
