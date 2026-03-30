import type { ContactPageViewModel } from "@/features/contact/types";
import { PageFrame } from "@/shared/components/PageFrame";

type ContactPageViewProps = ContactPageViewModel;

export function ContactPageView({
  content,
  headerNavItems,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  handleSubmit,
}: ContactPageViewProps) {
  return (
    <PageFrame
      closeMobileMenu={closeMobileMenu}
      headerNavItems={headerNavItems}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <main className="mx-auto max-w-[1240px] px-4 pb-24 pt-28 sm:px-6 md:pt-40 lg:px-10">
        <header className="mb-20 md:mb-28">
          <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#735b25]">
            {content.hero.kicker}
          </span>
          <h1 className="headline-font max-w-4xl text-5xl leading-[1.1] text-black md:text-7xl lg:text-8xl">
            {content.hero.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <section className="lg:col-span-7">
            <form className="space-y-12 md:space-y-16" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                <div className="group relative">
                  <label
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400"
                    htmlFor="name"
                  >
                    {content.form.fields.name.label}
                  </label>
                  <input
                    className="w-full border-0 border-b border-[#c4c7c7]/40 bg-transparent px-0 py-4 text-lg text-black placeholder:text-stone-300 outline-none focus:outline-none focus:ring-0"
                    id="name"
                    placeholder={content.form.fields.name.placeholder}
                    type="text"
                  />
                  <span className="input-line" />
                </div>

                <div className="group relative">
                  <label
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400"
                    htmlFor="email"
                  >
                    {content.form.fields.email.label}
                  </label>
                  <input
                    className="w-full border-0 border-b border-[#c4c7c7]/40 bg-transparent px-0 py-4 text-lg text-black placeholder:text-stone-300 outline-none focus:outline-none focus:ring-0"
                    id="email"
                    placeholder={content.form.fields.email.placeholder}
                    type="email"
                  />
                  <span className="input-line" />
                </div>
              </div>

              <div className="group relative">
                <label
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400"
                  htmlFor="subject"
                >
                  {content.form.fields.subject.label}
                </label>
                <select
                  className="w-full appearance-none border-0 border-b border-[#c4c7c7]/40 bg-transparent px-0 py-4 text-lg text-black outline-none focus:outline-none focus:ring-0"
                  id="subject"
                >
                  {content.form.fields.subject.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <span className="input-line" />
              </div>

              <div className="group relative">
                <label
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400"
                  htmlFor="message"
                >
                  {content.form.fields.message.label}
                </label>
                <textarea
                  className="w-full resize-none border-0 border-b border-[#c4c7c7]/40 bg-transparent px-0 py-4 text-lg text-black placeholder:text-stone-300 outline-none focus:outline-none focus:ring-0"
                  id="message"
                  placeholder={content.form.fields.message.placeholder}
                  rows={4}
                />
                <span className="input-line" />
              </div>

              <div className="pt-4 md:pt-8">
                <button className="group inline-flex items-center gap-4" type="submit">
                  <span className="bg-black px-10 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-500 group-hover:bg-[#735b25] md:px-12 md:py-5">
                    {content.form.submitLabel}
                  </span>
                  <span className="material-symbols-outlined text-black transition-transform duration-500 group-hover:translate-x-2">
                    {content.form.submitIcon}
                  </span>
                </button>
              </div>
            </form>
          </section>

          <aside className="space-y-16 lg:col-span-5 lg:space-y-24">
            <div className="space-y-8">
              <div className="relative overflow-hidden bg-[#f7f3ee] p-10 md:p-12">
                <h3 className="headline-font mb-6 text-2xl text-black">{content.office.title}</h3>
                <div className="space-y-1 text-[#57534e]">
                  {content.office.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="mt-10 flex items-center gap-4 text-[#735b25] md:mt-12">
                  <span className="material-symbols-outlined text-sm">{content.office.scheduleIcon}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                    {content.office.scheduleLabel}
                  </span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] overflow-hidden bg-[#e6e2dd]">
                <img
                  alt={content.map.imageAlt}
                  className="h-full w-full object-cover grayscale opacity-60 transition-transform duration-[2000ms] group-hover:scale-105"
                  data-location={content.map.location}
                  src={content.map.imageUrl}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#735b25]">
                    <div className="h-4 w-4 animate-ping rounded-full bg-[#735b25] opacity-75" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div className="space-y-5">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                  {content.channels.digital.kicker}
                </span>
                <div className="space-y-3">
                  <a
                    className="headline-font block text-lg text-black transition-colors hover:text-[#735b25]"
                    href={`mailto:${content.channels.digital.email}`}
                  >
                    {content.channels.digital.email}
                  </a>
                  <a className="block text-stone-500" href={`tel:${content.channels.digital.phone}`}>
                    {content.channels.digital.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-5">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                  {content.channels.follow.kicker}
                </span>
                <div className="space-y-2">
                  {content.channels.follow.links.map((linkItem) => (
                    <a
                      className="block text-stone-600 underline decoration-stone-200 underline-offset-8 transition-colors hover:text-black"
                      href={linkItem.to}
                      key={linkItem.label}
                    >
                      {linkItem.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </PageFrame>
  );
}
