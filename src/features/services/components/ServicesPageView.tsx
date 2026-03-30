import { Link } from "react-router";

import type { ServiceItem, ServicesPageViewModel } from "@/features/services/types";
import { PageFrame } from "@/shared/components/PageFrame";

type ServicesPageViewProps = ServicesPageViewModel;

function ServiceSection({ service }: { service: ServiceItem }) {
  const textColClass = service.reverseOnDesktop
    ? "order-1 md:order-2 md:col-span-5 md:col-start-8"
    : "md:col-span-5";
  const imageColClass = service.reverseOnDesktop
    ? "order-2 md:order-1 md:col-span-6"
    : "md:col-span-6 md:col-start-7";

  return (
    <section className={`${service.surfaceClass} py-16 md:py-24`}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-12 lg:px-10">
        <div className={`min-w-0 ${textColClass}`}>
          <span className="mb-4 block text-xs font-bold tracking-[0.1em] text-[#747878]">
            {service.code}
          </span>
          <h2 className="headline-font mb-7 text-4xl text-black">{service.title}</h2>
          <p className="mb-10 leading-relaxed text-[#444748]">{service.description}</p>

          <div className="mb-10 grid gap-5">
            {service.steps.map((step) => (
              <div className="flex items-start gap-4" key={step.label}>
                <span className="py-1 text-xs font-bold text-[#735b25]">{step.label}</span>
                <div>
                  <p className="mb-1 text-sm font-bold uppercase tracking-wider">{step.title}</p>
                  <p className="text-xs text-[#747878]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#747878]/10 pt-7">
            <p className="mb-2 text-[0.65rem] font-black uppercase tracking-widest text-[#735b25]">
              Outcome
            </p>
            <p className="text-sm font-medium text-black">{service.outcome}</p>
          </div>
        </div>

        <div className={`min-w-0 ${imageColClass}`}>
          <div className={`w-full max-w-full overflow-hidden bg-[#e6e2dd] ${service.imageAspectClass}`}>
            <img
              alt={service.imageAlt}
              className="block h-full w-full max-w-full object-cover transition-transform duration-700 hover:scale-105"
              src={service.imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: ServicesPageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main className="pt-24 md:pt-28">
        <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="mb-5 block text-xs font-extrabold uppercase tracking-[0.15em] text-[#735b25]">
                {content.hero.kicker}
              </span>
              <h1 className="headline-font mb-10 text-5xl leading-[1.08] text-black sm:text-6xl md:text-8xl">
                {content.hero.title} <br />
                {content.hero.subtitle}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#444748] md:text-xl">
                {content.hero.description}
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-0 pb-0">
          {content.services.map((service) => (
            <ServiceSection key={service.code} service={service} />
          ))}
        </section>

        <section className="bg-black py-20 text-white md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 text-center sm:px-6 lg:px-10">
            <span className="mb-7 block text-xs font-bold uppercase tracking-[0.2em] text-[#858383]">
              {content.cta.kicker}
            </span>
            <h2 className="headline-font mb-10 text-5xl leading-tight md:text-7xl">
              {content.cta.title}
              <br />
              {content.cta.subtitle}
            </h2>
            <Link
              className="inline-block border border-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-500 hover:bg-white hover:text-black md:px-12 md:py-5"
              to={content.cta.buttonTo}
            >
              {content.cta.buttonLabel}
            </Link>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
