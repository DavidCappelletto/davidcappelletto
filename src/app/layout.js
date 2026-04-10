import "./globals.css";

export const metadata = {
  title: "David Cappelletto | Consulenza Digitale",
  description:
    "Trasformo siti confusi in sistemi che generano richieste con UX, SEO Locale e automazioni AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}