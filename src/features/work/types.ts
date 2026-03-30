import type { NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type WorkFilter = {
  key: string;
  label: string;
};

export type WorkProject = {
  id: string;
  title: string;
  categoryLabel: string;
  year: string;
  categories: string[];
  gridClass: string;
  imageAspectClass: string;
  imageUrl: string;
  imageAlt: string;
};

export type WorkContent = {
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
    lineTwoStart: string;
    lineTwoAccent: string;
  };
  filters: WorkFilter[];
  projects: WorkProject[];
  cta: {
    kicker: string;
    title: string;
    emphasis: string;
    buttonLabel: string;
    buttonTo: string;
  };
  footer: {
    navigation: NavItem[];
    connect: NavItem[];
    legal: NavItem[];
  };
};

export type WorkPageViewModel = SiteShellProps & {
  content: WorkContent;
  activeFilterKey: string;
  setActiveFilterKey: (key: string) => void;
  filteredProjects: WorkProject[];
};
