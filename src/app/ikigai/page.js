import IkigaiLanding from "./_landing";

export const metadata = {
  title: "Mappa Ikigai: pre-registrati | David Cappelletto",
  description:
    "Otto domande, quattro cristalli e Iki che ti accompagna: scopri cosa manca nel tuo ikigai. Mappa Ikigai è in arrivo, pre-registrati per provarla tra i primi.",
  alternates: { canonical: "/ikigai" },
  openGraph: {
    title: "Mappa Ikigai: in arrivo",
    description: "Le tue energie vanno nel posto giusto? Pre-registrati per provare Mappa Ikigai tra i primi.",
    url: "https://davidcappelletto.it/ikigai",
    siteName: "David Cappelletto",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/projects/ikigai/cover.webp", width: 1600, height: 1000, alt: "Mappa Ikigai" }],
  },
  twitter: { card: "summary_large_image", title: "Mappa Ikigai: in arrivo", images: ["/projects/ikigai/cover.webp"] },
};

export default function Page() {
  return <IkigaiLanding />;
}
