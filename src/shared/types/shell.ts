import type { NavItem } from "@/shared/types/site";

export type SiteShellProps = {
  headerNavItems: NavItem[];
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
};
