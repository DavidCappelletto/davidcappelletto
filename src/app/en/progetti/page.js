import ProjectsIndexBody from "../../progetti/_projects-index-body";
import { alternatesFor } from "../../i18n";

export const metadata = {
  title: "Projects | David Cappelletto, Digital Consulting",
  description:
    "Real projects, told the way they were made: diagnosis, choices, execution and results. UX, local SEO, web development and AI workflows.",
  alternates: alternatesFor("/progetti", "en"),
};

export default function Page() {
  return (
    <div lang="en">
      <ProjectsIndexBody />
    </div>
  );
}
