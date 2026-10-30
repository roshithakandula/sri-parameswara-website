import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const cardClasses =
  'group flex h-full flex-col rounded-2xl border border-gold-500/30 bg-white p-6 shadow-sm transition duration-200 sm:p-7'

/**
 * Premium card with an icon, a title and short text.
 * If `to` is given, the whole card becomes a link to that page.
 */
export default function InfoCard({ icon: Icon, title, to, linkLabel = 'Learn more', children }) {
  const inner = (
    <>
      {Icon ? (
        <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      ) : null}
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-3 flex-1 text-ink-500">{children}</div>
      {to ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 group-hover:text-navy-900">
          {linkLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${cardClasses} hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-md`}>
        {inner}
      </Link>
    )
  }

  return <div className={cardClasses}>{inner}</div>
}
