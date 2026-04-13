"use client";

import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";

function hasFormspreeSubmissionErrors(errors) {
  if (!errors) return false;
  return errors.getFormErrors().length > 0 || errors.getAllFieldErrors().length > 0;
}

const copy = {
  it: {
    navLinks: ["Come lavoro", "Casi reali", "Servizi"],
    ctaMini: "Mini Audit Gratuito",
    heroBadge: "Consulenza Digitale su Misura",
    heroTitleA: "Trasformo siti confusi in",
    heroTitleB: "sistemi che generano richieste",
    heroSubtitle:
      "Prima capisco la tua situazione reale — target, struttura, processi. Poi propongo quello che serve davvero, non quello che funziona per tutti. Per essere trovato dalle persone giuste, nel momento giusto.",
    heroBtn1: "Scrivimi su WhatsApp",
    heroBtn2: "Come lavoro →",
    approach: "Il mio approccio",
    quote:
      "Investi nel digitale, con un ritorno reale e riscontrabile. Non quello che dicono di fare — quello che funziona per il tuo caso specifico.",
    stat1: "Il sito carica in meno di 2 secondi su qualsiasi dispositivo",
    stat2: "Accessibile da tutti, anche con connessione lenta o screen reader",
    problemTag: "Il Problema",
    problemTitle: "Hai risposto a queste domande prima di investire nel tuo digitale?",
    problemText:
      "Spesso i clienti giusti non arrivano nonostante sito, annunci o social siano già attivi. Il punto è che non è quanto hai investito, ma dove e come hai costruito la tua presenza. Io parto da lì: contesto, obiettivi, risorse e chi devi raggiungere.",
    accordion: [
      {
        q: "Chi stai cercando di raggiungere davvero? E dove si trova online?",
        a: "Se non definisci con precisione persone, bisogno e canale, finisci per parlare a tutti e convincere nessuno. Prima chiarisco chi vuoi raggiungere, poi allineo contenuti, tono e presenza nei punti digitali dove quelle persone cercano davvero.",
      },
      {
        q: "Cosa convince una persona a scegliere te invece di un altro?",
        a: "Le persone non scelgono il sito più bello, scelgono il professionista che capiscono e di cui si fidano. Lavoro su proposta di valore, prove concrete e percorso decisionale: cosa deve leggere, in che ordine, e con quale chiarezza.",
      },
      {
        q: "Il tuo sito risponde alle domande giuste, nel momento giusto?",
        a: "Un sito efficace accompagna la persona dal dubbio alla richiesta di contatto. Organizzo architettura, pagine e call to action in modo che ogni fase abbia una risposta utile, senza attrito e senza passaggi inutili.",
      },
      {
        q: "I tuoi processi digitali ti fanno risparmiare tempo o te ne rubano?",
        a: "Se preventivi, richieste e follow-up sono frammentati, perdi tempo operativo e opportunità. Individuo i passaggi ripetitivi e progetto automazioni semplici, con strumenti sostenibili, per liberare tempo su ciò che conta.",
      },
    ],
    workTag: "Come Lavoro",
    workTitle: "Non ho soluzioni standard. Ho un metodo.",
    workIntro:
      "Ogni realtà è diversa. Prima di proporre qualsiasi cosa, analizzo la situazione — strumenti, target, processi, concorrenza. Solo allora ha senso parlare di soluzioni.",
    steps: [
      ["01", "Capisco prima", "Analizzo target, struttura, processi e segnali di mercato prima di qualsiasi proposta."],
      ["02", "Ti dico cosa serve davvero", "Definisco priorità operative chiare: cosa fare, perché, e con quale impatto atteso."],
      ["03", "Lo costruiamo insieme", "Implemento io o ti affianco passo passo, mantenendo il progetto coerente con gli obiettivi."],
    ],
    casesTag: "Casi Reali",
    casesTitle: "Non esempi ipotetici. Cose già fatte.",
    case1: "Professionista sanitaria",
    case1Place: "Friuli-Venezia Giulia",
    case1Results: [
      "Tra i primi risultati organici locali per query di settore",
      "PageSpeed 100% desktop & mobile",
      "Accessibilità 95% — Google Lighthouse",
      "Citata da AI assistant per ricerche locali",
      "Stabile da oltre un anno senza manutenzione",
    ],
    case2: "Azienda impiantistica HVAC",
    case2Place: "Piemonte",
    case2Results: [
      "Separazione organico / ADS per massimizzare conversioni",
      "Architettura mobile-first con UX segmentata per target",
      "Landing pages dedicate per ogni campagna",
      "Struttura SEO on-page costruita prima del CMS",
    ],
    case3Tag: "Progetto Personale · Consulenza Digitale",
    case3: "davidcappelletto.it",
    case3Place: "📍 Aviano (PN)",
    case3Text:
      "Ho progettato e sviluppato il mio sito personale come sistema digitale completo — non un biglietto da visita, ma uno strumento che genera richieste. Ho ragionato prima su struttura, target e posizionamento. Poi ho costruito.",
    case3Results: [
      "Architettura SEO on-page prima del codice",
      "Stack Next.js + Tailwind, deploy su Netlify",
      "Analytics, Search Console e GMB collegati",
      "Form contatti funzionante con Formspree",
      "Selettore lingua IT/EN integrato",
      "Costruito interamente con workflow AI-assisted",
    ],
    servicesTag: "Cosa Puoi Chiedermi",
    servicesTitle: "Le competenze che porto. Applicate dove servono.",
    serviceAccordions: [
      {
        iconSrc: "/icon-audit.svg",
        title: "Audit e Diagnosi",
        description:
          "Analizzo quello che hai e ti dico cosa non funziona, perché, e cosa ha più senso fare prima. Risultato: un documento con priorità chiare, non un'opinione.",
      },
      {
        iconSrc: "/icon-siti.svg",
        title: "Progettazione Siti",
        description:
          "Struttura, UX, contenuti e conversioni. Parto dall'architettura informativa prima di toccare qualsiasi strumento.",
      },
      {
        iconSrc: "/icon-seo.svg",
        title: "SEO Locale",
        description:
          "Essere trovato da chi è vicino a te e sta cercando quello che fai. Senza sprecare budget ads.",
      },
      {
        iconSrc: "/icon-ai.svg",
        title: "Automazioni AI",
        description:
          "Elimino processi manuali ripetitivi con n8n e strumenti AI applicati al tuo contesto reale.",
      },
      {
        iconSrc: "/icon-strategia.svg",
        title: "Strategia Digitale",
        description:
          "Capire dove sei, dove vuoi andare, e quale percorso ha senso per le tue risorse e i tuoi obiettivi.",
      },
      {
        iconSrc: "/icon-affiancamento.svg",
        title: "Affiancamento",
        description:
          "Ti insegno a gestire autonomamente quello che hai — così non dipendi da nessuno per le cose base.",
      },
    ],
    pricing: ["Audit Diagnostico", "Intervento Mirato", "Presenza su Misura"],
    pricingValue: ["€250-500", "€800-1.600", "da €2.700"],
    pricingItems: [
      [
        "Analisi completa sito e presenza digitale",
        "Report con priorità e raccomandazioni",
        "Mappa dei punti critici e opportunità",
        "Call di presentazione risultati",
      ],
      [
        "SEO locale e ottimizzazione on-page",
        "Ristrutturazione pagine chiave",
        "Automazione di un processo specifico",
        "Revisione UX e conversioni",
      ],
      [
        "Analisi, strategia e architettura",
        "Prototipo navigabile e UX completa",
        "Sviluppo e messa online",
        "Follow-up post lancio incluso",
      ],
    ],
    featured: "⭐ Più Richiesto",
    firstStep: "Primo Passo",
    miniTitle: "Inizia dal Mini Audit Gratuito",
    miniText:
      "20 minuti. Nessun impegno. Raccontami la tua situazione — capisco il contesto, ti dico onestamente se e come posso aiutarti.",
    miniBtn2: "Oppure compila il form →",
    contacts: "Contatti",
    talk: "Parliamoci.",
    talkSub: "Raccontami obiettivo, contesto e priorità.",
    form: {
      name: "Nome e Cognome",
      email: "Email",
      activity: "Tipo di attività",
      budget: "Seleziona budget",
      msg: "Scrivi qui il tuo messaggio",
      submit: "Invia richiesta",
      success: "Messaggio inviato! Ti rispondo entro 24 ore.",
      error: "Qualcosa è andato storto. Riprova o scrivimi su WhatsApp.",
    },
    footerRight:
      "Aviano (PN) · Lavoro anche da remoto / UX · SEO Locale · Automazioni AI / Privacy Policy",
    cookie:
      "Questo sito utilizza cookie tecnici per migliorare l'esperienza di navigazione.",
    accept: "Accetta",
    reject: "Rifiuta",
  },
  en: {
    navLinks: ["How I work", "Real cases", "Services"],
    ctaMini: "Free Mini Audit",
    heroBadge: "Tailored Digital Consulting",
    heroTitleA: "I turn confusing websites into",
    heroTitleB: "systems that generate qualified leads",
    heroSubtitle:
      "First I understand your real situation — target, structure, processes. Then I propose what you actually need, not what works for everyone. So you can be found by the right people, at the right time.",
    heroBtn1: "Message me on WhatsApp",
    heroBtn2: "How I work →",
    approach: "My approach",
    quote:
      "Invest in digital with a real, measurable return. Not what people say should work — what works for your specific case.",
    stat1: "The site loads in under 2 seconds on any device",
    stat2: "Accessible to everyone, even on slow connections or with screen readers",
    problemTag: "The Problem",
    problemTitle: "Have you answered these questions before investing in your digital presence?",
    problemText:
      "Very often, the right clients are not coming in even with an active website, ads or social channels. The point is not how much you invested, but where and how your presence is built. I start there: context, goals, resources, and who you actually need to reach.",
    accordion: [
      {
        q: "Who are you really trying to reach? And where are they online?",
        a: "If you do not define audience, need and channel precisely, you end up speaking to everyone and convincing no one. First I clarify who you need to reach, then align content, tone and digital presence where those people actually search.",
      },
      {
        q: "What makes a person choose you instead of someone else?",
        a: "People do not choose the prettiest website, they choose the professional they understand and trust. I work on value proposition, proof, and decision flow: what they should read, in which order, and with which level of clarity.",
      },
      {
        q: "Does your website answer the right questions at the right time?",
        a: "An effective website guides people from doubt to contact request. I structure architecture, pages and calls to action so each stage has a useful answer, with less friction and no unnecessary steps.",
      },
      {
        q: "Do your digital processes save you time or take it away?",
        a: "If quotes, requests and follow-ups are fragmented, you lose operational time and opportunities. I identify repetitive steps and design simple, sustainable automations to free your time for what matters.",
      },
    ],
    workTag: "How I Work",
    workTitle: "I do not offer standard packages. I use a method.",
    workIntro:
      "Every business is different. Before proposing anything, I analyze your current situation — tools, target, processes, and competition. Only then does it make sense to discuss solutions.",
    steps: [
      ["01", "I understand first", "I analyze target, structure, processes and market signals before any proposal."],
      ["02", "I tell you what you really need", "I define clear operational priorities: what to do, why, and expected impact."],
      ["03", "We build it together", "I implement directly or support you step by step, keeping the project aligned with your goals."],
    ],
    casesTag: "Real Cases",
    casesTitle: "No hypothetical examples. Real work already delivered.",
    case1: "Healthcare professional",
    case1Place: "Friuli-Venezia Giulia",
    case1Results: [
      "Among the first local organic results for niche queries",
      "PageSpeed 100% on desktop and mobile",
      "95% accessibility score — Google Lighthouse",
      "Referenced by AI assistants for local searches",
      "Stable for over a year without maintenance",
    ],
    case2: "HVAC installation company",
    case2Place: "Piedmont",
    case2Results: [
      "Organic / ADS separation to maximize conversions",
      "Mobile-first architecture with target-based UX segmentation",
      "Dedicated landing pages for each campaign",
      "On-page SEO structure built before the CMS",
    ],
    case3Tag: "Personal Project · Digital Consulting",
    case3: "davidcappelletto.it",
    case3Place: "📍 Aviano (PN)",
    case3Text:
      "I designed and developed my personal site as a complete digital system — not a business card, but a tool built to generate requests. I first worked on structure, target and positioning. Then I built it.",
    case3Results: [
      "On-page SEO architecture defined before coding",
      "Next.js + Tailwind stack, deployed on Netlify",
      "Analytics, Search Console and GMB connected",
      "Working contact form with Formspree",
      "Integrated IT/EN language switcher",
      "Built end-to-end with an AI-assisted workflow",
    ],
    servicesTag: "What You Can Ask For",
    servicesTitle: "The skills I bring. Applied where they matter.",
    serviceAccordions: [
      {
        iconSrc: "/icon-audit.svg",
        title: "Audit & Diagnosis",
        description:
          "I analyze what you already have and explain what is not working, why, and what makes the most sense to do first. Outcome: a document with clear priorities, not just an opinion.",
      },
      {
        iconSrc: "/icon-siti.svg",
        title: "Website Design",
        description:
          "Structure, UX, content and conversions. I start from information architecture before touching any tool.",
      },
      {
        iconSrc: "/icon-seo.svg",
        title: "Local SEO",
        description:
          "Get found by people near you who are searching for what you do. Without wasting ad budget.",
      },
      {
        iconSrc: "/icon-ai.svg",
        title: "AI Automations",
        description:
          "I remove repetitive manual processes with n8n and AI tools applied to your real context.",
      },
      {
        iconSrc: "/icon-strategia.svg",
        title: "Digital Strategy",
        description:
          "Understand where you are, where you want to go, and which path makes sense for your resources and goals.",
      },
      {
        iconSrc: "/icon-affiancamento.svg",
        title: "Consulting Support",
        description:
          "I teach you how to manage the essentials on your own — so you do not depend on anyone for the basics.",
      },
    ],
    pricing: ["Diagnostic Audit", "Targeted Intervention", "Tailored Presence"],
    pricingValue: ["€250-500", "€800-1,600", "from €2,700"],
    pricingItems: [
      [
        "Complete website and digital presence analysis",
        "Priority report with recommendations",
        "Map of critical points and opportunities",
        "Results presentation call",
      ],
      [
        "Local SEO and on-page optimization",
        "Key page restructuring",
        "Automation of one specific process",
        "UX and conversion review",
      ],
      [
        "Analysis, strategy and architecture",
        "Clickable prototype and full UX",
        "Development and go-live",
        "Post-launch follow-up included",
      ],
    ],
    featured: "⭐ Most Requested",
    firstStep: "First Step",
    miniTitle: "Start with the Free Mini Audit",
    miniText:
      "20 minutes. No commitment. Tell me your situation — I understand the context and honestly tell you if and how I can help.",
    miniBtn2: "Or fill in the form →",
    contacts: "Contacts",
    talk: "Let's talk.",
    talkSub: "Tell me your objective, context and priorities.",
    form: {
      name: "Full Name",
      email: "Email",
      activity: "Type of business",
      budget: "Select budget",
      msg: "Write your message here",
      submit: "Send request",
      success: "Message sent! I'll get back to you within 24 hours.",
      error: "Something went wrong. Try again or message me on WhatsApp.",
    },
    footerRight:
      "Aviano (PN), Italy · Also working remotely / UX · Local SEO · AI Automations / Privacy Policy",
    cookie: "This website uses technical cookies to improve browsing experience.",
    accept: "Accept",
    reject: "Reject",
  },
};

const colors = {
  navy: "#1C2E4A",
  navyDeep: "#111E30",
  teal: "#2BA89A",
  tealLight: "#3DBFB2",
  bg: "#F4F7FA",
  ink: "#111E30",
  inkMuted: "#4A5F78",
  line: "#D0DDE8",
};

export default function Home() {
  const [lang, setLang] = useState("it");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openServiceAccordion, setOpenServiceAccordion] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [showCookie, setShowCookie] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrowMobile, setIsNarrowMobile] = useState(false);

  const t = copy[lang];
  const [formState, handleFormSubmit] = useForm("xbdpngvd");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (
      window.localStorage.getItem("cookieConsent") ||
      window.localStorage.getItem("dc_cookie_ok") === "1"
    ) {
      return;
    }
    const timer = window.setTimeout(() => setShowCookie(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 960);
      setIsNarrowMobile(window.innerWidth < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const acceptCookie = () => {
    window.localStorage.setItem("cookieConsent", "accepted");
    window.localStorage.setItem("dc_cookie_ok", "1");
    setShowCookie(false);
  };

  const rejectCookie = () => {
    window.localStorage.setItem("cookieConsent", "rejected");
    setShowCookie(false);
  };

  const navLinks = [
    { href: "#come-lavoro", label: t.navLinks[0] },
    { href: "#casi-reali", label: t.navLinks[1] },
    { href: "#servizi", label: t.navLinks[2] },
  ];

  return (
    <main
      style={{
        background: colors.bg,
        color: colors.ink,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <nav
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 50,
          width: "100%",
          background: scrolled ? "rgba(17,30,48,.97)" : "transparent",
          transition: "all .3s ease",
        }}
      >
        <div
          style={{
            width: "min(1200px, 92vw)",
            margin: "0 auto",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#top"
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <img src="/logo.png" alt="Logo David Cappelletto" style={{ height: 34, width: "auto", filter: "invert(1)" }} />
            <span>David Cappelletto</span>
          </a>

          {!isNarrowMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <div style={{ border: "1px solid rgba(255,255,255,.4)", borderRadius: 999, padding: 4, fontSize: 13 }}>
                <button
                  style={{
                    border: "none",
                    borderRadius: 999,
                    padding: "6px 12px",
                    background: lang === "it" ? "#fff" : "transparent",
                    color: lang === "it" ? colors.ink : "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => setLang("it")}
                >
                  IT
                </button>
                <button
                  style={{
                    border: "none",
                    borderRadius: 999,
                    padding: "6px 12px",
                    background: lang === "en" ? "#fff" : "transparent",
                    color: lang === "en" ? colors.ink : "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{ color: "rgba(255,255,255,.95)", textDecoration: "none", fontSize: 14 }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#mini-audit"
                style={{
                  background: colors.teal,
                  color: "#fff",
                  borderRadius: 999,
                  textDecoration: "none",
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {t.ctaMini}
              </a>
            </div>
          )}

          {isNarrowMobile && (
            <button
              style={{ border: "none", background: "transparent", color: "#fff", fontSize: 30, cursor: "pointer" }}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Apri menu"
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>
          )}
        </div>

        {isNarrowMobile && mobileMenuOpen && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,.15)", background: "rgba(17,30,48,.97)", paddingBottom: 18 }}>
            <div style={{ width: "min(1200px, 92vw)", margin: "0 auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 14 }}>
              <div style={{ border: "1px solid rgba(255,255,255,.4)", borderRadius: 999, padding: 4, fontSize: 13, width: "fit-content" }}>
                <button
                  style={{
                    border: "none",
                    borderRadius: 999,
                    padding: "6px 12px",
                    background: lang === "it" ? "#fff" : "transparent",
                    color: lang === "it" ? colors.ink : "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => setLang("it")}
                >
                  IT
                </button>
                <button
                  style={{
                    border: "none",
                    borderRadius: 999,
                    padding: "6px 12px",
                    background: lang === "en" ? "#fff" : "transparent",
                    color: lang === "en" ? colors.ink : "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: "rgba(255,255,255,.95)", textDecoration: "none", fontSize: 16 }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#mini-audit"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  marginTop: 6,
                  background: colors.teal,
                  color: "#fff",
                  borderRadius: 999,
                  textDecoration: "none",
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 700,
                  width: "fit-content",
                }}
              >
                {t.ctaMini}
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        id="top"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          paddingTop: 136,
          paddingBottom: 96,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(17,30,48,0.82)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            width: "min(1200px, 92vw)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isNarrowMobile ? "1fr" : "1fr 1fr",
            gap: 40,
            alignItems: "start",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <div
              style={{
                marginBottom: 28,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.2)",
                background: "rgba(255,255,255,.1)",
                padding: "8px 16px",
                fontSize: 14,
              }}
            >
              <span
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 999,
                  background: colors.teal,
                  boxShadow: "0 0 0 0 rgba(43,168,154,.7)",
                  animation: "pulse 1.8s infinite",
                }}
              />
              <span data-it={copy.it.heroBadge} data-en={copy.en.heroBadge}>
                {t.heroBadge}
              </span>
            </div>
            <h1 style={{ fontSize: isNarrowMobile ? 38 : 56, lineHeight: 1.1, margin: 0, fontWeight: 800 }}>
              {t.heroTitleA} <span style={{ color: colors.teal }}>{t.heroTitleB}</span>.
            </h1>
            <p style={{ marginTop: 24, maxWidth: 640, fontSize: 20, lineHeight: 1.55, color: "rgba(255,255,255,.9)" }}>
              {t.heroSubtitle}
            </p>
            <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", gap: 14 }}>
              <button
                style={{
                  border: "none",
                  borderRadius: 999,
                  background: colors.teal,
                  color: "#fff",
                  padding: "14px 28px",
                  fontSize: 17,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
                onClick={() => window.open("https://wa.me/393481151160", "_blank")}
              >
                {t.heroBtn1}
              </button>
              <a
                href="#come-lavoro"
                style={{
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.45)",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 28px",
                  fontSize: 17,
                  fontWeight: 700,
                }}
              >
                {t.heroBtn2}
              </a>
            </div>
          </div>

          <div
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.2)",
              background: "rgba(255,255,255,.1)",
              padding: 28,
              backdropFilter: "blur(6px)",
            }}
          >
            <p style={{ margin: "0 0 16px", textTransform: "uppercase", letterSpacing: ".08em", color: colors.tealLight, fontSize: 12 }}>
              {t.approach}
            </p>
            <p style={{ margin: 0, fontSize: 34, lineHeight: 1.4, fontStyle: "italic", fontFamily: "'DM Serif Display', Georgia, serif" }}>
              {t.quote}
            </p>
            <div style={{ marginTop: 24, display: "grid", gap: 14 }}>
              <div style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", background: "rgba(17,30,48,.35)", padding: 16 }}>
                <p style={{ margin: 0, fontSize: 34, fontWeight: 800, color: colors.tealLight }}>2s</p>
                <p style={{ margin: "4px 0 0", fontSize: 14 }}>{t.stat1}</p>
              </div>
              <div style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", background: "rgba(17,30,48,.35)", padding: 16 }}>
                <p style={{ margin: 0, fontSize: 34, fontWeight: 800, color: colors.tealLight }}>100%</p>
                <p style={{ margin: "4px 0 0", fontSize: 14 }}>{t.stat2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: colors.navyDeep, color: "#fff", padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 92vw)", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 36 }}>
          <div>
            <span style={{ display: "inline-block", background: "rgba(43,168,154,.2)", color: colors.tealLight, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.problemTag}</span>
            <h2 style={{ margin: "20px 0 0", fontSize: isMobile ? 34 : 46, lineHeight: 1.1 }}>{t.problemTitle}</h2>
            <p style={{ marginTop: 24, lineHeight: 1.65, color: "rgba(255,255,255,.9)" }}>
              {t.problemText}
            </p>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {t.accordion.map((item, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <div key={item.q} style={{ overflow: "hidden", borderRadius: 12, border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.05)" }}>
                  <button
                    style={{
                      width: "100%",
                      border: "none",
                      borderLeft: `4px solid ${colors.teal}`,
                      background: "transparent",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 20px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenAccordion(isOpen ? -1 : idx)}
                  >
                    <span style={{ fontWeight: 700 }}>{item.q}</span>
                    <span style={{ fontSize: 28, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .25s ease" }}>+</span>
                  </button>
                  <div style={{ display: isOpen ? "block" : "none" }}>
                    <p style={{ margin: 0, padding: "0 20px 20px", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.88)" }}>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="come-lavoro" style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 92vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: colors.bg, color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.workTag}</span>
          <h2 style={{ margin: "20px 0 0", fontSize: isMobile ? 34 : 46, lineHeight: 1.15 }}>{t.workTitle}</h2>
          <p style={{ marginTop: 16, maxWidth: 900, color: colors.inkMuted, lineHeight: 1.6 }}>
            {t.workIntro}
          </p>
          <div style={{ marginTop: 40, display: "grid", gap: 20, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr" }}>
            {t.steps.map((step, idx) => (
              <article
                key={step[0]}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  border: `1px solid ${colors.line}`,
                  borderRadius: 12,
                  padding: 24,
                  background: "#fff",
                  borderLeft:
                    hoveredStep === idx
                      ? `3px solid ${colors.teal}`
                      : "3px solid transparent",
                  transform:
                    hoveredStep === idx ? "translateY(-3px)" : "translateY(0)",
                  transition: "transform .2s ease, border-left-color .2s ease",
                }}
              >
                <p style={{ margin: 0, fontSize: 56, fontWeight: 800, color: colors.line }}>{step[0]}</p>
                <h3 style={{ margin: "16px 0 0", fontSize: 26 }}>{step[1]}</h3>
                <p style={{ margin: "12px 0 0", color: colors.inkMuted, lineHeight: 1.6 }}>{step[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="casi-reali" style={{ background: colors.bg, padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 92vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.casesTag}</span>
          <h2 style={{ margin: "20px 0 0", fontSize: isMobile ? 34 : 46, lineHeight: 1.15 }}>{t.casesTitle}</h2>
          <div style={{ marginTop: 40, display: "grid", gap: 20, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr" }}>
            <article style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: 24 }}>
              <div style={{ height: 4, borderRadius: 999, background: "linear-gradient(90deg, #1C2E4A, #2BA89A)" }} />
              <h3 style={{ margin: "18px 0 0", fontSize: 28 }}>{t.case1}</h3>
              <p style={{ margin: "6px 0 0", color: colors.inkMuted }}>{t.case1Place}</p>
              <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {t.case1Results.map((result) => (
                  <li key={result}><span style={{ color: colors.teal, marginRight: 8 }}>✓</span>{result}</li>
                ))}
              </ul>
            </article>

            <article style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: 24 }}>
              <div style={{ height: 4, borderRadius: 999, background: "linear-gradient(90deg, #1C2E4A, #2BA89A)" }} />
              <h3 style={{ margin: "18px 0 0", fontSize: 28 }}>{t.case2}</h3>
              <p style={{ margin: "6px 0 0", color: colors.inkMuted }}>{t.case2Place}</p>
              <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {t.case2Results.map((result) => (
                  <li key={result}><span style={{ color: colors.teal, marginRight: 8 }}>✓</span>{result}</li>
                ))}
              </ul>
            </article>

            <article style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: 24 }}>
              <div style={{ height: 4, borderRadius: 999, background: "linear-gradient(90deg, #1C2E4A, #2BA89A)" }} />
              <p style={{ margin: "14px 0 0", color: colors.inkMuted, fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 700 }}>
                {t.case3Tag}
              </p>
              <h3 style={{ margin: "10px 0 0", fontSize: 28 }}>{t.case3}</h3>
              <p style={{ margin: "6px 0 0", color: colors.inkMuted }}>{t.case3Place}</p>
              <p style={{ margin: "14px 0 0", color: colors.inkMuted, lineHeight: 1.6 }}>{t.case3Text}</p>
              <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {t.case3Results.map((result) => (
                  <li key={result}><span style={{ color: colors.teal, marginRight: 8 }}>✓</span>{result}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="servizi" style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 92vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: colors.bg, color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.servicesTag}</span>
          <h2 style={{ margin: "20px 0 0", fontSize: isMobile ? 34 : 46, lineHeight: 1.15 }}>{t.servicesTitle}</h2>

          <div style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {t.serviceAccordions.map((item, idx) => {
              const isOpen = openServiceAccordion === idx;
              return (
                <div key={item.title} style={{ overflow: "hidden", borderRadius: 12, border: `1px solid ${colors.line}`, background: colors.bg }}>
                  <button
                    style={{
                      width: "100%",
                      border: "none",
                      borderLeft: `4px solid ${colors.teal}`,
                      background: "transparent",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 20px",
                      color: colors.ink,
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenServiceAccordion(isOpen ? -1 : idx)}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                      <img src={item.iconSrc} width="40" height="40" alt={item.title} />
                      <span style={{ fontWeight: 700 }}>{item.title}</span>
                    </span>
                    <span style={{ fontSize: 28, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .25s ease" }}>+</span>
                  </button>
                  <div style={{ display: isOpen ? "block" : "none" }}>
                    <p style={{ margin: 0, padding: "0 20px 20px", fontSize: 14, lineHeight: 1.6, color: colors.inkMuted }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 40, display: "grid", gap: 20, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr" }}>
            <article style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: 24 }}>
              <p style={{ margin: 0, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 12, color: colors.inkMuted }}>{t.pricing[0]}</p>
              <p style={{ margin: "16px 0 0", fontSize: 42, fontWeight: 800 }}>{t.pricingValue[0]}</p>
              <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {t.pricingItems[0].map((item) => (
                  <li key={item}><span style={{ color: colors.teal, marginRight: 8 }}>✓</span>{item}</li>
                ))}
              </ul>
            </article>

            <article style={{ position: "relative", borderRadius: 12, border: `1px solid ${colors.navy}`, background: colors.navy, color: "#fff", padding: 24 }}>
              <span style={{ position: "absolute", left: 18, top: -12, borderRadius: 999, background: colors.teal, color: "#fff", fontSize: 12, fontWeight: 700, padding: "6px 10px" }}>
                {t.featured}
              </span>
              <p style={{ margin: 0, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 12, color: "rgba(255,255,255,.9)" }}>{t.pricing[1]}</p>
              <p style={{ margin: "16px 0 0", fontSize: 42, fontWeight: 800 }}>{t.pricingValue[1]}</p>
              <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 10, color: "rgba(255,255,255,.95)" }}>
                {t.pricingItems[1].map((item) => (
                  <li key={item}><span style={{ color: colors.tealLight, marginRight: 8 }}>✓</span>{item}</li>
                ))}
              </ul>
            </article>

            <article style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: 24 }}>
              <p style={{ margin: 0, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 12, color: colors.inkMuted }}>{t.pricing[2]}</p>
              <p style={{ margin: "16px 0 0", fontSize: 42, fontWeight: 800 }}>{t.pricingValue[2]}</p>
              <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {t.pricingItems[2].map((item) => (
                  <li key={item}><span style={{ color: colors.teal, marginRight: 8 }}>✓</span>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="mini-audit" style={{ background: "linear-gradient(140deg, #1C2E4A, #111E30)", color: "#fff", textAlign: "center", padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 92vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,.14)", color: colors.tealLight, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.firstStep}</span>
          <h2 style={{ margin: "20px 0 0", fontSize: isMobile ? 34 : 46, lineHeight: 1.15 }}>{t.miniTitle}</h2>
          <p style={{ margin: "16px auto 0", maxWidth: 860, color: "rgba(255,255,255,.88)", lineHeight: 1.6 }}>{t.miniText}</p>
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a href="https://wa.me/393481151160" style={{ background: "#fff", color: colors.ink, borderRadius: 999, padding: "14px 26px", textDecoration: "none", fontWeight: 700 }}>
              {t.heroBtn1}
            </a>
            <a href="#contatti" style={{ border: "1px solid rgba(255,255,255,.6)", color: "#fff", borderRadius: 999, padding: "14px 26px", textDecoration: "none", fontWeight: 700 }}>
              {t.miniBtn2}
            </a>
          </div>
        </div>
      </section>

      <section id="contatti" style={{ background: colors.bg, padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 92vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.contacts}</span>
          <h2 style={{ margin: "20px 0 0", fontSize: isMobile ? 34 : 46 }}>{t.talk}</h2>
          <p style={{ marginTop: 10, color: colors.inkMuted }}>{t.talkSub}</p>

          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a
              href="https://wa.me/393481151160"
              onMouseEnter={() => setHoveredContact(0)}
              onMouseLeave={() => setHoveredContact(null)}
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                background: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textDecoration: "none",
                transform: hoveredContact === 0 ? "translateY(-4px)" : "translateY(0)",
                boxShadow:
                  hoveredContact === 0
                    ? "0 16px 28px rgba(0,0,0,.24)"
                    : "0 8px 16px rgba(0,0,0,.12)",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.886a.5.5 0 0 0 .619.608l6.188-1.615A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.428l-.36-.214-3.733.974.999-3.648-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            </a>
            <a
              href="mailto:cappellettodavid@gmail.com"
              onMouseEnter={() => setHoveredContact(1)}
              onMouseLeave={() => setHoveredContact(null)}
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                background: colors.navy,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textDecoration: "none",
                fontSize: 28,
                transform: hoveredContact === 1 ? "translateY(-4px)" : "translateY(0)",
                boxShadow:
                  hoveredContact === 1
                    ? "0 16px 28px rgba(0,0,0,.24)"
                    : "0 8px 16px rgba(0,0,0,.12)",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
            >
              ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/david-cappelletto-703832306/"
              onMouseEnter={() => setHoveredContact(2)}
              onMouseLeave={() => setHoveredContact(null)}
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                background: "#0A66C2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 700,
                transform: hoveredContact === 2 ? "translateY(-4px)" : "translateY(0)",
                boxShadow:
                  hoveredContact === 2
                    ? "0 16px 28px rgba(0,0,0,.24)"
                    : "0 8px 16px rgba(0,0,0,.12)",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
            >
              in
            </a>
          </div>

          <form
            onSubmit={handleFormSubmit}
            style={{ marginTop: 34, borderRadius: 18, border: `1px solid ${colors.line}`, background: "#fff", padding: isMobile ? 20 : 28 }}
          >
            {formState.succeeded ? (
              <p style={{ margin: 0, color: colors.teal, fontSize: 16, fontWeight: 600, lineHeight: 1.5 }}>
                {t.form.success}
              </p>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                  <input
                    name="nome"
                    type="text"
                    required
                    style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15 }}
                    placeholder={t.form.name}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15 }}
                    placeholder={t.form.email}
                  />
                  <input
                    name="tipo_attivita"
                    type="text"
                    style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, gridColumn: isMobile ? "auto" : "1 / 3" }}
                    placeholder={t.form.activity}
                  />
                  <select
                    name="budget"
                    required
                    style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, gridColumn: isMobile ? "auto" : "1 / 3" }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.form.budget}
                    </option>
                    <option value="€250-500">€250-500</option>
                    <option value="€800-1.600">€800-1.600</option>
                    <option value="€2.700-5.000">€2.700-5.000</option>
                    <option value="Oltre €5.000">Oltre €5.000</option>
                  </select>
                  <textarea
                    name="messaggio"
                    required
                    style={{ minHeight: 144, border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, gridColumn: isMobile ? "auto" : "1 / 3" }}
                    placeholder={t.form.msg}
                  />
                </div>
                {hasFormspreeSubmissionErrors(formState.errors) && (
                  <p style={{ margin: "14px 0 0", color: "#c0392b", fontSize: 14, lineHeight: 1.5 }}>
                    {t.form.error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formState.submitting}
                  style={{
                    marginTop: 16,
                    border: "none",
                    borderRadius: 999,
                    background: colors.navy,
                    color: "#fff",
                    padding: "12px 24px",
                    fontWeight: 700,
                    cursor: formState.submitting ? "not-allowed" : "pointer",
                    opacity: formState.submitting ? 0.65 : 1,
                  }}
                >
                  {t.form.submit}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <footer style={{ background: colors.navyDeep, color: "#fff", padding: "34px 0 16px" }}>
        <div
          style={{
            width: "min(1200px, 92vw)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isNarrowMobile ? "1fr" : "1fr auto 1fr",
            gap: 20,
            alignItems: isNarrowMobile ? "flex-start" : "center",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.png" alt="Logo David Cappelletto" style={{ height: 28, width: "auto", filter: "invert(1)" }} />
            <span style={{ color: "#fff", fontWeight: 700 }}>David Cappelletto</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
            }}
          >
            <a href="#come-lavoro" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.navLinks[0]}</a>
            <a href="#casi-reali" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.navLinks[1]}</a>
            <a href="#servizi" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.navLinks[2]}</a>
            <a href="#contatti" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.contacts}</a>
          </div>

          <div style={{ justifySelf: isNarrowMobile ? "start" : "end", textAlign: isNarrowMobile ? "left" : "right" }}>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
              Aviano (PN) · Lavoro anche da remoto
            </p>
            <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
              UX · SEO Locale · Automazioni AI
            </p>
            <a
              href="https://www.iubenda.com/privacy-policy/65493035"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: 6, color: "rgba(255,255,255,0.3)", fontSize: 12 }}
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div style={{ width: "min(1200px, 92vw)", margin: "14px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
            © 2026 David Cappelletto
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/393481151160"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 40,
          width: 58,
          height: 58,
          borderRadius: 999,
          background: "#25D366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          fontSize: 28,
          boxShadow: "0 10px 20px rgba(0,0,0,.2)",
        }}
        aria-label="Apri WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.886a.5.5 0 0 0 .619.608l6.188-1.615A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.428l-.36-.214-3.733.974.999-3.648-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
      </a>

      {showCookie && (
        <div style={{ position: "fixed", left: 18, bottom: 18, zIndex: 40, maxWidth: 360, borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: 16, boxShadow: "0 10px 20px rgba(0,0,0,.12)" }}>
          <p style={{ margin: 0, color: colors.inkMuted, fontSize: 14, lineHeight: 1.55 }}>
            {t.cookie}
          </p>
          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <button
              onClick={acceptCookie}
              style={{
                border: "none",
                borderRadius: 999,
                background: "#2BA89A",
                color: "#fff",
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                minWidth: 96,
              }}
            >
              {t.accept}
            </button>
            <button
              onClick={rejectCookie}
              style={{
                border: "1px solid #2BA89A",
                borderRadius: 999,
                background: "transparent",
                color: "#2BA89A",
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                minWidth: 96,
              }}
            >
              {t.reject}
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(43, 168, 154, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(43, 168, 154, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(43, 168, 154, 0);
          }
        }
      `}</style>
    </main>
  );
}