import { Eye, HeartHandshake, Phone, Scale, ShieldCheck } from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import DraftNotice from '../components/DraftNotice'
import InfoCard from '../components/InfoCard'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { business } from '../data/business'

const values = [
  {
    icon: ShieldCheck,
    title: 'Safety first',
    text: 'We encourage everyone to read and follow official safety guidance and manufacturer instructions.',
  },
  {
    icon: Scale,
    title: 'Lawful conduct',
    text: 'We respect the rules that apply to our trade and encourage visitors to do the same.',
  },
  {
    icon: HeartHandshake,
    title: 'Respectful service',
    text: 'We aim for courteous, clear and patient communication with every visitor.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    text: 'This website shows only information the owner has confirmed, and nothing more.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="About Sri Parameswara Crackers & Fireworks: our values, our approach to customer service and our commitment to responsible celebrations."
      />

      <PageHero eyebrow="About us" title="About Sri Parameswara Crackers & Fireworks">
        Who we are, how we approach customer service, and what this website is for.
      </PageHero>

      {/* Introduction + background */}
      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Who we are" title="Our business" />
            <p className="mt-6 text-lg text-ink-700">{business.content.intro}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl font-semibold">Company background</h2>
            {business.content.aboutBackground ? (
              <p className="mt-4 text-ink-700">{business.content.aboutBackground}</p>
            ) : (
              <DraftNotice className="mt-4">
                The company background (for example, how the business began and who runs it) has
                not been supplied. Add it as <code>content.aboutBackground</code> in{' '}
                <code>src/data/business.js</code>. Please do not guess a founding year, founder
                names or achievements.
              </DraftNotice>
            )}
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section-space">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Our values" title="What we stand for" align="center">
              These are the principles we want every visitor to experience.
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <InfoCard icon={value.icon} title={value.title}>
                  <p>{value.text}</p>
                </InfoCard>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <DraftNotice>The wording of these values is a draft for the owner to approve or change.</DraftNotice>
          </div>
        </div>
      </section>

      {/* Customer service + responsible celebrations */}
      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold">Our approach to customer service</h2>
            <p className="mt-5 text-ink-700">
              We want visitors to leave with clear answers. That means being honest about what we
              can help with, listening carefully, and pointing you to official sources when a
              question is about the law or about safety.
            </p>
            <p className="mt-4 text-ink-500">
              For questions about availability or services, please speak to the owner directly by
              phone or in person. This website does not take orders, bookings or payments.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl font-semibold">Commitment to responsible celebrations</h2>
            <p className="mt-5 text-ink-700">
              Celebrations are happiest when everyone stays safe. We encourage following all
              applicable laws and local restrictions, obtaining fireworks only through legally
              authorised channels where applicable, and following official safety instructions.
            </p>
            <div className="mt-6">
              <ButtonLink to="/safety-legal" variant="outlineLight" icon={ShieldCheck}>
                Safety &amp; Legal information
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="on-dark relative overflow-hidden bg-navy-950 text-white section-space">
        <div className="pattern-dots absolute inset-0" aria-hidden="true" />
        <Reveal className="container-page relative text-center">
          <h2 className="text-3xl font-semibold text-white! sm:text-4xl">Questions? Get in touch</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Find our address and phone number on the Contact page.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/contact" icon={Phone}>
              Contact us
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  )
}
