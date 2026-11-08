"use client";

import Link from "next/link";
import { caseStudies, categoryLabels, colors, getStatus, localizeCaseStudy } from "./_data";
import { SiteHeader, SiteFooter, SiteContactSection, ImageWithFallback, LangProvider, useLang } from "./_site-parts";

const ui = {
  it: {
    tag: "Portfolio",
    title: "Progetti diversi, stati leggibili.",
    intro: "Clienti, prodotti, soluzioni replicabili e prototipi sono presentati per ciò che sono davvero.",
    readMore: "Apri →",
    media: "Immagini + processo",
    counts: (n) => `${n} ${n === 1 ? "progetto" : "progetti"}`,
  },
  en: {
    tag: "Portfolio",
    title: "Different projects, readable states.",
    intro: "Client work, products, reusable solutions and prototypes are presented for what they really are.",
    readMore: "Open →",
    media: "Images + process",
    counts: (n) => `${n} ${n === 1 ? "project" : "projects"}`,
  },
};

function StatusBar({ project, lang }) {
  const status = getStatus(project, lang);
  return (
    <div className="project-status" style={{ "--status-color": status.color, "--status-width": `${status.progress}%` }}>
      <div><span>{status.label}</span><span>{project.status === "online" ? "Live" : project.status === "done" ? (lang === "it" ? "Caso pronto" : "Case ready") : project.status === "progress" ? "WIP" : (lang === "it" ? "Prototipo" : "Prototype")}</span></div>
      <i />
    </div>
  );
}

function ProjectCard({ project, lang, readMore, media }) {
  const item = localizeCaseStudy(project, lang);
  return (
    <article className="portfolio-card">
      <Link href={`/progetti/${item.slug}`} aria-label={item.title} className="portfolio-card-link" />
      <div className="portfolio-card-media">
        <ImageWithFallback src={item.imageSrc} alt={item.shortTitle || item.title} />
        <span>{media}</span>
      </div>
      <div className="portfolio-card-body">
        <StatusBar project={project} lang={lang} />
        <p className="portfolio-tag">{item.tag}</p>
        <h3>{item.shortTitle || item.title}</h3>
        <p className="portfolio-description">{item.cardText || item.intro}</p>
        <strong className="portfolio-open">{readMore}</strong>
      </div>
    </article>
  );
}

function ProjectsIndexInner() {
  const { lang } = useLang();
  const t = ui[lang];
  const groups = ["featured", "solutions", "lab"];

  return (
    <main className="portfolio-page" style={{ background: colors.bg, color: colors.ink }}>
      <SiteHeader />
      <section className="portfolio-hero">
        <div className="portfolio-shell">
          <span className="portfolio-eyebrow">{t.tag}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>

      <div className="portfolio-shell portfolio-groups">
        {groups.map((group) => {
          const projects = caseStudies.filter((project) => project.category === group);
          if (!projects.length) return null;
          return (
            <section className="portfolio-group" key={group}>
              <header>
                <h2>{categoryLabels[group][lang] || categoryLabels[group].it}</h2>
                <span>{t.counts(projects.length)}</span>
              </header>
              <div className="portfolio-grid">
                {projects.map((project) => <ProjectCard key={project.slug} project={project} lang={lang} readMore={t.readMore} media={t.media} />)}
              </div>
            </section>
          );
        })}
      </div>

      <SiteContactSection />
      <SiteFooter />

      <style>{`
        .portfolio-page{min-height:100vh;font-family:var(--font-dm),system-ui,sans-serif}.portfolio-shell{width:min(1180px,90vw);margin:0 auto}.portfolio-hero{padding:72px 0 36px}.portfolio-eyebrow{display:flex;align-items:center;gap:10px;color:${colors.tealText};font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.portfolio-eyebrow:before{content:"";width:28px;height:2px;background:currentColor}.portfolio-hero h1{font-size:clamp(42px,6vw,74px);line-height:1;letter-spacing:-.055em;margin:18px 0}.portfolio-hero p{max-width:680px;color:${colors.inkMuted};font-size:18px;line-height:1.65}.portfolio-groups{padding-bottom:76px}.portfolio-group{padding:28px 0 48px}.portfolio-group>header{display:flex;align-items:end;justify-content:space-between;border-bottom:1px solid ${colors.line};padding-bottom:16px;margin-bottom:20px}.portfolio-group>header h2{font-size:30px;letter-spacing:-.03em;margin:0}.portfolio-group>header span{color:${colors.inkMuted};font-size:13px}.portfolio-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.portfolio-card{position:relative;display:flex;flex-direction:column;overflow:hidden;background:#fff;border:1px solid ${colors.line};border-radius:14px;min-width:0;transition:transform .2s,box-shadow .2s}.portfolio-card:hover,.portfolio-card:focus-within{transform:translateY(-4px);box-shadow:0 14px 30px rgba(17,30,48,.1)}.portfolio-card-link{position:absolute;inset:0;z-index:3}.portfolio-card-link:focus-visible{outline:3px solid ${colors.teal};outline-offset:-3px}.portfolio-card-media{position:relative;aspect-ratio:1.5;background:${colors.navy};overflow:hidden}.portfolio-card-media img{width:100%;height:100%;object-fit:cover;display:block}.portfolio-card-media>span{position:absolute;right:12px;bottom:12px;padding:6px 9px;border:1px solid rgba(255,255,255,.25);border-radius:999px;background:rgba(8,18,31,.72);color:#fff;font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.portfolio-card-body{display:flex;flex-direction:column;flex:1;padding:20px}.project-status{margin-bottom:16px;color:var(--status-color)}.project-status>div{display:flex;justify-content:space-between;margin-bottom:6px;font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.project-status i{display:block;height:4px;border-radius:999px;background:#e5e9ea;overflow:hidden}.project-status i:after{content:"";display:block;width:var(--status-width);height:100%;border-radius:inherit;background:var(--status-color)}.portfolio-tag{margin:0;color:${colors.tealText};font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.portfolio-card h3{font-size:22px;line-height:1.16;letter-spacing:-.025em;margin:8px 0}.portfolio-description{color:${colors.inkMuted};font-size:14px;line-height:1.5;margin:0}.portfolio-open{margin-top:auto;padding-top:16px;color:${colors.tealText};font-size:13px}
        @media(max-width:767px){.portfolio-shell{width:94vw}.portfolio-hero{padding:30px 0 16px}.portfolio-hero h1{font-size:38px;margin:12px 0}.portfolio-hero p{font-size:14px;line-height:1.45;margin-bottom:0}.portfolio-group{padding:16px 0 28px}.portfolio-group>header{padding-bottom:9px;margin-bottom:10px}.portfolio-group>header h2{font-size:21px}.portfolio-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.portfolio-card{border-radius:9px}.portfolio-card-media{aspect-ratio:2.05}.portfolio-card-media>span{right:6px;bottom:6px;padding:4px 6px;font-size:6px}.portfolio-card-body{padding:9px 10px 10px}.project-status{margin-bottom:7px}.project-status>div{font-size:7px;margin-bottom:4px;letter-spacing:.05em}.project-status i{height:3px}.portfolio-tag{font-size:7px;letter-spacing:.05em}.portfolio-card h3{font-size:14px;margin:5px 0}.portfolio-description{display:none}.portfolio-open{padding-top:5px;font-size:9px}.portfolio-groups{padding-bottom:34px}}
      `}</style>
    </main>
  );
}

export default function ProjectsIndexBody() {
  return <LangProvider><ProjectsIndexInner /></LangProvider>;
}
