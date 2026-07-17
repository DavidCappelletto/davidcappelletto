import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, colors } from "../_data";

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

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <main style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: colors.ink }}>
      <div style={{ width: "min(860px, 92vw)", margin: "0 auto", padding: "64px 0 96px" }}>
        <Link href="/casi-studio" style={{ color: colors.inkMuted, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
          ← Tutti i casi studio
        </Link>

        <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 32 }}>
          {cs.tag}
        </span>
        <h1 style={{ margin: "20px 0 0", fontSize: 38, lineHeight: 1.15 }}>{cs.title}</h1>

        <div
          style={{
            marginTop: 28,
            borderRadius: 12,
            border: `1px solid ${colors.line}`,
            background: "#fff",
            padding: "20px 24px",
            display: "grid",
            gap: 8,
            fontSize: 15,
          }}
        >
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
            style={{
              display: "inline-block",
              marginTop: 20,
              background: colors.teal,
              color: "#fff",
              padding: "12px 24px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {cs.appLinkLabel || "Prova l'app →"}
          </a>
        )}

        <p style={{ marginTop: 32, fontSize: 19, lineHeight: 1.65, color: colors.ink }}>{cs.intro}</p>

        {cs.sections.map((s) => (
          <section key={s.h} style={{ marginTop: 40 }}>
            <h2 style={{ margin: 0, fontSize: 26, lineHeight: 1.25 }}>{s.h}</h2>
            <p style={{ margin: "14px 0 0", lineHeight: 1.7, color: colors.inkMuted, fontSize: 16.5 }}>{s.body}</p>
          </section>
        ))}

        <section
          style={{
            marginTop: 48,
            borderRadius: 12,
            border: `1px solid ${colors.line}`,
            background: "#fff",
            padding: 28,
          }}
        >
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
          <Link
            href={`/casi-studio/${next.slug}`}
            style={{ color: colors.teal, textDecoration: "none", fontWeight: 700 }}
          >
            Prossimo caso: {next.title.split("—")[0].trim()} →
          </Link>
          <Link
            href="/#contatti"
            style={{
              display: "inline-block",
              background: colors.navy,
              color: "#fff",
              padding: "12px 22px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Parliamo del tuo progetto
          </Link>
        </div>
      </div>
    </main>
  );
}
