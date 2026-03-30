import contactContent from "@/content/contact.json";
import { ContactPageView } from "@/features/contact/components/ContactPageView";
import { useContactPage } from "@/features/contact/hooks/useContactPage";
import { buildCanonicalLinks, buildSeoMeta } from "@/shared/seo";

export function meta() {
  return buildSeoMeta({
    title: "Contact | ATELIER NORTH",
    description:
      "Start a conversation with ATELIER NORTH for architecture, digital design, and strategic brand projects.",
    pathname: "/contact",
    imageUrl: contactContent.map.imageUrl,
    siteName: "ATELIER NORTH",
    keywords: "contact atelier north, project inquiry, design consultation",
  });
}

export function links() {
  return buildCanonicalLinks("/contact");
}

export default function Contact() {
  const viewModel = useContactPage();

  return <ContactPageView {...viewModel} />;
}
