import ProjectsIndexBody from "./_projects-index-body";
import { alternatesFor } from "../i18n";

export const metadata = {
  title: "Progetti | David Cappelletto, Consulenza Digitale",
  description:
    "Progetti reali, raccontati per come sono stati fatti: diagnosi, scelte, esecuzione e risultati. UX, SEO locale, sviluppo web e workflow AI.",
  alternates: alternatesFor("/progetti", "it"),
};

export default function ProjectsIndexPage() {
  return <ProjectsIndexBody />;
}
