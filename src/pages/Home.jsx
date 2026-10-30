import {
  ArrowRight,
  BookOpen,
  CircleCheck,
  Compass,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import DraftNotice from '../components/DraftNotice'
import { FireworkBurst, OrnamentDivider } from '../components/Decor'
import InfoCard from '../components/InfoCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { business, getMapLink } from '../data/business'

const highlights = [
  {
    icon: BookOpen,
    title: 'Business Information',
    to: '/information',
    linkLabel: 'View business information',
    text: 'An overview of the business and where to find verified details.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible Celebrations',
    to: '/safety-legal',
    linkLabel: 'Read safety guidance',
    text: 'General safety reminders and pointers to official guidance.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Guidance',
    to: '/about',
    linkLabel: 'About our service',
    text: 'How we approach courteous, clear and honest communication.',
  },
  {
    icon: Compass,
    title: 'Location & Contact',
    to: '/contact',
    linkLabel: 'Find us',
    text: 'Our address, phone number and a link to open directions.',
  },
]

const responsibleReminders = [
  'Follow all laws and local restrictions that apply where you are.',
  'Obtain fireworks only through legally authorised channels, where applicable.',
  "Read and follow the manufacturer's instructions and official safety guidance.",
  'Keep fireworks away from children and from anyone not authorised to handle them.',
]

export default function Home() {
  return (
    <>
      <Seo
        description="Sri Parameswara Crackers & Fireworks is a fireworks retail and wholesale business on Vinukonda Road, Andhra Pradesh. Find our location, contact details and general safety information."
        includeStructuredData
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-navy-950 text-white">
        <div className="pattern-lattice absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgb(201_162_39/0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <FireworkBurst className="absolute -left-16 bottom-0 h-64 w-64 text-gold-500/15 lg:hidden" />

        <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div className="fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              {business.name}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white! sm:text-5xl lg:text-6xl">
              Celebrate every occasion, <span className="text-gold-300">responsibly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              {business.category} on Vinukonda Road, Andhra Pradesh. Find our location, contact
              details and general safety information here.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/information" icon={ArrowRight}>
                Explore Our Business
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" icon={MapPin}>
                Find Our Location
              </ButtonLink>
            </div>
          </div>

          {/* Decorative arch (illustration only) */}
          <div className="hidden justify-center lg:flex" aria-hidden="true">
            <div className="relative flex h-[26rem] w-80 items-center justify-center overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-gold-500/60 bg-linear-to-b from-navy-800 to-navy-900">
              <div className="pattern-dots absolute inset-0 opacity-60" />
              <FireworkBurst className="absolute -top-2 left-1/2 h-60 w-60 -translate-x-1/2 text-gold-300" />
              <FireworkBurst className="absolute bottom-6 right-2 h-32 w-32 text-ember-500/80" rays={14} />
              <FireworkBurst className="absolute bottom-16 left-0 h-24 w-24 text-gold-500/70" rays={12} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Welcome" title={`Welcome to ${business.name}`} />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-ink-700">{business.content.intro}</p>
            <p className="mt-5 text-ink-500">
              This is an information website. It does not take orders, bookings or payments. For
              questions about availability or services, please speak to the owner directly.
            </p>
            <DraftNotice className="mt-6">
              The introduction text comes from <code>src/data/business.js</code> and needs the
              owner&apos;s approval before launch.
            </DraftNotice>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white section-space">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="At a glance" title="What you can find here" align="center">
              Four simple places to start.
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <InfoCard icon={item.icon} title={item.title} to={item.to} linkLabel={item.linkLabel}>
                  <p>{item.text}</p>
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-space">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <OrnamentDivider className="mx-auto mb-8 max-w-xs" />
            <h2 className="text-3xl font-semibold sm:text-4xl">About us</h2>
            <p className="mt-5 text-lg text-ink-500">{business.content.aboutPreview}</p>
            <div className="mt-8 flex justify-center">
              <ButtonLink to="/about" variant="outlineLight" icon={ArrowRight}>
                More about us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESPONSIBLE CELEBRATIONS */}
      <section className="on-dark relative overflow-hidden bg-navy-900 text-white section-space">
        <div className="pattern-lattice absolute inset-0" aria-hidden="true" />
        <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Responsible celebrations" title="Celebrate safely and lawfully" tone="dark">
              Fireworks are regulated in India, and the rules can vary by place. Please check the
              current official guidance for your area before you celebrate.
            </SectionHeading>
            <div className="mt-8">
              <ButtonLink to="/safety-legal" icon={ShieldCheck}>
                Safety &amp; Legal information
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {responsibleReminders.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl border border-gold-500/30 bg-navy-950/60 p-5"
                >
                  <CircleCheck className="mt-0.5 h-6 w-6 shrink-0 text-gold-300" aria-hidden="true" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* LOCATION PREVIEW */}
      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Visit us" title="Our location">
              Find us on Vinukonda Road, Andhra Pradesh.
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-gold-500/30 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <address className="not-italic text-ink-700">
                  {business.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={getMapLink()} external variant="dark" icon={Compass}>
                  View location on map
                </ButtonLink>
                <ButtonLink to="/contact" variant="outlineLight">
                  Contact details
                </ButtonLink>
              </div>
              <DraftNotice className="mt-6">
                Address supplied by the business; please verify it on Google Maps before launch.
              </DraftNotice>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CALL TO ACTION */}
      <section className="on-dark relative overflow-hidden bg-navy-950 text-white section-space">
        <div className="pattern-dots absolute inset-0" aria-hidden="true" />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white! sm:text-4xl">Get in touch</h2>
            <p className="mt-4 text-lg text-slate-300">
              For general questions about the business, you can call us or visit the Contact page.
            </p>
            <p className="mt-6 font-display text-3xl font-semibold text-gold-300 sm:text-4xl">
              {business.phone.display}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={`tel:${business.phone.tel}`} icon={Phone}>
                Call us
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" icon={ArrowRight}>
                Contact page
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Product availability and services must be confirmed directly with the owner.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
