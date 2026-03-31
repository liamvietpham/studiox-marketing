import { Link } from "react-router";

import type { BlogArticle, BlogPageViewModel } from "@/features/blog/types";
import { PageFrame } from "@/shared/components/PageFrame";

type BlogPageViewProps = BlogPageViewModel;

function BlogCard({ article }: { article: BlogArticle }) {
  const cardContent = (
    <>
      <div className="mb-8 aspect-[4/5] overflow-hidden bg-[#f7f3ee]">
        <img
          alt={article.imageAlt}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          src={article.imageUrl}
        />
      </div>
      <div className="space-y-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#735b25]">
          {article.category}
        </span>
        <h3 className="headline-font text-2xl leading-tight text-black">{article.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#444748]">{article.excerpt}</p>
        <div className="flex items-center justify-between pt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400">
          <span>{article.date}</span>
          <span className="material-symbols-outlined text-sm">north_east</span>
        </div>
      </div>
    </>
  );

  if (article.to.startsWith("#")) {
    return <article className="group">{cardContent}</article>;
  }

  return (
    <article className="group">
      <Link className="block" to={article.to}>
        {cardContent}
      </Link>
    </article>
  );
}

export function BlogPageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  activeFilterKey,
  setActiveFilterKey,
  filteredArticles,
}: BlogPageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main className="mx-auto max-w-[1240px] px-4 pt-28 sm:px-6 md:px-0 md:pt-40">
        <section className="mb-20 md:mb-32">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
            <div className="w-full overflow-hidden lg:w-7/12">
              <img
                alt={content.featuredArticle.imageAlt}
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[600px]"
                src={content.featuredArticle.imageUrl}
              />
            </div>
            <div className="w-full pt-2 lg:w-5/12 lg:pt-8">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#735b25]">
                  {content.hero.featuredLabel}
                </span>
                <span className="h-px w-12 bg-[#735b25]/30" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#444748]">
                  {content.hero.featuredCount}
                </span>
              </div>

              <h1 className="headline-font mb-8 text-5xl leading-[1.1] tracking-tighter text-black md:text-7xl">
                {content.featuredArticle.title}
              </h1>
              <p className="mb-12 max-w-md text-lg leading-relaxed text-[#444748]">
                {content.featuredArticle.excerpt}
              </p>

              <div className="flex items-end justify-between gap-4 border-t border-[#c4c7c7]/30 pt-8">
                <div>
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                    Author
                  </span>
                  <span className="text-sm font-medium text-black">{content.featuredArticle.author}</span>
                </div>
                <div>
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                    Date
                  </span>
                  <span className="text-sm font-medium text-black">{content.featuredArticle.date}</span>
                </div>
                <Link
                  className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black"
                  to={content.featuredArticle.to}
                >
                  {content.featuredArticle.readMoreLabel}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-16 flex flex-wrap gap-8 border-b border-[#c4c7c7]/20 pb-8 md:mb-20">
          {content.filters.map((filter) => (
            <button
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                filter.key === activeFilterKey ? "text-black" : "text-stone-400 hover:text-black"
              }`}
              key={filter.key}
              onClick={() => setActiveFilterKey(filter.key)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
          <h2 className="sr-only">Journal articles</h2>
          {filteredArticles.map((article) => (
            <BlogCard article={article} key={article.id} />
          ))}
        </section>

        <div
          aria-label="Pagination preview"
          className="mb-24 mt-20 flex items-center justify-center gap-6 border-t border-[#c4c7c7]/30 pt-10 md:mt-32 md:gap-12 md:pt-16"
        >
          <span aria-hidden className="material-symbols-outlined pointer-events-none text-stone-300">
            {content.pagination.prevLabel}
          </span>
          <div className="flex gap-5 md:gap-8">
            {content.pagination.pages.map((page, index) => (
              <span
                aria-current={index === 0 ? "page" : undefined}
                className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                  index === 0 ? "text-black underline underline-offset-8" : "text-stone-400"
                }`}
                key={page}
              >
                {page}
              </span>
            ))}
          </div>
          <span aria-hidden className="material-symbols-outlined text-black">
            {content.pagination.nextLabel}
          </span>
        </div>
      </main>
    </PageFrame>
  );
}
