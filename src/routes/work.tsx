import workContent from "@/content/work.json";
import { WorkPageView } from "@/features/work/components/WorkPageView";
import { useWorkPage } from "@/features/work/hooks/useWorkPage";
import { buildCanonicalLinks, buildSeoMeta } from "@/shared/seo";

export function meta() {
  return buildSeoMeta({
    title: "Work | ATELIER NORTH",
    description: workContent.site.description,
    pathname: "/work",
    imageUrl: workContent.projects[0]?.imageUrl,
    siteName: workContent.site.name,
    keywords: "portfolio, case studies, architecture projects, digital branding work",
  });
}

export function links() {
  return buildCanonicalLinks("/work");
}

export default function Work() {
  const viewModel = useWorkPage();

  return <WorkPageView {...viewModel} />;
}
