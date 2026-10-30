import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/navigation'

const linkBase =
  'inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors duration-200'
const linkInactive = 'text-slate-200 hover:bg-white/10 hover:text-white'
const linkActive = 'bg-white/10 text-gold-300'

export default function Navbar() {
  const { pathname } = useLocation()
  // The menu counts as open only on the page where it was opened,
  // so it closes by itself whenever the route changes.
  const [openPath, setOpenPath] = useState(null)
  const open = openPath === pathname
  const buttonRef = useRef(null)

  // Close with the Escape key and return focus to the menu button
  useEffect(() => {
    if (!open) return undefined
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpenPath(null)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="on-dark sticky top-0 z-40 border-b border-gold-500/30 bg-navy-950">
      <div className="container-page flex items-center justify-between gap-4 py-2">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/60 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      <nav
        id="mobile-menu"
        aria-label="Main mobile"
        className={`border-t border-gold-500/20 bg-navy-900 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="container-page flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `${linkBase} w-full rounded-xl py-3 text-base ${isActive ? linkActive : linkInactive}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
