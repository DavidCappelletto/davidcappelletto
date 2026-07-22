"use client";

import Link from "next/link";
import { caseStudies, colors, localizeCaseStudy } from "./_data";
import { SiteHeader, SiteFooter, ImageWithFallback, LangProvider, useLang } from "./_site-parts";

const ui = {
  it: {
    tag: "Progetti",
    title: "Non esempi ipotetici. Cose già fatte.",
    intro:
      "Ogni progetto qui è raccontato per come è stato fatto davvero: il problema, le scelte, l'esecuzione, il risultato. Uso l'AI come attrezzo da banco in ogni fase — e lo dichiaro, perché il valore non sta nello strumento ma in chi decide cosa fargli fare. Questa pagina cresce: ogni progetto significativo che completo diventa una nuova voce qui.",
    readMore: "Leggi il progetto →",
  },
  en: {
    tag: "Projects",
    title: "No hypothetical examples. Real work already delivered.",
    intro:
      "Every project here is told the way it actually happened: the problem, the choices, the execution, the result. I use AI as a hand tool at every stage — and I say so openly, because the value isn't in the tool but in who decides what to do with it. This page grows: every significant project I finish becomes a new entry here.",
    readMore: "Read the project →",
  },
};

function ProjectsIndexInner() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <main style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: colors.ink }}>
      <SiteHeader />

      <div style={{ width: "min(1200px, 89vw)", margin: "0 auto", padding: "56px 0 96px" }}>
        <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
          {t.tag}
        </span>
        <h1 style={{ margin: "20px 0 0", fontSize: 40, lineHeight: 1.15 }}>
          {t.title}
        </h1>
        <p style={{ marginTop: 16, maxWidth: 720, color: colors.inkMuted, lineHeight: 1.6, fontSize: 17 }}>
          {t.intro}
        </p>

        <div className="cs-index-grid" style={{ marginTop: 48, display: "grid", gap: 20, gridTemplateColumns: "1fr" }}>
          {caseStudies.map((cs) => {
            const localized = localizeCaseStudy(cs, lang);
            return (
              <Link key={localized.slug} href={`/progetti/${localized.slug}`} className="cs-index-link" style={{ textDecoration: "none", color: "inherit" }}>
                <article className="cs-index-card" style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", aspectRatio: "4 / 3", background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})` }}>
                    <ImageWithFallback
                      src={localized.imageSrc}
                      alt={localized.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                    <p style={{ margin: 0, color: colors.inkMuted, fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 700 }}>
                      {localized.tag}
                    </p>
                    <h2 style={{ margin: "10px 0 0", fontSize: 24, lineHeight: 1.25 }}>{localized.title}</h2>
                    <p style={{ margin: "12px 0 0", color: colors.inkMuted, lineHeight: 1.6, fontSize: 15 }}>{localized.intro}</p>
                    <p style={{ margin: "18px 0 0", color: colors.teal, fontWeight: 700 }}>{t.readMore}</p>
                  </div>
                </article>
              </Link>
            );
          })}
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

export default function ProjectsIndexBody() {
  return (
    <LangProvider>
      <ProjectsIndexInner />
    </LangProvider>
  );
}
