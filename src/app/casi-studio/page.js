import Link from "next/link";
import { caseStudies, colors } from "./_data";

export const metadata = {
  title: "Casi Studio | David Cappelletto — Consulenza Digitale",
  description:
    "Progetti reali, raccontati per come sono stati fatti: diagnosi, scelte, esecuzione e risultati. UX, SEO locale, sviluppo web e workflow AI.",
};

export default function CasiStudioIndex() {
  return (
    <main style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: colors.ink }}>
      <div style={{ width: "min(1200px, 92vw)", margin: "0 auto", padding: "64px 0 96px" }}>
        <Link href="/" style={{ color: colors.inkMuted, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
          ← Torna alla home
        </Link>

        <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 32 }}>
          Casi Studio
        </span>
        <h1 style={{ margin: "20px 0 0", fontSize: 40, lineHeight: 1.15 }}>
          Non esempi ipotetici. Cose già fatte.
        </h1>
        <p style={{ marginTop: 16, maxWidth: 720, color: colors.inkMuted, lineHeight: 1.6, fontSize: 17 }}>
          Ogni progetto qui è raccontato per come è stato fatto davvero: il problema, le scelte,
          l&apos;esecuzione, il risultato. Uso l&apos;AI come attrezzo da banco in ogni fase — e lo dichiaro,
          perché il valore non sta nello strumento ma in chi decide cosa fargli fare.
          Questa pagina cresce: ogni progetto significativo che completo diventa un caso studio.
        </p>

        <div style={{ marginTop: 48, display: "grid", gap: 20 }}>
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/casi-studio/${cs.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                style={{
                  borderRadius: 12,
                  border: `1px solid ${colors.line}`,
                  background: "#fff",
                  padding: 28,
                }}
              >
                <div style={{ height: 4, borderRadius: 999, background: "linear-gradient(90deg, #1C2E4A, #2BA89A)" }} />
                <p style={{ margin: "16px 0 0", color: colors.inkMuted, fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 700 }}>
                  {cs.tag}
                </p>
                <h2 style={{ margin: "10px 0 0", fontSize: 26, lineHeight: 1.25 }}>{cs.title}</h2>
                <p style={{ margin: "12px 0 0", color: colors.inkMuted, lineHeight: 1.6 }}>{cs.intro}</p>
                <p style={{ margin: "18px 0 0", color: colors.teal, fontWeight: 700 }}>
                  Leggi il caso studio →
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
