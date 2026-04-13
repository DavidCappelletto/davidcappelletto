import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "David Cappelletto | Consulenza Digitale",
  description:
    "Trasformo siti confusi in sistemi che generano richieste con UX, SEO Locale e automazioni AI.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="h-full">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBWPX09G1C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MBWPX09G1C');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}