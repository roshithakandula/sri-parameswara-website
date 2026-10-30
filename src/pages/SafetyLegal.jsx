import {
  Ban,
  Baby,
  ExternalLink,
  Flame,
  FileText,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'
import InfoCard from '../components/InfoCard'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'

const guidance = [
  {
    icon: Scale,
    title: 'Follow the law',
    text: 'Follow all applicable laws and local restrictions. Rules can differ by state and district and can change, so check the current position for your area.',
  },
  {
    icon: FileText,
    title: 'Read the instructions',
    text: "Follow the manufacturer's instructions for each product, and any official safety instructions that apply.",
  },
  {
    icon: Baby,
    title: 'Protect children',
    text: 'Keep fireworks away from children and from anyone not authorised to handle them. Children should never handle fireworks.',
  },
  {
    icon: Flame,
    title: 'Avoid ignition sources',
    text: 'Keep fireworks away from flames, heat, sparks and other ignition sources, including during storage.',
  },
  {
    icon: Ban,
    title: 'Never relight a dud',
    text: 'Never try to relight a firework that has malfunctioned. Follow the manufacturer and official guidance on what to do instead.',
  },
  {
    icon: ShieldAlert,
    title: 'In an emergency',
    text: 'Follow applicable emergency guidance and contact your local emergency services when necessary. In India, 112 is the national emergency number.',
  },
]

export default function SafetyLegal() {
  return (
    <>
      <Seo
        title="Safety & Legal Information"
        description="General fireworks safety reminders and pointers to official guidance. This is general information, not legal advice."
      />

      <PageHero eyebrow="Safety & legal" title="Safety and legal information">
        General reminders for celebrating responsibly, with pointers to official guidance.
      </PageHero>

      {/* Disclaimer first, so it is seen before the guidance */}
      <section className="pt-12 sm:pt-16">
        <div className="container-page">
          <Reveal>
            <div
              className="mx-auto max-w-3xl rounded-2xl border-2 border-gold-500 bg-white p-6 shadow-sm sm:p-8"
              role="note"
              aria-label="Important disclaimer"
            >
              <h2 className="flex items-center gap-3 text-xl font-semibold">
                <ShieldCheck className="h-6 w-6 text-gold-700" aria-hidden="true" />
                General guidance only
              </h2>
              <p className="mt-3 text-ink-700">
                This page is general guidance. It is not legal advice and it is not a substitute for
                the manufacturer&apos;s instructions or for official safety instructions. Laws and
                guidance change, so always check the current official position before you buy or
                use fireworks.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Safety guidance */}
      <section className="section-space">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Safety reminders" title="Before and during use" align="center">
              These reminders apply in general. Product-specific instructions always come first.
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guidance.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80}>
                <InfoCard icon={item.icon} title={item.title}>
                  <p>{item.text}</p>
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Official guidance */}
      <section className="bg-white section-space">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Official guidance" title="Check current official sources">
              Legal requirements for fireworks in India are set by the authorities and are not
              summarised on this website.
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-gold-500/30 bg-cream-50 p-6 sm:p-8">
              <p className="text-ink-700">
                For the current position, consult the relevant authorities directly, such as the
                Petroleum and Explosives Safety Organisation (PESO) and your local administration
                or police.
              </p>
              <p className="mt-4">
                <a
                  href="https://peso.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-gold-700 underline underline-offset-4 hover:text-navy-900"
                >
                  PESO official website
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </p>
              <p className="mt-4 text-sm text-ink-500">
                This website does not claim any licence, approval or certification on behalf of the
                business, and nothing here should be read as confirming one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
