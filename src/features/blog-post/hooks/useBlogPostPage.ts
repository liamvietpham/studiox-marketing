import { useMemo } from "react";
import { useParams } from "react-router";

import blogPostsCollection from "@/content/blog-posts.json";
import type {
  BlogPostCollection,
  BlogPostContent,
  BlogPostPageViewModel,
  BlogPostRecord,
} from "@/features/blog-post/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function useBlogPostPage(): BlogPostPageViewModel {
  const shell = useSiteShell();
  const { slug } = useParams();

  const collection = blogPostsCollection as BlogPostCollection;
  const fallbackPost = collection.posts[0] as BlogPostRecord;
  const selectedPost =
    collection.posts.find((post) => post.slug === slug) ?? fallbackPost;

  const content = useMemo<BlogPostContent>(
    () => ({
      hero: selectedPost.hero,
      meta: selectedPost.meta,
      article: selectedPost.article,
      tags: selectedPost.tags,
      sidebar: {
        related: selectedPost.sidebar.related,
        newsletter: collection.newsletter,
      },
      postNavigation: selectedPost.postNavigation,
    }),
    [collection.newsletter, selectedPost],
  );

  return {
    content,
    ...shell,
  };
}
