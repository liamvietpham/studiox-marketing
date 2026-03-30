import pricingContent from "@/content/pricing.json";
import { PricingPageView } from "@/features/pricing/components/PricingPageView";
import { usePricingPage } from "@/features/pricing/hooks/usePricingPage";
import { buildCanonicalLinks, buildSeoMeta } from "@/shared/seo";

export function meta() {
  return buildSeoMeta({
    title: "Pricing | ATELIER NORTH",
    description: pricingContent.hero.description,
    pathname: "/pricing",
    imageUrl: pricingContent.imageCta.imageUrl,
    siteName: pricingContent.site.name,
    keywords: "pricing, design packages, digital studio pricing, web design retainer",
  });
}

export function links() {
  return buildCanonicalLinks("/pricing");
}

export default function Pricing() {
  const viewModel = usePricingPage();

  return <PricingPageView {...viewModel} />;
}
