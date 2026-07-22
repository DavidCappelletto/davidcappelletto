import Link from "next/link";
import { caseStudies, colors } from "./_data";
import { SiteHeader, SiteFooter, ImageWithFallback } from "./_site-parts";

export const metadata = {
  title: "Progetti | David Cappelletto — Consulenza Digitale",
  description:
    "Progetti reali, raccontati per come sono stati fatti: diagnosi, scelte, esecuzione e risultati. UX, SEO locale, sviluppo web e workflow AI.",
};

export default function CasiStudioIndex() {
  return (
    <main style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: colors.ink }}>
      <SiteHeader />

      <div style={{ width: "min(1200px, 89vw)", margin: "0 auto", padding: "56px 0 96px" }}>
        <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
          Progetti
        </span>
        <h1 style={{ margin: "20px 0 0", fontSize: 40, lineHeight: 1.15 }}>
          Non esempi ipotetici. Cose già fatte.
        </h1>
        <p style={{ marginTop: 16, maxWidth: 720, color: colors.inkMuted, lineHeight: 1.6, fontSize: 17 }}>
          Ogni progetto qui è raccontato per come è stato fatto davvero: il problema, le scelte,
          l&apos;esecuzione, il risultato. Uso l&apos;AI come attrezzo da banco in ogni fase — e lo dichiaro,
          perché il valore non sta nello strumento ma in chi decide cosa fargli fare.
          Questa pagina cresce: ogni progetto significativo che completo diventa una nuova voce qui.
        </p>

        <div className="cs-index-grid" style={{ marginTop: 48, display: "grid", gap: 20, gridTemplateColumns: "1fr" }}>
          {caseStudies.map((cs) => (
            <Link key={cs.slug} href={`/progetti/${cs.slug}`} className="cs-index-link" style={{ textDecoration: "none", color: "inherit" }}>
              <article className="cs-index-card" style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 3", background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})` }}>
                  <ImageWithFallback
                    src={cs.imageSrc}
                    alt={cs.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ margin: 0, color: colors.inkMuted, fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 700 }}>
                    {cs.tag}
                  </p>
                  <h2 style={{ margin: "10px 0 0", fontSize: 24, lineHeight: 1.25 }}>{cs.title}</h2>
                  <p style={{ margin: "12px 0 0", color: colors.inkMuted, lineHeight: 1.6, fontSize: 15 }}>{cs.intro}</p>
                  <p style={{ margin: "18px 0 0", color: colors.teal, fontWeight: 700 }}>Leggi il progetto →</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter />

      <style>{`
        @media (min-width: 860px) {
          .cs-index-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .cs-index-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cs-index-link:hover .cs-index-card,
        .cs-index-link:focus-visible .cs-index-card {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(17, 30, 48, 0.12);
        }
      `}</style>
    </main>
  );
}
