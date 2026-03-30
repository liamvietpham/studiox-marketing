import aboutContent from "@/content/about.json";
import { AboutPageView } from "@/features/about/components/AboutPageView";
import { useAboutPage } from "@/features/about/hooks/useAboutPage";
import { buildCanonicalLinks, buildSeoMeta } from "@/shared/seo";

export function meta() {
  return buildSeoMeta({
    title: "About | ATELIER NORTH",
    description: aboutContent.hero.description,
    pathname: "/about",
    imageUrl: aboutContent.coverImage.url,
    siteName: aboutContent.site.name,
    keywords: "about atelier north, digital design studio, luxury brand strategy",
  });
}

export function links() {
  return buildCanonicalLinks("/about");
}

export default function About() {
  const viewModel = useAboutPage();

  return <AboutPageView {...viewModel} />;
}
