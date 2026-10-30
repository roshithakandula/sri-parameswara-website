import { ArrowRight, Phone } from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import { FireworkBurst } from '../components/Decor'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you were looking for could not be found."
        noindex
      />
      <section className="section-space">
        <div className="container-page flex flex-col items-center text-center">
          <FireworkBurst className="h-28 w-28 text-gold-500" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
            Error 404
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Page not found</h1>
          <p className="mt-5 max-w-md text-lg text-ink-500">
            Sorry, we could not find that page. It may have moved, or the address may have been
            typed incorrectly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/" variant="dark" icon={ArrowRight}>
              Back to home
            </ButtonLink>
            <ButtonLink to="/contact" variant="outlineLight" icon={Phone}>
              Contact details
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
