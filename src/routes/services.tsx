import servicesContent from "@/content/services.json";
import { ServicesPageView } from "@/features/services/components/ServicesPageView";
import { useServicesPage } from "@/features/services/hooks/useServicesPage";
import { buildCanonicalLinks, buildSeoMeta } from "@/shared/seo";

export function meta() {
  return buildSeoMeta({
    title: "Services | ATELIER NORTH",
    description: servicesContent.hero.description,
    pathname: "/services",
    imageUrl: servicesContent.services[0]?.imageUrl,
    siteName: servicesContent.site.name,
    keywords: "architecture design services, interior curation, urban planning, sustainable strategy",
  });
}

export function links() {
  return buildCanonicalLinks("/services");
}

export default function Services() {
  const viewModel = useServicesPage();

  return <ServicesPageView {...viewModel} />;
}
