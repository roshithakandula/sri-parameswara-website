import { useState } from 'react'
import { X } from 'lucide-react'
import { business } from '../data/business'

/** Editable announcement strip. Text comes from business.announcement. */
export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  const { enabled, text } = business.announcement

  if (!enabled || !text || dismissed) return null

  return (
    <div className="on-dark bg-navy-900 text-white">
      <div className="container-page flex items-center justify-between gap-3 py-1">
        <p className="py-2 text-sm text-slate-200">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-ember-500 align-middle" aria-hidden="true" />
          {text}
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Dismiss announcement"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
