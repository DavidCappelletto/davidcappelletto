"use client";

/**
 * Hero della home: persona in primo piano e lavori veri accanto.
 * Usa /hero-bg.jpg (foto) e gli screenshot reali in /hero/.
 */
export default function CinematicHero({ t, onWhatsAppClick }) {
  const work = (t.caseCards || []).slice(0, 3);

  return (
    <section id="top" aria-labelledby="hero-title" className="hp-hero">
      <div className="hp-photo">
        <img src="/hero-bg.jpg" alt="David Cappelletto" width="1280" height="720" fetchPriority="high" decoding="async" />
      </div>
      <div className="hp-fade" aria-hidden="true" />

      <div className="hp-shell">
        <div className="hp-copy">
          <p className="hp-kicker">{t.heroBadge}</p>
          <h1 id="hero-title" className="hp-title">
            <span>{t.heroTitleA}</span>
            <span className="hp-accent">{t.heroTitleB}.</span>
          </h1>
          <p className="hp-desc">{t.heroSubtitle}</p>
          <div className="hp-actions">
            <button type="button" className="hp-primary" onClick={onWhatsAppClick}>
              {t.heroBtn1} <span aria-hidden="true">↗</span>
            </button>
            <a className="hp-secondary" href="#come-lavoro">{t.heroBtn2}</a>
          </div>
          <p className="hp-note">{t.heroNote}</p>
          {work.length > 0 && (
            <div className="hp-work">
              <span className="hp-work-label">{t.heroWorkLabel}</span>
              <ul>
                {work.map((c) => (
                  <li key={c.slug}>
                    <a href={`/progetti/${c.slug}`}>{c.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="hp-screens" aria-hidden="true">
        <figure className="hp-shot hp-shot-diama">
          <div className="hp-bar"><i /><i /><i /></div>
          <img src="/hero/diama.webp" alt="" width="960" height="600" loading="eager" decoding="async" />
        </figure>
        <figure className="hp-phone">
          <img src="/hero/forma.webp" alt="" width="480" height="935" loading="eager" decoding="async" />
        </figure>
      </div>
    </section>
  );
}
