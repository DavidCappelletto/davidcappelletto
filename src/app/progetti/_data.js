export const colors = {
  navy: "#1C2E4A",
  navyDeep: "#111E30",
  teal: "#2BA89A",
  tealLight: "#3DBFB2",
  bg: "#F4F7FA",
  ink: "#111E30",
  inkMuted: "#4A5F78",
  line: "#D0DDE8",
};

export const caseStudies = [
  {
    slug: "azienda-hvac",
    imageSrc: "/case-studies/azienda-hvac.jpg",
    it: {
      tag: "Progetto Cliente · Impiantistica HVAC",
      title: "Un sito aziendale costruito a mano, con l'AI in bottega",
      client: "Azienda impiantistica HVAC · Nord Italia",
      place: "Nord Italia · via agenzia",
      stack: "HTML/CSS/JS statico · CMS headless (Decap) · Netlify · GA4 + GTM · Meta Pixel",
      role: "Tutto — dalla diagnosi al deploy",
      intro:
        "Un'azienda di impiantistica aveva bisogno di un sito. Facile, no? No. La prima cosa che ho fatto non è stata aprire l'editor: è stata capire cosa doveva fare quel sito. Chi lo avrebbe usato, chi lo avrebbe aggiornato, cosa doveva misurare.",
      sections: [
        {
          h: "Il problema, prima della soluzione",
          body: "Da quell'analisi è uscita una scelta controcorrente rispetto al riflesso standard \"WordPress e via\": **un sito statico**. Più veloce, più sicuro, senza manutenzione di plugin, senza sorprese. Il vincolo vero era un altro: il cliente doveva poter aggiornare i contenuti da solo, senza toccare codice. Quindi statico sì, ma con un CMS headless collegato via Git Gateway — l'editor semplice per loro, il pieno controllo del codice per me.",
        },
        {
          h: "Come ho lavorato",
          body: "Ho usato l'AI in ogni fase del progetto — e lo dichiaro, perché è il punto: **non come scorciatoia, ma come attrezzo da banco**. Struttura e codice scritti e revisionati con l'AI come pair, ma ogni decisione architetturale l'ho presa io. L'AI propone, io filtro. Quando propone una cosa fragile, si butta. Per il blog, invece di aggiungere complessità al CMS, ho scritto uno script Python che genera le pagine: un attrezzo su misura per un problema specifico. La migrazione DNS verso Netlify è stata gestita passo passo, con **downtime zero**. Il tracking — GA4, GTM, Meta Pixel — è stato ricostruito da zero, con cookie banner conforme GDPR. Perché un sito senza misurazione è un depliant costoso.",
        },
        {
          h: "Il risultato",
          body: "Un sito veloce, sicuro, misurabile, che il cliente aggiorna da solo. Consegnato con walkthrough del CMS e documentazione degli accessi — perché **un progetto finito è un progetto che il cliente sa usare senza di me**.",
        },
        {
          h: "Cosa dimostra",
          body: "Che \"usare l'AI\" non significa premere un bottone e sperare. Significa sapere cosa chiedere, riconoscere quando la risposta è sbagliata, e assemblare pezzi — generati, scritti a mano, adattati — in qualcosa che regge in produzione. Artigianato, con attrezzi nuovi.",
        },
      ],
      results: [
        "Sito statico: veloce, sicuro, zero manutenzione plugin",
        "CMS headless: il cliente aggiorna i contenuti in autonomia",
        "Script Python su misura per la generazione del blog",
        "Migrazione DNS senza downtime",
        "Stack tracking completo (GA4 + GTM + Meta Pixel) conforme GDPR",
        "Consegna con walkthrough e documentazione accessi",
      ],
    },
    en: {
      tag: "Client Project · HVAC Installations",
      title: "A company website built by hand, with AI on the workbench",
      client: "HVAC installation company · Northern Italy",
      place: "Northern Italy · via agency",
      stack: "Static HTML/CSS/JS · Headless CMS (Decap) · Netlify · GA4 + GTM · Meta Pixel",
      role: "Everything — from diagnosis to deploy",
      intro:
        "An HVAC company needed a website. Easy, right? No. The first thing I did wasn't opening an editor: it was understanding what that site had to do. Who would use it, who would update it, what it needed to measure.",
      sections: [
        {
          h: "The problem, before the solution",
          body: "That analysis led to a counterintuitive choice versus the default \"just use WordPress\" reflex: **a static site**. Faster, more secure, no plugin maintenance, fewer surprises. The real constraint was different: the client had to update content alone, without touching code. So static yes — but with a headless CMS wired through Git Gateway: a simple editor for them, full code control for me.",
        },
        {
          h: "How I worked",
          body: "I used AI in every phase — and I say so, because that's the point: **not as a shortcut, but as a bench tool**. Structure and code were written and reviewed with AI as a pair, but every architectural decision was mine. AI proposes, I filter. When it proposes something fragile, it gets thrown out. For the blog, instead of adding CMS complexity, I wrote a Python script that generates the pages: a custom tool for a specific problem. The DNS migration to Netlify was handled step by step, with **zero downtime**. Tracking — GA4, GTM, Meta Pixel — was rebuilt from scratch, with a GDPR-compliant cookie banner. Because a site without measurement is an expensive brochure.",
        },
        {
          h: "The result",
          body: "A fast, secure, measurable site the client updates alone. Delivered with a CMS walkthrough and access documentation — because **a finished project is one the client can use without me**.",
        },
        {
          h: "What it proves",
          body: "That \"using AI\" doesn't mean pressing a button and hoping. It means knowing what to ask, recognizing when the answer is wrong, and assembling pieces — generated, hand-written, adapted — into something that holds up in production. Craftsmanship, with new tools.",
        },
      ],
      results: [
        "Static site: fast, secure, zero plugin maintenance",
        "Headless CMS: the client updates content independently",
        "Custom Python script for blog generation",
        "DNS migration with zero downtime",
        "Full tracking stack (GA4 + GTM + Meta Pixel), GDPR compliant",
        "Delivered with walkthrough and access documentation",
      ],
    },
  },
  {
    slug: "geofire",
    imageSrc: "/case-studies/geofire.jpg",
    appLink: "https://geofire.davidcappelletto.it",
    it: {
      tag: "Progetto Personale · Metodo",
      title: "Geo·FIRE — un mappamondo finanziario come progetto di metodo",
      client: "Progetto proprio",
      place: "Web app 3D nel browser",
      appLinkLabel: "Prova l'app →",
      stack: "Web app 3D interattiva nel browser (React, canvas, motore geografico proprietario)",
      role: "Ideazione, design, sviluppo, iterazione",
      intro:
        "Geo·FIRE non nasce da un cliente. Nasce da una domanda: fino a dove posso arrivare, da solo, con gli strumenti che ho oggi?",
      sections: [
        {
          h: "Perché esiste",
          body: "L'idea di partenza era semplice: un mappamondo che ti dice in quali paesi del mondo sei già finanziariamente libero, e in quanti anni lo sarai altrove. Ma \"semplice\" è durato circa cinque minuti. Per farlo bene serviva un motore geografico 3D nel browser, una libreria di calcolo finanziario verificata (non un numero buttato lì), un sistema che reggesse tre definizioni diverse di libertà finanziaria, e — problema che non avevo previsto — bandiere che si vedessero anche su Windows, che le emoji-bandiera non le ha mai avute. Ognuno di questi pezzi, qualche anno fa, sarebbe stato un progetto a sé o una competenza verticale che non avevo. Oggi il punto non è più \"sai fare X\", ma **\"sai orchestrare gli strumenti per arrivare a X, e riconoscere quando X è sbagliato\"**. Geo·FIRE è la dimostrazione pratica di quella tesi, non la teoria.",
        },
        {
          h: "Il metodo, esposto",
          body: "Ho trattato Geo·FIRE come tratterei un progetto cliente, con una differenza: **qui il processo è il prodotto**. Prima il framing: cosa deve calcolare, con quali assunzioni, dove si ferma la responsabilità dello strumento (non è consulenza finanziaria, e lo dice chiaro). Poi la matematica, prima di qualsiasi interfaccia: le formule di accumulo, decumulo e le tre varianti FIRE — tradizionale, Coast, Barista — verificate non a occhio ma con **oltre 34.000 combinazioni di parametri estremi** confrontate contro simulazioni mese per mese. Un conto è che il numero \"sembri giusto\", un altro è dimostrarlo. Poi la costruzione a strati, ognuno con la sua crisi: il globo che gira fluido con 175 confini reali; il sistema di temi chiaro/scuro che a un certo punto ha rotto il grafico principale perché una variabile locale si chiamava come il tema stesso — bug mio, preso e sistemato, non nascosto; le bandiere, che dopo un giro di tentativi ho finito per disegnare io, forma per forma, perché era l'unico modo di garantirle ovunque, offline, senza dipendere da servizi esterni che potevano non rispondere. Infine il ciclo con cui l'ho rifinita: non un colpo solo, ma iterazioni via screenshot — \"qui è troppo fitto\", \"qui manca il respiro\", \"questo non si capisce\" — corrette una per una, verificate, ridistribuite. **L'ultimo tratto**, quello che rende uno strumento usabile invece che solo funzionante, resta lavoro manuale: nessuna AI decide da sola quanto gap mettere tra due elementi o se un colore comunica davvero \"sei già libero qui\".",
        },
        {
          h: "Il risultato",
          body: "Un mappamondo esplorabile con ricerca, confronto tra paesi, tre modalità di libertà finanziaria, dati modificabili da chi lo usa, e una card condivisibile per i social — tutto verificato, non solo \"che sembra funzionare\". Il progetto oggi vive sul suo dominio, con pipeline di analisi e una roadmap scritta per chi lo svilupperà oltre me. Ma il risultato che conta di più è replicabile altrove: un metodo per affrontare territori tecnici sconosciuti — geografia digitale, finanza personale, rendering — senza paralizzarsi, e senza smettere di controllare quello che si sta costruendo. **Che l'AI abbassa il costo di imparare, non il valore di capire: chi capisce cosa sta costruendo può usare l'AI per andare tre volte più veloce, chi non capisce va tre volte più veloce verso il muro.**",
        },
        {
          h: "Cosa dimostra",
          body: "Che orchestrare bene gli strumenti significa anche sapere quando smettere di fidarsi di un output e verificarlo da soli — coi numeri, non a sensazione. E che l'ultimo 20%, quello che separa \"funziona\" da \"è piacevole da usare\", resta un lavoro umano: tempo, occhio, gusto.",
        },
      ],
      results: [
        "App 3D interattiva funzionante nel browser, 175 paesi con confini reali",
        "Motore di calcolo finanziario verificato su oltre 34.000 combinazioni contro simulazioni reali",
        "Tre modelli di libertà finanziaria (tradizionale, Coast, Barista), non uno solo",
        "Bug propri trovati e corretti in corsa, non nascosti nel racconto",
        "Sistema bandiere disegnato da zero per garantire compatibilità universale",
        "Iterazione continua guidata da feedback reale, non da un'unica consegna",
        "Progetto predisposto per sviluppo futuro, non un one-shot chiuso in un cassetto",
      ],
    },
    en: {
      tag: "Personal Project · Method",
      title: "Geo·FIRE — a financial globe as a method project",
      client: "Own project",
      place: "3D web app in the browser",
      appLinkLabel: "Try the app →",
      stack: "Interactive 3D web app in the browser (React, canvas, proprietary geo engine)",
      role: "Concept, design, development, iteration",
      intro:
        "Geo·FIRE didn't come from a client. It came from a question: how far can I go, alone, with the tools I have today?",
      sections: [
        {
          h: "Why it exists",
          body: "The starting idea was simple: a globe that tells you in which countries you're already financially free, and in how many years you will be elsewhere. But \"simple\" lasted about five minutes. Doing it properly needed a 3D geographic engine in the browser, a verified financial calculation library (not a number thrown in), a system that could hold three different definitions of financial independence, and — a problem I hadn't expected — flags that also show up on Windows, which never had flag emoji. Each of those pieces, a few years ago, would have been a project on its own or a vertical skill I didn't have. Today the point is no longer \"can you do X\", but **\"can you orchestrate the tools to get to X, and recognize when X is wrong\"**. Geo·FIRE is the practical proof of that thesis, not the theory.",
        },
        {
          h: "The method, exposed",
          body: "I treated Geo·FIRE the way I would treat a client project, with one difference: **here the process is the product**. First the framing: what it must calculate, with which assumptions, where the tool's responsibility stops (it is not financial advice, and it says so clearly). Then the math, before any interface: accumulation and decumulation formulas and the three FIRE variants — traditional, Coast, Barista — verified not by eye but against **over 34,000 extreme parameter combinations** compared to month-by-month simulations. One thing is a number that \"looks right\"; another is proving it. Then building in layers, each with its own crisis: the globe spinning smoothly with 175 real borders; the light/dark theme system that at one point broke the main chart because a local variable shared the theme's name — my bug, caught and fixed, not hidden; the flags, which after several attempts I ended up drawing myself, shape by shape, because that was the only way to guarantee them everywhere, offline, without depending on external services that might not answer. Finally the refinement cycle: not one shot, but screenshot-driven iterations — \"too dense here\", \"no breathing room here\", \"this isn't clear\" — fixed one by one, checked, redistributed. **The last stretch**, what makes a tool usable rather than merely working, stays manual work: no AI alone decides how much gap to put between two elements or whether a color really communicates \"you're already free here\".",
        },
        {
          h: "The result",
          body: "An explorable globe with search, country comparison, three financial-independence modes, user-editable data, and a shareable social card — all verified, not just \"it seems to work\". The project now lives on its own domain, with an analytics pipeline and a roadmap written for whoever develops it beyond me. But the result that matters most is reusable elsewhere: a method for entering unknown technical territory — digital geography, personal finance, rendering — without freezing, and without stopping control of what you're building. **AI lowers the cost of learning, not the value of understanding: who understands what they're building can use AI to go three times faster; who doesn't understand goes three times faster into the wall.**",
        },
        {
          h: "What it proves",
          body: "That orchestrating tools well also means knowing when to stop trusting an output and verify it yourself — with numbers, not gut feeling. And that the last 20%, what separates \"it works\" from \"it's pleasant to use\", remains human work: time, eye, taste.",
        },
      ],
      results: [
        "Interactive 3D app running in the browser, 175 countries with real borders",
        "Financial calculation engine verified on over 34,000 combinations against real simulations",
        "Three financial-independence models (traditional, Coast, Barista), not just one",
        "Own bugs found and fixed along the way, not hidden in the story",
        "Flag system drawn from scratch for universal compatibility",
        "Continuous iteration driven by real feedback, not a single handoff",
        "Project set up for future development, not a one-shot left in a drawer",
      ],
    },
  },
  {
    slug: "infermiera-althea",
    imageSrc: "/case-studies/infermiera-althea.jpg",
    link: "https://www.infermiera-althea.com/",
    it: {
      tag: "Progetto Cliente · Settore Sanitario",
      title: "Althea — SEO locale senza budget pubblicitario",
      client: "Infermiera libera professionista · Pordenone e provincia",
      place: "📍 Pordenone e provincia",
      stack: "Wix · SEO locale · Content",
      role: "Design, sviluppo, SEO, manutenzione continuativa",
      intro:
        "Un'infermiera libera professionista ha un problema di visibilità molto concreto: quando qualcuno nella sua zona cerca \"infermiera a domicilio\", o la trova, o trova qualcun altro. Niente budget per campagne. Niente agenzia. Solo il sito.",
      sections: [
        {
          h: "Il problema",
          body: "Il progetto non era \"fare un sito carino\". Era: essere trovati organicamente, in locale, con **zero spesa pubblicitaria**.",
        },
        {
          h: "Le scelte",
          body: "Piattaforma pragmatica: Wix, non lo stack più \"cool\" — ma quello giusto per il contesto. Un sito che deve essere gestibile, stabile e manutenibile nel tempo, per una professionista che ha altro da fare che gestire un server. **L'attrezzo giusto è quello adatto al lavoro**, non quello che fa figo nel portfolio. Struttura pensata per la ricerca reale: contenuti organizzati intorno a come le persone cercano davvero i servizi infermieristici in zona — non intorno a come piaceva a noi organizzarli.",
        },
        {
          h: "Il progetto oggi",
          body: "Il sito ha raggiunto un posizionamento organico locale solido per le ricerche che contano — quelle che portano pazienti reali, non traffico decorativo. In questo periodo lo sto ricostruendo: più leggero, sezioni principali in homepage, blog separato. Ogni scelta del redesign è vincolata a un obiettivo: **non perdere il posizionamento costruito**. Il redesign più bello del mondo non vale la retrocessione in seconda pagina.",
        },
        {
          h: "Cosa dimostra",
          body: "Che la SEO locale per una micro-attività non richiede budget: **richiede diagnosi**. Capire come cerca il pubblico reale, costruire intorno a quello, e avere la disciplina di non rompere ciò che funziona quando arriva la voglia di rifare tutto.",
        },
      ],
      results: [
        "Posizionamento organico locale solido, senza spesa pubblicitaria",
        "Struttura costruita sulle ricerche reali del pubblico locale",
        "Piattaforma scelta per sostenibilità, non per moda",
        "Redesign in corso con vincolo esplicito: proteggere la SEO esistente",
        "Manutenzione continuativa, non solo consegna",
      ],
    },
    en: {
      tag: "Client Project · Healthcare",
      title: "Althea — local SEO with zero ad budget",
      client: "Independent nurse · Pordenone and surrounding area",
      place: "📍 Pordenone and surrounding area",
      stack: "Wix · Local SEO · Content",
      role: "Design, development, SEO, ongoing maintenance",
      intro:
        "An independent nurse has a very concrete visibility problem: when someone nearby searches for \"home nurse\", they either find her, or they find someone else. No campaign budget. No agency. Just the website.",
      sections: [
        {
          h: "The problem",
          body: "The project wasn't \"make a pretty site\". It was: get found organically, locally, with **zero advertising spend**.",
        },
        {
          h: "The choices",
          body: "A pragmatic platform: Wix — not the \"coolest\" stack, but the right one for the context. A site that has to be manageable, stable and maintainable over time, for a professional who has better things to do than run a server. **The right tool is the one that fits the job**, not the one that looks flashy in a portfolio. Structure built around real search behavior: content organized around how people actually look for nursing services nearby — not around how we preferred to arrange it.",
        },
        {
          h: "The project today",
          body: "The site reached solid local organic ranking for the searches that matter — the ones that bring real patients, not decorative traffic. I'm rebuilding it now: lighter, main sections on the homepage, separate blog. Every redesign choice is bound to one goal: **don't lose the ranking already built**. The world's prettiest redesign isn't worth dropping to page two.",
        },
        {
          h: "What it proves",
          body: "That local SEO for a micro-business doesn't require budget: **it requires diagnosis**. Understand how the real audience searches, build around that, and keep the discipline not to break what works when the urge to redo everything arrives.",
        },
      ],
      results: [
        "Solid local organic ranking, with no ad spend",
        "Structure built on the local audience's real searches",
        "Platform chosen for sustainability, not fashion",
        "Redesign in progress with an explicit constraint: protect existing SEO",
        "Ongoing maintenance, not just delivery",
      ],
    },
  },
  {
    slug: "maybes-shop",
    imageSrc: "/case-studies/maybes-shop.jpg",
    it: {
      tag: "Progetto Sperimentale · Infrastruttura",
      title: "Maybe's Shop — un e-commerce che si gestisce da solo",
      client: "Progetto proprio",
      place: "Shopify + print-on-demand",
      stack: "Shopify · Integrazione print-on-demand automatica",
      role: "Brand, design del negozio, infrastruttura tecnica",
      intro:
        "Volevo rispondere a una domanda pratica: si può costruire un negozio di magliette che funziona senza che nessuno lo tocchi? Non un mockup, non un \"quasi\": un sistema reale dove un cliente ordina, la maglietta viene stampata, spedita e consegnata — e io non muovo un dito.",
      sections: [
        {
          h: "Come l'ho costruito",
          body: "Due metà, entrambe fatte da me. Lo stile: brand, grafica del negozio, design delle magliette — la parte che si vede. L'infrastruttura: Shopify collegato in automatico a un servizio print-on-demand. Quando arriva un ordine, parte la produzione; quando la maglietta è pronta, parte la spedizione. Nessun magazzino, nessun intervento manuale, nessun \"poi lo faccio io a mano\". **La parte che non si vede — e che è il vero progetto**. Anche qui l'AI è stata in bottega con me: per esplorare le opzioni di integrazione, per accelerare le parti noiose, per farmi da secondo paio d'occhi. Le decisioni su cosa collegare a cosa, e perché, restano artigianato mio.",
        },
        {
          h: "La prova",
          body: "Un sistema \"che dovrebbe funzionare\" non vale niente. Quindi l'ho testato nel modo più onesto possibile: **un ordine reale, pagato, completato**. Maglietta ordinata, stampata automaticamente, spedita automaticamente, arrivata a destinazione. Ciclo chiuso, zero interventi manuali.",
        },
        {
          h: "Cosa dimostra",
          body: "Che so progettare non solo interfacce, ma sistemi: flussi dove più servizi si parlano tra loro e il risultato è un processo che gira da solo. Per una PMI che vende prodotti fisici, questa è esattamente la differenza tra \"avere un e-commerce\" e avere **un e-commerce che non diventa un secondo lavoro**.",
        },
      ],
      results: [
        "Flusso ordine → stampa → spedizione completamente automatico",
        "Zero magazzino, zero interventi manuali",
        "Brand e design del negozio curati da zero",
        "Testato con un ordine reale, completato dalla produzione alla consegna",
      ],
    },
    en: {
      tag: "Experimental Project · Infrastructure",
      title: "Maybe's Shop — an e-commerce that runs itself",
      client: "Own project",
      place: "Shopify + print-on-demand",
      stack: "Shopify · Automatic print-on-demand integration",
      role: "Brand, store design, technical infrastructure",
      intro:
        "I wanted to answer a practical question: can you build a T-shirt shop that works without anyone touching it? Not a mockup, not an \"almost\": a real system where a customer orders, the shirt is printed, shipped and delivered — and I don't lift a finger.",
      sections: [
        {
          h: "How I built it",
          body: "Two halves, both done by me. The look: brand, store graphics, shirt designs — the visible part. The infrastructure: Shopify automatically connected to a print-on-demand service. When an order arrives, production starts; when the shirt is ready, shipping starts. No warehouse, no manual steps, no \"I'll do it by hand later\". **The part you don't see — and that's the real project**. Here too AI was on the workbench with me: exploring integration options, speeding up the boring parts, acting as a second pair of eyes. Decisions about what to connect to what, and why, remain my craft.",
        },
        {
          h: "The proof",
          body: "A system that \"should work\" is worth nothing. So I tested it the most honest way possible: **a real order, paid, completed**. Shirt ordered, printed automatically, shipped automatically, delivered. Closed loop, zero manual intervention.",
        },
        {
          h: "What it proves",
          body: "That I can design not only interfaces, but systems: flows where multiple services talk to each other and the result is a process that runs on its own. For an SME selling physical products, that's exactly the difference between \"having an e-commerce\" and having **an e-commerce that doesn't become a second job**.",
        },
      ],
      results: [
        "Order → print → ship flow fully automatic",
        "Zero warehouse, zero manual steps",
        "Brand and store design built from scratch",
        "Validated with a real order, completed from production to delivery",
      ],
    },
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

export function localizeCaseStudy(cs, lang = "it") {
  if (!cs) return null;
  const locale = cs[lang] || cs.it;
  const { it, en, ...shared } = cs;
  return {
    ...shared,
    ...locale,
  };
}
