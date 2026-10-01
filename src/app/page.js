"use client";

import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { trackEvent } from "./analytics";

function hasFormspreeSubmissionErrors(errors) {
  if (!errors) return false;
  return errors.getFormErrors().length > 0 || errors.getAllFieldErrors().length > 0;
}

const copy = {
  it: {
    navLinks: ["Progetti", "Come lavoro", "Servizi"],
    ctaMini: "Mini Audit Gratuito",
    heroBadge: "Consulenza Digitale su Misura",
    heroTitleA: "Aiuto professionisti e PMI a capire cosa non funziona",
    heroTitleB: "nel loro digitale e a intervenire con priorità chiare",
    heroSubtitle:
      "Analizzo siti, contenuti e processi prima di proporre una soluzione. Poi progetto e realizzo ciò che serve davvero, senza pacchetti standard.",
    heroBtn1: "Scrivimi su WhatsApp",
    heroBtn2: "Come lavoro →",
    approach: "Il mio approccio",
    quote:
      "Il digitale funziona quando risolve un problema vero, non quando segue una tendenza. Prima capisco cosa serve. Poi scelgo strumenti, priorità e investimento.",
    stat1Value: "Prima il problema",
    stat1: "Analizzo obiettivi, persone e processi prima di proporre una soluzione.",
    stat2Value: "Solo ciò che ti serve",
    stat2: "Ogni intervento parte dal tuo contesto, senza pacchetti standard.",
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
        q: "Sai davvero cosa funziona nel tuo digitale, o vai a intuito?",
        a: "Senza dati chiari su cosa genera contatti reali, ogni decisione è una scommessa. Imposto un tracciamento essenziale, senza dashboard inutili, per capire cosa portare avanti e cosa tagliare.",
      },
    ],
    workTag: "Come Lavoro",
    workTitle: "Non ho soluzioni standard. Ho un metodo.",
    workIntro:
      "Ogni realtà è diversa. Prima di proporre qualsiasi cosa, analizzo strumenti, target, processi e concorrenza. Solo allora ha senso parlare di soluzioni.",
    steps: [
      ["01", "Capisco prima", "Analizzo target, struttura, processi e segnali di mercato prima di qualsiasi proposta."],
      ["02", "Ti dico cosa serve davvero", "Definisco priorità operative chiare: cosa fare, perché, e con quale impatto atteso."],
      ["03", "Lo costruiamo insieme", "Implemento io o ti affianco passo passo, mantenendo il progetto coerente con gli obiettivi."],
    ],
    casesTag: "Progetti",
    casesTitle: "Progetti reali, prodotti e lavori in sviluppo.",
    casesReadMore: "Leggi il progetto →",
    casesAllBtn: "Tutti i progetti →",
    casesShowMore: "Mostra altri 2 progetti",
    casesShowLess: "Mostra meno",
    caseCards: [
      {
        slug: "automazione-promemoria-appuntamenti",
        tag: "In sviluppo · Automazione sanitaria",
        title: "Promemoria appuntamenti su WhatsApp Business",
        place: "Progetto riservato · In sviluppo",
        imageSrc: "/case-studies/automazione-promemoria-appuntamenti.svg",
        results: [
          "Promemoria appuntamenti tramite WhatsApp Business",
          "Esiti distinti: conferma, rinvio o cancellazione",
          "Gestione della segreteria preservata per le eccezioni",
        ],
      },
      {
        slug: "ordine-pagamento-qr",
        tag: "Prodotto white-label · Ristorazione",
        title: "Ordine e pagamento al tavolo tramite QR code",
        place: "Prototipo validato · Prodotto completato",
        imageSrc: "/case-studies/ordine-pagamento-qr.svg",
        results: [
          "Prototipo UX distinto dal prodotto completato",
          "Menu, ordine e pagamento in un flusso mobile-first",
          "Personalizzabile per identità e operatività del locale",
        ],
      },
      {
        slug: "azienda-hvac",
        tag: "Progetto Cliente · Impiantistica HVAC",
        title: "Sito HVAC: fedele a un design approvato",
        place: "Nord Italia · via agenzia",
        imageSrc: "/case-studies/azienda-hvac.jpg",
        results: [
          "Sviluppo fedele a un design approvato, con art director esterna",
          "CMS headless con motore di generazione custom in Python",
          "Stack di tracciamento GDPR ricostruito da zero",
          "Migrazione dominio senza perdita di posizionamento SEO",
        ],
      },
      {
        slug: "infermiera-althea",
        tag: "Libera Professione · Settore Sanitario",
        title: "Infermiera Althea",
        place: "📍 Pordenone e provincia",
        imageSrc: "/case-studies/infermiera-althea.jpg",
        results: [
          "SEO locale senza budget pubblicitario",
          "Posizionamento organico solido per le ricerche che contano",
          "Piattaforma scelta per sostenibilità nel tempo",
          "Redesign in corso proteggendo la SEO esistente",
        ],
      },
      {
        slug: "geofire",
        tag: "Progetto Personale · Metodo",
        title: "Geo·FIRE, mappamondo finanziario",
        place: "Web app 3D nel browser",
        imageSrc: "/case-studies/geofire.jpg",
        appLink: "https://geofire.davidcappelletto.it",
        appLinkLabel: "Prova l'app →",
        results: [
          "Calcoli finanziari verificati su oltre 34.000 combinazioni",
          "175 paesi, tre modelli di libertà finanziaria",
          "Bandiere disegnate da zero per compatibilità universale",
          "Il processo è il prodotto: un progetto di metodo",
        ],
      },
      {
        slug: "maybes-shop",
        tag: "Progetto Sperimentale · Infrastruttura",
        title: "Maybe's Shop, e-commerce automatizzato",
        place: "Shopify + print-on-demand",
        imageSrc: "/case-studies/maybes-shop.jpg",
        results: [
          "Flusso ordine → stampa → spedizione senza interventi manuali",
          "Integrazione via webhook, zero magazzino",
          "Brand e infrastruttura curati entrambi da zero",
          "Verificato end-to-end, dall'acquisto alla consegna",
        ],
      },
    ],
    aboutTag: "Chi sono",
    aboutTitle: "David Cappelletto",
    aboutSubtitle: "Consulente Digitale Freelance · Friuli-Venezia Giulia",
    aboutText:
      "Mi chiamo David, sono un consulente digitale freelance con base in Friuli-Venezia Giulia. Ho un background in design industriale che mi ha insegnato una cosa: la forma segue la funzione, non il contrario.\n\nLavoro con professionisti e PMI che hanno già un sito ma non vedono risultati. Prima di toccare qualsiasi strumento, analizzo target, struttura e processi. Solo dopo propongo cosa fare.\n\nNon gestisco decine di clienti in parallelo. Lavoro con pochi progetti alla volta e parli sempre direttamente con me, senza intermediari.",
    servicesTag: "Cosa Puoi Chiedermi",
    servicesTitle: "Le competenze che porto. Applicate dove servono.",
    customEstimateTitle: "Ogni attività ha esigenze diverse. Anche la soluzione dovrebbe esserlo.",
    customEstimateText: "Analizziamo insieme il tuo obiettivo e costruiamo una proposta su misura, senza pacchetti predefiniti.",
    customEstimateCta: "Richiedi un preventivo personalizzato →",
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
          "Struttura, UX, contenuti e conversioni. In questo ordine, non al contrario. L'architettura viene prima del design, il design prima del codice.",
      },
      {
        iconSrc: "/icon-seo.svg",
        title: "SEO Locale",
        description:
          "Farti trovare da chi è già vicino a te e sta cercando quello che fai. Zero budget ads, solo struttura fatta bene.",
      },
      {
        iconSrc: "/icon-ai.svg",
        title: "Automazioni AI",
        description:
          "Elimino i processi manuali ripetitivi, come preventivi, follow-up e reportistica, con n8n e AI applicati al tuo caso reale, non a un caso da tutorial.",
      },
      {
        iconSrc: "/icon-strategia.svg",
        title: "Strategia Digitale",
        description:
          "Non ti vendo un piano a 90 giorni fatto di slide. Ti dico, con numeri veri, se conviene investire ora o aspettare e su cosa, esattamente.",
      },
      {
        iconSrc: "/icon-affiancamento.svg",
        title: "Affiancamento",
        description:
          "Ti insegno a usare da solo quello che ti ho costruito: CMS, tracking e automazioni. Così non mi richiami per cambiare un titolo o aggiungere una pagina.",
      },
    ],
    firstStep: "Primo Passo",
    miniTitle: "Inizia dal Mini Audit Gratuito",
    miniText:
      "20 minuti, nessun impegno. Raccontami la tua situazione. Capisco il contesto e ti dico onestamente se e come posso aiutarti.",
    miniBtn2: "Oppure compila il form →",
    contacts: "Contatti",
    talk: "Parliamoci.",
    talkSub: "Raccontami obiettivo, contesto e priorità.",
    form: {
      name: "Nome e Cognome",
      email: "Email",
      activity: "Tipo di attività",
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
    navLinks: ["Projects", "How I work", "Services"],
    ctaMini: "Free Mini Audit",
    heroBadge: "Tailored Digital Consulting",
    heroTitleA: "I help professionals and SMEs understand what is not working",
    heroTitleB: "in their digital presence and act on clear priorities",
    heroSubtitle:
      "I analyze websites, content, and processes before proposing a solution. Then I design and build what is actually needed, without standard packages.",
    heroBtn1: "Message me on WhatsApp",
    heroBtn2: "How I work →",
    approach: "My approach",
    quote:
      "Digital works when it solves a real problem, not when it follows a trend. First I understand what is needed. Then I choose the tools, priorities, and investment.",
    stat1Value: "Problem first",
    stat1: "I analyze goals, people, and processes before proposing a solution.",
    stat2Value: "Only what you need",
    stat2: "Every engagement starts from your context, without standard packages.",
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
        q: "Do you really know what's working in your digital presence, or are you guessing?",
        a: "Without clear data on what actually generates real contacts, every decision is a bet. I set up essential tracking, without useless dashboards, so you know what to keep doing and what to cut.",
      },
    ],
    workTag: "How I Work",
    workTitle: "I do not offer standard packages. I use a method.",
    workIntro:
      "Every business is different. Before proposing anything, I analyze your tools, target, processes, and competition. Only then does it make sense to discuss solutions.",
    steps: [
      ["01", "I understand first", "I analyze target, structure, processes and market signals before any proposal."],
      ["02", "I tell you what you really need", "I define clear operational priorities: what to do, why, and expected impact."],
      ["03", "We build it together", "I implement directly or support you step by step, keeping the project aligned with your goals."],
    ],
    casesTag: "Projects",
    casesTitle: "Real projects, finished products, and work in development.",
    casesReadMore: "Read the case study →",
    casesAllBtn: "All case studies →",
    casesShowMore: "Show 2 more projects",
    casesShowLess: "Show fewer",
    caseCards: [
      {
        slug: "automazione-promemoria-appuntamenti",
        tag: "In development · Healthcare automation",
        title: "Appointment reminders via WhatsApp Business",
        place: "Confidential project · In development",
        imageSrc: "/case-studies/automazione-promemoria-appuntamenti.svg",
        results: [
          "Appointment reminders through WhatsApp Business",
          "Separate outcomes: confirmation, rescheduling, or cancellation",
          "Front-desk control retained for exceptions",
        ],
      },
      {
        slug: "ordine-pagamento-qr",
        tag: "White-label product · Hospitality",
        title: "Table ordering and payment through a QR code",
        place: "Validated prototype · Completed product",
        imageSrc: "/case-studies/ordine-pagamento-qr.svg",
        results: [
          "UX prototype clearly separated from the completed product",
          "Menu, ordering, and payment in one mobile-first flow",
          "Customizable for each venue's identity and operations",
        ],
      },
      {
        slug: "azienda-hvac",
        tag: "Client Project · HVAC Installations",
        title: "HVAC site: faithful to an approved design",
        place: "Northern Italy · via agency",
        imageSrc: "/case-studies/azienda-hvac.jpg",
        results: [
          "Built faithfully to an approved design, with an external art director",
          "Headless CMS with a custom Python generation engine",
          "Tracking stack rebuilt from scratch, GDPR compliant",
          "Domain migration with no loss of SEO ranking",
        ],
      },
      {
        slug: "infermiera-althea",
        tag: "Independent Professional · Healthcare",
        title: "Nurse Althea",
        place: "📍 Pordenone area",
        imageSrc: "/case-studies/infermiera-althea.jpg",
        results: [
          "Local SEO with zero ad budget",
          "Solid organic ranking for the searches that matter",
          "Platform chosen for long-term sustainability",
          "Redesign in progress while protecting existing SEO",
        ],
      },
      {
        slug: "geofire",
        tag: "Personal Project · Method",
        title: "Geo·FIRE, a financial freedom globe",
        place: "3D web app in the browser",
        imageSrc: "/case-studies/geofire.jpg",
        appLink: "https://geofire.davidcappelletto.it",
        appLinkLabel: "Try the app →",
        results: [
          "Financial calculations verified across 34,000+ combinations",
          "175 countries, three models of financial freedom",
          "Flags drawn from scratch for universal compatibility",
          "The process is the product: a case study of method",
        ],
      },
      {
        slug: "maybes-shop",
        tag: "Experimental Project · Infrastructure",
        title: "Maybe's Shop, automated e-commerce",
        place: "Shopify + print-on-demand",
        imageSrc: "/case-studies/maybes-shop.jpg",
        results: [
          "Order → print → ship flow with no manual steps",
          "Webhook integration, zero warehouse",
          "Brand and infrastructure both built from scratch",
          "Verified end-to-end, from purchase to delivery",
        ],
      },
    ],
    aboutTag: "About",
    aboutTitle: "David Cappelletto",
    aboutSubtitle: "Freelance Digital Consultant · Friuli-Venezia Giulia",
    aboutText:
      "I'm David, a freelance digital consultant based in Friuli-Venezia Giulia. I come from an industrial design background that taught me one key principle: form follows function, never the other way around.\n\nI work with professionals and SMEs that already have a website but are not getting results. Before touching any tool, I analyze the target, structure, and processes. Only then do I define what to do.\n\nI do not handle dozens of clients in parallel. I work with a limited number of projects at a time, and you always speak directly with me, with no middle layers.",
    servicesTag: "What You Can Ask For",
    servicesTitle: "The skills I bring. Applied where they matter.",
    customEstimateTitle: "Every business has different needs. Its solution should too.",
    customEstimateText: "Let's review your goals and build a tailored proposal, without predefined packages.",
    customEstimateCta: "Request a tailored quote →",
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
          "Structure, UX, content, and conversions. In this order, not the other way around. Architecture comes before design, design before code.",
      },
      {
        iconSrc: "/icon-seo.svg",
        title: "Local SEO",
        description:
          "Get found by people already near you who are searching for what you do. Zero ad budget, just structure done right.",
      },
      {
        iconSrc: "/icon-ai.svg",
        title: "AI Automations",
        description:
          "I remove repetitive manual processes such as quotes, follow-ups, and reporting with n8n and AI applied to your actual case, not a generic tutorial case.",
      },
      {
        iconSrc: "/icon-strategia.svg",
        title: "Digital Strategy",
        description:
          "I won't sell you a 90-day plan made of slides. I'll tell you, with real numbers, whether it's worth investing now or waiting and exactly where to focus.",
      },
      {
        iconSrc: "/icon-affiancamento.svg",
        title: "Consulting Support",
        description:
          "I teach you to run what I built for you on your own: CMS, tracking, and automations. That way, you don't call me back to change a heading or add a page.",
      },
    ],
    firstStep: "First Step",
    miniTitle: "Start with the Free Mini Audit",
    miniText:
      "20 minutes, no commitment. Tell me your situation. I'll understand the context and honestly tell you if and how I can help.",
    miniBtn2: "Or fill in the form →",
    contacts: "Contacts",
    talk: "Let's talk.",
    talkSub: "Tell me your objective, context and priorities.",
    form: {
      name: "Full Name",
      email: "Email",
      activity: "Type of business",
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
  tealText: "#1E7E73",
  bg: "#F4F7FA",
  ink: "#111E30",
  inkMuted: "#4A5F78",
  line: "#D0DDE8",
};

export default function Home() {
  const [lang, setLang] = useState("it");
  const [scrolled, setScrolled] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openServiceAccordion, setOpenServiceAccordion] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [showAllHomeProjects, setShowAllHomeProjects] = useState(false);

  const t = copy[lang];
  const [formState, handleFormSubmit] = useForm("xbdpngvd");

  const handleTrackedFormSubmit = async (event) => {
    await handleFormSubmit(event);
    trackEvent("form_inviato");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setLogoRotation(window.scrollY * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      [25, 50, 75, 90].forEach((threshold) => {
        if (scrollPercent >= threshold && !window[`scrollTracked${threshold}`]) {
          window[`scrollTracked${threshold}`] = true;
          trackEvent(`scroll_depth_${threshold}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#casi-reali", label: t.navLinks[0] },
    { href: "#come-lavoro", label: t.navLinks[1] },
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
            width: "min(1200px, 89vw)",
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
            <img src="/logo.png" alt="Logo David Cappelletto" width={34} height={34} style={{ height: 34, width: "auto", filter: "invert(1)", transform: `rotate(${logoRotation}deg)`, transition: "transform 0.05s linear" }} />
            <span>David Cappelletto</span>
          </a>

          <div className="desktop-nav nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <div className="nav-lang-desktop" style={{ border: "1px solid rgba(255,255,255,.4)", borderRadius: 999, padding: 4, fontSize: 13 }}>
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
                className="cta-hover-lift"
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

          <button
            className="mobile-toggle nav-hamburger"
            style={{
              border: "none",
              background: "transparent",
              color: "#fff",
              fontSize: 28,
              cursor: "pointer",
              width: 40,
              height: 40,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Apri menu"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu-panel" style={{ borderTop: "1px solid rgba(255,255,255,.15)", background: "rgba(17,30,48,.97)", paddingBottom: 18 }}>
            <div style={{ width: "min(1200px, 89vw)", margin: "0 auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 14 }}>
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
                className="cta-hover-lift"
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
          backgroundImage: "url('/hero-bg.jpg')",
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
          className="hero-grid"
          style={{
            width: "min(1200px, 89vw)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
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
            <h1 className="hero-title" style={{ fontSize: 38, lineHeight: 1.1, margin: 0, fontWeight: 800 }}>
              {t.heroTitleA} <span style={{ color: colors.teal }}>{t.heroTitleB}</span>.
            </h1>
            <p style={{ marginTop: 24, maxWidth: 640, fontSize: 20, lineHeight: 1.55, color: "rgba(255,255,255,.9)" }}>
              {t.heroSubtitle}
            </p>
            <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", gap: 14 }}>
              <button
                className="cta-hover-lift"
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
                onClick={() => {
                  trackEvent("click_whatsapp");
                  trackEvent("click_audit_gratuito");
                  window.open("https://wa.me/393481151160", "_blank");
                }}
              >
                {t.heroBtn1}
              </button>
              <a
                href="#come-lavoro"
                className="cta-hover-lift"
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
              padding: 24,
              backdropFilter: "blur(6px)",
            }}
          >
            <p style={{ margin: "0 0 12px", textTransform: "uppercase", letterSpacing: ".08em", color: colors.tealLight, fontSize: 12 }}>
              {t.approach}
            </p>
            <p className="hero-quote" style={{ margin: 0, fontSize: 19, lineHeight: 1.45, fontStyle: "italic" }}>
              {t.quote}
            </p>
            <div className="hero-stats-grid" style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", background: "rgba(17,30,48,.35)", padding: 12 }}>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.2, fontWeight: 800, color: colors.tealLight }}>{t.stat1Value}</p>
                <p style={{ margin: "4px 0 0", fontSize: 12.5, lineHeight: 1.35 }}>{t.stat1}</p>
              </div>
              <div style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", background: "rgba(17,30,48,.35)", padding: 12 }}>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.2, fontWeight: 800, color: colors.tealLight }}>{t.stat2Value}</p>
                <p style={{ margin: "4px 0 0", fontSize: 12.5, lineHeight: 1.35 }}>{t.stat2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: colors.navyDeep, color: "#fff", padding: "96px 0" }}>
        <div className="problem-grid" style={{ width: "min(1200px, 89vw)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 36 }}>
          <div>
            <span style={{ display: "inline-block", background: "rgba(43,168,154,.2)", color: colors.tealLight, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.problemTag}</span>
            <h2 className="section-title" style={{ margin: "20px 0 0", fontSize: 34, lineHeight: 1.1 }}>{t.problemTitle}</h2>
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

      <section id="casi-reali" style={{ background: colors.bg, padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 89vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.casesTag}</span>
          <h2 className="section-title" style={{ margin: "20px 0 0", fontSize: 34, lineHeight: 1.15 }}>{t.casesTitle}</h2>
          <div id="home-projects-grid" className="cases-grid" style={{ marginTop: 40, display: "grid", gap: 20, gridTemplateColumns: "1fr" }}>
            {t.caseCards.slice(0, showAllHomeProjects ? t.caseCards.length : 4).map((card, cardIdx) => (
              <article
                key={card.slug}
                className="case-card"
                style={{
                  position: "relative",
                  borderRadius: 12,
                  border: `1px solid ${colors.line}`,
                  background: "#fff",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a
                  href={`/progetti/${card.slug}`}
                  aria-label={card.title}
                  style={{ position: "absolute", inset: 0, zIndex: 1 }}
                />

                <div
                  className="case-card-image"
                  style={{
                    position: "relative",
                    minHeight: 180,
                    background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})`,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const ph = e.currentTarget.nextSibling;
                      if (ph) ph.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 6,
                      color: "rgba(255,255,255,.85)",
                      textAlign: "center",
                      padding: 16,
                    }}
                  >
                    <span style={{ fontSize: 32, fontWeight: 800, opacity: 0.5 }}>{String(cardIdx + 1).padStart(2, "0")}</span>
                    <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".06em" }}>{card.place}</span>
                  </div>
                </div>

                <div className="case-card-body" style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ margin: 0, color: colors.inkMuted, fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 700 }}>
                    {card.tag}
                  </p>
                  <h3 style={{ margin: "10px 0 0", fontSize: 24, lineHeight: 1.25 }}>{card.title}</h3>
                  <p style={{ margin: "6px 0 0", color: colors.inkMuted }}>{card.place}</p>
                  <ul style={{ margin: "16px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 8 }}>
                    {card.results.slice(0, 3).map((result) => (
                      <li key={result} style={{ fontSize: 14 }}><span style={{ color: colors.tealText, marginRight: 8 }}>✓</span>{result}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
                    <span style={{ color: colors.tealText, fontWeight: 700 }}>{t.casesReadMore}</span>
                    {card.appLink && (
                      <a
                        href={card.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          position: "relative",
                          zIndex: 2,
                          background: colors.navy,
                          color: "#fff",
                          borderRadius: 999,
                          textDecoration: "none",
                          padding: "8px 16px",
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        {card.appLinkLabel}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <button
              type="button"
              aria-expanded={showAllHomeProjects}
              aria-controls="home-projects-grid"
              onClick={() => setShowAllHomeProjects((current) => !current)}
              className="cta-hover-lift"
              style={{
                border: `1px solid ${colors.navy}`,
                background: "transparent",
                color: colors.navy,
                padding: "12px 24px",
                borderRadius: 10,
                font: "inherit",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {showAllHomeProjects ? t.casesShowLess : t.casesShowMore}
            </button>
            <Link
              href="/progetti"
              className="cta-hover-lift"
              style={{
                display: "inline-block",
                background: colors.navy,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              {t.casesAllBtn}
            </Link>
          </div>
        </div>
      </section>

      <section
        id="come-lavoro"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(28,46,74,0.45), rgba(43,168,154,0.22)), url(/case-studies/chi-sono-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "96px 0 56px",
        }}
      >
        <div style={{ width: "min(1200px, 89vw)", margin: "0 auto" }}>
          <div className="method-combined-wrap" style={{ position: "relative" }}>
            <div className="method-combined" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
              <div
                className="method-photo-col"
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 32,
                  boxShadow: "0 14px 34px rgba(17,30,48,.16)",
                }}
              >
                <div className="method-photo-text" style={{ textAlign: "center" }}>
                  <span style={{ display: "inline-block", background: colors.bg, color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.workTag}</span>
                  <h2 className="section-title" style={{ margin: "20px 0 0", fontSize: 34, lineHeight: 1.15, textAlign: "left" }}>{t.workTitle}</h2>
                  <p style={{ marginTop: 16, color: colors.inkMuted, lineHeight: 1.6, textAlign: "left" }}>
                    {t.workIntro}
                  </p>

                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 32,
                      borderLeft: `3px solid ${colors.teal}`,
                      paddingLeft: 10,
                      color: colors.tealText,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {t.aboutTag}
                  </span>
                  <h2 className="section-title" style={{ margin: "14px 0 0", fontSize: 28, lineHeight: 1.2 }}>
                    {t.aboutTitle}
                  </h2>
                  <p style={{ margin: "8px 0 0", color: colors.inkMuted, fontWeight: 600 }}>
                    {t.aboutSubtitle}
                  </p>
                  <p style={{ margin: "14px 0 0", color: colors.inkMuted, lineHeight: 1.7, whiteSpace: "pre-line", textAlign: "left" }}>
                    {t.aboutText}
                  </p>
                </div>
              </div>

              <div className="method-steps-col" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {t.steps.map((step, idx) => (
                  <article
                    key={step[0]}
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                    style={{
                      border: `1px solid ${colors.line}`,
                      borderRadius: 12,
                      padding: 22,
                      background: colors.bg,
                      flex: 1,
                      borderLeft:
                        hoveredStep === idx
                          ? `3px solid ${colors.teal}`
                          : "3px solid transparent",
                      transform:
                        hoveredStep === idx ? "translateY(-3px)" : "translateY(0)",
                      transition: "transform .2s ease, border-left-color .2s ease",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: 48, fontWeight: 800, color: colors.tealText }}>{step[0]}</p>
                    <h3 style={{ margin: "14px 0 0", fontSize: 24 }}>{step[1]}</h3>
                    <p style={{ margin: "10px 0 0", color: colors.inkMuted, lineHeight: 1.6 }}>{step[2]}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <a
              href="#contatti"
              className="cta-hover-lift"
              style={{
                display: "inline-block",
                background: colors.navy,
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Parliamo del tuo progetto →
            </a>
          </div>
        </div>
      </section>

      <section
        id="mini-audit"
        style={{
          backgroundImage: `linear-gradient(rgba(17,30,48,0.78), rgba(17,30,48,0.88)), url(/case-studies/header-case.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          textAlign: "center",
          padding: "56px 0 96px",
        }}
      >
        <div style={{ width: "min(1200px, 89vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,.14)", color: colors.tealLight, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.firstStep}</span>
          <h2 className="section-title" style={{ margin: "20px 0 0", fontSize: 34, lineHeight: 1.15 }}>{t.miniTitle}</h2>
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a
              href="https://wa.me/393481151160"
              onClick={() => trackEvent("click_whatsapp")}
              className="cta-hover-lift"
              style={{ background: "#fff", color: colors.ink, borderRadius: 999, padding: "14px 26px", textDecoration: "none", fontWeight: 700 }}
            >
              {t.heroBtn1}
            </a>
            <a href="#contatti" className="cta-hover-lift" style={{ border: "1px solid rgba(255,255,255,.6)", color: "#fff", borderRadius: 999, padding: "14px 26px", textDecoration: "none", fontWeight: 700 }}>
              {t.miniBtn2}
            </a>
          </div>
          <p style={{ margin: "22px auto 0", maxWidth: 560, color: "rgba(255,255,255,.7)", fontSize: 14, lineHeight: 1.6 }}>
            {t.miniText}
          </p>
        </div>
      </section>

      <section id="servizi" style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ width: "min(1200px, 89vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: colors.bg, color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.servicesTag}</span>
          <h2 className="section-title" style={{ margin: "20px 0 0", fontSize: 34, lineHeight: 1.15 }}>{t.servicesTitle}</h2>

          <div className="services-cards-grid" style={{ marginTop: 40, display: "grid", gap: 12, gridTemplateColumns: "1fr" }}>
            {t.serviceAccordions.map((item, idx) => {
              const isOpen = openServiceAccordion === idx;
              return (
                <div key={item.title} style={{ overflow: "hidden", borderRadius: 12, border: `1px solid ${isOpen ? colors.navy : colors.line}`, background: isOpen ? colors.navy : colors.bg, transition: "background .2s ease, border-color .2s ease" }}>
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
                      color: isOpen ? "#fff" : colors.ink,
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenServiceAccordion(isOpen ? -1 : idx)}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                      <img src={item.iconSrc} width="40" height="40" alt={item.title} style={{ filter: isOpen ? "invert(1)" : "none", transition: "filter .2s ease" }} />
                      <span style={{ fontWeight: 700 }}>{item.title}</span>
                    </span>
                    <span style={{ fontSize: 28, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .25s ease" }}>+</span>
                  </button>
                  <div style={{ display: isOpen ? "block" : "none" }}>
                    <p style={{ margin: 0, padding: "0 20px 20px", fontSize: 14, lineHeight: 1.6, color: isOpen ? "rgba(255,255,255,.85)" : colors.inkMuted }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 40, borderRadius: 16, background: colors.navy, color: "#fff", padding: "32px clamp(24px, 5vw, 56px)", textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>{t.customEstimateTitle}</h3>
            <p style={{ margin: "14px auto 0", maxWidth: 650, color: "rgba(255,255,255,.78)", lineHeight: 1.65 }}>{t.customEstimateText}</p>
            <a href="#contatti" className="cta-hover-lift" style={{ marginTop: 24, background: colors.teal, color: "#fff", borderRadius: 999, padding: "13px 24px", textDecoration: "none", fontWeight: 700 }}>
              {t.customEstimateCta}
            </a>
          </div>
        </div>
      </section>

      <section
        id="contatti"
        style={{
          backgroundImage: `linear-gradient(rgba(17,30,48,0.78), rgba(17,30,48,0.78)), url(/contact-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "96px 0",
        }}
      >
        <div style={{ width: "min(1200px, 89vw)", margin: "0 auto" }}>
          <div style={{ marginTop: 24, maxWidth: 640, margin: "24px auto 0", background: "#fff", border: `1px solid ${colors.line}`, borderRadius: 18, padding: 28 }}>
            <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.contacts}</span>
            <h2 className="section-title" style={{ margin: "20px 0 0", fontSize: 34 }}>{t.talk}</h2>
            <p style={{ marginTop: 10, color: colors.inkMuted }}>{t.talkSub}</p>

            <div style={{ display: "flex", marginTop: 24, justifyContent: "center", gap: 32, paddingBottom: 22, marginBottom: 22, borderBottom: `1px solid ${colors.line}` }}>
              <a
                href="https://wa.me/393481151160"
                onClick={() => trackEvent("click_whatsapp")}
                aria-label="WhatsApp"
                style={{ color: "#25D366", display: "inline-flex", opacity: 0.85, transition: "opacity .2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.886a.5.5 0 0 0 .619.608l6.188-1.615A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.428l-.36-.214-3.733.974.999-3.648-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              </a>
              <a
                href="mailto:cappellettodavid@gmail.com"
                aria-label="Email"
                style={{ color: colors.navy, display: "inline-flex", opacity: 0.85, transition: "opacity .2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/david-cappelletto-703832306/"
                aria-label="LinkedIn"
                style={{ color: "#0A66C2", display: "inline-flex", opacity: 0.85, transition: "opacity .2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            <form
              className="contact-form"
              onSubmit={handleTrackedFormSubmit}
            >
              {formState.succeeded ? (
                <p style={{ margin: 0, color: colors.tealText, fontSize: 16, fontWeight: 600, lineHeight: 1.5 }}>
                  {t.form.success}
                </p>
              ) : (
                <>
                  <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
                    <input
                      name="nome"
                      type="text"
                      required
                      style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box" }}
                      placeholder={t.form.name}
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box" }}
                      placeholder={t.form.email}
                    />
                    <input
                      className="contact-span-full"
                      name="tipo_attivita"
                      type="text"
                      style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box", gridColumn: "auto" }}
                      placeholder={t.form.activity}
                    />
                    <textarea
                      className="contact-span-full"
                      name="messaggio"
                      required
                      style={{ minHeight: 144, border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box", gridColumn: "auto" }}
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
                    className="cta-hover-lift"
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
        </div>
      </section>

      <footer style={{ background: colors.navyDeep, color: "#fff", padding: "34px 0 16px" }}>
        <div
          className="footer-grid"
          style={{
            width: "min(1200px, 89vw)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 20,
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.png" alt="Logo David Cappelletto" width={28} height={28} style={{ height: 28, width: "auto", filter: "invert(1)" }} />
            <span style={{ color: "#fff", fontWeight: 700 }}>David Cappelletto</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              color: "rgba(255,255,255,0.55)",
              fontSize: 13,
            }}
          >
            <a href="#casi-reali" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{t.navLinks[0]}</a>
            <a href="#come-lavoro" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{t.navLinks[1]}</a>
            <a href="#servizi" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{t.navLinks[2]}</a>
            <a href="#contatti" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{t.contacts}</a>
          </div>

          <div className="footer-right" style={{ justifySelf: "start", textAlign: "left" }}>
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

        <div style={{ width: "min(1200px, 89vw)", margin: "14px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
            © 2026 David Cappelletto
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/393481151160"
        onClick={() => trackEvent("click_whatsapp")}
        className="cta-hover-lift"
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

      <style jsx global>{`
        .cta-hover-lift {
          display: inline-block;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta-hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(17, 30, 48, 0.18);
        }
        .case-card-image {
          aspect-ratio: 4 / 3;
          min-height: 0 !important;
        }
        .case-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .case-card:hover,
        .case-card:focus-within {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(17, 30, 48, 0.12);
        }
        .case-card a[aria-label]:focus-visible {
          outline: 2px solid ${colors.teal};
          outline-offset: 2px;
        }

        html {
          scroll-behavior: smooth;
        }
        .desktop-nav {
          display: none;
        }
        .mobile-toggle {
          display: block;
        }
        .mobile-menu-panel {
          display: block;
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
        @media (min-width: 768px) {
          .hero-quote {
            font-size: 28px !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu-panel {
            display: none !important;
          }
          .problem-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .steps-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .cases-grid {
            grid-template-columns: 1fr 1fr !important;
            max-width: 760px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .about-grid {
            grid-template-columns: 280px 1fr !important;
          }
          .about-photo-wrap {
            justify-content: flex-start !important;
          }
          .services-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1fr auto 1fr !important;
            align-items: center !important;
          }
          .section-title {
            font-size: 46px !important;
          }
          .contact-span-full {
            grid-column: 1 / 3 !important;
          }
          .footer-right {
            justify-self: end !important;
            text-align: right !important;
          }
          .method-combined {
            grid-template-columns: 1fr 1fr !important;
            align-items: stretch !important;
          }
          .method-photo-text {
            text-align: left !important;
          }
          .method-connector-svg {
            display: block !important;
          }
        }
        @media (min-width: 1024px) {
          .services-cards-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .about-grid {
            grid-template-columns: 280px 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
