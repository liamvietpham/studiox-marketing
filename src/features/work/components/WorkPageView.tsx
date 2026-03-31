import { Link } from "react-router";

import type { WorkPageViewModel, WorkProject } from "@/features/work/types";
import { PageFrame } from "@/shared/components/PageFrame";

type WorkPageViewProps = WorkPageViewModel;

function WorkCard({ project }: { project: WorkProject }) {
  const isPanoramicCard = project.imageAspectClass === "aspect-[21/9]";
  const imageWrapperClass = isPanoramicCard ? "aspect-[16/9]" : project.imageAspectClass;
  const imageClass = isPanoramicCard
    ? "h-full w-full object-cover object-center"
    : "cinematic-zoom h-full w-full object-cover";

  return (
    <article className={`${project.gridClass} card-container group`}>
      <div className={`mb-7 overflow-hidden bg-[#f7f3ee] ${imageWrapperClass}`}>
        <img alt={project.imageAlt} className={imageClass} src={project.imageUrl} />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#735b25]">
            {project.categoryLabel}
          </p>
          <h2 className="headline-font text-2xl text-black md:text-3xl">{project.title}</h2>
        </div>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#444748]">
          {project.year}
        </p>
      </div>
    </article>
  );
}

export function WorkPageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  activeFilterKey,
  setActiveFilterKey,
  filteredProjects,
}: WorkPageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main className="pt-24 md:pt-36">
        <section className="mx-auto mb-20 max-w-[1440px] px-4 sm:px-6 lg:mb-24 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="col-span-12 md:col-span-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#735b25]">
                {content.hero.kicker}
              </p>
              <h1 className="headline-font mb-10 text-[2.2rem] leading-[1.1] text-black sm:text-5xl md:text-[3.5rem]">
                {content.hero.title} <span className="italic">{content.hero.lineTwoStart}</span> and{" "}
                <span className="italic">{content.hero.lineTwoAccent}</span>
              </h1>
            </div>
          </div>

          <div className="mt-8 flex gap-5 overflow-x-auto border-b border-[#c4c7c7]/25 pb-4 md:gap-12">
            {content.filters.map((filter) => {
              const isActive = filter.key === activeFilterKey;

              return (
                <button
                  className={`shrink-0 border-b-2 pb-4 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? "border-black text-black"
                      : "border-transparent text-[#444748]/70 hover:text-black"
                  }`}
                  key={filter.key}
                  onClick={() => setActiveFilterKey(filter.key)}
                  type="button"
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 pb-28 sm:px-6 lg:px-10 lg:pb-32">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-24">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => <WorkCard key={project.id} project={project} />)
            ) : (
              <p className="col-span-12 text-sm text-[#444748]">No projects found for this filter.</p>
            )}
          </div>
        </section>

        <section className="bg-[#f7f3ee] py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 text-center sm:px-6 lg:px-10">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#735b25]">
              {content.cta.kicker}
            </p>
            <h2 className="headline-font mx-auto mb-10 max-w-2xl text-5xl leading-tight text-black md:text-[3.5rem]">
              {content.cta.title} <span className="italic">{content.cta.emphasis}</span>
            </h2>
            <Link
              className="inline-block bg-black px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-[opacity,transform] duration-300 hover:opacity-80 active:scale-[0.98] md:px-16 md:py-6"
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
