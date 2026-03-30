import { Link } from "react-router";

import type { FooterContent, NavItem } from "@/shared/types/site";

type SiteFooterProps = {
  brandName: string;
  description: string;
  copyright: string;
  footer: FooterContent;
};

function FooterLink({ link }: { link: NavItem }) {
  if (link.to.startsWith("#")) {
    return (
      <a className="text-sm text-[#444748] transition-colors hover:text-black" href={link.to}>
        {link.label}
      </a>
    );
  }

  return (
    <Link className="text-sm text-[#444748] transition-colors hover:text-black" to={link.to}>
      {link.label}
    </Link>
  );
}

export function SiteFooter({ brandName, description, copyright, footer }: SiteFooterProps) {
  const hasNewsletter = Boolean(footer.newsletter);
  const hasLegalLinks = footer.legalLinks.length > 0;

  return (
    <footer className="border-t border-black/10 bg-[#f7f3ee]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-12 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className={`md:col-span-2 ${hasNewsletter ? "lg:col-span-4" : "lg:col-span-6"}`}>
          <span className="headline-font mb-4 block text-2xl text-black">{brandName}</span>
          <p className="max-w-sm text-sm leading-relaxed text-[#444748]">{description}</p>
        </div>

        {footer.navigationGroups.map((group) => (
          <div className={hasNewsletter ? "lg:col-span-2" : "lg:col-span-3"} key={group.title}>
            <h5 className="editorial-label mb-5 text-black">{group.title}</h5>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        ))}

        {footer.newsletter ? (
          <div className="md:col-span-2 lg:col-span-4">
            <h5 className="editorial-label mb-5 text-black">{footer.newsletter.title}</h5>
            <form className="flex max-w-sm flex-col gap-3">
              <input
                className="border-b border-black/20 bg-transparent py-2 text-sm outline-none placeholder:text-[#747878]"
                placeholder={footer.newsletter.placeholder}
                type="email"
              />
              <button
                className="editorial-label w-fit text-left text-black transition-colors hover:text-[#735b25]"
                type="button"
              >
                {footer.newsletter.buttonLabel}
              </button>
            </form>
          </div>
        ) : null}
      </div>

      <div
        className={`mx-auto flex max-w-[1440px] flex-col gap-5 border-t border-black/10 px-4 py-6 sm:px-6 lg:px-10 ${
          hasLegalLinks ? "md:flex-row md:items-center md:justify-between" : ""
        }`}
      >
        <p className="text-[10px] tracking-[0.16em] text-[#444748]">{copyright}</p>
        {hasLegalLinks ? (
          <div className="flex items-center gap-6">
            {footer.legalLinks.map((link) => (
              <FooterLink key={link.label} link={link} />
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
