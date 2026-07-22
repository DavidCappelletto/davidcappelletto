export default function sitemap() {
  const base = "https://davidcappelletto.it";
  const caseSlugs = ["azienda-hvac", "infermiera-althea", "geofire", "maybes-shop"];
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
    ...caseSlugs.map((slug) => ({
      url: `${base}/progetti/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
