import { Link } from "react-router";

import type { BlogPostPageViewModel, BlogPostSection } from "@/features/blog-post/types";
import { PageFrame } from "@/shared/components/PageFrame";

type BlogPostPageViewProps = BlogPostPageViewModel;

function SmartLink({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: React.ReactNode;
}) {
  if (to.startsWith("#")) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

function ArticleSection({ section }: { section: BlogPostSection }) {
  if (section.type === "quote") {
    return (
      <blockquote className="relative my-12 py-12">
        <div className="absolute left-0 top-0 h-px w-12 bg-[#735b25]" />
        <p className="headline-font text-2xl italic leading-tight text-black md:text-4xl">{section.quote}</p>
        <cite className="mt-6 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#735b25]">
          — {section.author}
        </cite>
      </blockquote>
    );
  }

  if (section.type === "imagePair") {
    return (
      <div className="my-16 grid grid-cols-2 gap-4">
        <div className="aspect-[3/4] overflow-hidden bg-[#f7f3ee]">
          <img
            alt={section.images[0]?.alt}
            className="h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-110"
            src={section.images[0]?.url}
          />
        </div>
        <div className="mt-12 aspect-[3/4] overflow-hidden bg-[#f7f3ee]">
          <img
            alt={section.images[1]?.alt}
            className="h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-110"
            src={section.images[1]?.url}
          />
        </div>
      </div>
    );
  }

  if (section.type === "caseStudy") {
    return (
      <div className="my-16 bg-[#f7f3ee] p-10 md:p-12">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
          {section.kicker}
        </p>
        <h3 className="headline-font mb-6 text-xl text-black">{section.title}</h3>
        <p className="mb-8 text-sm leading-relaxed text-[#1c1c19]/70">{section.description}</p>
        <Link
          className="border-b border-black/20 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-all hover:border-black"
          to={section.buttonTo}
        >
          {section.buttonLabel}
        </Link>
      </div>
    );
  }

  return (
    <>
      {section.heading ? <h2 className="headline-font pt-8 text-3xl tracking-tight md:text-4xl">{section.heading}</h2> : null}
      {section.paragraphs?.map((paragraph) => (
        <p className="text-base leading-relaxed text-[#1c1c19]/80 md:text-lg" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

export function BlogPostPageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: BlogPostPageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main className="pt-24 md:pt-32">
        <header className="mx-auto mb-20 max-w-[1240px] px-4 sm:px-6 md:px-12">
          <div className="mb-10 md:mb-12">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#735b25]">
              {content.hero.kicker}
            </p>
            <h1 className="headline-font max-w-4xl text-5xl leading-[1.1] tracking-tighter text-black md:text-7xl lg:text-8xl">
              {content.hero.title}
            </h1>
          </div>

          <div className="mb-8 aspect-[21/9] w-full overflow-hidden bg-[#f7f3ee]">
            <img
              alt={content.hero.imageAlt}
              className="h-full w-full object-cover grayscale opacity-90 transition-transform duration-[2000ms] ease-out hover:scale-105"
              src={content.hero.imageUrl}
            />
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-black/5 py-8 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Author</p>
                <p className="text-sm text-black">{content.meta.author}</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Date</p>
                <p className="text-sm text-black">{content.meta.date}</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Read Time</p>
                <p className="text-sm text-black">{content.meta.readTime}</p>
              </div>
            </div>
            <div className="flex gap-4">
              {content.meta.actions.map((action) => (
                <span
                  className="material-symbols-outlined cursor-pointer text-xl transition-colors hover:text-[#735b25]"
                  key={action}
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
        </header>

        <article className="mx-auto mb-24 grid max-w-[1240px] grid-cols-1 gap-12 px-4 sm:px-6 md:px-12 lg:grid-cols-12">
          <div className="lg:col-start-4 lg:col-span-6">
            <div className="space-y-10 md:space-y-12">
              <h2 className="sr-only">Article content</h2>
              <p className="text-lg italic leading-relaxed text-black/90 first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-['Noto_Serif'] first-letter:text-6xl md:text-xl">
                {content.article.intro}
              </p>

              {content.article.sections.map((section, index) => (
                <ArticleSection key={`section-${index}`} section={section} />
              ))}
            </div>

            <div className="mt-20 flex flex-wrap gap-4 border-t border-black/5 pt-12">
              {content.tags.map((tag) => (
                <span
                  className="bg-[#f7f3ee] px-4 py-2 text-[9px] font-semibold uppercase tracking-widest text-stone-500"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="hidden lg:col-span-3 lg:col-start-10 lg:block">
            <div className="sticky top-40 space-y-16">
              <div>
                <h2 className="mb-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                  Related Journal
                </h2>
                <div className="space-y-12">
                  {content.sidebar.related.map((item) => (
                    <SmartLink className="group block" key={item.title} to={item.to}>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-stone-400">
                        {item.kicker}
                      </p>
                      <h3 className="headline-font text-lg leading-tight transition-colors group-hover:text-[#735b25]">
                        {item.title}
                      </h3>
                    </SmartLink>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                  {content.sidebar.newsletter.title}
                </h2>
                <p className="mb-4 text-xs leading-relaxed text-stone-500">
                  {content.sidebar.newsletter.description}
                </p>
                <form className="relative">
                  <input
                    className="w-full border-0 border-b border-stone-200 bg-transparent px-0 py-2 text-sm placeholder:text-stone-300 focus:border-black focus:ring-0"
                    placeholder={content.sidebar.newsletter.placeholder}
                    type="email"
                  />
                  <button className="absolute bottom-2 right-0" type="submit">
                    <span className="material-symbols-outlined text-lg">
                      {content.sidebar.newsletter.buttonIcon}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </article>

        <section className="border-t border-black/5">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 md:grid-cols-2 md:divide-x md:divide-black/5">
            <h2 className="sr-only">Post navigation</h2>
            <SmartLink
              className="group flex flex-col items-start justify-center p-10 transition-colors hover:bg-[#f7f3ee] md:p-20"
              to={content.postNavigation.previous.to}
            >
              <span className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                <span className="material-symbols-outlined text-sm">{content.postNavigation.previous.icon}</span>
                {content.postNavigation.previous.label}
              </span>
              <h3 className="headline-font text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                {content.postNavigation.previous.title}
              </h3>
            </SmartLink>
            <SmartLink
              className="group flex flex-col items-end justify-center p-10 text-right transition-colors hover:bg-[#f7f3ee] md:p-20"
              to={content.postNavigation.next.to}
            >
              <span className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                {content.postNavigation.next.label}
                <span className="material-symbols-outlined text-sm">{content.postNavigation.next.icon}</span>
              </span>
              <h3 className="headline-font text-3xl transition-transform duration-500 group-hover:-translate-x-2 md:text-4xl">
                {content.postNavigation.next.title}
              </h3>
            </SmartLink>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
