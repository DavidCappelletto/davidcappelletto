"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { langFromPath, switchPath } from "./i18n";

/**
 * La lingua dipende dall'indirizzo: /en/... è inglese, il resto italiano.
 * Così ogni pagina arriva già tradotta dal server, senza cambi dopo il caricamento.
 * setLang porta alla stessa pagina nell'altra lingua.
 */
export function useSiteLang() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const lang = langFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (next) => {
      if (next === lang || (next !== "it" && next !== "en")) return;
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.push(switchPath(pathname, next) + hash);
    },
    [lang, pathname, router]
  );

  return [lang, setLang];
}
