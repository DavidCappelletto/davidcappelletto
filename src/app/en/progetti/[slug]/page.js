import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, localizeCaseStudy } from "../../../progetti/_data";
import ProjectPageBody from "../../../progetti/_project-page-body";
import { alternatesFor } from "../../../i18n";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const localized = localizeCaseStudy(cs, "en");
  return {
    title: `${localized.title} | David Cappelletto`,
    description: localized.intro,
    alternates: alternatesFor(`/progetti/${cs.slug}`, "en"),
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return (
    <div lang="en">
      <ProjectPageBody cs={cs} next={next} />
    </div>
  );
}
