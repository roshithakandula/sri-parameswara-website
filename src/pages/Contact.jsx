import { Clock, Compass, Mail, MapPin, Phone, ShieldAlert } from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import DraftNotice from '../components/DraftNotice'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { business, getMapLink } from '../data/business'

function DetailRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-700">{label}</h3>
        <div className="mt-1 text-ink-700">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Location"
        description="Find the address, phone number and map directions for Sri Parameswara Crackers & Fireworks on Vinukonda Road, Andhra Pradesh."
      />

      <PageHero eyebrow="Contact" title="Location and contact details">
        How to find us and reach us for general enquiries.
      </PageHero>

      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact information card */}
          <Reveal>
            <div className="rounded-2xl border border-gold-500/30 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold">Contact information</h2>
              <div className="mt-8 space-y-7">
                <DetailRow icon={MapPin} label="Address">
                  <address className="not-italic">
                    {business.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </DetailRow>

                <DetailRow icon={Phone} label="Phone">
                  <a
                    href={`tel:${business.phone.tel}`}
                    className="inline-flex min-h-11 items-center text-lg font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-700"
                  >
                    {business.phone.display}
                  </a>
                </DetailRow>

                {business.email ? (
                  <DetailRow icon={Mail} label="Email">
                    <a
                      href={`mailto:${business.email}`}
                      className="inline-flex min-h-11 items-center font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-700"
                    >
                      {business.email}
                    </a>
                  </DetailRow>
                ) : null}

                <DetailRow icon={Clock} label="Opening hours">
                  {business.hours ? (
                    <table className="w-full max-w-sm text-left">
                      <caption className="sr-only">Opening hours</caption>
                      <tbody>
                        {business.hours.map((row) => (
                          <tr key={row.days}>
                            <th scope="row" className="py-1 pr-4 font-medium">
                              {row.days}
                            </th>
                            <td className="py-1">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>Opening hours will be added once confirmed by the owner. Please call before visiting.</p>
                  )}
                </DetailRow>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`tel:${business.phone.tel}`} icon={Phone}>
                  Call {business.phone.display}
                </ButtonLink>
                <ButtonLink href={getMapLink()} external variant="dark" icon={Compass}>
                  Open in maps
                </ButtonLink>
              </div>

              <DraftNotice className="mt-8">
                The address and phone number were supplied by the business. Verify both (and add
                the opening hours) in <code>src/data/business.js</code>, then set the matching{' '}
                <code>verified</code> flags to <code>true</code>.
              </DraftNotice>
            </div>
          </Reveal>

          {/* Side notes */}
          <Reveal delay={100}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-gold-500/30 bg-navy-900 p-6 text-slate-200 sm:p-8">
                <h2 className="text-xl font-semibold text-white">About this website</h2>
                <p className="mt-3 text-sm sm:text-base">
                  This is an information website. It does not take orders, bookings, deposits or
                  payments, and it does not arrange delivery. For questions about availability or
                  services, please speak to the owner directly.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-500/30 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="flex items-center gap-3 text-xl font-semibold">
                  <ShieldAlert className="h-6 w-6 text-ember-500" aria-hidden="true" />
                  In an emergency
                </h2>
                <p className="mt-3 text-ink-700">
                  Contact your local emergency services immediately. In India, <strong>112</strong>{' '}
                  is the national emergency number.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
