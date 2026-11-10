"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "dc-lang";
const EVENT = "dc-lang-change";

function readStored() {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "en" || v === "it" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Lingua del sito condivisa tra tutte le pagine.
 * Ordine: ?lang=en|it nell'URL, poi la scelta salvata, poi italiano.
 */
export function useSiteLang() {
  const [lang, setLangState] = useState("it");

  useEffect(() => {
    let initial = null;
    try {
      const q = new URLSearchParams(window.location.search).get("lang");
      if (q === "en" || q === "it") initial = q;
    } catch {}
    initial = initial || readStored() || "it";
    if (initial !== "it") setLangState(initial);
    try {
      window.localStorage.setItem(KEY, initial);
    } catch {}

    const onChange = (e) => setLangState(e.detail);
    const onStorage = (e) => {
      if (e.key === KEY && (e.newValue === "it" || e.newValue === "en")) setLangState(e.newValue);
    };
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (next !== "it" && next !== "en") return;
    try {
      window.localStorage.setItem(KEY, next);
    } catch {}
    setLangState(next);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: next }));
  }, []);

  return [lang, setLang];
}
