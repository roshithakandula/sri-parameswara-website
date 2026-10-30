import { business } from './business'

/**
 * Builds LocalBusiness structured data (JSON-LD) for search engines.
 *
 * It returns null (so nothing is published) until the owner has verified
 * BOTH the address and the phone number in src/data/business.js.
 * Opening hours, ratings, reviews and licences are deliberately NOT included.
 */
export function buildLocalBusinessJsonLd() {
  if (!business.verified.address || !business.verified.phone) return null

  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    telephone: business.phone.tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode,
    },
  }

  if (business.email) data.email = business.email
  if (business.siteUrlConfirmed) data.url = business.siteUrl

  return data
}
