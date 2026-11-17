import IkigaiLanding from "./_landing";

export const metadata = {
  title: "Mappa Ikigai: scopri cosa manca nel tuo ikigai | David Cappelletto",
  description:
    "Otto domande, quattro cristalli e Iki che ti accompagna: scopri cosa manca nel tuo ikigai. Provala gratis, senza registrazione.",
  alternates: { canonical: "/ikigai" },
  openGraph: {
    title: "Mappa Ikigai: le tue energie vanno nel posto giusto?",
    description: "Otto domande, quattro cristalli e missioni concrete. Provala gratis, senza registrazione.",
    url: "https://davidcappelletto.it/ikigai",
    siteName: "David Cappelletto",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/projects/ikigai/cover.webp", width: 1600, height: 1000, alt: "Mappa Ikigai" }],
  },
  twitter: { card: "summary_large_image", title: "Mappa Ikigai: le tue energie vanno nel posto giusto?", images: ["/projects/ikigai/cover.webp"] },
};

export default function Page() {
  return <IkigaiLanding />;
}
