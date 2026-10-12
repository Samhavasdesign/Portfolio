import { caseStudies } from "@/lib/work";

const SITE_URL = "https://www.samhavas.com";

export default function sitemap() {
  const caseStudyPages = caseStudies
    .filter((study) => !study.hidden)
    .map((study) => ({ url: `${SITE_URL}/work/${study.slug}` }));

  return [{ url: SITE_URL }, ...caseStudyPages];
}
