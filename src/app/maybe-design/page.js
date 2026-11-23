import Link from "next/link";
import "./landing.css";

export const metadata = {
  title: "Maybe Design — La tua casa, come non l'hai ancora immaginata",
  description: "Parti da una foto e scopri idee di re-design, versioni successive e stime orientative dei costi. Beta privata su invito.",
  alternates: { canonical: "/maybe-design" },
  openGraph: {
    title: "Maybe Design — Re-design fotografico AI",
    description: "Una foto, nuove possibilità. Trasformazioni, versioni e stime orientative. Beta privata su invito.",
    url: "https://davidcappelletto.it/maybe-design",
    siteName: "David Cappelletto", locale: "it_IT", type: "website",
    images: [{ url: "/projects/maybe-design/cover.webp", width: 1440, height: 900, alt: "Maybe Design, anteprima del prodotto" }]
  }
};
const EMAIL = "contact@davidcappelletto.it";
const invite = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Maybe Design — Richiesta accesso beta") + "&body=" + encodeURIComponent("Ciao, vorrei ricevere informazioni per provare la beta di Maybe Design.\n\nMi interessa per: [la mia casa / il mio lavoro]\n\n");
const demo = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Maybe Design — Richiesta demo professionale");

export default function MaybeDesignLanding() {
  return (
    <main className="mdm">
      <header className="mdm-nav">
        <Link href="/maybe-design" className="mdm-brand" aria-label="Maybe Design, inizio pagina"><img src="/projects/maybe-design/maybe-logo-original.png" alt="" width="48" height="48"/><span><strong>Maybe Design</strong><small>Re-design fotografico AI</small></span></Link>
        <nav aria-label="Navigazione Maybe Design"><a href="#come-funziona">Come funziona</a><a href="#stima">Stima dei costi</a><Link href="/progetti/maybe-design">Il progetto</Link></nav>
        <a className="mdm-nav-cta" href={invite}>Accesso beta ↗</a>
      </header>

      <section className="mdm-hero mdm-shell">
        <div className="mdm-hero-copy">
          <p className="mdm-kicker">BETA PRIVATA · ACCESSO SU INVITO</p>
          <h1>La tua casa, come non l&apos;hai ancora <em>immaginata.</em></h1>
          <p className="mdm-lead">Parti da una foto e scopri nuove possibilità per i tuoi spazi. Confronta le idee, perfeziona i risultati e ottieni anche <strong>una prima stima orientativa dei costi.</strong></p>
          <div className="mdm-actions"><a className="mdm-button mdm-primary" href={invite}>Richiedi accesso alla beta ↗</a><a className="mdm-button mdm-secondary" href="#come-funziona">Scopri cosa fa ↓</a></div>
          <p className="mdm-note">L&apos;invito non è automatico. La richiesta si invia dal tuo programma email.</p>
        </div>
        <figure className="mdm-hero-picture">
          <img src="/projects/maybe-design/cover.webp" alt="Presentazione grafica Maybe Design con screenshot del prototipo" width="1440" height="900" />
          <figcaption>Anteprima grafica del prodotto · schermate della pre-beta 0.6. Non è una trasformazione AI reale.</figcaption>
        </figure>
      </section>

      <section className="mdm-benefit-section" id="come-funziona">
        <div className="mdm-shell">
          <p className="mdm-kicker">DALLA FOTO A UNA SCELTA PIÙ CONSAPEVOLE</p>
          <div className="mdm-heading-grid">
            <h2>Non solo un&apos;immagine bella. <em>Un&apos;idea da esplorare.</em></h2>
            <p>Prima di cambiare qualcosa in casa, puoi provare a vedere come potrebbe diventare. E poi continuare a lavorarci, senza fermarti alla prima proposta.</p>
          </div>
          <div className="mdm-benefits">
            <article><span>01 / VISUALIZZA</span><h3>Vedi il cambiamento.</h3><p>Parti dalla foto di una stanza e prova nuove idee per arredi, colori e finiture.</p></article>
            <article><span>02 / CONFRONTA</span><h3>Non fermarti al primo risultato.</h3><p>Confronta con l&apos;originale, esplora più versioni e perfeziona i dettagli.</p></article>
            <article><span>03 / VALUTA</span><h3>Considera anche i costi.</h3><p>Quando l&apos;analisi è disponibile, ottieni una prima indicazione economica per orientarti.</p></article>
          </div>
        </div>
      </section>

      <section className="mdm-showcase mdm-shell">
        <div className="mdm-heading">
          <p className="mdm-kicker">DENTRO MAYBE DESIGN</p>
          <h2>La fotografia è il punto di partenza. <em>Le scelte sono tue.</em></h2>
          <p>L&apos;esperienza parte dall&apos;ambiente e dalle tue indicazioni. Puoi cambiare direzione, confrontare più versioni e proseguire su quella che preferisci.</p>
        </div>
        <div className="mdm-showcase-grid">
          <figure><img src="/projects/maybe-design/interface-desktop.webp" alt="Interfaccia originale della pre-beta 0.6 con caricamento foto e area di confronto" width="1280" height="860"/><figcaption>Schermata reale · pre-beta offline 0.6, non la beta attuale</figcaption></figure>
          <div className="mdm-showcase-side">
            <figure><img src="/projects/maybe-design/interface-mobile.webp" alt="Versione smartphone della pre-beta 0.6" width="390" height="844"/><figcaption>Vista mobile · pre-beta offline 0.6</figcaption></figure>
            <div className="mdm-proof"><span>PRIMA / DOPO</span><h3>Il risultato parla da solo.</h3><p>Le coppie fotografiche realizzate dalla beta attuale saranno mostrate qui quando saranno disponibili e autorizzate. Non sostituiamo risultati reali con simulazioni inventate.</p></div>
          </div>
        </div>
      </section>

      <section className="mdm-estimate" id="stima">
        <div className="mdm-shell mdm-estimate-grid">
          <div><p className="mdm-kicker">OLTRE LA VISUALIZZAZIONE</p><h2>Come potrebbe diventare. <em>E quanto potrebbe costare.</em></h2><p>Maybe Design può affiancare alla trasformazione una <strong>stima economica indicativa</strong>, quando i dati e l&apos;analisi lo permettono. È un primo riferimento per valutare un&apos;idea, non una cifra definitiva.</p><p className="mdm-legal">La stima non è un preventivo. Misure, materiali, manodopera, vincoli e fattibilità richiedono verifiche professionali.</p></div>
          <aside className="mdm-estimate-card"><span>UNA PRIMA VALUTAZIONE · NON UN PREVENTIVO</span><h3>Più elementi per decidere.</h3><div className="mdm-estimate-row"><small>01</small><strong>Arredi e complementi</strong><b>↗</b></div><div className="mdm-estimate-row"><small>02</small><strong>Materiali e finiture</strong><b>↗</b></div><div className="mdm-estimate-row"><small>03</small><strong>Interventi ipotizzati</strong><b>↗</b></div><p>Voci illustrative, non importi calcolati su un ambiente reale.</p></aside>
        </div>
      </section>

      <section className="mdm-paths mdm-shell">
        <p className="mdm-kicker">PER CHI È PENSATO</p>
        <div className="mdm-path-grid">
          <article><span>01 / PRIVATI</span><h2>La tua casa. <em>Più possibilità.</em></h2><p>Se vuoi cambiare un ambiente, ripensare l&apos;arredo o confrontare idee prima di acquistare.</p><a href={invite}>Richiedi accesso anticipato ↗</a></article>
          <article><span>02 / PROFESSIONISTI</span><h2>Fai vedere <em>l&apos;idea.</em></h2><p>Se lavori con immobili o progetti di interni e vuoi valutare una demo per i tuoi clienti.</p><a href={demo}>Richiedi una demo ↗</a></article>
        </div>
      </section>

      <section className="mdm-final"><div className="mdm-shell"><p className="mdm-kicker">MAKE ROOM FOR MAYBE</p><h2>Da una foto può nascere <em>un&apos;idea nuova.</em></h2><p>Maybe Design è ancora in beta privata. Raccontaci come vorresti usarla.</p><a className="mdm-button mdm-inverse" href={invite}>Richiedi un invito ↗</a></div></section>
      <footer className="mdm-footer mdm-shell"><span>© 2026 Maybe Design · David Cappelletto</span><div><Link href="/progetti/maybe-design">Scheda progetto</Link><Link href="/privacy">Privacy</Link><Link href="/">Portfolio</Link></div></footer>
    </main>
  );
}