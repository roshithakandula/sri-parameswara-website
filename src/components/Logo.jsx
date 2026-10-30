import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { FireworkBurst } from './Decor'

// Temporary text-based logo. Replace with the real logo once the owner supplies it.
export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`group inline-flex min-h-11 items-center gap-3 ${className}`}
      aria-label={`${business.name}, go to home page`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/70 bg-navy-900 text-gold-300 transition-colors group-hover:border-gold-300">
        <FireworkBurst className="h-7 w-7" rays={12} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
          Sri Parameswara
        </span>
        <span className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gold-300 sm:text-xs">
          Crackers &amp; Fireworks
        </span>
      </span>
    </Link>
  )
}
