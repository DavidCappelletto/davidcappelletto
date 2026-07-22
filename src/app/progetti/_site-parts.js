"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { colors } from "./_data";
import { trackEvent } from "../analytics";

const nav = {
  it: {
    navLinks: ["Progetti", "Come lavoro", "Servizi"],
    ctaMini: "Mini Audit Gratuito",
    contacts: "Contatti",
    talk: "Parliamoci.",
    talkSub: "Raccontami obiettivo, contesto e priorità.",
    form: {
      name: "Nome e Cognome",
      email: "Email",
      activity: "Tipo di attività",
      budget: "Seleziona budget",
      msg: "Scrivi qui il tuo messaggio",
      submit: "Invia richiesta",
      success: "Messaggio inviato! Ti rispondo entro 24 ore.",
      error: "Qualcosa è andato storto. Riprova o scrivimi su WhatsApp.",
    },
  },
  en: {
    navLinks: ["Real cases", "How I work", "Services"],
    ctaMini: "Free Mini Audit",
    contacts: "Contact",
    talk: "Let's talk.",
    talkSub: "Tell me your goal, context and priorities.",
    form: {
      name: "Full name",
      email: "Email",
      activity: "Type of business",
      budget: "Select budget",
      msg: "Write your message here",
      submit: "Send request",
      success: "Message sent! I'll reply within 24 hours.",
      error: "Something went wrong. Try again or write me on WhatsApp.",
    },
  },
};

function hasFormspreeSubmissionErrors(errors) {
  if (!errors) return false;
  return errors.getFormErrors().length > 0 || errors.getAllFieldErrors().length > 0;
}

export function SiteHeader() {
  const [lang, setLang] = useState("it");
  const [scrolled, setScrolled] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = nav[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setLogoRotation(window.scrollY * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#casi-reali", label: t.navLinks[0] },
    { href: "/#come-lavoro", label: t.navLinks[1] },
    { href: "/#servizi", label: t.navLinks[2] },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        background: scrolled ? "rgba(17,30,48,.97)" : colors.navyDeep,
        transition: "all .3s ease",
      }}
    >
      <div style={{ width: "min(1200px, 89vw)", margin: "0 auto", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontSize: 19, fontWeight: 700, color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
          <img src="/logo.png" alt="Logo David Cappelletto" style={{ height: 34, width: "auto", filter: "invert(1)", transform: `rotate(${logoRotation}deg)`, transition: "transform 0.05s linear" }} />
          <span>David Cappelletto</span>
        </Link>

        <div className="desktop-nav nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div className="nav-lang-desktop" style={{ border: "1px solid rgba(255,255,255,.4)", borderRadius: 999, padding: 4, fontSize: 13 }}>
            <button style={{ border: "none", borderRadius: 999, padding: "6px 12px", background: lang === "it" ? "#fff" : "transparent", color: lang === "it" ? colors.ink : "#fff", cursor: "pointer" }} onClick={() => setLang("it")}>IT</button>
            <button style={{ border: "none", borderRadius: 999, padding: "6px 12px", background: lang === "en" ? "#fff" : "transparent", color: lang === "en" ? colors.ink : "#fff", cursor: "pointer" }} onClick={() => setLang("en")}>EN</button>
          </div>
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} style={{ color: "rgba(255,255,255,.95)", textDecoration: "none", fontSize: 14 }}>{item.label}</a>
          ))}
          <a href="/#mini-audit" style={{ background: colors.teal, color: "#fff", borderRadius: 999, textDecoration: "none", padding: "12px 20px", fontSize: 14, fontWeight: 700 }}>{t.ctaMini}</a>
        </div>

        <button
          className="mobile-toggle nav-hamburger"
          style={{ border: "none", background: "transparent", color: "#fff", fontSize: 28, cursor: "pointer", width: 40, height: 40, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Apri menu"
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-panel" style={{ borderTop: "1px solid rgba(255,255,255,.15)", background: "rgba(17,30,48,.97)", paddingBottom: 18 }}>
          <div style={{ width: "min(1200px, 89vw)", margin: "0 auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 14 }}>
            <div style={{ border: "1px solid rgba(255,255,255,.4)", borderRadius: 999, padding: 4, fontSize: 13, width: "fit-content" }}>
              <button style={{ border: "none", borderRadius: 999, padding: "6px 12px", background: lang === "it" ? "#fff" : "transparent", color: lang === "it" ? colors.ink : "#fff", cursor: "pointer" }} onClick={() => setLang("it")}>IT</button>
              <button style={{ border: "none", borderRadius: 999, padding: "6px 12px", background: lang === "en" ? "#fff" : "transparent", color: lang === "en" ? colors.ink : "#fff", cursor: "pointer" }} onClick={() => setLang("en")}>EN</button>
            </div>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ color: "rgba(255,255,255,.95)", textDecoration: "none", fontSize: 16 }}>{item.label}</a>
            ))}
            <a href="/#mini-audit" onClick={() => setMobileMenuOpen(false)} style={{ marginTop: 6, background: colors.teal, color: "#fff", borderRadius: 999, textDecoration: "none", padding: "12px 20px", fontSize: 14, fontWeight: 700, width: "fit-content" }}>{t.ctaMini}</a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 860px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-hamburger {
            display: inline-flex !important;
          }
        }
        @media (min-width: 861px) {
          .nav-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

export function SiteFooter() {
  const t = nav.it;
  return (
    <footer style={{ background: colors.navyDeep, color: "#fff", padding: "34px 0 16px" }}>
      <div className="footer-grid" style={{ width: "min(1200px, 89vw)", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <img src="/logo.png" alt="Logo David Cappelletto" style={{ height: 28, width: "auto", filter: "invert(1)" }} />
          <span style={{ color: "#fff", fontWeight: 700 }}>David Cappelletto</span>
        </div>

        <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 14, color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
          <a href="/#casi-reali" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.navLinks[0]}</a>
          <a href="/#come-lavoro" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.navLinks[1]}</a>
          <a href="/#servizi" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.navLinks[2]}</a>
          <a href="/#contatti" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{t.contacts}</a>
        </div>

        <div style={{ textAlign: "left" }}>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: 12 }}>Aviano (PN) · Lavoro anche da remoto</p>
          <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.3)", fontSize: 12 }}>UX · SEO Locale · Automazioni AI</p>
          <a href="https://www.iubenda.com/privacy-policy/65493035" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 6, color: "rgba(255,255,255,0.3)", fontSize: 12 }}>Privacy Policy</a>
        </div>
      </div>

      <div style={{ width: "min(1200px, 89vw)", margin: "14px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.35)", fontSize: 12 }}>© 2026 David Cappelletto</p>
      </div>

      <a
        href="https://wa.me/393481151160"
        onClick={() => trackEvent("click_whatsapp")}
        style={{ position: "fixed", right: 20, bottom: 20, zIndex: 40, width: 58, height: 58, borderRadius: 999, background: "#25D366", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: 28, boxShadow: "0 10px 20px rgba(0,0,0,.2)" }}
        aria-label="Apri WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.886a.5.5 0 0 0 .619.608l6.188-1.615A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.428l-.36-.214-3.733.974.999-3.648-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
      </a>
    </footer>
  );
}

export function SiteContactSection() {
  const [formState, handleFormSubmit] = useForm("xbdpngvd");
  const t = nav.it;

  const handleTrackedFormSubmit = async (event) => {
    await handleFormSubmit(event);
    trackEvent("form_inviato");
  };

  return (
    <section
      id="contatti"
      style={{
        backgroundImage: `linear-gradient(rgba(17,30,48,0.78), rgba(17,30,48,0.78)), url(/contact-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
      }}
    >
      <div style={{ width: "min(1200px, 89vw)", margin: "0 auto" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", background: "#fff", border: `1px solid ${colors.line}`, borderRadius: 18, padding: 28 }}>
          <span style={{ display: "inline-block", background: "#fff", color: colors.inkMuted, padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{t.contacts}</span>
          <h2 style={{ margin: "20px 0 0", fontSize: 30, fontWeight: 800 }}>{t.talk}</h2>
          <p style={{ marginTop: 10, color: colors.inkMuted }}>{t.talkSub}</p>

          <div style={{ display: "flex", marginTop: 24, justifyContent: "center", gap: 32, paddingBottom: 22, marginBottom: 22, borderBottom: `1px solid ${colors.line}` }}>
            <a href="https://wa.me/393481151160" onClick={() => trackEvent("click_whatsapp")} aria-label="WhatsApp" style={{ color: "#25D366", display: "inline-flex", opacity: 0.85, transition: "opacity .2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.886a.5.5 0 0 0 .619.608l6.188-1.615A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.428l-.36-.214-3.733.974.999-3.648-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            </a>
            <a href="mailto:cappellettodavid@gmail.com" aria-label="Email" style={{ color: colors.navy, display: "inline-flex", opacity: 0.85, transition: "opacity .2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/david-cappelletto-703832306/" aria-label="LinkedIn" style={{ color: "#0A66C2", display: "inline-flex", opacity: 0.85, transition: "opacity .2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          <form onSubmit={handleTrackedFormSubmit}>
            {formState.succeeded ? (
              <p style={{ margin: 0, color: colors.teal, fontSize: 16, fontWeight: 600, lineHeight: 1.5 }}>{t.form.success}</p>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
                  <input name="nome" type="text" required style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box" }} placeholder={t.form.name} />
                  <input name="email" type="email" required style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box" }} placeholder={t.form.email} />
                  <input name="tipo_attivita" type="text" style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box" }} placeholder={t.form.activity} />
                  <select name="budget" required style={{ border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box" }} defaultValue="">
                    <option value="" disabled>{t.form.budget}</option>
                    <option value="€250-500">€250-500</option>
                    <option value="€800-1.600">€800-1.600</option>
                    <option value="€2.700-5.000">€2.700-5.000</option>
                    <option value="Oltre €5.000">Oltre €5.000</option>
                  </select>
                  <textarea name="messaggio" required style={{ minHeight: 144, border: `1px solid ${colors.line}`, borderRadius: 8, padding: "12px 14px", fontSize: 15, width: "100%", boxSizing: "border-box" }} placeholder={t.form.msg} />
                </div>
                {hasFormspreeSubmissionErrors(formState.errors) && (
                  <p style={{ margin: "14px 0 0", color: "#c0392b", fontSize: 14, lineHeight: 1.5 }}>{t.form.error}</p>
                )}
                <button type="submit" disabled={formState.submitting} style={{ marginTop: 16, border: "none", borderRadius: 999, background: colors.navy, color: "#fff", padding: "12px 24px", fontWeight: 700, cursor: formState.submitting ? "not-allowed" : "pointer", opacity: formState.submitting ? 0.65 : 1 }}>
                  {t.form.submit}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function ImageWithFallback({ src, alt, style }) {
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
