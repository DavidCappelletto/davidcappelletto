import "@fontsource-variable/dm-sans";
import "./globals.css";
import ConsentManager from "./ConsentManager";

const DESCRIPTION =
  "Siti che portano clienti e automazioni che ti ridanno tempo, per professionisti e piccole imprese. Consulente digitale ad Aviano (PN): siti web, SEO locale e automazioni AI. Interventi da €250, Mini Audit gratuito.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://davidcappelletto.it/#servizio",
      name: "David Cappelletto | Consulenza Digitale",
      url: "https://davidcappelletto.it",
      description: DESCRIPTION,
      image: "https://davidcappelletto.it/opengraph-image",
      logo: "https://davidcappelletto.it/logo.png",
      email: "contact@davidcappelletto.it",
      telephone: "+39 348 115 1160",
      priceRange: "da €250",
      address: { "@type": "PostalAddress", addressLocality: "Aviano", addressRegion: "PN", addressCountry: "IT" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Provincia di Pordenone" },
        { "@type": "AdministrativeArea", name: "Friuli-Venezia Giulia" },
        { "@type": "Country", name: "Italia" },
      ],
      availableLanguage: ["it", "en"],
      founder: { "@id": "https://davidcappelletto.it/#david" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi",
        itemListElement: [
          "Mini Audit gratuito (20 minuti)",
          "Audit e diagnosi del sito",
          "Progettazione e sviluppo siti web",
          "SEO locale",
          "Automazioni AI (n8n, WhatsApp)",
          "Strategia digitale",
          "Affiancamento",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "Person",
      "@id": "https://davidcappelletto.it/#david",
      name: "David Cappelletto",
      jobTitle: "Consulente digitale freelance",
      url: "https://davidcappelletto.it",
      email: "contact@davidcappelletto.it",
      address: { "@type": "PostalAddress", addressLocality: "Aviano", addressRegion: "PN", addressCountry: "IT" },
      knowsAbout: ["UX", "SEO locale", "Next.js", "React", "Automazioni AI", "n8n"],
      sameAs: ["https://www.linkedin.com/in/david-cappelletto-703832306/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://davidcappelletto.it/#sito",
      url: "https://davidcappelletto.it",
      name: "David Cappelletto",
      inLanguage: "it-IT",
      publisher: { "@id": "https://davidcappelletto.it/#servizio" },
    },
  ],
};

export const metadata = {
  metadataBase: new URL("https://davidcappelletto.it"),
  title: "David Cappelletto | Consulenza Digitale",
  description:
    DESCRIPTION,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "David Cappelletto | Consulenza Digitale",
    description:
      DESCRIPTION,
    url: "https://davidcappelletto.it",
    siteName: "David Cappelletto",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Cappelletto | Consulenza Digitale",
    description:
      DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ConsentManager />
        {children}
      </body>
    </html>
  );
}
