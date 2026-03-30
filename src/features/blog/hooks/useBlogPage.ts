import { useMemo, useState } from "react";

import blogContent from "@/content/blog.json";
import type { BlogContent, BlogPageViewModel } from "@/features/blog/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function useBlogPage(): BlogPageViewModel {
  const shell = useSiteShell();
  const content = blogContent as BlogContent;
  const defaultFilter = content.filters[0]?.key ?? "all";
  const [activeFilterKey, setActiveFilterKey] = useState(defaultFilter);

  const filteredArticles = useMemo(
    () =>
      activeFilterKey === "all"
        ? content.articles
        : content.articles.filter((article) => article.categoryKey === activeFilterKey),
    [activeFilterKey, content.articles],
  );

  const handleSetFilter = (key: string) => {
    setActiveFilterKey(key);
  };

  return {
    content,
    ...shell,
    activeFilterKey,
    setActiveFilterKey: handleSetFilter,
    filteredArticles,
  };
}
