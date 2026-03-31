import { Link } from "react-router";

import type { HomePageViewModel } from "@/features/home/types";
import { AppIcon } from "@/shared/components/AppIcon";
import { PageFrame } from "@/shared/components/PageFrame";

type HomePageViewProps = HomePageViewModel;

function InlineAnchor({ href, label }: { href: string; label: string }) {
  if (href.startsWith("#")) {
    return (
      <a
        className="editorial-label border-b border-black/20 pb-1 text-black transition-colors hover:text-[#735b25]"
        href={href}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      className="editorial-label border-b border-black/20 pb-1 text-black transition-colors hover:text-[#735b25]"
      to={href}
    >
      {label}
    </Link>
  );
}

export function HomePageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: HomePageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main>
        <header className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24">
          <div className="absolute inset-0 opacity-60">
            <img
              alt={content.hero.imageAlt}
              className="h-full w-full object-cover"
              src={content.hero.imageUrl}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />

          <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
            <div className="max-w-4xl">
              <p className="editorial-label mb-7 tracking-[0.2em] text-[#fedb99]">{content.hero.kicker}</p>
              <h1 className="headline-font mb-10 text-[clamp(2.35rem,7vw,6rem)] leading-[1.08] tracking-tight text-white">
                {content.hero.title.replace(content.hero.titleEmphasis, "").trim()}{" "}
                <span className="italic">{content.hero.titleEmphasis}</span>
              </h1>
              <div className="inline-flex items-center gap-4">
                <div className="h-px w-12 bg-[#fedb99]" />
                <span className="editorial-label text-white">{content.hero.exploreLabel}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
              {content.hero.scrollLabel}
            </span>
            <div className="h-14 w-px bg-gradient-to-b from-[#fedb99] to-transparent" />
          </div>
        </header>

        <section className="bg-[#fdf9f4] py-20 md:py-28 lg:py-40">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-0">
            <div className="lg:col-start-4 lg:col-span-8">
              <p className="editorial-label mb-6 text-[#735b25]">{content.philosophy.kicker}</p>
              <h2 className="headline-font mb-10 text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-black">
                {content.philosophy.title}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {content.philosophy.paragraphs.map((paragraph) => (
                  <p className="text-base leading-relaxed text-[#444748] md:text-lg" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ee] pb-20 pt-16 md:pb-28 md:pt-20 lg:pb-40">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
            <div className="mb-14 flex items-end justify-between gap-4">
              <div>
                <p className="editorial-label mb-3 text-[#735b25]">{content.selectedWork.kicker}</p>
                <h2 className="headline-font text-4xl text-black md:text-5xl">
                  {content.selectedWork.title}
                </h2>
              </div>
              <InlineAnchor
                href={content.selectedWork.archiveTo}
                label={content.selectedWork.archiveLabel}
              />
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
              {content.selectedWork.cases.map((caseStudy, index) => (
                <article className={index === 1 ? "md:pt-12 lg:pt-24" : ""} key={caseStudy.title}>
                  <div className="group relative mb-7 aspect-[4/5] overflow-hidden">
                    <img
                      alt={caseStudy.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={caseStudy.imageUrl}
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <p className="editorial-label mb-2 text-[#735b25]">{caseStudy.category}</p>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="headline-font text-2xl text-black md:text-3xl">{caseStudy.title}</h3>
                    <span aria-hidden className="text-xl text-black">
                      ↗
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fdf9f4] py-20 md:py-28 lg:py-40">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.services.items.map((service) => (
                <article
                  className="bg-[#f7f3ee] p-6 transition-colors duration-500 hover:bg-[#ebe8e3] md:p-8"
                  key={service.name}
                >
                  <AppIcon className="mb-6 block !h-[22.5px] w-auto text-[#735b25]" name={service.icon} />
                  <h4 className="editorial-label mb-3 text-black">{service.name}</h4>
                  <p className="text-sm leading-relaxed text-[#444748]">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ee] py-20 text-center md:py-28 lg:py-40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0">
            <AppIcon className="mb-8 !h-[29px] w-auto text-[#735b25]" name="quote" />
            <blockquote>
              <p className="headline-font mb-10 text-[clamp(1.8rem,4vw,3.5rem)] leading-tight italic text-black">
                {content.testimonial.quote}
              </p>
              <cite className="not-italic">
                <p className="editorial-label mb-1 text-black">{content.testimonial.author}</p>
                <p className="editorial-label text-[#735b25]">{content.testimonial.role}</p>
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="bg-[#fdf9f4] py-24 text-center md:py-32 lg:py-52">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
            <p className="editorial-label mb-8 tracking-[0.35em] text-[#735b25]">{content.cta.kicker}</p>
            <h2 className="headline-font mb-12 text-[clamp(2.4rem,5vw,5rem)] text-black">
              {content.cta.title}
            </h2>
            <Link
              className="btn-atelier editorial-label inline-block bg-black px-10 py-5 text-white hover:opacity-75"
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
