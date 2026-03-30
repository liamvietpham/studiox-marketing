import type { ReactNode } from "react";

import { SiteFooter } from "@/shared/components/SiteFooter";
import { SiteHeader } from "@/shared/components/SiteHeader";
import { siteConfig } from "@/shared/content/siteConfig";
import type { SiteShellProps } from "@/shared/types/shell";

type PageFrameProps = SiteShellProps & {
  children: ReactNode;
};

export function PageFrame({
  children,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: PageFrameProps) {
  return (
    <>
      <SiteHeader
        brandName={siteConfig.site.name}
        cta={siteConfig.header.cta}
        isMobileMenuOpen={isMobileMenuOpen}
        navItems={headerNavItems}
        onCloseMobileMenu={closeMobileMenu}
        onToggleMobileMenu={toggleMobileMenu}
      />

      {children}

      <SiteFooter
        brandName={siteConfig.site.name}
        copyright={siteConfig.site.copyright}
        description={siteConfig.site.description}
        footer={siteConfig.footer}
      />
    </>
  );
}
