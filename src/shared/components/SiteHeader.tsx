import { Link } from "react-router";
import { useLocation } from "react-router";

import type { NavItem } from "@/shared/types/site";

type SiteHeaderProps = {
  brandName: string;
  navItems: NavItem[];
  cta: NavItem;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
};

function NavigationLink({
  item,
  onClick,
}: {
  item: NavItem;
  onClick?: () => void;
}) {
  const baseClassName =
    "editorial-label pb-1 transition-colors duration-300 hover:text-black";
  const activeClassName = item.active
    ? "text-black border-b border-black/20"
    : "text-[#444748]";

  if (item.to.startsWith("#")) {
    return (
      <a className={`${baseClassName} ${activeClassName}`} href={item.to} onClick={onClick}>
        {item.label}
      </a>
    );
  }

  return (
    <Link className={`${baseClassName} ${activeClassName}`} onClick={onClick} to={item.to}>
      {item.label}
    </Link>
  );
}

export function SiteHeader({
  brandName,
  navItems,
  cta,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: SiteHeaderProps) {
  const location = useLocation();
  const shouldShowCta = cta.to !== location.pathname;

  return (
    <nav className="glass-nav fixed left-0 right-0 top-0 z-50 border-b border-black/5">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10 lg:py-7">
        <Link className="headline-font text-lg tracking-tight text-black sm:text-xl" to="/">
          {brandName}
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navItems.map((item) => (
            <NavigationLink item={item} key={item.label} />
          ))}
        </div>

        {shouldShowCta ? (
          <div className="hidden lg:block">
            <Link
              className="btn-atelier editorial-label bg-black px-6 py-3 text-white hover:opacity-75"
              to={cta.to}
            >
              {cta.label}
            </Link>
          </div>
        ) : null}

        <button
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          className="editorial-label rounded border border-black/20 px-3 py-2 text-black lg:hidden"
          onClick={onToggleMobileMenu}
          type="button"
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-black/10 bg-[#fdf9f4] px-4 pb-5 pt-4 lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 sm:px-2">
            {navItems.map((item) => (
              <NavigationLink item={item} key={item.label} onClick={onCloseMobileMenu} />
            ))}
            {shouldShowCta ? (
              <Link
                className="btn-atelier editorial-label mt-2 inline-block bg-black px-6 py-3 text-center text-white"
                onClick={onCloseMobileMenu}
                to={cta.to}
              >
                {cta.label}
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
