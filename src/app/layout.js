import "./globals.css";
import ConsentManager from "./ConsentManager";

export const metadata = {
  metadataBase: new URL("https://davidcappelletto.it"),
  title: "David Cappelletto | Consulenza Digitale",
  description:
    "Trasformo siti confusi in sistemi che generano richieste con UX, SEO Locale e automazioni AI.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "David Cappelletto | Consulenza Digitale",
    description:
      "Trasformo siti confusi in sistemi che generano richieste con UX, SEO Locale e automazioni AI.",
    url: "https://davidcappelletto.it",
    siteName: "David Cappelletto",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Cappelletto | Consulenza Digitale",
    description:
      "Trasformo siti confusi in sistemi che generano richieste con UX, SEO Locale e automazioni AI.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ConsentManager />
        {children}
      </body>
    </html>
  );
}
