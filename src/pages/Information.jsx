import { Compass, ExternalLink, Info, Landmark, Phone } from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import DraftNotice from '../components/DraftNotice'
import InfoCard from '../components/InfoCard'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { business, getMapLink } from '../data/business'

export default function Information() {
  const facts = [
    { label: 'Business name', value: business.name },
    { label: 'Business type', value: business.category },
    { label: 'Address', value: business.address.lines.join(', ') },
    { label: 'Phone', value: business.phone.display },
    {
      label: 'Opening hours',
      value: business.hours ? 'See the Contact page' : 'To be confirmed by the owner',
    },
  ]

  return (
    <>
      <Seo
        title="Business Information"
        description="General information about Sri Parameswara Crackers & Fireworks and where to find our verified location and contact details."
      />

      <PageHero eyebrow="Business information" title="About the business and where to find us">
        General information only. This page does not list products, prices or stock.
      </PageHero>

      {/* Overview */}
      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="Business overview" />
            <p className="mt-6 text-lg text-ink-700">{business.content.intro}</p>
          </Reveal>
          <Reveal delay={100}>
            <dl className="divide-y divide-gold-500/20 rounded-2xl border border-gold-500/30 bg-white shadow-sm">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                    {fact.label}
                  </dt>
                  <dd className="text-ink-700">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <DraftNotice className="mt-4">
              These details were supplied by the business and still need the owner&apos;s
              confirmation.
            </DraftNotice>
          </Reveal>
        </div>
      </section>

      {/* About the category */}
      <section className="bg-white section-space">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Good to know" title="About fireworks businesses in India">
              A general introduction, not legal advice.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <InfoCard icon={Landmark} title="A regulated trade">
                <p>
                  In India, fireworks are regulated products. Rules about selling, storing,
                  transporting and using them can differ by state and by district, and they can
                  change over time.
                </p>
              </InfoCard>
            </Reveal>
            <Reveal delay={80}>
              <InfoCard icon={Info} title="Check official sources">
                <p>
                  Before you buy or use fireworks, check the current guidance from the relevant
                  authorities, such as PESO and your local administration.
                </p>
                <p className="mt-3">
                  <a
                    href="https://peso.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-semibold text-gold-700 underline underline-offset-4 hover:text-navy-900"
                  >
                    PESO website
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </p>
              </InfoCard>
            </Reveal>
            <Reveal delay={160}>
              <InfoCard icon={Compass} title="Find verified details">
                <p>
                  Our address and phone number are on the Contact page. Please use those details
                  rather than third-party listings, which may be out of date.
                </p>
              </InfoCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="section-space">
        <div className="container-page">
          <Reveal>
            <div
              className="mx-auto max-w-3xl rounded-2xl border-2 border-gold-500 bg-white p-6 shadow-sm sm:p-8"
              role="note"
              aria-label="Important notice"
            >
              <h2 className="text-2xl font-semibold">Important notice</h2>
              <p className="mt-3 text-ink-700">
                Product availability and business-specific services must be confirmed directly with
                the owner. This website is for information only. It does not take orders,
                bookings, deposits or payments, and it does not arrange delivery.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/contact" icon={Phone}>
                  Contact details
                </ButtonLink>
                <ButtonLink href={getMapLink()} external variant="outlineLight" icon={Compass}>
                  Open location in maps
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
