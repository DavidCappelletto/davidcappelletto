import Home from "../_home";
import { alternatesFor } from "../i18n";

const DESCRIPTION =
  "Websites that bring clients and automations that give you time back, for professionals and small businesses. Digital consultant in Aviano, Italy: websites, local SEO and AI automation. Projects from €250, free Mini Audit.";

export const metadata = {
  title: "David Cappelletto | Digital Consulting",
  description: DESCRIPTION,
  alternates: alternatesFor("/", "en"),
  openGraph: {
    title: "David Cappelletto | Digital Consulting",
    description: DESCRIPTION,
    url: "https://davidcappelletto.it/en",
    siteName: "David Cappelletto",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "David Cappelletto | Digital Consulting", description: DESCRIPTION },
};

export default function Page() {
  return (
    <div lang="en">
      <Home />
    </div>
  );
}
