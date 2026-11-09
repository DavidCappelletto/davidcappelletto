"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Replaces ONLY the original homepage hero. The site's existing navbar,
 * translations, section order, contact tracking and page content are preserved.
 * Uses /hero-bg.jpg, /logo.png and /profile.png already in /public.
 */
export default function CinematicHero({ t, lang, onWhatsAppClick }) {
  const text = lang === "en" ? {
    micro: "Strategy · Experience · Technology", stage: "Illustration of design, web and AI automation",
    system: "One connected system", caption: "From a problem to a simpler experience.",
    contact: "One contact, always.", pause: "Pause", resume: "Resume", discover: "Discover more ↓",
    pauseLabel: "Pause animations", resumeLabel: "Resume animations", reduced: "Motion reduced",
  } : {
    micro: "Strategia · Esperienza · Tecnologia", stage: "Rappresentazione illustrativa di design, web e automazioni AI",
    system: "Un unico sistema", caption: "Dal problema a un'esperienza più semplice.",
    contact: "Un referente, sempre.", pause: "Pausa", resume: "Riprendi", discover: "Scopri di più ↓",
    pauseLabel: "Metti in pausa le animazioni", resumeLabel: "Riprendi le animazioni", reduced: "Movimento ridotto",
  };
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const motionEnabled = !paused && !reducedMotion;

  useEffect(() => {
    if (!motionEnabled) {
      stageRef.current?.style.setProperty("--cin-x", "0px");
      stageRef.current?.style.setProperty("--cin-y", "0px");
    }
    if (!videoRef.current) return;
    if (motionEnabled) {
      // Browsers may reject autoplay; the static background remains visible.
      videoRef.current.play()?.catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [motionEnabled]);

  const onMove = (event) => {
    if (!motionEnabled || !stageRef.current || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
    stageRef.current.style.setProperty("--cin-x", `${x.toFixed(1)}px`);
    stageRef.current.style.setProperty("--cin-y", `${y.toFixed(1)}px`);
  };

  const onLeave = () => {
    stageRef.current?.style.setProperty("--cin-x", "0px");
    stageRef.current?.style.setProperty("--cin-y", "0px");
  };

  return (
    <section
      id="top"
      aria-labelledby="cin-hero-title"
      className={`cin-hero${motionEnabled ? "" : " cin-paused"}`}
    >
      <video
        ref={videoRef}
        className="cin-ambient"
        aria-hidden="true"
        muted
        playsInline
        loop
        preload="none"
        poster="/hero-bg.jpg"
      >
        <source src="/cinematic-loop.mp4" type="video/mp4" />
      </video>
      <div className="cin-photo" aria-hidden="true" />
      <div className="cin-shade" aria-hidden="true" />
      <div className="cin-grid" aria-hidden="true" />
      <div className="cin-aura" aria-hidden="true" />

      <div className="cin-shell cin-layout">
        <div className="cin-copy">
          <div className="cin-kicker cin-enter-1">{t.heroBadge}</div>
          <h1 id="cin-hero-title" className="cin-title cin-enter-1">
            <span>{t.heroTitleA}</span>
            <span className="cin-accent">{t.heroTitleB}.</span>
          </h1>
          <p className="cin-desc cin-enter-2">{t.heroSubtitle}</p>
          <div className="cin-actions cin-enter-3">
            <button type="button" className="cin-primary" onClick={onWhatsAppClick}>
              <span>{t.heroBtn1}</span>
              <span aria-hidden="true">↗</span>
            </button>
            <a className="cin-secondary" href="#come-lavoro">{t.heroBtn2}</a>
          </div>
          <p className="cin-micro cin-enter-3">{text.micro}</p>
        </div>

        <div className="cin-stage" ref={stageRef} onPointerMove={onMove} onPointerLeave={onLeave} role="group" aria-label={text.stage}>
          <div className="cin-orbit" aria-hidden="true" />
          <div className="cin-orbit cin-orbit-two" aria-hidden="true" />
          <div className="cin-float-label cin-float-top" aria-hidden="true">
            <strong>UX / WEB / AI</strong><small>{text.system}</small>
          </div>
          <div className="cin-glass">
            <div className="cin-card-heading">
              <div className="cin-suite">
                <img src="/logo.png" alt="" width="23" height="23" decoding="async" />
                <strong>Digital Suite</strong>
              </div>
              <span className="cin-online"><i /> Connected</span>
            </div>
            <div className="cin-card-content">
              <p className="cin-tiny">Creative systems</p>
              <h2>Design. Build. Automate.</h2>
              <p className="cin-card-caption">{text.caption}</p>
              <div className="cin-flow" aria-hidden="true">
                <div className="cin-node"><span>✦</span>Design</div>
                <div className="cin-connection" />
                <div className="cin-node"><span>⌘</span>Web</div>
                <div className="cin-connection" />
                <div className="cin-node"><span>↗</span>AI</div>
              </div>
              <div className="cin-info" aria-hidden="true">
                <div className="cin-info-block">
                  <p>Digital experience</p>
                  <div className="cin-chart"><i /><i /><i /><i /><i /><i /></div>
                </div>
                <div className="cin-info-block">
                  <p>Connected workflows</p>
                  <div className="cin-lines"><i /><i /><i /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="cin-float-label cin-float-bottom" aria-hidden="true">
            <img src="/profile.png" alt="" width="26" height="26" loading="lazy" decoding="async" />
            <strong>{text.contact}</strong>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="cin-motion-switch"
        onClick={() => setPaused((x) => !x)}
        disabled={reducedMotion}
        aria-label={reducedMotion ? text.reduced : paused ? text.resumeLabel : text.pauseLabel}
        aria-pressed={!motionEnabled}
      >
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        {reducedMotion ? text.reduced : paused ? text.resume : text.pause}
      </button>
      <a className="cin-scroll" href="#come-lavoro">{text.discover}</a>
    </section>
  );
}
