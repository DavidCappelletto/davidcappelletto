export const SITE_URL = "https://davidcappelletto.it";

/** "en" se l'indirizzo inizia con /en, altrimenti "it". */
export function langFromPath(pathname = "/") {
  return /^\/en(\/|$)/.test(pathname) ? "en" : "it";
}

/** Indirizzo nella lingua scelta: "/progetti" -> "/en/progetti", "/#contatti" -> "/en#contatti". */
export function localePath(path, lang) {
  if (lang !== "en") return path;
  if (path === "/") return "/en";
  if (path.startsWith("/#")) return "/en" + path.slice(1);
  return "/en" + path;
}

/** Stessa pagina nell'altra lingua. */
export function switchPath(pathname, to) {
  const base = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localePath(base, to);
}

/** alternates per i metadata: canonical della lingua corrente + hreflang. */
export function alternatesFor(itPath, lang) {
  const enPath = localePath(itPath, "en");
  return {
    canonical: lang === "en" ? enPath : itPath,
    languages: { "it-IT": itPath, "en": enPath, "x-default": itPath },
  };
}
