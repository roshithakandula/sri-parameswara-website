import { ClipboardList } from 'lucide-react'
import { business } from '../data/business'

/**
 * Small "owner to confirm" note. Shown only while
 * `showDraftNotices` is true in src/data/business.js.
 * Set it to false before the public launch.
 */
export default function DraftNotice({ children, className = '' }) {
  if (!business.showDraftNotices) return null

  return (
    <p
      className={`flex items-start gap-3 rounded-xl border border-dashed border-ember-500 bg-white p-4 text-sm text-ink-700 ${className}`}
    >
      <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-ember-500" aria-hidden="true" />
      <span>
        <strong className="font-semibold text-navy-900">Draft, owner to confirm: </strong>
        {children}
      </span>
    </p>
  )
}
