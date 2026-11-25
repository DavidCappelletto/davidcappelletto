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
    images: [{ url: "/projects/maybe-design/carezza-pair.webp", width: 1228, height: 409, alt: "Lago di Carezza, foto originale e villaggio natalizio generato" }]
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
          <picture><source media="(max-width: 600px)" srcSet="/projects/maybe-design/carezza-stacked.webp"/><img src="/projects/maybe-design/carezza-pair.webp" alt="Lago di Carezza innevato e villaggio natalizio generato nella versione V1" width="1228" height="409"/></picture>
          <figcaption>Lago di Carezza · test creativo outdoor nella beta. Dalla fotografia originale al villaggio natalizio.</figcaption>
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
        <div className="mdm-mobile-detail">
          <figure><img src="/projects/maybe-design/carezza-slider.webp" alt="Controlli Slider, Affiancate e Zoom sopra il risultato V1" width="640" height="778"/></figure>
          <div><h3>Guarda cosa cambia, anche dal telefono.</h3><p>Scorri il confronto con Slider, oppure scegli Affiancate per tenere entrambe le foto in vista. Ingrandisci i dettagli e scegli cosa perfezionare nella prossima versione.</p></div>
        </div>
      </section>

      <section className="mdm-estimate" id="stima">
        <div className="mdm-shell mdm-estimate-grid">
          <div><p className="mdm-kicker">OLTRE LA VISUALIZZAZIONE</p><h2>Come potrebbe diventare. <em>E quanto potrebbe costare.</em></h2><p>Maybe Design può affiancare alla trasformazione una <strong>stima economica indicativa</strong>, quando i dati e l&apos;analisi lo permettono. È un primo riferimento per valutare un&apos;idea, non una cifra definitiva.</p><p className="mdm-legal">La stima non è un preventivo. Misure, materiali, manodopera, vincoli e fattibilità richiedono verifiche professionali.</p></div>
          <figure className="mdm-real-estimate"><img src="/projects/maybe-design/carezza-estimate.webp" alt="Stima V1 da 0 a 0 euro con affidabilità bassa" width="640" height="312"/><figcaption>Nel test outdoor le superfici non sono misurate. Lo 0–0 € segnala che da questa foto non si ricava un costo utilizzabile.</figcaption></figure>
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