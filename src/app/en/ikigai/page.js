import IkigaiLanding from "../../ikigai/_landing";
import { alternatesFor } from "../../i18n";

export const metadata = {
  title: "Mappa Ikigai: pre-register | David Cappelletto",
  description:
    "Eight questions, four crystals and Iki by your side: find out what is missing from your ikigai. Mappa Ikigai is coming soon, pre-register to be among the first to try it.",
  alternates: alternatesFor("/ikigai", "en"),
  openGraph: {
    title: "Mappa Ikigai: coming soon",
    description: "Is your energy going to the right place? Pre-register to be among the first to try Mappa Ikigai.",
    url: "https://davidcappelletto.it/en/ikigai",
    siteName: "David Cappelletto",
    locale: "en_US",
    type: "website",
    images: [{ url: "/projects/ikigai/cover.webp", width: 1600, height: 1000, alt: "Mappa Ikigai" }],
  },
  twitter: { card: "summary_large_image", title: "Mappa Ikigai: coming soon", images: ["/projects/ikigai/cover.webp"] },
};

export default function Page() {
  return (
    <div lang="en">
      <IkigaiLanding />
    </div>
  );
}
