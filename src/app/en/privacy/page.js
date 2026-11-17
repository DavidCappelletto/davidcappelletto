import PrivacyBody from "../../privacy/_body";
import { alternatesFor } from "../../i18n";

export const metadata = {
  title: "Privacy and cookies | David Cappelletto",
  description:
    "What data davidcappelletto.it collects, why, with which services and for how long. How to manage cookies and your rights.",
  alternates: alternatesFor("/privacy", "en"),
};

export default function Page() {
  return (
    <div lang="en">
      <PrivacyBody />
    </div>
  );
}
