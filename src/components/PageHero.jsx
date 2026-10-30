import { FireworkBurst } from './Decor'

/** Dark banner at the top of inner pages. Contains the page's single h1. */
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-950 text-white">
      <div className="pattern-lattice absolute inset-0" aria-hidden="true" />
      <FireworkBurst className="absolute -right-10 -top-10 h-56 w-56 text-gold-500/20 sm:h-72 sm:w-72 lg:right-10" />
      <div className="container-page relative py-14 sm:py-20">
        <div className="fade-up max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold text-white! sm:text-5xl">{title}</h1>
          <div className="mt-5 flex items-center gap-2" aria-hidden="true">
            <span className="h-0.5 w-14 rounded-full bg-gold-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
          </div>
          {children ? <p className="mt-6 text-lg text-slate-300">{children}</p> : null}
        </div>
      </div>
    </section>
  )
}
