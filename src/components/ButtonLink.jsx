import { Link } from 'react-router-dom'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 py-3 text-center text-sm font-semibold transition-colors duration-200 sm:text-base'

const variants = {
  // Gold button, for use on dark backgrounds or as the main action
  primary: 'border-gold-500 bg-gold-500 text-navy-950 hover:border-gold-300 hover:bg-gold-300',
  // Outlined button for dark backgrounds
  outline: 'border-gold-300/70 bg-transparent text-white hover:bg-white/10',
  // Outlined button for light backgrounds
  outlineLight: 'border-navy-900 bg-transparent text-navy-900 hover:bg-navy-900 hover:text-white',
  // Solid navy button for light backgrounds
  dark: 'border-navy-900 bg-navy-900 text-white hover:border-navy-800 hover:bg-navy-800',
}

/**
 * One component for every link-styled-as-a-button.
 *  - `to`   : internal page (React Router)
 *  - `href` : external link, tel: link, or mailto: link
 *  - `external` : open in a new tab (adds rel and a screen-reader hint)
 */
export default function ButtonLink({
  to,
  href,
  variant = 'primary',
  icon: Icon,
  external = false,
  className = '',
  children,
}) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {Icon ? <Icon className="h-5 w-5 shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
      {external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  )
}
