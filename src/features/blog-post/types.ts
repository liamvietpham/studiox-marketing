import type { NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type BlogPostSection =
  | {
      heading?: string;
      paragraphs?: string[];
      type?: never;
    }
  | {
      type: "quote";
      quote: string;
      author: string;
      heading?: never;
      paragraphs?: never;
    }
  | {
      type: "imagePair";
      images: Array<{
        url: string;
        alt: string;
      }>;
      heading?: never;
      paragraphs?: never;
    }
  | {
      type: "caseStudy";
      kicker: string;
      title: string;
      description: string;
      buttonLabel: string;
      buttonTo: string;
      heading?: never;
      paragraphs?: never;
    };

export type BlogPostMeta = {
  author: string;
  date: string;
  readTime: string;
  actions: string[];
};

export type BlogPostArticle = {
  intro: string;
  sections: BlogPostSection[];
};

export type BlogPostSidebar = {
  related: Array<{
    kicker: string;
    title: string;
    to: string;
  }>;
};

export type BlogPostNavigationItem = {
  label: string;
  title: string;
  to: string;
  icon: string;
};

export type BlogPostRecord = {
  slug: string;
  hero: {
    kicker: string;
    title: string;
    imageUrl: string;
    imageAlt: string;
  };
  meta: BlogPostMeta;
  article: BlogPostArticle;
  tags: string[];
  sidebar: BlogPostSidebar;
  postNavigation: {
    previous: BlogPostNavigationItem;
    next: BlogPostNavigationItem;
  };
};

export type BlogPostCollection = {
  site: {
    name: string;
    copyright: string;
  };
  header: {
    cta: NavItem;
    navItems: NavItem[];
  };
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonIcon: string;
  };
  posts: BlogPostRecord[];
  footer: {
    links: NavItem[];
  };
};

export type BlogPostContent = {
  hero: BlogPostRecord["hero"];
  meta: BlogPostMeta;
  article: BlogPostArticle;
  tags: string[];
  sidebar: {
    related: BlogPostSidebar["related"];
    newsletter: BlogPostCollection["newsletter"];
  };
  postNavigation: {
    previous: BlogPostNavigationItem;
    next: BlogPostNavigationItem;
  };
};

export type BlogPostPageViewModel = SiteShellProps & {
  content: BlogPostContent;
};
