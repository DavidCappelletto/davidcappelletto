"use client";

import Link from "next/link";
import { colors, getStatus, localizeCaseStudy } from "./_data";
import { SiteHeader, SiteFooter, SiteContactSection, ImageWithFallback, LangProvider, useLang } from "./_site-parts";

const ui = {
  it: { all: "← Tutti i progetti", visit: "Visita il progetto ↗", role: "Ruolo", status: "Stato", stack: "Stack", result: "Il risultato, in breve", next: "Prossimo progetto", contact: "Parliamo del tuo progetto" },
  en: { all: "← All projects", visit: "Visit project ↗", role: "Role", status: "Status", stack: "Stack", result: "Results at a glance", next: "Next project", contact: "Let's talk about your project" },
};

const MetaIcon = ({ type }) => {
  if (type === "role") return <path d="M12 3l2.4 4.9L20 9l-4 3.9.9 5.6L12 16l-4.9 2.5.9-5.6L4 9l5.6-1.1z" />;
  if (type === "status") return <><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></>;
  return <><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5"/></>;
};

function ProjectPageInner({ cs, next }) {
  const { lang } = useLang();
  const t = ui[lang];
  const project = localizeCaseStudy(cs, lang);
  const nextProject = localizeCaseStudy(next, lang);
  const status = getStatus(cs, lang);
  const outbound = project.appLink || project.link;

  return (
    <main className="project-page" style={{ background: colors.bg, color: colors.ink }}>
      <SiteHeader />

      <section className="project-hero">
        <div className="project-shell project-hero-grid">
          <div>
            <Link href="/progetti" className="back-link">{t.all}</Link>
            <p className="project-kicker">{project.tag}</p>
            <h1>{project.shortTitle || project.title}</h1>
            <p className="project-intro">{project.intro}</p>
            {outbound && <a className="project-visit" href={outbound} target="_blank" rel="noopener noreferrer">{project.appLinkLabel || t.visit}</a>}
          </div>
          <div className="project-meta">
            {[
              { type: "role", label: t.role, value: project.role },
              { type: "status", label: t.status, value: status.label },
              { type: "stack", label: t.stack, value: project.stack },
            ].map((item) => (
              <div key={item.type}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><MetaIcon type={item.type}/></svg>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="project-cover"><ImageWithFallback src={project.imageSrc} alt={project.shortTitle || project.title} /></div>

      <div className="project-content">
        {project.sections.map((section, index) => (
          <section className="process-row" key={`${section.h}-${index}`}>
            <span className="process-index">{String(index + 1).padStart(2, "0")} · {section.mediaLabel || (lang === "it" ? "Processo" : "Process")}</span>
            <div className="process-grid">
              <figure className="process-media">
                <ImageWithFallback src={section.image || project.imageSrc} alt={section.mediaLabel || section.h} />
                <figcaption>{section.mediaLabel}</figcaption>
              </figure>
              <div className="process-copy"><h2>{section.h}</h2><p>{section.body}</p></div>
            </div>
          </section>
        ))}

        <section className="project-results">
          <h2>{t.result}</h2>
          <ul>{project.results.map((result) => <li key={result}><span>✓</span>{result}</li>)}</ul>
        </section>

        <nav className="project-next">
          <Link href={`/progetti/${nextProject.slug}`}><small>{t.next}</small><strong>{nextProject.shortTitle || nextProject.title} →</strong></Link>
          <Link href="/#contatti" className="project-contact">{t.contact}</Link>
        </nav>
      </div>

      <SiteContactSection />
      <SiteFooter />

      <style>{`
        .project-page{min-height:100vh;font-family:'DM Sans',system-ui,sans-serif}.project-shell{width:min(1180px,90vw);margin:0 auto}.project-hero{padding:52px 0 34px}.project-hero-grid{display:grid;grid-template-columns:1fr .82fr;gap:64px;align-items:end}.back-link{color:${colors.tealText};font-weight:700;text-decoration:none;font-size:13px}.project-kicker{margin:24px 0 0;color:${colors.tealText};font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.project-hero h1{font-size:clamp(46px,6vw,76px);line-height:.98;letter-spacing:-.055em;margin:13px 0 20px}.project-intro{max-width:680px;color:${colors.inkMuted};font-size:19px;line-height:1.6}.project-visit{display:inline-block;margin-top:8px;padding:11px 16px;border-radius:9px;background:${colors.navy};color:#fff;text-decoration:none;font-size:13px;font-weight:800}.project-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.project-meta>div{min-width:0;padding:16px;border:1px solid ${colors.line};border-radius:11px;background:#fff}.project-meta svg{width:21px;height:21px;color:${colors.teal};margin-bottom:12px}.project-meta small{display:block;color:${colors.inkMuted};font-size:9px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}.project-meta strong{display:block;margin-top:5px;font-size:11px;line-height:1.35;overflow-wrap:anywhere}.project-cover{height:min(560px,55vw);min-height:380px;background:${colors.navyDeep};overflow:hidden}.project-cover img{width:100%;height:100%;object-fit:cover;display:block}.project-content{width:min(1040px,90vw);margin:0 auto;padding:72px 0}.process-row{padding:44px 0;border-top:1px solid ${colors.line}}.process-index{display:block;margin-bottom:14px;color:${colors.tealText};font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.process-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}.process-row:nth-child(even) .process-media{order:2}.process-media{position:relative;min-height:280px;margin:0;border-radius:15px;background:${colors.navy};overflow:hidden}.process-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.process-media:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(8,18,31,.68))}.process-media figcaption{position:absolute;z-index:2;left:16px;bottom:14px;color:#fff;font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.process-copy h2{font-size:clamp(27px,3vw,39px);line-height:1.12;letter-spacing:-.035em;margin:0 0 16px}.process-copy p{color:${colors.inkMuted};font-size:16px;line-height:1.72;margin:0}.project-results{margin-top:36px;padding:36px;border-radius:15px;background:${colors.navyDeep};color:#fff}.project-results h2{font-size:31px;margin:0 0 20px}.project-results ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 24px;list-style:none;padding:0;margin:0}.project-results li{padding-top:10px;border-top:1px solid rgba(255,255,255,.14);color:rgba(255,255,255,.8);font-size:14px}.project-results li span{color:${colors.tealLight};margin-right:8px}.project-next{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-top:40px}.project-next a{text-decoration:none}.project-next small{display:block;color:${colors.inkMuted};font-size:10px;text-transform:uppercase;letter-spacing:.08em}.project-next strong{display:block;margin-top:5px;color:${colors.tealText};font-size:16px}.project-contact{padding:11px 16px;border-radius:9px;background:${colors.navy};color:#fff;font-weight:800;font-size:13px}
        @media(max-width:767px){.project-shell{width:94vw}.project-hero{padding:22px 0 13px}.project-hero-grid{grid-template-columns:1fr;gap:12px}.project-kicker{margin-top:14px;font-size:8px}.project-hero h1{font-size:38px;margin:8px 0 3px}.project-intro{display:none}.project-visit{margin-top:5px;padding:8px 11px;font-size:10px}.project-meta{gap:5px}.project-meta>div{padding:8px 7px;border-radius:8px}.project-meta svg{width:16px;height:16px;margin-bottom:6px}.project-meta small{font-size:6px}.project-meta strong{font-size:8px;line-height:1.2}.project-cover{height:148px;min-height:148px}.project-content{width:94vw;padding:16px 0 28px}.process-row{padding:18px 0}.process-index{font-size:7px;margin-bottom:8px}.process-grid,.process-row:nth-child(even) .process-grid{grid-template-columns:1fr;gap:11px}.process-row:nth-child(even) .process-media{order:2}.process-row:nth-child(even) .process-copy{order:1}.process-media{height:190px;min-height:0;aspect-ratio:auto;border-radius:9px;background:#e9eef0}.process-media img{object-fit:contain}.process-media figcaption{left:9px;bottom:8px;font-size:7px}.process-copy h2{font-size:21px;margin:0 0 6px}.process-copy p{font-size:12.5px;line-height:1.48}.project-results{margin-top:12px;padding:16px;border-radius:10px}.project-results h2{font-size:22px;margin-bottom:10px}.project-results ul{gap:7px 12px}.project-results li{font-size:10px;padding-top:6px}.project-next{margin-top:20px}.project-next strong{font-size:12px}.project-contact{padding:8px 10px;font-size:9px}}
      `}</style>
    </main>
  );
}

export default function ProjectPageBody({ cs, next }) {
  return <LangProvider><ProjectPageInner cs={cs} next={next} /></LangProvider>;
}
