import { caseStudies } from "./progetti/_data";
import { SITE_URL, localePath } from "./i18n";

export default function sitemap() {
  const pages = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/progetti", changeFrequency: "monthly", priority: 0.9 },
    { path: "/ikigai", changeFrequency: "weekly", priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    ...caseStudies.map((p) => ({ path: `/progetti/${p.slug}`, changeFrequency: "monthly", priority: 0.8 })),
  ];
  const url = (path, lang) => SITE_URL + (localePath(path, lang) === "/" ? "" : localePath(path, lang));
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const alternates = { languages: { "it-IT": url(path, "it"), en: url(path, "en") } };
    return [
      { url: url(path, "it"), lastModified: new Date(), changeFrequency, priority, alternates },
      { url: url(path, "en"), lastModified: new Date(), changeFrequency, priority: Math.max(0.1, priority - 0.1), alternates },
    ];
  });
}
