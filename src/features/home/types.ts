import type { FooterContent, NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type HeaderContent = {
  cta: NavItem;
  navItems: NavItem[];
};

export type HeroContent = {
  kicker: string;
  title: string;
  titleEmphasis: string;
  exploreLabel: string;
  scrollLabel: string;
  imageUrl: string;
  imageAlt: string;
};

export type PhilosophyContent = {
  kicker: string;
  title: string;
  paragraphs: string[];
};

export type WorkCase = {
  category: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
};

export type SelectedWorkContent = {
  kicker: string;
  title: string;
  archiveLabel: string;
  archiveTo: string;
  cases: WorkCase[];
};

export type ServiceItem = {
  icon: string;
  name: string;
  description: string;
};

export type TestimonialContent = {
  quote: string;
  author: string;
  role: string;
};

export type CtaContent = {
  kicker: string;
  title: string;
  buttonLabel: string;
  buttonTo: string;
};

export type SiteContent = {
  name: string;
  description: string;
  copyright: string;
};

export type HomeContent = {
  site: SiteContent;
  header: HeaderContent;
  hero: HeroContent;
  philosophy: PhilosophyContent;
  selectedWork: SelectedWorkContent;
  services: {
    items: ServiceItem[];
  };
  testimonial: TestimonialContent;
  cta: CtaContent;
  footer: FooterContent;
};

export type HomePageViewModel = SiteShellProps & {
  content: HomeContent;
};
