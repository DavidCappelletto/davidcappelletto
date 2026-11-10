export const colors = {
  navy: "#14253C", navyDeep: "#0B1727", teal: "#229C8F", tealLight: "#B8EEE4",
  tealText: "#1E7E73", bg: "#F4F6F3", ink: "#142033", inkMuted: "#607084", line: "#D8DFDF",
};

export const statusConfig = {
  online: { color: "#28A978", progress: 100, it: "Online", en: "Online" },
  done: { color: "#397BD8", progress: 100, it: "Concluso", en: "Completed" },
  progress: { color: "#EFB652", progress: 64, it: "In costruzione", en: "In progress" },
  preview: { color: "#2BA89A", progress: 90, it: "In anteprima", en: "In preview" },
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
      title: "DIAMA Service: dal sistema progettuale al sito in produzione",
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
        { h: "Da smartphone, prima di tutto", body: "Buona parte delle richieste arriva dal telefono. Menu compatto, preventivo sempre in vista e WhatsApp a un tocco: il percorso verso il contatto resta corto anche su schermi piccoli.", image: "/projects/diama/mobile.webp", mediaLabel: "Mobile · contatto" },
      ],
      results: ["Circa 30 pagine responsive", "CMS realmente utilizzato", "Blog e landing replicabili", "SEO tecnico e redirect", "Tracking e consenso", "Deploy e migrazione Netlify"],
    },
    en: {
      tag: "Client · Web development", shortTitle: "DIAMA Service",
      title: "DIAMA Service: from design system to production website", client: "DIAMA Service",
      place: "Turin · with Stefania Bertone and Lara Bragagna", stack: "HTML · CSS · JavaScript · Decap CMS · Netlify · GA4/GTM",
      role: "Prototype, development, CMS, tracking and launch", intro: "Turning a complete Figma system into a real website: responsive, editable and measurable.",
      cardText: "A multi-page web ecosystem with CMS, landing pages, technical SEO and tracking.", facts: ["About 30 pages", "CMS and landing pages", "SEO and tracking"],
      sections: [
        { h: "A new identity needed a matching digital system", body: "DIAMA was growing through new services, a new office and redesigned communication. My role was to turn strategy, UX and UI into a site supporting content, campaigns and sales.", image: "/projects/diama/cover.png", mediaLabel: "Identity · context" },
        { h: "From prototype to production", body: "I built a working prototype, reviewed it live over video calls and adjusted navigation, responsive behaviour and hierarchy before developing the multi-page system.", image: "/projects/diama/prototype.png", mediaLabel: "Wireframe · prototype" },
        { h: "Static, but genuinely editable", body: "Decap CMS lets the team publish articles and create campaign landing pages while dedicated generators keep the output static and secure.", image: "/projects/diama/cms-dashboard.png", mediaLabel: "Decap CMS · content" },
        { h: "Connected to the business", body: "Forms, WhatsApp, Search Console, GTM, GA4 and Meta Pixel connect communication, contacts and campaigns.", image: "/projects/diama/tracking.svg", mediaLabel: "Tracking · architecture" },
        { h: "Mobile first, for real", body: "Many enquiries come from phones. Compact menu, quote button always visible and WhatsApp one tap away: the path to contact stays short on small screens.", image: "/projects/diama/mobile.webp", mediaLabel: "Mobile · contact" },
      ], results: ["About 30 responsive pages", "CMS used by the team", "Reusable blog and landing pages", "Technical SEO and redirects", "Tracking and consent", "Netlify deploy and migration"],
    },
  },
  {
    slug: "infermiera-althea", category: "featured", status: "preview", featured: true,
    imageSrc: "/projects/althea/cover.webp",
    it: {
      tag: "Cliente · Sito professionale", shortTitle: "Infermiera Althea",
      title: "Infermiera Althea: il sito di un’infermiera a domicilio, rifatto da zero",
      client: "Dott.ssa Althea Vignando · infermiera libera professionista", place: "Provincia di Pordenone",
      stack: "Astro · TypeScript · Tailwind · Netlify Forms",
      role: "Struttura, testi, design, sviluppo e SEO locale",
      intro: "Dal vecchio sito Wix a un sito veloce e chiaro: chi cerca assistenza a domicilio capisce subito cosa trova e come prenotare, anche da smartphone.",
      cardText: "Sito professionale per un’infermiera a domicilio: servizi chiari, contatto rapido, testi a norma.",
      facts: ["12 pagine", "Form e WhatsApp", "Testi a norma"],
      sections: [
        { h: "Chi cerca, spesso cerca per un familiare", body: "La home dice subito chi è Althea, cosa fa e dove lavora. Due pulsanti: prenotare o vedere i servizi. Nessun passaggio in più.", image: "/projects/althea/cover.webp", mediaLabel: "Home · primo impatto" },
        { h: "Ogni prestazione ha la sua pagina", body: "Cosa comprende il servizio e come si organizza l’appuntamento, senza gergo. I testi rispettano le regole sulla pubblicità sanitaria.", image: "/projects/althea/servizi.webp", mediaLabel: "Servizi · contenuti" },
        { h: "Pensato per il telefono", body: "WhatsApp sempre a portata di dito, form gestiti da Netlify, pagine statiche che si aprono subito. I comuni serviti sono in pagina per la ricerca locale.", image: "/projects/althea/mobile.webp", mediaLabel: "Mobile · contatto" },
      ],
      results: ["12 pagine statiche in Astro", "Form Netlify e WhatsApp", "Comuni serviti per la SEO locale", "Testi a norma per la pubblicità sanitaria", "Pensato per smartphone", "In anteprima, in attesa del dominio"],
    },
    en: {
      tag: "Client · Professional website", shortTitle: "Infermiera Althea",
      title: "Infermiera Althea: a home-care nurse’s website, rebuilt from scratch",
      client: "Althea Vignando · freelance nurse", place: "Province of Pordenone",
      stack: "Astro · TypeScript · Tailwind · Netlify Forms",
      role: "Structure, copy, design, development and local SEO",
      intro: "From an old Wix site to a fast, clear one: people looking for home care see right away what is offered and how to book, even on a phone.",
      cardText: "Professional website for a home-care nurse: clear services, quick contact, compliant copy.",
      facts: ["12 pages", "Forms and WhatsApp", "Compliant copy"],
      sections: [
        { h: "People often search on behalf of a relative", body: "The home page says who Althea is, what she does and where. Two buttons: book or see the services. Nothing in between.", image: "/projects/althea/cover.webp", mediaLabel: "Home · first impression" },
        { h: "Every service has its own page", body: "What the service includes and how the visit is arranged, in plain words. Copy follows Italian rules on healthcare advertising.", image: "/projects/althea/servizi.webp", mediaLabel: "Services · content" },
        { h: "Built for the phone", body: "WhatsApp always within reach, Netlify forms, static pages that open instantly. Served towns are listed on the page for local search.", image: "/projects/althea/mobile.webp", mediaLabel: "Mobile · contact" },
      ],
      results: ["12 static pages in Astro", "Netlify forms and WhatsApp", "Served towns for local SEO", "Copy compliant with healthcare advertising rules", "Built for smartphones", "In preview, waiting for the domain"],
    },
  },
  {
    slug: "dentista-automazione", category: "featured", status: "progress", featured: true, imageSrc: "/projects/dentista/cover.svg",
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
    slug: "forma-allenamento", category: "featured", status: "progress", featured: true,
    imageSrc: "/projects/forma-app/card.webp",
    it: {
      tag: "Prodotto · Prototipo in uso", shortTitle: "FORMA Allenamento",
      title: "FORMA Allenamento: la scheda della palestra, sul telefono",
      client: "Prodotto personale", place: "Web app mobile · usata in palestra",
      stack: "HTML · CSS · JavaScript · PWA · Netlify",
      role: "Ideazione, UX, design e sviluppo",
      intro: "Nata per allenarsi senza la fotocopia della scheda in mano: circuiti, esercizi illustrati e calendario in un’app che si usa dal telefono, senza account.",
      cardText: "Web app di allenamento: circuiti guidati, 60 esercizi illustrati, calendario e progressi.",
      facts: ["60 esercizi", "Circuiti guidati", "Nessun account"],
      sections: [
        { h: "Dalla fotocopia al telefono", body: "La scheda cartacea diventa un percorso: cardio, mobilità e circuiti di forza nell’ordine giusto. Si sceglie il circuito del giorno e si parte.", image: "/projects/forma-app/oggi.webp", mediaLabel: "Allenamento di oggi" },
        { h: "Un archivio di esercizi che si usa davvero", body: "60 esercizi illustrati, con filtri per colore della scheda, muscolo e attrezzo. Le varianti non ancora verificate sono segnalate come tali.", image: "/projects/forma-app/esercizi.webp", mediaLabel: "Archivio · filtri" },
        { h: "Si adatta durante l’allenamento", body: "Circuiti consecutivi o alternativi, esercizi sostituibili al primo giro, sessioni salvate nel calendario. I dati restano sul telefono.", image: "/projects/forma-app/sessione.webp", mediaLabel: "Sessione · scelte" },
      ],
      results: ["60 esercizi illustrati", "Filtri per scheda, muscolo e attrezzo", "Circuiti consecutivi o alternativi", "Calendario e storico sessioni", "Si installa come app dal telefono", "Nessun account, dati in locale"],
    },
    en: {
      tag: "Product · Prototype in use", shortTitle: "FORMA Training",
      title: "FORMA Training: the gym workout sheet, on your phone",
      client: "Personal product", place: "Mobile web app · used at the gym",
      stack: "HTML · CSS · JavaScript · PWA · Netlify",
      role: "Concept, UX, design and development",
      intro: "Built to train without carrying a printed workout sheet: circuits, illustrated exercises and a calendar in an app you use from your phone, no account needed.",
      cardText: "Training web app: guided circuits, 60 illustrated exercises, calendar and progress.",
      facts: ["60 exercises", "Guided circuits", "No account"],
      sections: [
        { h: "From paper sheet to phone", body: "The paper sheet becomes a path: cardio, mobility and strength circuits in the right order. Pick today’s circuit and start.", image: "/projects/forma-app/oggi.webp", mediaLabel: "Today’s workout" },
        { h: "An exercise library people actually use", body: "60 illustrated exercises, filtered by sheet colour, muscle and equipment. Variants not yet verified are flagged as such.", image: "/projects/forma-app/esercizi.webp", mediaLabel: "Library · filters" },
        { h: "It adapts while you train", body: "Consecutive or alternating circuits, exercises you can swap on the first round, sessions saved to the calendar. Data stays on the phone.", image: "/projects/forma-app/sessione.webp", mediaLabel: "Session · choices" },
      ],
      results: ["60 illustrated exercises", "Filters by sheet, muscle and equipment", "Consecutive or alternating circuits", "Calendar and session history", "Installs as an app on the phone", "No account, local data"],
    },
  },
  {
    slug: "forma", category: "lab", status: "progress",
    imageSrc: "/projects/forma/card.webp",
    it: {
      tag: "Prodotto · Pre-beta", shortTitle: "FORMA Gyms", title: "FORMA Gyms: dall’allenamento guidato a un mondo fitness-game",
      client: "Prodotto personale", place: "Concept interattivo · preregistrazione pre-beta",
      stack: "Landing autonoma · micro-demo · Netlify Forms", role: "Ideazione, product design, direzione visiva e sviluppo",
      intro: "Nata da un’esigenza concreta in palestra, FORMA si è evoluta in un concept fitness-game dove palestre, progressi e compagni diventano un mondo da esplorare.",
      cardText: "Un fitness-game pre-beta con arene, compagni evolutivi e una micro-demo narrativa.", facts: ["6 famiglie di arene", "3 compagni · 4 stadi", "Micro-demo pre-beta"],
      sections: [
        { h: "Dalla scheda a un mondo fitness-game", body: "Il punto di partenza era semplice: allenarsi senza una fotocopia in mano. Il progetto ha poi cambiato scala, trasformando palestra, missioni e progressi in un territorio da conquistare.", image: "/projects/forma/v32-hero.png", mediaLabel: "V32 · visione" },
        { h: "Mostrare la promessa senza fingere che sia già il prodotto", body: "Il distretto Hero e le sei famiglie di arene rendono leggibile la direzione artistica. La micro-demo racconta il ciclo previsto, mentre il prototipo tecnico resta dichiaratamente separato.", image: "/projects/forma/v32-world.png", mediaLabel: "Arene · sistema visivo" },
        { h: "Il progresso diventa visibile", body: "Bruk, Zik e Nex hanno ruoli e personalità diverse. Quattro stadi evolutivi trasformano badge e traguardi in un cambiamento visivo immediato, non solo in un numero.", image: "/projects/forma/v32-companions.png", mediaLabel: "Compagni · evoluzione" },
        { h: "Validare l’interesse prima della beta", body: "La landing chiarisce cosa esiste oggi, cosa è ancora concept e cosa verrà testato. La preregistrazione è predisposta per misurare l’interesse reale prima di investire nella beta pubblica.", image: "/projects/forma/v32-preregistration.png", mediaLabel: "Pre-beta · validazione" },
        { h: "Pensata per chi è in palestra", body: "La landing nasce per il telefono: titolo e preregistrazione nel primo schermo, poi il ciclo di gioco spiegato a passi brevi.", image: "/projects/forma/mobile.webp", mediaLabel: "Mobile · landing" },
      ], results: ["6 famiglie visive di arene", "3 compagni e 4 stadi evolutivi", "Micro-demo narrativa del distretto Hero", "Landing pre-beta autonoma", "Preregistrazione predisposta con Netlify Forms", "Prototipo tecnico mantenuto separato"],
    },
    en: {
      tag: "Product · Pre-beta", shortTitle: "FORMA Gyms", title: "FORMA Gyms: from guided training to a fitness-game world",
      client: "Own product", place: "Interactive concept · pre-beta registration", stack: "Standalone landing · micro-demo · Netlify Forms",
      role: "Concept, product design, visual direction and development", intro: "Born from a real gym need, FORMA evolved into a fitness-game concept where gyms, progress and companions become a world to explore.",
      cardText: "A pre-beta fitness game with arenas, evolving companions and a narrative micro-demo.", facts: ["6 arena families", "3 companions · 4 stages", "Pre-beta micro-demo"],
      sections: [
        { h: "From training sheet to fitness-game world", body: "The starting point was simple: training without carrying a photocopy. The project then expanded, turning gyms, missions and progress into a territory to conquer.", image: "/projects/forma/v32-hero.png", mediaLabel: "V32 · vision" },
        { h: "Showing the promise without pretending it is finished", body: "Hero District and six arena families make the visual direction tangible. The micro-demo explains the intended loop, while the technical prototype remains explicitly separate.", image: "/projects/forma/v32-world.png", mediaLabel: "Arenas · visual system" },
        { h: "Progress becomes visible", body: "Bruk, Zik and Nex have different roles and personalities. Four evolution stages turn badges and goals into an immediate visual change, not just a number.", image: "/projects/forma/v32-companions.png", mediaLabel: "Companions · evolution" },
        { h: "Validating interest before beta", body: "The landing page clarifies what exists today, what remains a concept and what will be tested. Registration is prepared to measure real interest before investing in a public beta.", image: "/projects/forma/v32-preregistration.png", mediaLabel: "Pre-beta · validation" },
        { h: "Built for people at the gym", body: "The landing page is designed for phones: headline and registration on the first screen, then the game loop in short steps.", image: "/projects/forma/mobile.webp", mediaLabel: "Mobile · landing" },
      ], results: ["6 visual arena families", "3 companions and 4 evolution stages", "Hero District narrative micro-demo", "Standalone pre-beta landing", "Registration prepared with Netlify Forms", "Technical prototype kept separate"],
    },
  },
  {
    slug: "geofire", category: "lab", status: "online",
    imageSrc: "/projects/geofire/app.webp", appLink: "https://geofire.davidcappelletto.it",
    it: {
      tag: "Prodotto · Dati e visualizzazione", shortTitle: "Geo·FIRE", title: "Geo·FIRE: libertà finanziaria, dati e geografia",
      client: "Progetto personale", place: "Web app interattiva · online", stack: "React · D3 · motore geografico · simulazioni finanziarie",
      role: "Ideazione, design, sviluppo e verifica", intro: "Un mappamondo interattivo per esplorare come la libertà finanziaria cambia fra paesi e modelli FIRE.",
      cardText: "Un globo interattivo con 175 paesi e tre modelli di libertà finanziaria.", facts: ["175 paesi", "3 modelli FIRE", "34.560 test"], appLinkLabel: "Prova l’app →",
      sections: [
        { h: "Una domanda resa esplorabile", body: "L’idea era capire in quali paesi un patrimonio rende già finanziariamente liberi e quanto manca negli altri.", image: "/projects/geofire/app.webp", mediaLabel: "Globo · paesi" },
        { h: "Prima i calcoli, poi l’interfaccia", body: "Le formule e i modelli FIRE, Coast e Barista sono stati verificati contro simulazioni mese per mese: l’interfaccia visualizza un motore già controllato.", image: "/projects/geofire/calcoli.webp", mediaLabel: "Modelli · simulazioni" },
        { h: "Costruire per il browser reale", body: "Confini, ricerca, confronto, temi e bandiere dovevano funzionare su dispositivi diversi. Le bandiere sono state disegnate nel progetto per evitare incompatibilità.", image: "/projects/geofire/chiaro.webp", mediaLabel: "Compatibilità · UI" },
        { h: "Il metodo è parte del risultato", body: "Scomporre il problema, verificare i numeri, iterare via screenshot e rifinire manualmente l’ultimo tratto dell’esperienza.", image: "/projects/geofire/globo.webp", mediaLabel: "Metodo · iterazione" },
        { h: "Il globo in tasca", body: "Su telefono il globo si ruota col dito e si ingrandisce col pizzico. Scheda del paese, grafico e numeri si leggono senza zoom e senza scroll orizzontale.", image: "/projects/geofire/mobile.webp", mediaLabel: "Mobile · globo" },
      ], results: ["175 paesi con confini reali", "FIRE, Coast e Barista", "34.560 combinazioni verificate", "Ricerca e confronto paesi", "Desktop e mobile", "App online sul proprio dominio"],
    },
    en: {
      tag: "Product · Data visualisation", shortTitle: "Geo·FIRE", title: "Geo·FIRE: financial freedom through data and geography",
      client: "Own project", place: "Interactive web app · online", stack: "React · D3 · geographic engine · financial simulations",
      role: "Concept, design, development and verification", intro: "An interactive globe exploring how financial freedom changes across countries and FIRE models.",
      cardText: "An interactive globe with 175 countries and three financial-freedom models.", facts: ["175 countries", "3 FIRE models", "34,560 tests"], appLinkLabel: "Try the app →",
      sections: [
        { h: "A question made explorable", body: "The idea was to understand where a portfolio already enables financial freedom and how long it takes elsewhere.", image: "/projects/geofire/app.webp", mediaLabel: "Globe · countries" },
        { h: "Calculations before interface", body: "Formulas and FIRE, Coast and Barista models were checked against month-by-month simulations.", image: "/projects/geofire/calcoli.webp", mediaLabel: "Models · simulations" },
        { h: "Built for real browsers", body: "Borders, search, comparison, themes and flags had to work across devices. Flags were drawn to avoid incompatibility.", image: "/projects/geofire/chiaro.webp", mediaLabel: "Compatibility · UI" },
        { h: "Method is part of the result", body: "Decompose the problem, verify the numbers, iterate through screenshots and refine the final experience manually.", image: "/projects/geofire/globo.webp", mediaLabel: "Method · iteration" },
        { h: "The globe in your pocket", body: "On phones the globe rotates with a finger and zooms with a pinch. Country card, chart and numbers stay readable with no zoom and no horizontal scroll.", image: "/projects/geofire/mobile.webp", mediaLabel: "Mobile · globe" },
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
        { h: "Il contatto sempre a portata di pollice", body: "Corsi in schede leggibili, ognuna con la sua richiesta di informazioni. In basso restano fissi Chiamaci e Richiedi info.", image: "/projects/palestra/mobile.webp", mediaLabel: "Mobile · corsi" },
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
        { h: "Contact always within thumb reach", body: "Courses in readable cards, each with its own enquiry button. Call and Request info stay fixed at the bottom.", image: "/projects/palestra/mobile.webp", mediaLabel: "Mobile · courses" },
      ], results: ["Anonymised case", "White-label structure", "Mobile-first design", "Trial-oriented content", "Local CTA", "Ready to adapt"],
    },
  },
  {
    slug: "maybes-shop", category: "solutions", status: "done", imageSrc: "/projects/maybes/flow.svg",
    it: {
      tag: "Automazione · Esperimento concluso", shortTitle: "Maybe’s Shop", title: "Maybe’s Shop: il negozio era il test, il prodotto era il flusso",
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
      tag: "Automation · Completed experiment", shortTitle: "Maybe’s Shop", title: "Maybe’s Shop: the store was the test, the workflow the product",
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
    slug: "mappa-ikigai", category: "lab", status: "progress", imageSrc: "/projects/ikigai/cover.webp", link: "/ikigai",
    it: {
      tag: "Prodotto · Aperta a tutti", shortTitle: "Mappa Ikigai", title: "Mappa Ikigai: una conversazione che diventa una mappa",
      client: "Prodotto personale", place: "Percorso aperto a tutti · chat a inviti",
      stack: "HTML · JavaScript · three.js · LLM · Netlify Forms", role: "Ideazione, UX, direzione visiva, mascotte e sviluppo",
      intro: "Un test ikigai in forma di chat: Iki fa otto domande, le risposte accendono quattro cristalli 3D e ciò che resta staccato diventa una missione concreta.",
      cardText: "Otto domande in chat, quattro cristalli 3D e missioni per colmare ciò che manca.", facts: ["8 domande in chat", "4 cristalli 3D", "Missioni con Iki"],
      sections: [
        { h: "Non un questionario, ma una conversazione", body: "Iki, la mascotte, fa una domanda alla volta. Si risponde scegliendo tra le opzioni o con parole proprie: le risposte libere vengono interpretate da un modello linguistico.", image: "/projects/ikigai/chat.webp", mediaLabel: "Chat · Iki" },
        { h: "Quattro cristalli al posto dei quattro cerchi", body: "Passioni, talenti, lavoro e bisogni del mondo diventano cristalli sospesi in un vuoto cosmico. Quando sono allineati formano il cristallo centrale; un frammento staccato mostra subito cosa manca.", image: "/projects/ikigai/cristalli.webp", mediaLabel: "3D · equilibrio" },
        { h: "Dal vuoto all'azione", body: "Per ogni vuoto Iki propone una missione concreta. Missione dopo missione il cristallo si completa: la mappa non resta un risultato da guardare, diventa un percorso.", image: "/projects/ikigai/missione.webp", mediaLabel: "Missioni · percorso" },
        { h: "Aperta a tutti, chat a inviti", body: "Il percorso completo è aperto e non ha costi di gestione: domande, cristalli e missioni girano nel browser. La chat con Iki su un modello linguistico è a inviti, con un tetto d'uso per persona, e se il budget finisce l'app ripiega sui consigli già pronti.", image: "/projects/ikigai/completo.webp", mediaLabel: "Lancio · aperta a tutti" },
        { h: "Nato per il telefono", body: "Landing e prototipo sono progettati per lo smartphone: si inizia dal primo schermo, cristalli 3D e Iki che rispondono al tocco.", image: "/projects/ikigai/mobile.webp", mediaLabel: "Mobile · prototipo" },
      ], results: ["Prototipo interattivo funzionante", "Mascotte con quattro espressioni", "Cristalli 3D in three.js", "Risposte libere interpretate da LLM", "Landing con pre-registrazione", "Contenuti social con Sir Maybe e Iki"],
    },
    en: {
      tag: "Product · Open to all", shortTitle: "Ikigai Map", title: "Ikigai Map: a conversation that becomes a map",
      client: "Own product", place: "Path open to all · chat by invite",
      stack: "HTML · JavaScript · three.js · LLM · Netlify Forms", role: "Concept, UX, visual direction, mascot and development",
      intro: "An ikigai test shaped as a chat: Iki asks eight questions, the answers light up four 3D crystals and whatever stays detached becomes a concrete mission.",
      cardText: "Eight chat questions, four 3D crystals and missions to fill what is missing.", facts: ["8 chat questions", "4 3D crystals", "Missions with Iki"],
      sections: [
        { h: "Not a questionnaire, but a conversation", body: "Iki, the mascot, asks one question at a time. People answer by picking an option or in their own words; free answers are interpreted by a language model.", image: "/projects/ikigai/chat.webp", mediaLabel: "Chat · Iki" },
        { h: "Four crystals instead of four circles", body: "Passions, skills, work and the world's needs become crystals floating in a cosmic void. Aligned, they form the central crystal; a detached shard shows immediately what is missing.", image: "/projects/ikigai/cristalli.webp", mediaLabel: "3D · balance" },
        { h: "From gap to action", body: "For each gap Iki suggests a concrete mission. Mission after mission the crystal comes together: the map becomes a path, not just a result.", image: "/projects/ikigai/missione.webp", mediaLabel: "Missions · path" },
        { h: "Open to everyone, chat by invite", body: "The full path is open and costs nothing to run: questions, crystals and missions work in the browser. Chatting with Iki through a language model is invite-only, with a usage cap per person, and if the budget runs out the app falls back to ready-made advice.", image: "/projects/ikigai/completo.webp", mediaLabel: "Launch · open to all" },
        { h: "Made for the phone", body: "Landing page and prototype are designed for smartphones: the path starts from the first screen, 3D crystals and Iki responding to touch.", image: "/projects/ikigai/mobile.webp", mediaLabel: "Mobile · prototype" },
      ], results: ["Working interactive prototype", "Mascot with four expressions", "3D crystals in three.js", "Free answers interpreted by an LLM", "Pre-registration landing page", "Social content with Sir Maybe and Iki"],
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
