import PrivacyBody from "./_body";
import { alternatesFor } from "../i18n";

export const metadata = {
  title: "Privacy e cookie | David Cappelletto",
  description:
    "Quali dati raccoglie davidcappelletto.it, perché, con quali servizi e per quanto tempo. Come gestire i cookie e i tuoi diritti.",
  alternates: alternatesFor("/privacy", "it"),
};

export default function PrivacyPage() {
  return <PrivacyBody />;
}
