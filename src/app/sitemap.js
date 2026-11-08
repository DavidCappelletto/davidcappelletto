import { caseStudies } from "./progetti/_data";

export default function sitemap() {
  const base = "https://davidcappelletto.it";
  const caseSlugs = caseStudies.map((project) => project.slug);
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/progetti`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/ikigai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...caseSlugs.map((slug) => ({
      url: `${base}/progetti/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
