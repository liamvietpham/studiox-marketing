import type { FooterContent, NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type AboutHeroContent = {
  kicker: string;
  title: string;
  emphasis: string;
  intro: string;
  description: string;
};

export type AboutPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type AboutTimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type AboutTeamMember = {
  name: string;
  role: string;
  offset: "none" | "medium" | "large";
  imageUrl: string;
  imageAlt: string;
};

export type AboutContent = {
  site: {
    name: string;
    description: string;
    copyright: string;
  };
  header: {
    cta: NavItem;
    navItems: NavItem[];
  };
  hero: AboutHeroContent;
  coverImage: {
    url: string;
    alt: string;
  };
  principles: {
    title: string;
    items: AboutPrinciple[];
  };
  timeline: {
    kicker: string;
    items: AboutTimelineItem[];
  };
  team: {
    title: string;
    members: AboutTeamMember[];
  };
  cta: {
    title: string;
    emphasis: string;
    buttonLabel: string;
    buttonTo: string;
  };
  footer: FooterContent;
};

export type AboutPageViewModel = SiteShellProps & {
  content: AboutContent;
};
