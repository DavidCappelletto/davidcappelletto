"use client";

import { useEffect, useState } from "react";
import Clarity from "@microsoft/clarity";

const CONSENT_KEY = "dc_analytics_consent";
const GA_ID = "G-MBWPX09G1C";
const CLARITY_ID = "wbmbij045g";

function loadAnalytics() {
  if (typeof window === "undefined" || window.__dcAnalyticsLoaded) return;
  window.__dcAnalyticsLoaded = true;

  // Google Analytics (GA4)
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);

  // Microsoft Clarity
  Clarity.init(CLARITY_ID);
  window.__dcClarityReady = true;
}

export default function ConsentManager() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted") {
      loadAnalytics();
      setStatus("decided");
    } else if (saved === "rejected") {
      setStatus("decided");
    } else {
      setStatus("pending");
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    loadAnalytics();
    setStatus("decided");
  };

  const reject = () => {
    window.localStorage.setItem(CONSENT_KEY, "rejected");
    setStatus("decided");
  };

  if (status !== "pending") return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 18,
        right: 18,
        bottom: 18,
        maxWidth: 420,
        margin: "0 auto",
        zIndex: 200,
        borderRadius: 12,
        border: "1px solid #D0DDE8",
        background: "#fff",
        padding: 18,
        boxShadow: "0 10px 24px rgba(0,0,0,.15)",
      }}
    >
      <p style={{ margin: 0, color: "#4A5F78", fontSize: 13.5, lineHeight: 1.55 }}>
        Usiamo cookie tecnici necessari al funzionamento del sito e, solo con il tuo consenso,
        cookie di analisi (Google Analytics, Microsoft Clarity) per capire come viene usato il
        sito.{" "}
        <a
          href="https://www.iubenda.com/privacy-policy/65493035"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1E7E73" }}
        >
          Privacy Policy
        </a>
      </p>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button
          onClick={accept}
          style={{
            border: "none",
            borderRadius: 999,
            background: "#2BA89A",
            color: "#fff",
            padding: "10px 16px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Accetta
        </button>
        <button
          onClick={reject}
          style={{
            border: "1px solid #2BA89A",
            borderRadius: 999,
            background: "transparent",
            color: "#1E7E73",
            padding: "10px 16px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Rifiuta
        </button>
      </div>
    </div>
  );
}
