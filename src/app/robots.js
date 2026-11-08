export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: "https://davidcappelletto.it/sitemap.xml",
    host: "https://davidcappelletto.it",
  };
}
