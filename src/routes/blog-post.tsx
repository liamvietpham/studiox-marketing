import blogPostsCollection from "@/content/blog-posts.json";
import { BlogPostPageView } from "@/features/blog-post/components/BlogPostPageView";
import { useBlogPostPage } from "@/features/blog-post/hooks/useBlogPostPage";
import type { BlogPostCollection, BlogPostRecord } from "@/features/blog-post/types";
import { buildCanonicalMeta, buildSeoMeta } from "@/shared/seo";

const collection = blogPostsCollection as BlogPostCollection;

function getPostBySlug(slug?: string): BlogPostRecord {
  const fallbackPost = collection.posts[0] as BlogPostRecord;
  return collection.posts.find((post) => post.slug === slug) ?? fallbackPost;
}

export function meta({ params }: { params: { slug?: string } }) {
  const post = getPostBySlug(params.slug);

  return [
    ...buildSeoMeta({
      title: `${post.hero.title} | Journal | ATELIER NORTH`,
      description: post.article.intro,
      pathname: `/blog/${post.slug}`,
      imageUrl: post.hero.imageUrl,
      type: "article",
      siteName: "ATELIER NORTH",
      keywords: post.tags.join(", "),
    }),
    buildCanonicalMeta(`/blog/${post.slug}`),
  ];
}

export default function BlogPost() {
  const viewModel = useBlogPostPage();

  return <BlogPostPageView {...viewModel} />;
}
