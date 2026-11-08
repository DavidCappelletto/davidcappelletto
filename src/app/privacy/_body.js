"use client";

import { colors } from "../progetti/_data";
import { SiteHeader, SiteFooter, LangProvider, useLang } from "../progetti/_site-parts";

const EMAIL = "cappellettodavid@gmail.com";
const CONSENT_KEY = "dc_analytics_consent";

const ui = {
  it: {
    tag: "Privacy e cookie",
    title: "Cosa faccio con i tuoi dati.",
    intro:
      "Questa pagina spiega quali dati raccoglie davidcappelletto.it, perché, con quali servizi e per quanto tempo. Vale per tutto il sito, compresa la pagina di pre-registrazione a Mappa Ikigai.",
    updated: "Ultimo aggiornamento: 8 novembre 2026",
    summaryTitle: "In breve",
    summaryHead: ["Quando", "Quali dati", "Perché", "Base giuridica", "Per quanto"],
    summary: [
      ["Visiti il sito", "IP, browser, pagine richieste", "Far funzionare e proteggere il sito", "Legittimo interesse", "Log tecnici di breve durata"],
      ["Scrivi dal modulo contatti", "Nome, email, attività, budget, messaggio", "Risponderti", "Tua richiesta (misure precontrattuali)", "Fino a 24 mesi dall'ultimo contatto"],
      ["Ti pre-registri a Mappa Ikigai", "Email, nome (facoltativo), canale di provenienza", "Avvisarti quando l'app è disponibile", "Consenso", "Fino a 12 mesi dopo il lancio o fino alla revoca"],
      ["Accetti le statistiche", "Pagine viste, clic, scroll, dispositivo", "Capire come viene usato il sito", "Consenso", "Fino a 14 mesi"],
    ],
    sections: [
      {
        h: "Chi tratta i dati",
        p: [
          "Il titolare del trattamento è David Cappelletto, consulente digitale con sede ad Aviano (PN), Italia.",
          `Per qualsiasi domanda o richiesta sui tuoi dati scrivimi a ${EMAIL}.`,
        ],
      },
      {
        h: "Navigazione e hosting",
        p: [
          "Il sito è ospitato da Netlify. Quando visiti una pagina, i server di Netlify ricevono in automatico alcuni dati tecnici: indirizzo IP, tipo di browser e sistema operativo, pagina richiesta, data e ora. Servono a mostrarti il sito, a misurarne il funzionamento e a difenderlo da abusi.",
          "Base giuridica: il mio legittimo interesse ad avere un sito che funziona ed è sicuro. Questi dati restano nei log tecnici di Netlify per il tempo previsto dal servizio e non li uso per profilarti.",
        ],
      },
      {
        h: "Modulo contatti",
        p: [
          "Se mi scrivi dal modulo contatti raccolgo i dati che inserisci: nome e cognome, email, tipo di attività, budget indicativo e messaggio. Il modulo è gestito da Web3Forms, che inoltra il messaggio alla mia casella email (Gmail, di Google).",
          "Uso questi dati solo per risponderti ed eventualmente preparare una proposta. Base giuridica: la tua richiesta, cioè misure precontrattuali (art. 6.1.b GDPR).",
          "Li conservo per il tempo necessario a gestire la conversazione e al massimo per 24 mesi dall'ultimo contatto. Se nasce una collaborazione, i documenti fiscali collegati vanno conservati per i tempi previsti dalla legge.",
        ],
      },
      {
        h: "Pre-registrazione a Mappa Ikigai",
        p: [
          "Nella pagina /ikigai puoi lasciare la tua email, e se vuoi il tuo nome, per sapere quando Mappa Ikigai sarà disponibile. Registro anche il canale da cui arrivi (per esempio Instagram o LinkedIn, se il link lo indica) e il fatto che hai dato il consenso. I dati sono raccolti con Netlify Forms.",
          "Li uso solo per scriverti quando l'app apre e per invitarti a provarla. Non è una newsletter, non mando pubblicità di terzi e non cedo la lista a nessuno.",
          "Base giuridica: il tuo consenso, che dai spuntando la casella del modulo. Puoi revocarlo quando vuoi rispondendo a una mia email o scrivendomi: cancello i tuoi dati. Altrimenti li cancello al più tardi 12 mesi dopo il lancio.",
        ],
      },
      {
        h: "WhatsApp",
        p: [
          "I pulsanti WhatsApp aprono una chat con me. Se mi scrivi, il tuo numero e i messaggi passano da WhatsApp (Meta) secondo la sua informativa. Li uso solo per risponderti.",
        ],
      },
      {
        h: "Statistiche (solo con il tuo consenso)",
        p: [
          "Se accetti dal banner, il sito carica Google Analytics 4 (Google) e Microsoft Clarity (Microsoft). Mi dicono quali pagine vengono visitate, per quanto tempo, da che tipo di dispositivo e da quale area geografica approssimativa, oltre ad alcune azioni come lo scroll, l'invio di un modulo o il clic su WhatsApp. Clarity ricostruisce anche clic e movimenti in forma di mappe di calore e registrazioni anonime delle sessioni; i campi dei moduli vengono mascherati.",
          "Se rifiuti, nessuno dei due servizi viene caricato. Base giuridica: il tuo consenso. I dati restano nei servizi per i periodi che prevedono, al massimo 14 mesi.",
        ],
      },
      {
        h: "Cookie e archiviazione nel browser",
        list: [
          "dc_analytics_consent (memoria locale del browser, tecnico): ricorda se hai accettato o rifiutato le statistiche. Resta finché non lo cancelli.",
          "_ga, _ga_* (Google Analytics, solo con consenso): distinguono le visite. Durata fino a 2 anni.",
          "_clck, _clsk e simili (Microsoft Clarity, solo con consenso): collegano le pagine di una stessa visita. Durata da 1 giorno a 1 anno.",
        ],
        p: ["Puoi cambiare la tua scelta in qualsiasi momento con il pulsante qui sotto, oppure cancellando i cookie dalle impostazioni del browser."],
        resetButton: true,
      },
      {
        h: "Font",
        p: ["Il carattere del sito (DM Sans) è servito direttamente da davidcappelletto.it: il tuo browser non si collega a Google Fonts."],
      },
      {
        h: "Chi riceve i dati",
        p: [
          "I dati sono trattati da me e dai fornitori che ho citato: Netlify, Web3Forms, Google (Gmail e Analytics), Microsoft (Clarity) e Meta (WhatsApp). Agiscono come responsabili del trattamento o come titolari autonomi secondo le loro condizioni. Non vendo né cedo i tuoi dati.",
          "Alcuni di questi fornitori hanno sede negli Stati Uniti. Il trasferimento avviene sulla base dell'EU-US Data Privacy Framework, per i fornitori che vi aderiscono, o delle clausole contrattuali standard approvate dalla Commissione europea.",
        ],
      },
      {
        h: "I tuoi diritti",
        p: [
          "Puoi chiedermi in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli, limitarne l'uso, riceverli in un formato leggibile o opporti al trattamento basato sul legittimo interesse. Se il trattamento si basa sul consenso, puoi revocarlo quando vuoi, senza conseguenze su quanto fatto prima.",
          `Basta scrivere a ${EMAIL}: rispondo entro un mese. Se pensi che i tuoi dati siano trattati in modo scorretto, puoi anche presentare un reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).`,
        ],
      },
      {
        h: "Minori e modifiche",
        p: [
          "Il sito non è rivolto a minori di 14 anni e non raccolgo consapevolmente i loro dati.",
          "Se cambiano i servizi usati dal sito aggiorno questa pagina e la data in alto.",
        ],
      },
    ],
    reset: "Cambia la scelta sui cookie",
    resetDone: "Fatto: al prossimo caricamento il banner ti chiederà di nuovo.",
  },
  en: {
    tag: "Privacy and cookies",
    title: "What I do with your data.",
    intro:
      "This page explains which data davidcappelletto.it collects, why, with which services and for how long. It covers the whole site, including the Mappa Ikigai pre-registration page.",
    updated: "Last updated: 8 November 2026",
    summaryTitle: "At a glance",
    summaryHead: ["When", "Which data", "Why", "Legal basis", "How long"],
    summary: [
      ["You visit the site", "IP, browser, requested pages", "Run and protect the site", "Legitimate interest", "Short-lived technical logs"],
      ["You use the contact form", "Name, email, business, budget, message", "Reply to you", "Your request (pre-contract steps)", "Up to 24 months after last contact"],
      ["You pre-register for Mappa Ikigai", "Email, name (optional), source channel", "Tell you when the app is available", "Consent", "Up to 12 months after launch or until you withdraw"],
      ["You accept analytics", "Page views, clicks, scroll, device", "Understand how the site is used", "Consent", "Up to 14 months"],
    ],
    sections: [
      {
        h: "Who is responsible",
        p: [
          "The data controller is David Cappelletto, digital consultant based in Aviano (PN), Italy.",
          `For any question or request about your data, write to ${EMAIL}.`,
        ],
      },
      {
        h: "Browsing and hosting",
        p: [
          "The site is hosted by Netlify. When you open a page, Netlify's servers automatically receive some technical data: IP address, browser and operating system, requested page, date and time. It is used to serve the site, monitor how it runs and protect it from abuse.",
          "Legal basis: my legitimate interest in a working, secure website. This data stays in Netlify's technical logs for the period the service provides and is not used to profile you.",
        ],
      },
      {
        h: "Contact form",
        p: [
          "If you write to me through the contact form, I collect what you enter: full name, email, type of business, indicative budget and message. The form is handled by Web3Forms, which forwards the message to my mailbox (Gmail, by Google).",
          "I use this data only to reply and, if relevant, prepare a proposal. Legal basis: your request, i.e. pre-contractual steps (Art. 6(1)(b) GDPR).",
          "I keep it as long as the conversation needs and no longer than 24 months after the last contact. If we start working together, related tax documents are kept for the periods required by law.",
        ],
      },
      {
        h: "Mappa Ikigai pre-registration",
        p: [
          "On the /ikigai page you can leave your email, and your name if you like, to hear when Mappa Ikigai is available. I also record the channel you came from (for example Instagram or LinkedIn, when the link says so) and the fact that you gave consent. The data is collected with Netlify Forms.",
          "I use it only to email you when the app opens and invite you to try it. It is not a newsletter, I send no third-party advertising and I never share the list.",
          "Legal basis: your consent, given by ticking the box in the form. You can withdraw it at any time by replying to one of my emails or writing to me, and I will delete your data. Otherwise I delete it at the latest 12 months after launch.",
        ],
      },
      {
        h: "WhatsApp",
        p: ["The WhatsApp buttons open a chat with me. If you write, your number and messages go through WhatsApp (Meta) under its own privacy policy. I use them only to reply."],
      },
      {
        h: "Analytics (only with your consent)",
        p: [
          "If you accept in the banner, the site loads Google Analytics 4 (Google) and Microsoft Clarity (Microsoft). They tell me which pages are visited, for how long, from which kind of device and roughly which area, plus some actions such as scrolling, sending a form or tapping WhatsApp. Clarity also turns clicks and movements into heatmaps and anonymous session replays; form fields are masked.",
          "If you decline, neither service is loaded. Legal basis: your consent. The data stays in those services for their retention periods, at most 14 months.",
        ],
      },
      {
        h: "Cookies and browser storage",
        list: [
          "dc_analytics_consent (browser local storage, technical): remembers whether you accepted or declined analytics. It stays until you clear it.",
          "_ga, _ga_* (Google Analytics, consent only): tell visits apart. Up to 2 years.",
          "_clck, _clsk and similar (Microsoft Clarity, consent only): link the pages of the same visit. From 1 day to 1 year.",
        ],
        p: ["You can change your choice at any time with the button below, or by clearing cookies in your browser settings."],
        resetButton: true,
      },
      {
        h: "Fonts",
        p: ["The site's typeface (DM Sans) is served by davidcappelletto.it itself: your browser does not connect to Google Fonts."],
      },
      {
        h: "Who receives the data",
        p: [
          "The data is processed by me and by the providers listed above: Netlify, Web3Forms, Google (Gmail and Analytics), Microsoft (Clarity) and Meta (WhatsApp). They act as processors or as independent controllers under their own terms. I never sell or share your data.",
          "Some of these providers are based in the United States. Transfers rely on the EU-US Data Privacy Framework, for providers certified under it, or on the standard contractual clauses approved by the European Commission.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You can ask me at any time to access, correct or delete your data, restrict its use, receive it in a portable format, or object to processing based on legitimate interest. Where processing relies on consent, you can withdraw it whenever you want, without affecting what happened before.",
          `Just write to ${EMAIL}: I reply within one month. If you think your data is handled improperly, you can also lodge a complaint with the Italian data protection authority (garanteprivacy.it).`,
        ],
      },
      {
        h: "Minors and changes",
        p: [
          "The site is not aimed at children under 14 and I do not knowingly collect their data.",
          "If the services used by the site change, I update this page and the date at the top.",
        ],
      },
    ],
    reset: "Change your cookie choice",
    resetDone: "Done: the banner will ask you again on the next page load.",
  },
};

function resetConsent(event, doneText) {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {}
  event.currentTarget.textContent = doneText;
  window.setTimeout(() => window.location.reload(), 900);
}

function PrivacyInner() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <div style={{ background: colors.bg, color: colors.ink, minHeight: "100vh" }}>
      <SiteHeader />
      <main style={{ width: "min(860px, 89vw)", margin: "0 auto", padding: "116px 0 96px" }}>
        <span style={{ display: "inline-block", border: `1px solid ${colors.line}`, background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
          {t.tag}
        </span>
        <h1 style={{ margin: "18px 0 0", fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-.02em" }}>{t.title}</h1>
        <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.6, color: colors.inkMuted }}>{t.intro}</p>
        <p style={{ marginTop: 8, fontSize: 13, color: colors.inkMuted }}>{t.updated}</p>

        <section style={{ marginTop: 40 }}>
          <h2 style={h2}>{t.summaryTitle}</h2>
          <div style={{ overflowX: "auto", border: `1px solid ${colors.line}`, borderRadius: 14, background: "#fff" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 640 }}>
              <thead>
                <tr>
                  {t.summaryHead.map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "12px 14px", borderBottom: `1px solid ${colors.line}`, color: colors.inkMuted, fontSize: 12, textTransform: "uppercase", letterSpacing: ".06em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.summary.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} style={{ padding: "12px 14px", borderBottom: `1px solid ${colors.line}`, verticalAlign: "top", fontWeight: i === 0 ? 700 : 400, lineHeight: 1.45 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {t.sections.map((s) => (
          <section key={s.h} style={{ marginTop: 40 }}>
            <h2 style={h2}>{s.h}</h2>
            {s.list && (
              <ul style={{ margin: "0 0 12px", paddingLeft: 20, lineHeight: 1.65, color: colors.ink }}>
                {s.list.map((li) => <li key={li} style={{ marginTop: 6 }}>{li}</li>)}
              </ul>
            )}
            {s.p.map((para) => (
              <p key={para} style={{ margin: "10px 0 0", lineHeight: 1.7, fontSize: 16 }}>{para}</p>
            ))}
            {s.resetButton && (
              <button
                type="button"
                onClick={(e) => resetConsent(e, t.resetDone)}
                style={{ marginTop: 16, border: `1px solid ${colors.teal}`, borderRadius: 999, background: "transparent", color: colors.tealText, padding: "10px 18px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
              >
                {t.reset}
              </button>
            )}
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}

const h2 = { margin: "0 0 12px", fontSize: 22, fontWeight: 800, letterSpacing: "-.01em" };

export default function PrivacyBody() {
  return <LangProvider><PrivacyInner /></LangProvider>;
}
