import type { NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type BlogFilter = {
  key: string;
  label: string;
};

export type BlogArticle = {
  id: string;
  category: string;
  categoryKey: string;
  title: string;
  excerpt: string;
  date: string;
  to: string;
  imageUrl: string;
  imageAlt: string;
};

export type BlogContent = {
  site: {
    name: string;
    copyright: string;
  };
  header: {
    cta: NavItem;
    navItems: NavItem[];
  };
  hero: {
    featuredLabel: string;
    featuredCount: string;
  };
  featuredArticle: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readMoreLabel: string;
    to: string;
    imageUrl: string;
    imageAlt: string;
  };
  filters: BlogFilter[];
  articles: BlogArticle[];
  pagination: {
    pages: string[];
    nextLabel: string;
    prevLabel: string;
  };
  footer: {
    links: NavItem[];
  };
};

export type BlogPageViewModel = SiteShellProps & {
  content: BlogContent;
  activeFilterKey: string;
  setActiveFilterKey: (key: string) => void;
  filteredArticles: BlogArticle[];
};
