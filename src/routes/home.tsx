import homeContent from "@/content/home.json";
import { HomePageView } from "@/features/home/components/HomePageView";
import { useHomePage } from "@/features/home/hooks/useHomePage";
import { buildCanonicalLinks, buildSeoMeta } from "@/shared/seo";

export function meta() {
  return buildSeoMeta({
    title: "ATELIER NORTH | Digital Luxury Studio",
    description: homeContent.site.description,
    pathname: "/",
    imageUrl: homeContent.hero.imageUrl,
    siteName: homeContent.site.name,
    keywords: "digital studio, luxury web design, branding, atelier north",
  });
}

export function links() {
  return buildCanonicalLinks("/");
}

export default function Home() {
  const viewModel = useHomePage();

  return <HomePageView {...viewModel} />;
}
