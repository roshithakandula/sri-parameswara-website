// Original decorative SVG artwork. These are illustrations only and do not
// depict the business premises. All are hidden from assistive technology.

/** A firework-burst illustration drawn with simple rays and dots. */
export function FireworkBurst({ className = '', rays = 18 }) {
  const items = Array.from({ length: rays }, (_, i) => {
    const angle = (i / rays) * Math.PI * 2
    const long = i % 2 === 0
    const inner = 16
    const outer = long ? 86 : 62
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return {
      key: i,
      x1: +(cos * inner).toFixed(2),
      y1: +(sin * inner).toFixed(2),
      x2: +(cos * outer).toFixed(2),
      y2: +(sin * outer).toFixed(2),
      cx: +(cos * (outer + 7)).toFixed(2),
      cy: +(sin * (outer + 7)).toFixed(2),
      r: long ? 3.2 : 2.2,
    }
  })

  return (
    <svg
      className={className}
      viewBox="-100 -100 200 200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      {items.map((it) => (
        <g key={it.key}>
          <line x1={it.x1} y1={it.y1} x2={it.x2} y2={it.y2} strokeWidth="1.6" />
          <circle cx={it.cx} cy={it.cy} r={it.r} fill="currentColor" stroke="none" />
        </g>
      ))}
      <circle cx="0" cy="0" r="6" fill="currentColor" stroke="none" />
      <circle cx="0" cy="0" r="11" strokeWidth="1" />
    </svg>
  )
}

/** Thin gold divider with a small eight-pointed star at the centre. */
export function OrnamentDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-gold-500/60" />
      <svg viewBox="-12 -12 24 24" className="h-5 w-5 text-gold-500" fill="currentColor">
        <path d="M0 -11 L2.6 -2.6 L11 0 L2.6 2.6 L0 11 L-2.6 2.6 L-11 0 L-2.6 -2.6 Z" />
        <circle cx="0" cy="0" r="1.6" className="text-ember-500" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-gold-500/60" />
    </div>
  )
}
