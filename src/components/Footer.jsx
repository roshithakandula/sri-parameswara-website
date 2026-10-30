import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { business, getMapLink } from '../data/business'
import { navLinks } from '../data/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark relative overflow-hidden border-t border-gold-500/40 bg-navy-950 text-slate-300">
      <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm">
              Celebrate responsibly. Please follow all applicable laws and official safety guidance.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="text-base font-semibold tracking-wide text-gold-300!">Explore</h2>
            <ul className="mt-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-11 items-center text-sm hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-base font-semibold tracking-wide text-gold-300!">Visit &amp; contact</h2>
            <address className="mt-4 space-y-4 text-sm not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                <span>
                  {business.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                <a
                  href={`tel:${business.phone.tel}`}
                  className="inline-flex min-h-11 items-center hover:text-gold-300"
                >
                  {business.phone.display}
                </a>
              </p>
            </address>
            <a
              href={getMapLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-gold-300 underline underline-offset-4 hover:text-white"
            >
              Get directions
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-base font-semibold tracking-wide text-gold-300!">Safety &amp; legal</h2>
            <p className="mt-4 text-sm">
              This website is for information only. It does not accept orders, bookings or payments.
            </p>
            <Link
              to="/safety-legal"
              className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-gold-300 underline underline-offset-4 hover:text-white"
            >
              Read safety &amp; legal information
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
