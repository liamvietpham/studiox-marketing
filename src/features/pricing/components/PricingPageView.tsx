import { Link } from "react-router";

import type { PricingPageViewModel, PricingPlan } from "@/features/pricing/types";
import { PageFrame } from "@/shared/components/PageFrame";

type PricingPageViewProps = PricingPageViewModel;

function PlanCard({ plan, isFirst, isLast }: { plan: PricingPlan; isFirst: boolean; isLast: boolean }) {
  return (
    <article
      className={`relative flex h-full flex-col p-8 md:p-12 lg:p-16 ${
        plan.isFeatured ? "bg-[#f7f3ee]" : "bg-[#fdf9f4]"
      } ${isFirst ? "md:border-r md:border-[#c4c7c7]/20" : ""} ${
        isLast ? "md:border-l md:border-[#c4c7c7]/20" : ""
      }`}
    >
      {plan.badge ? (
        <span className="absolute right-0 top-0 bg-[#735b25] px-4 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
          {plan.badge}
        </span>
      ) : null}

      <h3 className="headline-font mb-2 text-2xl text-black">{plan.name}</h3>
      <div className="mb-8 flex items-baseline">
        <span className="text-4xl font-normal text-black">{plan.price}</span>
        <span className="ml-2 text-[10px] uppercase tracking-widest text-[#444748]">{plan.period}</span>
      </div>

      <p className="mb-10 min-h-12 text-[13px] leading-relaxed text-[#444748]">{plan.description}</p>

      <ul className="mb-14 flex flex-grow flex-col gap-5">
        {plan.features.map((feature) => (
          <li className="flex items-center gap-3" key={feature}>
            <span className="material-symbols-outlined text-[18px] text-[#735b25]">check</span>
            <span className="text-[13px] text-black">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
          plan.buttonVariant === "solid"
            ? "bg-black text-white hover:opacity-80"
            : "border border-black text-black hover:bg-black hover:text-white"
        }`}
        type="button"
      >
        {plan.buttonLabel}
      </button>
    </article>
  );
}

export function PricingPageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: PricingPageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main className="pt-24 md:pt-28">
        <section className="mx-auto max-w-[1440px] px-4 pb-10 pt-16 text-center sm:px-6 md:pt-24 lg:px-10">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.3em] text-[#735b25]">
            {content.hero.kicker}
          </span>
          <h1 className="headline-font mb-7 text-[2.3rem] leading-[1.1] tracking-tight text-black md:text-[3.5rem]">
            {content.hero.title}
            <br />
            {content.hero.subtitle}
          </h1>
          <p className="mx-auto max-w-2xl leading-relaxed text-[#444748]">{content.hero.description}</p>
        </section>

        <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-0 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-10">
          {content.plans.map((plan, index) => (
            <PlanCard
              isFirst={index === 0}
              isLast={index === content.plans.length - 1}
              key={plan.name}
              plan={plan}
            />
          ))}
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
          <div className="mb-14">
            <h2 className="headline-font mb-4 text-3xl text-black md:text-[1.75rem]">
              {content.comparison.title}
            </h2>
            <div className="h-px w-24 bg-[#735b25]" />
          </div>

          <div className="no-scrollbar w-full overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[#f7f3ee]">
                  {content.comparison.columns.map((column) => (
                    <th
                      className={`px-6 py-7 text-[10px] font-bold uppercase tracking-[0.2em] ${
                        column === "Capabilities" ? "text-[#444748]" : "text-black"
                      }`}
                      key={column}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c4c7c7]/20">
                {content.comparison.rows.map((row) => (
                  <tr className="transition-colors hover:bg-[#f7f3ee]/50" key={row.capability}>
                    <td className="headline-font px-6 py-8 text-lg italic text-black">{row.capability}</td>
                    <td
                      className={`px-6 py-8 text-[13px] ${
                        row.starter === "—" ? "text-[#444748]/40" : "text-black"
                      }`}
                    >
                      {row.starter}
                    </td>
                    <td className="px-6 py-8 text-[13px] text-black">{row.growth}</td>
                    <td className="px-6 py-8 text-[13px] text-black">{row.signature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
          <div className="relative flex h-[420px] items-center justify-center overflow-hidden md:h-[540px] lg:h-[600px]">
            <img
              alt={content.imageCta.imageAlt}
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-40"
              src={content.imageCta.imageUrl}
            />
            <div className="relative z-10 px-6 text-center">
              <h2 className="headline-font mb-7 text-4xl tracking-tight text-black md:text-5xl">
                {content.imageCta.title}
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-black">{content.imageCta.description}</p>
              <Link
                className="inline-block bg-black px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:opacity-80"
                to={content.imageCta.buttonTo}
              >
                {content.imageCta.buttonLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
