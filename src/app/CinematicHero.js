"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Replaces ONLY the original homepage hero. The site's existing navbar,
 * translations, section order, contact tracking and page content are preserved.
 * Uses /hero-bg.jpg, /logo.png and /profile.png already in /public.
 */
export default function CinematicHero({ t, lang, onWhatsAppClick }) {
  const text = lang === "en" ? {
    stage: "My approach", pause: "Pause", resume: "Resume", discover: "Discover more ↓",
    pauseLabel: "Pause animations", resumeLabel: "Resume animations", reduced: "Motion reduced",
  } : {
    stage: "Il mio approccio", pause: "Pausa", resume: "Riprendi", discover: "Scopri di più ↓",
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
        </div>

        <div className="cin-stage" ref={stageRef} onPointerMove={onMove} onPointerLeave={onLeave} role="group" aria-label={text.stage}>
          <div className="cin-orbit" aria-hidden="true" />
          <div className="cin-orbit cin-orbit-two" aria-hidden="true" />
          <div className="cin-glass">
            <p className="cin-tiny">{t.approach}</p>
            <p className="cin-quote">{t.quote}</p>
            <div className="cin-stats">
              <div className="cin-stat">
                <strong>{t.stat1Value}</strong>
                <span>{t.stat1}</span>
              </div>
              <div className="cin-stat">
                <strong>1:1</strong>
                <span>{t.stat2}</span>
              </div>
            </div>
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
