import FormaLanding from "./_landing";

export const metadata = {
  title: "Forma — pre-registrati alla beta | David Cappelletto",
  description:
    "Schede stropicciate o perse? Forma ti guida in palestra un esercizio alla volta, con timer di recupero, circuiti su misura e calendario delle sessioni. Pre-registrati per provare la beta tra i primi.",
  alternates: { canonical: "/forma" },
  openGraph: {
    title: "Forma — entra in Forma",
    description: "La scheda della palestra che ti guida un esercizio alla volta. Pre-registrati alla beta.",
    url: "https://davidcappelletto.it/forma",
    siteName: "David Cappelletto",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/forma/og.jpg", width: 1200, height: 630, alt: "Forma" }],
  },
  twitter: { card: "summary_large_image", title: "Forma — entra in Forma", images: ["/forma/og.jpg"] },
};

export default function Page() {
  return <FormaLanding />;
}
