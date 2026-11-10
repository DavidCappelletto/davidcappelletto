import Home from "./_home";
import { alternatesFor } from "./i18n";

export const metadata = {
  alternates: alternatesFor("/", "it"),
};

export default function Page() {
  return <Home />;
}
