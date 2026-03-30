import type { NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonVariant: "outline" | "solid";
  isFeatured: boolean;
  badge?: string;
};

export type ComparisonRow = {
  capability: string;
  starter: string;
  growth: string;
  signature: string;
};

export type PricingContent = {
  site: {
    name: string;
    description: string;
    copyright: string;
  };
  header: {
    cta: NavItem;
    navItems: NavItem[];
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    description: string;
  };
  plans: PricingPlan[];
  comparison: {
    title: string;
    columns: string[];
    rows: ComparisonRow[];
  };
  imageCta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonTo: string;
    imageUrl: string;
    imageAlt: string;
  };
  footer: {
    studioLinks: NavItem[];
    legalLinks: NavItem[];
    newsletter: {
      placeholder: string;
      buttonLabel: string;
    };
    socialShortLinks: NavItem[];
  };
};

export type PricingPageViewModel = SiteShellProps & {
  content: PricingContent;
};
