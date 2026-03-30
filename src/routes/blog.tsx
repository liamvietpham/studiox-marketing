import blogContent from "@/content/blog.json";
import { BlogPageView } from "@/features/blog/components/BlogPageView";
import { useBlogPage } from "@/features/blog/hooks/useBlogPage";
import { buildCanonicalLinks, buildSeoMeta } from "@/shared/seo";

export function meta() {
  return buildSeoMeta({
    title: "Blog | ATELIER NORTH Journal",
    description: blogContent.featuredArticle.excerpt,
    pathname: "/blog",
    imageUrl: blogContent.featuredArticle.imageUrl,
    siteName: "ATELIER NORTH",
    keywords: "design blog, architecture journal, interiors, studio insights",
  });
}

export function links() {
  return buildCanonicalLinks("/blog");
}

export default function Blog() {
  const viewModel = useBlogPage();

  return <BlogPageView {...viewModel} />;
}
