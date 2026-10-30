export const colors = {
  navy: "#14253C", navyDeep: "#0B1727", teal: "#229C8F", tealLight: "#B8EEE4",
  tealText: "#1E7E73", bg: "#F4F6F3", ink: "#142033", inkMuted: "#607084", line: "#D8DFDF",
};

export const statusConfig = {
  online: { color: "#28A978", progress: 100, it: "Online", en: "Online" },
  done: { color: "#397BD8", progress: 100, it: "Concluso", en: "Completed" },
  progress: { color: "#EFB652", progress: 64, it: "In costruzione", en: "In progress" },
  idea: { color: "#DD5D67", progress: 22, it: "Idea / prototipo", en: "Idea / prototype" },
};

export const categoryLabels = {
  featured: { it: "In evidenza", en: "Featured" },
  solutions: { it: "Soluzioni e automazioni", en: "Solutions and automations" },
  lab: { it: "Laboratorio", en: "Lab" },
};

export const caseStudies = [
  {
    slug: "azienda-hvac", category: "featured", status: "online", featured: true,
    imageSrc: "/projects/diama/home.webp", link: "https://diamaservice.it",
    it: {
      tag: "Cliente · Sviluppo web", shortTitle: "DIAMA Service",
      title: "DIAMA Service — dal sistema progettuale al sito in produzione",
      client: "DIAMA Service", place: "Torino · con Stefania Bertone e Lara Bragagna",
      stack: "HTML · CSS · JavaScript · Decap CMS · Netlify · GA4/GTM",
      role: "Prototipo, sviluppo, CMS, tracking e messa online",
      intro: "Trasformare un sistema Figma completo in un sito reale: fedele al design, responsive, aggiornabile e misurabile.",
      cardText: "Ecosistema web multipagina con CMS, landing, SEO tecnico e tracking.",
      facts: ["Circa 30 pagine", "CMS e landing", "SEO e tracking"],
      sections: [
        { h: "Un’identità nuova, un sistema digitale all’altezza", body: "DIAMA stava crescendo: nuovi servizi, una nuova sede e una comunicazione ripensata. Il mio compito era trasformare strategia, UX e UI in un sito capace di sostenere contenuti, campagne e attività commerciali.", image: "/projects/diama/cover.png", mediaLabel: "Identità · contesto" },
        { h: "Dal prototipo alla produzione", body: "Ho realizzato un prototipo funzionante prima dello sviluppo definitivo, mostrandolo live in video call e correggendo navigazione, responsive e gerarchie. Da lì ho costruito il sistema multipagina mantenendo coerenza con il progetto grafico.", image: "/projects/diama/prototype.png", mediaLabel: "Wireframe · prototipo" },
        { h: "Statico, ma aggiornabile davvero", body: "Decap CMS permette al gruppo di pubblicare articoli e creare landing. Generatori dedicati trasformano i contenuti in pagine statiche, mantenendo sicurezza e semplicità operativa.", image: "/projects/diama/cms-dashboard.png", mediaLabel: "Decap CMS · contenuti" },
        { h: "Collegato al resto del business", body: "Form, WhatsApp, Search Console, GTM, GA4 e Meta Pixel collegano comunicazione, contatti e campagne. Consenso, redirect, sitemap e dati strutturati completano la messa online.", image: "/projects/diama/tracking.svg", mediaLabel: "Tracking · architettura" },
      ],
      results: ["Circa 30 pagine responsive", "CMS realmente utilizzato", "Blog e landing replicabili", "SEO tecnico e redirect", "Tracking e consenso", "Deploy e migrazione Netlify"],
    },
    en: {
      tag: "Client · Web development", shortTitle: "DIAMA Service",
      title: "DIAMA Service — from design system to production website", client: "DIAMA Service",
      place: "Turin · with Stefania Bertone and Lara Bragagna", stack: "HTML · CSS · JavaScript · Decap CMS · Netlify · GA4/GTM",
      role: "Prototype, development, CMS, tracking and launch", intro: "Turning a complete Figma system into a real website: responsive, editable and measurable.",
      cardText: "A multi-page web ecosystem with CMS, landing pages, technical SEO and tracking.", facts: ["About 30 pages", "CMS and landing pages", "SEO and tracking"],
      sections: [
        { h: "A new identity needed a matching digital system", body: "DIAMA was growing through new services, a new office and redesigned communication. My role was to turn strategy, UX and UI into a site supporting content, campaigns and sales.", image: "/projects/diama/cover.png", mediaLabel: "Identity · context" },
        { h: "From prototype to production", body: "I built a working prototype, reviewed it live over video calls and adjusted navigation, responsive behaviour and hierarchy before developing the multi-page system.", image: "/projects/diama/prototype.png", mediaLabel: "Wireframe · prototype" },
        { h: "Static, but genuinely editable", body: "Decap CMS lets the team publish articles and create campaign landing pages while dedicated generators keep the output static and secure.", image: "/projects/diama/cms-dashboard.png", mediaLabel: "Decap CMS · content" },
        { h: "Connected to the business", body: "Forms, WhatsApp, Search Console, GTM, GA4 and Meta Pixel connect communication, contacts and campaigns.", image: "/projects/diama/tracking.svg", mediaLabel: "Tracking · architecture" },
      ], results: ["About 30 responsive pages", "CMS used by the team", "Reusable blog and landing pages", "Technical SEO and redirects", "Tracking and consent", "Netlify deploy and migration"],
    },
  },
  {
    slug: "forma", category: "featured", status: "progress", featured: true,
    imageSrc: "/projects/forma/quest-guide-1280.png",
    it: {
      tag: "Prodotto · Web app", shortTitle: "FORMA", title: "FORMA — dalla scheda stampata a un percorso digitale",
      client: "Prodotto personale", place: "App installabile · accesso su registrazione",
      stack: "PWA · JavaScript · catalogo illustrato · QA browser", role: "Ideazione, product design, sviluppo e collaudo",
      intro: "Nata per non allenarsi con una fotocopia in mano. Oggi organizza esercizi, sessioni e progressi in un’esperienza personale.",
      cardText: "Allenamento guidato, catalogo di 60 esercizi, sessioni e progressi.", facts: ["60 esercizi", "QA 15/15", "Accesso registrato"],
      sections: [
        { h: "Un problema personale, prima di un prodotto", body: "All’inizio FORMA serviva a due profili personali: portare la scheda in palestra senza una fotocopia e seguire l’allenamento dal telefono.", image: "/projects/forma/quest-guide-390.png", mediaLabel: "Quest · mobile" },
        { h: "Da scheda a esperienza guidata", body: "Circuiti, esercizi, sessioni, progressi e timer di recupero sono stati riuniti in un percorso leggibile anche mentre ci si allena.", image: "/projects/forma/quest-guide-1280.png", mediaLabel: "Sessione · guida" },
        { h: "Un catalogo illustrato verificabile", body: "Sessanta esercizi sono collegati a immagini stabili. Un singolo elemento può essere corretto senza alterare tutto il catalogo.", image: "/projects/forma/gym-equipment-1280.png", mediaLabel: "Catalogo · attrezzatura" },
        { h: "Collaudo prima della pubblicazione", body: "La release del 22 ottobre ha superato 15 controlli su 15 a diverse larghezze. GitHub è più recente della versione online: il prodotto viene presentato come in evoluzione.", image: "/projects/forma/sync-1280.png", mediaLabel: "QA · sync demo" },
      ], results: ["60 esercizi illustrati", "Percorsi e sessioni guidate", "Timer di recupero persistente", "QA browser 15/15", "PWA installabile", "Accesso previsto tramite registrazione"],
    },
    en: {
      tag: "Product · Web app", shortTitle: "FORMA", title: "FORMA — from printed sheet to digital training journey",
      client: "Own product", place: "Installable app · registration access", stack: "PWA · JavaScript · illustrated catalogue · browser QA",
      role: "Concept, product design, development and QA", intro: "Created so I would not have to train with a photocopy. It now brings exercises, sessions and progress into one experience.",
      cardText: "Guided training, a 60-exercise catalogue, sessions and progress.", facts: ["60 exercises", "QA 15/15", "Registered access"],
      sections: [
        { h: "A personal problem before a product", body: "FORMA initially served two personal profiles: taking a plan to the gym without a photocopy and following it from a phone.", image: "/projects/forma/quest-guide-390.png", mediaLabel: "Quest · mobile" },
        { h: "From sheet to guided experience", body: "Circuits, exercises, sessions, progress and a rest timer were brought into one readable journey.", image: "/projects/forma/quest-guide-1280.png", mediaLabel: "Session · guide" },
        { h: "A traceable illustrated catalogue", body: "Sixty exercises are linked to stable images, so one element can be corrected without replacing the entire catalogue.", image: "/projects/forma/gym-equipment-1280.png", mediaLabel: "Catalogue · equipment" },
        { h: "QA before release", body: "The October 22 release passed 15 out of 15 checks. GitHub is newer than the live version, so the project is shown as evolving.", image: "/projects/forma/sync-1280.png", mediaLabel: "QA · sync demo" },
      ], results: ["60 illustrated exercises", "Guided sessions", "Persistent rest timer", "Browser QA 15/15", "Installable PWA", "Registration access planned"],
    },
  },
  {
    slug: "geofire", category: "featured", status: "online", featured: true,
    imageSrc: "/projects/geofire/app.jpg", appLink: "https://geofire.davidcappelletto.it",
    it: {
      tag: "Prodotto · Dati e visualizzazione", shortTitle: "Geo·FIRE", title: "Geo·FIRE — libertà finanziaria, dati e geografia",
      client: "Progetto personale", place: "Web app interattiva · online", stack: "React · D3 · motore geografico · simulazioni finanziarie",
      role: "Ideazione, design, sviluppo e verifica", intro: "Un mappamondo interattivo per esplorare come la libertà finanziaria cambia fra paesi e modelli FIRE.",
      cardText: "Un globo interattivo con 175 paesi e tre modelli di libertà finanziaria.", facts: ["175 paesi", "3 modelli FIRE", "34.560 test"], appLinkLabel: "Prova l’app →",
      sections: [
        { h: "Una domanda resa esplorabile", body: "L’idea era capire in quali paesi un patrimonio rende già finanziariamente liberi e quanto manca negli altri.", image: "/projects/geofire/app.jpg", mediaLabel: "Globo · paesi" },
        { h: "Prima i calcoli, poi l’interfaccia", body: "Le formule e i modelli FIRE, Coast e Barista sono stati verificati contro simulazioni mese per mese: l’interfaccia visualizza un motore già controllato.", image: "/projects/geofire/cover.png", mediaLabel: "Modelli · simulazioni" },
        { h: "Costruire per il browser reale", body: "Confini, ricerca, confronto, temi e bandiere dovevano funzionare su dispositivi diversi. Le bandiere sono state disegnate nel progetto per evitare incompatibilità.", image: "/projects/geofire/app.jpg", mediaLabel: "Compatibilità · UI" },
        { h: "Il metodo è parte del risultato", body: "Scomporre il problema, verificare i numeri, iterare via screenshot e rifinire manualmente l’ultimo tratto dell’esperienza.", image: "/projects/geofire/cover.png", mediaLabel: "Metodo · iterazione" },
      ], results: ["175 paesi con confini reali", "FIRE, Coast e Barista", "34.560 combinazioni verificate", "Ricerca e confronto paesi", "Desktop e mobile", "App online sul proprio dominio"],
    },
    en: {
      tag: "Product · Data visualisation", shortTitle: "Geo·FIRE", title: "Geo·FIRE — financial freedom through data and geography",
      client: "Own project", place: "Interactive web app · online", stack: "React · D3 · geographic engine · financial simulations",
      role: "Concept, design, development and verification", intro: "An interactive globe exploring how financial freedom changes across countries and FIRE models.",
      cardText: "An interactive globe with 175 countries and three financial-freedom models.", facts: ["175 countries", "3 FIRE models", "34,560 tests"], appLinkLabel: "Try the app →",
      sections: [
        { h: "A question made explorable", body: "The idea was to understand where a portfolio already enables financial freedom and how long it takes elsewhere.", image: "/projects/geofire/app.jpg", mediaLabel: "Globe · countries" },
        { h: "Calculations before interface", body: "Formulas and FIRE, Coast and Barista models were checked against month-by-month simulations.", image: "/projects/geofire/cover.png", mediaLabel: "Models · simulations" },
        { h: "Built for real browsers", body: "Borders, search, comparison, themes and flags had to work across devices. Flags were drawn to avoid incompatibility.", image: "/projects/geofire/app.jpg", mediaLabel: "Compatibility · UI" },
        { h: "Method is part of the result", body: "Decompose the problem, verify the numbers, iterate through screenshots and refine the final experience manually.", image: "/projects/geofire/cover.png", mediaLabel: "Method · iteration" },
      ], results: ["175 countries with real borders", "FIRE, Coast and Barista", "34,560 verified combinations", "Country search and comparison", "Desktop and mobile", "Live on its own domain"],
    },
  },
  {
    slug: "palestra-white-label", category: "solutions", status: "done", imageSrc: "/projects/palestra/cover.webp",
    it: {
      tag: "White-label · Palestre", shortTitle: "Landing per palestre", title: "Una landing che parte dal bisogno reale",
      client: "Caso anonimizzato e replicabile", place: "Soluzione mobile-first", stack: "HTML · CSS · JavaScript · Netlify",
      role: "Strategia, copy, design e prototipo", intro: "Una base white-label per corsi, prove e acquisizione locale, nata da un caso reale e adattabile ad altre palestre.",
      cardText: "Struttura mobile-first adattabile a corsi, prove e acquisizione locale.", facts: ["Mobile-first", "White-label", "CTA locale"],
      sections: [
        { h: "Una proposta nata da un contesto reale", body: "La prima versione è stata progettata per una piccola palestra. Prima della presentazione è emerso che, con spazi già pieni, non serviva aumentare le richieste: un limite utile, non un fallimento da nascondere.", image: "/projects/palestra/cover.webp", mediaLabel: "Spazio · contesto" },
        { h: "Separare il bisogno dalla singola attività", body: "La struttura è stata anonimizzata e resa white-label. Il caso non promette risultati mai misurati: mostra una base concreta per palestre che hanno davvero bisogno di acquisizione.", image: "/projects/palestra/courses.webp", mediaLabel: "Corsi · proposta" },
        { h: "Una pagina costruita per il contatto", body: "Gerarchia, prova, corsi, fiducia locale e call to action portano dalla prima visita a una richiesta semplice, soprattutto da smartphone.", image: "/projects/palestra/cover.webp", mediaLabel: "Mobile · conversione" },
      ], results: ["Caso anonimizzato", "Struttura white-label", "Design mobile-first", "Contenuti orientati alla prova", "CTA locale", "Pronta per adattamento"],
    },
    en: {
      tag: "White-label · Gyms", shortTitle: "Gym landing page", title: "A landing page built from a real need",
      client: "Anonymised reusable case", place: "Mobile-first solution", stack: "HTML · CSS · JavaScript · Netlify",
      role: "Strategy, copy, design and prototype", intro: "A white-label base for courses, trials and local acquisition, born from a real case.",
      cardText: "A mobile-first structure for courses, trials and local lead generation.", facts: ["Mobile-first", "White-label", "Local CTA"],
      sections: [
        { h: "A proposal born from a real context", body: "The first version was designed for a small gym. A full, limited space did not need more enquiries: a useful constraint, not a failure to hide.", image: "/projects/palestra/cover.webp", mediaLabel: "Space · context" },
        { h: "Separate the need from one business", body: "The structure was anonymised and made white-label. It shows a concrete base for gyms that genuinely need acquisition.", image: "/projects/palestra/courses.webp", mediaLabel: "Courses · offer" },
        { h: "A page built for contact", body: "Hierarchy, trial, courses, local trust and calls to action move visitors towards a simple enquiry, especially on mobile.", image: "/projects/palestra/cover.webp", mediaLabel: "Mobile · conversion" },
      ], results: ["Anonymised case", "White-label structure", "Mobile-first design", "Trial-oriented content", "Local CTA", "Ready to adapt"],
    },
  },
  {
    slug: "dentista-automazione", category: "solutions", status: "progress", imageSrc: "/projects/dentista/cover.svg",
    it: {
      tag: "Automazione · Work in progress", shortTitle: "Studio dentistico", title: "Promemoria WhatsApp per uno studio dentistico",
      client: "Studio dentistico · caso anonimizzato", place: "In costruzione e validazione", stack: "Workflow automation · WhatsApp · regole e controlli",
      role: "Analisi, progettazione del flusso e sviluppo", intro: "Un’automazione per rendere tracciabile il percorso fra appuntamento, promemoria e conferma.",
      cardText: "Un flusso operativo in costruzione e validazione sul campo.", facts: ["Flusso anonimo", "Controlli", "WIP dichiarato"],
      sections: [
        { h: "Partire dai dati che esistono davvero", body: "Il lavoro parte dal modo in cui lo studio registra gli appuntamenti e dalle informazioni necessarie. Il caso pubblico non mostra nomi, numeri o dati sanitari.", image: "/projects/dentista/cover.svg", mediaLabel: "Appuntamento · input" },
        { h: "Tradurre il lavoro in regole", body: "Tempi, eccezioni, consensi e casi incompleti diventano un flusso leggibile. L’automazione deve sapere anche quando fermarsi e chiedere controllo umano.", image: "/projects/dentista/flow.svg", mediaLabel: "Regole · verifica" },
        { h: "Validare prima di chiamarlo risultato", body: "Il progetto è ancora in costruzione. Tempi risparmiati e riduzione delle assenze verranno aggiunti soltanto dopo una verifica sul campo.", image: "/projects/dentista/cover.svg", mediaLabel: "WIP · validazione" },
      ], results: ["Processo mappato", "Dati pubblici anonimi", "Regole ed eccezioni esplicite", "Controllo umano previsto", "WIP dichiarato", "Risultati da misurare"],
    },
    en: {
      tag: "Automation · Work in progress", shortTitle: "Dental practice", title: "WhatsApp reminders for a dental practice",
      client: "Dental practice · anonymised case", place: "In development and validation", stack: "Workflow automation · WhatsApp · rules and checks",
      role: "Analysis, workflow design and development", intro: "An automation making the path from appointment to reminder and confirmation traceable.",
      cardText: "An operational flow under construction and field validation.", facts: ["Anonymous flow", "Checks", "WIP declared"],
      sections: [
        { h: "Start from real data", body: "The work begins with how appointments are recorded and the minimum required data. The public case never shows names, numbers or health information.", image: "/projects/dentista/cover.svg", mediaLabel: "Appointment · input" },
        { h: "Turn work into rules", body: "Timing, exceptions, consent and incomplete cases become a readable flow. Automation must know when to request human review.", image: "/projects/dentista/flow.svg", mediaLabel: "Rules · checks" },
        { h: "Validate before claiming results", body: "The project is still being built. Saved time and reduced no-shows will be added only after field verification.", image: "/projects/dentista/cover.svg", mediaLabel: "WIP · validation" },
      ], results: ["Process mapped", "Public data anonymised", "Rules and exceptions explicit", "Human review included", "WIP declared", "Results to measure"],
    },
  },
  {
    slug: "maybes-shop", category: "solutions", status: "done", imageSrc: "/projects/maybes/flow.svg",
    it: {
      tag: "Automazione · Esperimento concluso", shortTitle: "Maybe’s Shop", title: "Maybe’s Shop — il negozio era il test, il prodotto era il flusso",
      client: "Progetto sperimentale", place: "Shopify · Printful · Gelato", stack: "Shopify · print-on-demand · tracking ordini",
      role: "Brand, store, integrazioni e test end-to-end", intro: "Un esperimento su ordine, produzione e spedizione senza magazzino o interventi manuali.",
      cardText: "Ordine, produzione, spedizione e tracking senza magazzino.", facts: ["2 fornitori", "Zero magazzino", "Test conclusi"],
      sections: [
        { h: "Il negozio come banco di prova", body: "L’obiettivo non era soltanto vendere una maglietta, ma capire se più servizi potessero lavorare insieme senza trasformare l’e-commerce in un secondo lavoro manuale.", image: "/projects/maybes/cover.jpg", mediaLabel: "Store · brand" },
        { h: "Dall’ordine alla produzione", body: "Shopify riceveva l’ordine e lo passava ai servizi print-on-demand. Printful e Gelato sono stati provati su prodotti diversi per verificare il ciclo completo.", image: "/projects/maybes/flow.svg", mediaLabel: "Ordine · produzione" },
        { h: "Un esperimento concluso consapevolmente", body: "I test sono stati completati. Lo shop è stato chiuso per non sostenere costi Shopify senza un’attività commerciale attiva. Il valore riutilizzabile è il processo.", image: "/projects/maybes/flow.svg", mediaLabel: "Chiusura · apprendimento" },
      ], results: ["Printful e Gelato testati", "Ciclo completo verificato", "Nessun magazzino", "Tracking al cliente", "Esperimento concluso", "Chiuso per evitare costi"],
    },
    en: {
      tag: "Automation · Completed experiment", shortTitle: "Maybe’s Shop", title: "Maybe’s Shop — the store was the test, the workflow the product",
      client: "Experimental project", place: "Shopify · Printful · Gelato", stack: "Shopify · print-on-demand · order tracking",
      role: "Brand, store, integrations and end-to-end testing", intro: "An experiment on order, production and shipping without stock or manual steps.",
      cardText: "Order, production, shipping and tracking without a warehouse.", facts: ["2 suppliers", "No warehouse", "Tests complete"],
      sections: [
        { h: "The store as test bench", body: "The goal was not just selling a shirt, but testing whether several services could work together without creating a second manual job.", image: "/projects/maybes/cover.jpg", mediaLabel: "Store · brand" },
        { h: "From order to production", body: "Shopify received the order and passed it to print-on-demand services. Printful and Gelato were tested across different products.", image: "/projects/maybes/flow.svg", mediaLabel: "Order · production" },
        { h: "A deliberately completed experiment", body: "Testing was completed. The shop was closed to avoid Shopify costs without an active business. The reusable value is the process.", image: "/projects/maybes/flow.svg", mediaLabel: "Closure · learning" },
      ], results: ["Printful and Gelato tested", "Full cycle verified", "No warehouse", "Tracking to customer", "Experiment completed", "Closed to avoid costs"],
    },
  },
  {
    slug: "mappa-ikigai", category: "lab", status: "idea", imageSrc: "/projects/ikigai/cover.svg",
    it: {
      tag: "Laboratorio · Prototipo", shortTitle: "Mappa Ikigai", title: "Mappa Ikigai — rendere visibile una conversazione",
      client: "Prototipo personale", place: "Esperimento 3D nel browser", stack: "HTML · CSS · JavaScript · visualizzazione 3D",
      role: "Concept, interazione e prototipo", intro: "Quattro cristalli per rendere visibili equilibrio, peso e connessioni mancanti durante una riflessione guidata.",
      cardText: "Quattro cristalli per visualizzare equilibrio e connessioni mancanti.", facts: ["4 dimensioni", "Prototipo 3D", "Ricerca aperta"],
      sections: [
        { h: "Non un questionario, ma una mappa", body: "Le risposte diventano una composizione visibile. I cristalli rappresentano ciò che ami, sai fare, serve al mondo e può essere pagato.", image: "/projects/ikigai/cover.svg", mediaLabel: "Quattro · cristalli" },
        { h: "Le distanze raccontano il disequilibrio", body: "Dimensione, posizione e connessioni rendono immediato ciò che in una lista resterebbe astratto.", image: "/projects/ikigai/cover.svg", mediaLabel: "Spazio · relazioni" },
        { h: "Un’idea dichiarata come tale", body: "Il prototipo esiste, ma non viene presentato come prodotto validato. Il prossimo passo è provarlo in conversazioni reali.", image: "/projects/ikigai/cover.svg", mediaLabel: "Idea · verifica" },
      ], results: ["Prototipo interattivo", "Quattro dimensioni", "Relazioni spaziali", "Nessuna validazione inventata", "Ricerca aperta", "Pronto per test guidati"],
    },
    en: {
      tag: "Lab · Prototype", shortTitle: "Ikigai Map", title: "Ikigai Map — making a conversation visible",
      client: "Personal prototype", place: "3D browser experiment", stack: "HTML · CSS · JavaScript · 3D visualisation",
      role: "Concept, interaction and prototype", intro: "Four crystals make balance, weight and missing connections visible during guided reflection.",
      cardText: "Four crystals for visualising balance and missing connections.", facts: ["4 dimensions", "3D prototype", "Open research"],
      sections: [
        { h: "Not a questionnaire, but a map", body: "Answers become a visible composition. Crystals represent what you love, do well, the world needs and can be paid for.", image: "/projects/ikigai/cover.svg", mediaLabel: "Four · crystals" },
        { h: "Distances reveal imbalance", body: "Size, position and connections make visible what would remain abstract in a list.", image: "/projects/ikigai/cover.svg", mediaLabel: "Space · relations" },
        { h: "An idea presented honestly", body: "The prototype exists, but is not presented as a validated product. The next step is testing it in real conversations.", image: "/projects/ikigai/cover.svg", mediaLabel: "Idea · testing" },
      ], results: ["Interactive prototype", "Four dimensions", "Spatial relations", "No invented validation", "Open research", "Ready for guided tests"],
    },
  },
];

export function getCaseStudy(slug) { return caseStudies.find((project) => project.slug === slug); }
export function localizeCaseStudy(project, lang = "it") {
  if (!project) return null;
  const locale = project[lang] || project.it;
  const { it, en, ...shared } = project;
  return { ...shared, ...locale };
}
export function getStatus(project, lang = "it") {
  const status = statusConfig[project.status] || statusConfig.idea;
  return { ...status, label: status[lang] || status.it };
}
