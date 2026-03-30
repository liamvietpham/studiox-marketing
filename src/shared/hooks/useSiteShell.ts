import { useMemo, useState } from "react";
import { useLocation } from "react-router";

import { getHeaderNavItems } from "@/shared/content/siteConfig";
import type { SiteShellProps } from "@/shared/types/shell";

export function useSiteShell(): SiteShellProps {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerNavItems = useMemo(
    () => getHeaderNavItems(location.pathname),
    [location.pathname],
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((currentState) => !currentState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    headerNavItems,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
