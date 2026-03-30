import type { FooterContent, NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type ServicesHeroContent = {
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
};

export type ServiceStep = {
  label: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  code: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageAspectClass: string;
  reverseOnDesktop: boolean;
  surfaceClass: string;
  steps: ServiceStep[];
  outcome: string;
};

export type ServicesContent = {
  site: {
    name: string;
    description: string;
    copyright: string;
  };
  header: {
    cta: NavItem;
    navItems: NavItem[];
  };
  hero: ServicesHeroContent;
  services: ServiceItem[];
  cta: {
    kicker: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonTo: string;
  };
  footer: FooterContent;
};

export type ServicesPageViewModel = SiteShellProps & {
  content: ServicesContent;
};
