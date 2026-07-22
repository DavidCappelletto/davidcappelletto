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
    tag: "Progetto Cliente · Impiantistica HVAC",
    title: "Un sito aziendale costruito a mano, con l'AI in bottega",
    client: "Azienda impiantistica HVAC · Nord Italia",
    stack: "HTML/CSS/JS statico · CMS headless (Decap) · Netlify · GA4 + GTM + Meta Pixel",
    role: "Tutto — dalla diagnosi al deploy",
    imageSrc: "/case-studies/azienda-hvac.jpg",
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
  {
    slug: "geofire",
    tag: "Progetto Personale · Metodo",
    title: "Geo·FIRE — un globo 3D interattivo come progetto di metodo",
    client: "Progetto proprio",
    stack: "Web app 3D interattiva nel browser",
    role: "Ideazione, design, sviluppo",
    imageSrc: "/case-studies/geofire.jpg",
    appLink: "https://geofire.davidcappelletto.it",
    appLinkLabel: "Prova l'app →",
    intro:
      "Geo·FIRE non nasce da un cliente. Nasce da una domanda: fino a dove posso arrivare, da solo, con gli strumenti che ho oggi?",
    sections: [
      {
        h: "Perché esiste",
        body: "Un globo 3D interattivo nel browser è il tipo di progetto che qualche anno fa avrebbe richiesto un team, o almeno competenze verticali di computer graphics che io non ho. Oggi il punto non è più \"sai fare X\", ma **\"sai orchestrare gli strumenti per arrivare a X\"**. Questo progetto è la dimostrazione pratica di quella tesi.",
      },
      {
        h: "Il metodo, esposto",
        body: "Ho trattato Geo·FIRE come tratterei un progetto cliente, con una differenza: **qui il processo è il prodotto**. Prima il framing: cosa deve fare, cosa può non fare, quali sono i vincoli (performance nel browser, dispositivi mobili, peso dei dati). Poi l'esplorazione con l'AI: il 3D nel browser era territorio nuovo per me, e l'AI ha fatto da tutor accelerato — non mi ha dato la soluzione, mi ha aiutato a capire abbastanza in fretta da poter prendere decisioni sensate. Poi l'iterazione: prototipi brutti, poi meno brutti, poi buoni. Ogni versione buttata mi ha insegnato qualcosa sulla successiva. Infine la rifinitura a mano: **l'ultimo 20%** — quello che separa \"funziona\" da \"è piacevole\" — non lo genera nessuna AI. Quello è tempo, occhio e gusto.",
      },
      {
        h: "Il risultato",
        body: "Un globo 3D esplorabile, fluido, che funziona nel browser. Ma il risultato vero è replicabile: **un metodo per affrontare territori tecnici sconosciuti** senza paralizzarsi e senza delegare il pensiero.",
      },
      {
        h: "Cosa dimostra",
        body: "Che l'AI abbassa il costo di imparare, non il valore di capire. Chi capisce cosa sta costruendo può usare l'AI per andare tre volte più veloce. Chi non capisce va tre volte più veloce verso il muro.",
      },
    ],
    results: [
      "App 3D interattiva funzionante nel browser",
      "Territorio tecnico nuovo affrontato con metodo, non a caso",
      "Framing dei vincoli prima di scrivere codice",
      "Iterazione rapida: ogni prototipo scartato ha informato il successivo",
      "Rifinitura manuale dove l'AI non arriva",
    ],
  },
  {
    slug: "infermiera-althea",
    tag: "Progetto Cliente · Settore Sanitario",
    title: "Althea — SEO locale senza budget pubblicitario",
    client: "Infermiera libera professionista · Pordenone e provincia",
    stack: "Wix · SEO locale · Content",
    role: "Design, sviluppo, SEO, manutenzione continuativa",
    imageSrc: "/case-studies/infermiera-althea.jpg",
    link: "https://www.infermiera-althea.com/",
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
  {
    slug: "maybes-shop",
    tag: "Progetto Sperimentale · Infrastruttura",
    title: "Maybe's Shop — un e-commerce che si gestisce da solo",
    client: "Progetto proprio",
    stack: "Shopify · Integrazione print-on-demand automatica",
    role: "Brand, design del negozio, infrastruttura tecnica",
    imageSrc: "/case-studies/maybes-shop.jpg",
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
];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
