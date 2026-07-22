import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, localizeCaseStudy } from "../_data";
import ProjectPageBody from "../_project-page-body";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const localized = localizeCaseStudy(cs, "it");
  return {
    title: `${localized.title} | David Cappelletto`,
    description: localized.intro,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return <ProjectPageBody cs={cs} next={next} />;
}
