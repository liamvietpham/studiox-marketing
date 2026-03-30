import type { FooterContent, NavItem } from "@/shared/types/site";

type SiteConfig = {
  site: {
    name: string;
    description: string;
    copyright: string;
  };
  header: {
    cta: NavItem;
    navItems: NavItem[];
  };
  footer: FooterContent;
};

export const siteConfig: SiteConfig = {
  site: {
    name: "ATELIER NORTH",
    description: "Building digital monuments for the world's most discerning brands.",
    copyright: "© 2026 ATELIER NORTH. ALL RIGHTS RESERVED.",
  },
  header: {
    cta: {
      label: "Contact",
      to: "/contact",
    },
    navItems: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Work", to: "/work" },
      { label: "Pricing", to: "/pricing" },
      { label: "Blog", to: "/blog" },
    ],
  },
  footer: {
    navigationGroups: [
      {
        title: "Navigation",
        links: [
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Services", to: "/services" },
          { label: "Work", to: "/work" },
        ],
      },
      {
        title: "Legal & Connect",
        links: [
          { label: "Instagram", to: "#" },
          { label: "LinkedIn", to: "#" },
          { label: "Privacy", to: "#" },
          { label: "Terms", to: "#" },
        ],
      },
    ],
    legalLinks: [],
  },
};

export function getHeaderNavItems(pathname: string): NavItem[] {
  return siteConfig.header.navItems.map((item) => ({
    ...item,
    active: item.to === "/blog" ? pathname.startsWith("/blog") : item.to === pathname,
  }));
}
