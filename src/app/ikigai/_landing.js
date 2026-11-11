"use client";

import { useState } from "react";
import Link from "next/link";

const PRIVACY = "/privacy";

const steps = [
  {
    n: "01",
    h: "Rispondi a otto domande",
    p: "Iki te le fa una alla volta, in chat. Scegli tra le risposte proposte oppure scrivi con parole tue.",
    img: "/projects/ikigai/chat.webp",
  },
  {
    n: "02",
    h: "I cristalli si accendono",
    p: "Passioni, talenti, lavoro e bisogni del mondo diventano quattro cristalli. Quello che resta staccato ti mostra subito cosa manca.",
    img: "/projects/ikigai/cristalli.webp",
  },
  {
    n: "03",
    h: "Una missione per colmare il vuoto",
    p: "Iki ti propone azioni concrete. Missione dopo missione, il cristallo centrale si completa.",
    img: "/projects/ikigai/missione.webp",
  },
];

const circles = [
  { c: "#FF4F8B", t: "Quello che ami" },
  { c: "#4F9DFF", t: "Quello in cui sei bravo" },
  { c: "#22E0A4", t: "Quello di cui il mondo ha bisogno" },
  { c: "#FFB02E", t: "Quello per cui puoi essere pagato" },
];

function encode(data) {
  return Object.keys(data).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");
}

function PreForm({ id }) {
  const [state, setState] = useState("idle");

  function fonteVisita() {
    try {
      const u = new URL(window.location.href);
      return (u.searchParams.get("utm_source") || u.searchParams.get("da") || "diretto").slice(0, 40);
    } catch {
      return "diretto";
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = {
      "form-name": "preregistrazione-ikigai",
      "bot-field": f["bot-field"].value,
      nome: f.nome.value.trim(),
      email: f.email.value.trim(),
      consenso: f.consenso.checked ? "sì" : "",
      fonte: fonteVisita(),
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
      <div className="mk-form mk-done" id={id}>
        <img src="/ikigai/iki.png" alt="" width="88" height="96" />
        <div>
          <strong>Ci sei!</strong>
          <p>Ti scrivo con un codice per continuare a chiacchierare con Iki. Intanto l&apos;app è già aperta: <a href="/ikigai/app">apri Mappa Ikigai</a>.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="mk-form" id={id} onSubmit={onSubmit} name="preregistrazione-ikigai">
      <p className="mk-form-title">Vuoi più chiacchierate con Iki?</p>
      <p className="mk-form-sub">Mappa Ikigai è gratuita e aperta a tutti, chat con Iki compresa. Le chiacchierate incluse sono limitate: se le finisci, lascia l&apos;email e ti mando un codice per continuare, sempre gratis.</p>
      <input type="hidden" name="form-name" value="preregistrazione-ikigai" />
      <p className="mk-hp" aria-hidden="true">
        <label>Non compilare<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <label className="mk-field">
        <span>Nome</span>
        <input name="nome" type="text" autoComplete="given-name" placeholder="Come ti chiami?" maxLength={60} />
      </label>
      <label className="mk-field">
        <span>Email *</span>
        <input name="email" type="email" required autoComplete="email" placeholder="nome@email.it" maxLength={120} />
      </label>
      <label className="mk-check">
        <input name="consenso" type="checkbox" required />
        <span>
          Accetto di ricevere un&apos;email con il codice di Mappa Ikigai e ho letto la{" "}
          <a href={PRIVACY} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </span>
      </label>
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Invio…" : "Chiedi il codice"}
      </button>
      {state === "error" && <p className="mk-err">Qualcosa non è andato. Riprova tra poco.</p>}
      <p className="mk-note">Niente spam: solo l&apos;email con il codice. Puoi cancellarti quando vuoi.</p>
    </form>
  );
}

export default function IkigaiLanding() {
  return (
    <main className="mk" id="top">
      <div className="mk-stars" aria-hidden="true" />
      <header className="mk-top">
        <a href="#top" className="mk-home" aria-label="Mappa Ikigai"><img src="/ikigai/iki.png" alt="" width="40" height="44" /><span>Mappa <b>Ikigai</b></span></a>
        <a href="/ikigai/app" className="mk-top-cta">Provala ora</a>
      </header>

      <section className="mk-hero">
        <div className="mk-hero-copy">
          <p className="mk-eyebrow">MAPPA IKIGAI · PROVALA GRATIS</p>
          <h1>Le tue energie vanno nel posto giusto?</h1>
          <p className="mk-lead">
            Otto domande, quattro cristalli e Iki che ti accompagna. Vedi subito cosa manca nel tuo ikigai e
            ricevi missioni concrete per colmarlo.
          </p>
          <p className="mk-go">
            <a href="/ikigai/app" className="mk-go-btn">Inizia il percorso</a>
            <span>Gratis, senza registrazione. Le risposte restano sul tuo telefono.</span>
          </p>
          <PreForm id="pre" />
        </div>
        <div className="mk-phone" aria-label="Video di presentazione di Mappa Ikigai">
          <video src="/ikigai/reel.mp4" poster="/ikigai/poster.jpg" controls playsInline preload="metadata" />
        </div>
      </section>

      <section className="mk-section">
        <p className="mk-eyebrow">COME FUNZIONA</p>
        <h2>Una conversazione che diventa una mappa</h2>
        <div className="mk-steps">
          {steps.map((s) => (
            <article key={s.n} className="mk-step">
              <img src={s.img} alt={s.h} loading="lazy" width="1600" height="1000" />
              <span>{s.n}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mk-section mk-ikigai">
        <div>
          <p className="mk-eyebrow">COS&apos;È L&apos;IKIGAI</p>
          <h2>Il motivo per cui ti alzi la mattina</h2>
          <p>
            Ikigai è una parola giapponese che indica, più o meno, ciò che dà senso alle tue giornate. La versione
            più diffusa lo disegna come l&apos;incontro di quattro cerchi: è una rielaborazione occidentale, ma è un
            ottimo strumento per farsi le domande giuste. In Mappa Ikigai ogni cerchio è un cristallo.
          </p>
        </div>
        <ul className="mk-circles">
          {circles.map((c) => (
            <li key={c.t}><i style={{ background: c.c }} />{c.t}</li>
          ))}
        </ul>
      </section>

      <section className="mk-section mk-iki">
        <img src="/ikigai/iki.png" alt="Iki, la mascotte di Mappa Ikigai" width="200" height="218" loading="lazy" />
        <div>
          <h2>Ti accompagna Iki</h2>
          <p>
            Un piccolo spirito con quattro cristalli in testa. Fa le domande, ascolta le risposte e ti propone le
            missioni. È curioso, gentile e un po&apos; permaloso: chiamarli &quot;gemme&quot; non è una buona idea.
          </p>
        </div>
      </section>

      <section className="mk-section mk-final">
        <h2>Pronto a vedere il tuo cristallo?</h2>
        <p className="mk-go mk-go-center">
          <a href="/ikigai/app" className="mk-go-btn">Inizia il percorso</a>
        </p>
        <PreForm id="pre-2" />
      </section>

      <footer className="mk-foot">
        <p>
          Mappa Ikigai è ideata e sviluppata da <Link href="/">David Cappelletto</Link> ·{" "}
          <Link href="/progetti/mappa-ikigai">Il progetto</Link> ·{" "}
          <a href="/ikigai/app">Apri l&apos;app</a> ·{" "}
          <a href={PRIVACY} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </p>
      </footer>

      <style>{`
        .mk{--bg:#05060C;--fg:#F1F2FA;--muted:#A3A8C3;--line:rgba(185,194,255,.18);--cta:#FFE14D;--lilac:#B9C2FF;
          position:relative;min-height:100vh;background:radial-gradient(1200px 700px at 70% -10%,rgba(92,74,180,.35),transparent 60%),radial-gradient(900px 600px at -10% 30%,rgba(34,224,164,.08),transparent 60%),var(--bg);
          color:var(--fg);overflow:hidden;font-family:var(--font-dm),system-ui,sans-serif}
        .mk-stars{position:absolute;inset:0;pointer-events:none;opacity:.55;background-image:radial-gradient(1px 1px at 10% 20%,#fff,transparent),radial-gradient(1px 1px at 30% 70%,#fff,transparent),radial-gradient(1.5px 1.5px at 55% 35%,#fff,transparent),radial-gradient(1px 1px at 80% 15%,#fff,transparent),radial-gradient(1px 1px at 90% 60%,#fff,transparent),radial-gradient(1.5px 1.5px at 20% 90%,#fff,transparent),radial-gradient(1px 1px at 65% 85%,#fff,transparent);background-size:600px 600px}
        .mk>*{position:relative}
        .mk-top{display:flex;justify-content:space-between;align-items:center;width:min(1160px,92vw);margin:0 auto;padding:22px 0}
        .mk-home{display:flex;align-items:center;gap:10px;color:var(--fg);text-decoration:none;font-weight:700;font-size:19px;letter-spacing:-.02em}.mk-home img{width:40px;height:auto;filter:drop-shadow(0 0 12px rgba(185,194,255,.45))}.mk-home b{font-weight:800;color:var(--lilac)}
        .mk-go{display:flex;flex-direction:column;gap:10px;align-items:flex-start;margin:22px 0 26px}
        .mk-go-center{align-items:center}
        .mk-go-btn{display:inline-block;color:#14131C;background:var(--cta);text-decoration:none;font-weight:800;font-size:17px;padding:15px 26px;border-radius:999px}
        .mk-go-btn:hover{filter:brightness(1.06)}
        .mk-go span{color:var(--muted);font-size:14px}
        .mk-form-sub{color:var(--muted);font-size:14px;line-height:1.5;margin:0 0 4px}
        .mk-done a{color:var(--lilac)}
        .mk-top-cta{color:#14131C;background:var(--cta);text-decoration:none;font-weight:800;font-size:13px;padding:9px 14px;border-radius:999px}
        .mk-hero{width:min(1160px,92vw);margin:0 auto;padding:24px 0 72px;display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center}
        .mk-eyebrow{margin:0 0 14px;color:var(--lilac);font-size:12px;font-weight:800;letter-spacing:.16em}
        .mk h1{font-size:clamp(40px,5.4vw,68px);line-height:1;letter-spacing:-.045em;margin:0 0 20px}
        .mk-lead{color:var(--muted);font-size:19px;line-height:1.6;margin:0 0 28px;max-width:560px}
        .mk-phone{justify-self:center;width:min(340px,80vw);aspect-ratio:9/16;border-radius:42px;padding:10px;background:linear-gradient(150deg,#3a3d4e,#14151e 40%,#0b0c12 70%,#2a2c39);box-shadow:0 40px 90px rgba(0,0,0,.6),inset 0 0 0 2px #4a4d5e}
        .mk-phone video{width:100%;height:100%;object-fit:cover;border-radius:33px;background:#000;display:block}
        .mk-form{display:grid;gap:12px;max-width:520px;padding:22px;border:1px solid var(--line);border-radius:20px;background:rgba(20,22,40,.72);backdrop-filter:blur(8px)}
        .mk-form-title{margin:0 0 2px;font-weight:800;font-size:18px}
        .mk-field{display:grid;gap:6px}
        .mk-field span{font-size:12px;font-weight:700;color:var(--muted)}
        .mk-field input{font:inherit;font-size:16px;color:var(--fg);background:rgba(5,6,12,.7);border:1px solid var(--line);border-radius:12px;padding:12px 14px;outline:none}
        .mk-field input:focus{border-color:var(--lilac);box-shadow:0 0 0 3px rgba(185,194,255,.2)}
        .mk-check{display:flex;gap:10px;align-items:flex-start;font-size:13px;line-height:1.45;color:var(--muted)}
        .mk-check input{margin-top:3px;width:17px;height:17px;accent-color:var(--cta);flex:none}
        .mk-check a,.mk-foot a{color:var(--lilac)}
        .mk-form button{font:inherit;font-weight:800;font-size:16px;color:#14131C;background:var(--cta);border:0;border-radius:12px;padding:14px 18px;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
        .mk-form button:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(255,225,77,.25)}
        .mk-form button:disabled{opacity:.6;cursor:default;transform:none}
        .mk-note{margin:0;font-size:12px;color:var(--muted)}
        .mk-err{margin:0;font-size:13px;color:#FF8DB3}
        .mk-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
        .mk-done{display:flex;gap:16px;align-items:center}
        .mk-done strong{font-size:20px}
        .mk-done p{margin:4px 0 0;color:var(--muted);line-height:1.5}
        .mk-section{width:min(1160px,92vw);margin:0 auto;padding:64px 0;border-top:1px solid var(--line)}
        .mk h2{font-size:clamp(28px,3.4vw,42px);line-height:1.1;letter-spacing:-.035em;margin:0 0 28px}
        .mk-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .mk-step{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:rgba(20,22,40,.5);padding-bottom:20px}
        .mk-step img{width:100%;height:auto;aspect-ratio:16/10;object-fit:cover;display:block}
        .mk-step span{display:block;margin:18px 20px 6px;color:var(--lilac);font-weight:800;font-size:12px;letter-spacing:.12em}
        .mk-step h3{margin:0 20px 8px;font-size:20px;letter-spacing:-.02em}
        .mk-step p{margin:0 20px;color:var(--muted);line-height:1.55;font-size:15px}
        .mk-ikigai{display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:center}
        .mk-ikigai p{color:var(--muted);font-size:17px;line-height:1.65;margin:0}
        .mk-circles{list-style:none;margin:0;padding:0;display:grid;gap:12px}
        .mk-circles li{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:rgba(20,22,40,.5);font-weight:700}
        .mk-circles i{width:18px;height:18px;border-radius:4px;transform:rotate(45deg);flex:none;box-shadow:0 0 18px currentColor}
        .mk-iki{display:flex;gap:36px;align-items:center}
        .mk-iki img{width:170px;height:auto;filter:drop-shadow(0 0 30px rgba(185,194,255,.35));animation:mkfloat 4s ease-in-out infinite}
        .mk-iki p{color:var(--muted);font-size:17px;line-height:1.65;margin:0;max-width:640px}
        .mk-iki h2{margin-bottom:12px}
        @keyframes mkfloat{50%{transform:translateY(-10px)}}
        .mk-final{display:grid;justify-items:center;text-align:center}
        .mk-final .mk-form{text-align:left;width:100%}
        .mk-foot{width:min(1160px,92vw);margin:0 auto;padding:28px 0 40px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
        @media (prefers-reduced-motion:reduce){.mk-iki img{animation:none}}
        @media (max-width:860px){
          .mk-hero{grid-template-columns:1fr;gap:36px;padding-top:8px}
          .mk-phone{order:2;width:min(300px,78vw)}
          .mk-lead{font-size:17px}
          .mk-steps{grid-template-columns:1fr}
          .mk-ikigai{grid-template-columns:1fr;gap:24px}
          .mk-iki{flex-direction:column;text-align:center}
          .mk-section{padding:44px 0}
        }
      `}</style>
    </main>
  );
}
