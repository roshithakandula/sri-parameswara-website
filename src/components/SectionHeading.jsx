/**
 * Consistent section heading: small eyebrow, serif title, short intro.
 * `level` sets the heading tag (2 by default; pages use one h1 in their hero).
 */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'left',
  tone = 'light',
  level = 2,
  className = '',
}) {
  const Tag = `h${level}`
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            dark ? 'text-gold-300' : 'text-gold-700'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`text-3xl font-semibold sm:text-4xl ${dark ? 'text-white!' : ''}`}
      >
        {title}
      </Tag>
      <div
        className={`mt-4 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}
        aria-hidden="true"
      >
        <span className="h-0.5 w-12 rounded-full bg-gold-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
      </div>
      {children ? (
        <p className={`mt-5 text-base sm:text-lg ${dark ? 'text-slate-300' : 'text-ink-500'}`}>
          {children}
        </p>
      ) : null}
    </div>
  )
}
