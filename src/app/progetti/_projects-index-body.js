"use client";

import Link from "next/link";
import { caseStudies, colors, localizeCaseStudy } from "./_data";
import {
  SiteHeader,
  SiteFooter,
  SiteFirstStepSection,
  SiteContactSection,
  ImageWithFallback,
  LangProvider,
  useLang,
} from "./_site-parts";

const ui = {
  it: {
    tag: "Progetti",
    title: "Non esempi ipotetici. Cose già fatte.",
    intro:
      "Ogni progetto qui è raccontato per come è stato fatto davvero: il problema, le scelte, l'esecuzione e il risultato. Uso l'AI come attrezzo da banco in ogni fase e lo dichiaro, perché il valore non sta nello strumento ma in chi decide cosa fargli fare. Questa pagina cresce: ogni progetto significativo che completo diventa una nuova voce qui.",
    readMore: "Leggi il progetto →",
  },
  en: {
    tag: "Projects",
    title: "No hypothetical examples. Real work already delivered.",
    intro:
      "Every project here is told the way it actually happened: the problem, the choices, the execution, and the result. I use AI as a hand tool at every stage, and I say so openly because the value isn't in the tool but in who decides what to do with it. This page grows: every significant project I finish becomes a new entry here.",
    readMore: "Read the project →",
  },
};

function ProjectsIndexInner() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <main style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: colors.ink }}>
      <SiteHeader />

      <section style={{ background: colors.bg, padding: "56px 0 96px" }}>
        <div style={{ width: "min(1200px, 89vw)", margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
            {t.tag}
          </span>
          <h1 style={{ margin: "20px 0 0", fontSize: 40, lineHeight: 1.15 }}>
            {t.title}
          </h1>
          <p style={{ marginTop: 16, maxWidth: 720, color: colors.inkMuted, lineHeight: 1.6, fontSize: 17 }}>
            {t.intro}
          </p>

          <div className="cases-grid" style={{ marginTop: 48, display: "grid", gap: 20, gridTemplateColumns: "1fr" }}>
            {caseStudies.map((cs, cardIdx) => {
              const localized = localizeCaseStudy(cs, lang);
              return (
                <article
                  key={localized.slug}
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
                  <Link
                    href={`/progetti/${localized.slug}`}
                    aria-label={localized.title}
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
                    <ImageWithFallback
                      src={localized.imageSrc}
                      alt={localized.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
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
                      <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".06em" }}>{localized.place || localized.client}</span>
                    </div>
                  </div>

                  <div className="case-card-body" style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                    <p style={{ margin: 0, color: colors.inkMuted, fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 700 }}>
                      {localized.tag}
                    </p>
                    <h2 style={{ margin: "10px 0 0", fontSize: 24, lineHeight: 1.25 }}>{localized.title}</h2>
                    <p style={{ margin: "6px 0 0", color: colors.inkMuted }}>{localized.place || localized.client}</p>
                    <ul style={{ margin: "16px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 8 }}>
                      {localized.results.slice(0, 3).map((result) => (
                        <li key={result} style={{ fontSize: 14 }}>
                          <span style={{ color: colors.tealText, marginRight: 8 }}>✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
                      <span style={{ color: colors.tealText, fontWeight: 700 }}>{t.readMore}</span>
                      {localized.appLink && (
                        <a
                          href={localized.appLink}
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
                          {localized.appLinkLabel || (lang === "en" ? "Try the app →" : "Prova l'app →")}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFirstStepSection />
      <SiteContactSection />
      <SiteFooter />

      <style>{`
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
        @media (min-width: 768px) {
          .cases-grid {
            grid-template-columns: 1fr 1fr !important;
            max-width: 760px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
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
