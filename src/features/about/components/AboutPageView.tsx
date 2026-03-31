import { Link } from "react-router";

import type { AboutPageViewModel, AboutTeamMember } from "@/features/about/types";
import { PageFrame } from "@/shared/components/PageFrame";

type AboutPageViewProps = AboutPageViewModel;

function getTeamOffsetClass(offset: AboutTeamMember["offset"]): string {
  if (offset === "medium") {
    return "md:mt-24";
  }

  if (offset === "large") {
    return "md:mt-48";
  }

  return "";
}

export function AboutPageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: AboutPageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main className="pt-24 md:pt-28">
        <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10 lg:py-24">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-8">
              <span className="editorial-label mb-8 block text-[#735b25]">{content.hero.kicker}</span>
              <h1 className="headline-font mb-12 text-5xl leading-[1.12] text-black sm:text-6xl md:text-[5.2rem]">
                {content.hero.title} <br />
                <i className="font-normal">{content.hero.emphasis}</i>
              </h1>
            </div>
            <div className="col-span-12 md:col-start-6 md:col-span-7 md:mt-8">
              <p className="mb-7 text-xl leading-relaxed text-[#1c1c19]">{content.hero.intro}</p>
              <p className="max-w-2xl text-sm leading-[1.8] text-[#444748]">{content.hero.description}</p>
            </div>
          </div>
        </section>

        <section className="relative h-[420px] w-full overflow-hidden bg-[#f7f3ee] md:h-[580px] lg:h-[700px] xl:h-[760px]">
          <img
            alt={content.coverImage.alt}
            className="h-full w-full object-cover object-center"
            src={content.coverImage.url}
          />
          <div className="absolute inset-0 bg-black/5" />
        </section>

        <section className="bg-[#f7f3ee] py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="editorial-grid mb-14 md:mb-24">
              <div className="col-span-12 md:col-span-4">
                <h2 className="headline-font mb-4 text-4xl text-black">{content.principles.title}</h2>
                <div className="h-px w-12 bg-[#735b25]" />
              </div>
            </div>

            <div className="editorial-grid">
              {content.principles.items.map((principle) => (
                <article className="col-span-12 md:col-span-4" key={principle.number}>
                  <span className="headline-font mb-7 block text-5xl text-[#735b25]/20">
                    {principle.number}
                  </span>
                  <h3 className="headline-font mb-5 text-2xl text-black">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-[#444748]">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:py-28 lg:px-10 lg:py-32">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-3">
              <h2 className="editorial-label mb-8 text-black md:mb-12">{content.timeline.kicker}</h2>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="space-y-14 md:space-y-20 lg:space-y-24">
                {content.timeline.items.map((timelineItem) => (
                  <article className="editorial-grid" key={timelineItem.year}>
                    <div className="col-span-12 text-xl text-[#735b25] md:col-span-2 md:font-headline">
                      {timelineItem.year}
                    </div>
                    <div className="col-span-12 border-l border-[#c4c7c7]/40 pl-6 md:col-span-10 md:pl-10 lg:pl-12">
                      <h3 className="headline-font mb-3 text-xl text-black">{timelineItem.title}</h3>
                      <p className="max-w-xl text-sm text-[#444748]">{timelineItem.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e6e2dd] py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="editorial-grid mb-16">
              <div className="col-span-12">
                <h2 className="headline-font text-4xl text-black">{content.team.title}</h2>
              </div>
            </div>

            <div className="editorial-grid">
              {content.team.members.map((member) => (
                <article
                  className={`col-span-12 mb-10 md:col-span-4 md:mb-0 ${getTeamOffsetClass(member.offset)}`}
                  key={member.name}
                >
                  <div className="group relative mb-7 aspect-[3/4] overflow-hidden bg-[#f7f3ee]">
                    <img
                      alt={member.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={member.imageUrl}
                    />
                  </div>
                  <h3 className="headline-font text-xl text-black">{member.name}</h3>
                  <span className="editorial-label text-[#735b25]">{member.role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 text-center sm:px-6 md:py-28 lg:px-10 lg:py-44">
          <h2 className="headline-font mb-12 text-5xl leading-tight text-black sm:text-6xl md:text-7xl">
            {content.cta.title}
            <br />
            <i className="font-normal">{content.cta.emphasis}</i>
          </h2>
          <Link
            className="editorial-label inline-block bg-black px-10 py-4 tracking-[0.2em] text-white transition-opacity hover:opacity-80 active:scale-[0.98] md:px-16 md:py-6"
            to={content.cta.buttonTo}
          >
            {content.cta.buttonLabel}
          </Link>
        </section>
      </main>
    </PageFrame>
  );
}
