import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, colors } from "../_data";
import { SiteHeader, SiteFooter, SiteContactSection, ImageWithFallback } from "../_site-parts";
import { renderFormatted } from "../_format";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | David Cappelletto`,
    description: cs.intro,
  };
}

const sectionIcons = [
  (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12l5 5L20 6" />
    </svg>
  ),
  (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 2Z" />
    </svg>
  ),
];

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const lastIdx = cs.sections.length - 1;
  const midPoint = Math.floor(cs.sections.length / 2);

  return (
    <main style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: colors.ink }}>
      <SiteHeader />

      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: 280,
          background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})`,
          overflow: "hidden",
        }}
      >
        <ImageWithFallback
          src="/case-studies/header-case.png"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(17,30,48,0.55), rgba(17,30,48,0.82))" }} />
        <div style={{ position: "relative", width: "min(1200px, 92vw)", margin: "0 auto", padding: "48px 0 40px" }}>
          <Link href="/casi-studio" style={{ color: "rgba(255,255,255,.85)", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            ← Tutti i casi studio
          </Link>
          <div>
            <span style={{ display: "inline-block", marginTop: 20, background: "rgba(255,255,255,.15)", color: "#fff", padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
              {cs.tag}
            </span>
            <h1 style={{ margin: "16px 0 0", fontSize: 36, lineHeight: 1.15, color: "#fff", maxWidth: 760 }}>{cs.title}</h1>
          </div>
        </div>
      </div>

      <div style={{ width: "min(860px, 92vw)", margin: "0 auto", padding: "40px 0 88px" }}>
        <div style={{ borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: "20px 24px", display: "grid", gap: 8, fontSize: 15 }}>
          <p style={{ margin: 0 }}>
            <strong>Cliente:</strong>{" "}
            {cs.link ? (
              <a href={cs.link} target="_blank" rel="noopener noreferrer" style={{ color: colors.teal }}>
                {cs.client}
              </a>
            ) : (
              cs.client
            )}
          </p>
          <p style={{ margin: 0 }}><strong>Stack:</strong> {cs.stack}</p>
          <p style={{ margin: 0 }}><strong>Ruolo:</strong> {cs.role}</p>
        </div>

        {cs.appLink && (
          <a
            href={cs.appLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: 20, background: colors.teal, color: "#fff", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}
          >
            {cs.appLinkLabel || "Prova l'app →"}
          </a>
        )}

        <p style={{ marginTop: 32, fontSize: 19, lineHeight: 1.65, color: colors.ink }}>{renderFormatted(cs.intro)}</p>

        {cs.sections.map((s, i) => {
          const isLast = i === lastIdx;
          const Icon = sectionIcons[i % sectionIcons.length];

          return (
            <div key={s.h}>
              {isLast ? (
                <section style={{ marginTop: 40, borderRadius: 12, background: colors.navy, color: "#fff", padding: 28, position: "relative" }}>
                  <span style={{ position: "absolute", top: 18, left: 24, fontSize: 48, lineHeight: 1, color: "rgba(255,255,255,.15)", fontWeight: 800 }}>&rdquo;</span>
                  <p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: colors.tealLight, fontWeight: 700 }}>{s.h}</p>
                  <p style={{ margin: "14px 0 0", fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,.95)" }}>{renderFormatted(s.body)}</p>
                </section>
              ) : (
                <section style={{ marginTop: 40, display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 10, background: "#fff", border: `1px solid ${colors.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {Icon(colors.teal)}
                  </div>
                  <div>
                    <h2 style={{ margin: 0, fontSize: 24, lineHeight: 1.25 }}>{s.h}</h2>
                    <p style={{ margin: "12px 0 0", lineHeight: 1.7, color: colors.inkMuted, fontSize: 16.5 }}>{renderFormatted(s.body)}</p>
                  </div>
                </section>
              )}

              {i === midPoint && !isLast && (
                <div style={{ marginTop: 40, borderRadius: 12, overflow: "hidden", position: "relative", minHeight: 220, background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})` }}>
                  <ImageWithFallback
                    src={cs.imageSrc}
                    alt={cs.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          );
        })}

        <section style={{ marginTop: 48, borderRadius: 12, border: `1px solid ${colors.line}`, background: "#fff", padding: 28 }}>
          <div style={{ height: 4, borderRadius: 999, background: "linear-gradient(90deg, #1C2E4A, #2BA89A)" }} />
          <h2 style={{ margin: "18px 0 0", fontSize: 24 }}>In sintesi</h2>
          <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 }}>
            {cs.results.map((r) => (
              <li key={r}>
                <span style={{ color: colors.teal, marginRight: 8 }}>✓</span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
          <Link href={`/casi-studio/${next.slug}`} style={{ color: colors.teal, textDecoration: "none", fontWeight: 700 }}>
            Prossimo caso: {next.title.split("—")[0].trim()} →
          </Link>
          <Link
            href="/#contatti"
            style={{ display: "inline-block", background: colors.navy, color: "#fff", padding: "12px 22px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}
          >
            Parliamo del tuo progetto
          </Link>
        </div>
      </div>

      <SiteContactSection />
      <SiteFooter />
    </main>
  );
}
