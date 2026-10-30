import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { business } from '../data/business'
import { buildLocalBusinessJsonLd } from '../data/structuredData'

// Creates, updates or removes a <meta> tag. An empty value removes the tag.
function setMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector)
  if (!content) {
    if (element) element.remove()
    return
  }
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    if (element) element.remove()
    return
  }
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function setJsonLd(data) {
  const id = 'structured-data'
  let element = document.getElementById(id)
  if (!data) {
    if (element) element.remove()
    return
  }
  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.id = id
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

/**
 * Sets the page title, description and social-sharing tags for each route.
 * Canonical URL, og:url and og:image are only added once the real domain is
 * confirmed (business.siteUrlConfirmed). Structured data is added only for
 * pages that ask for it AND only when the owner has verified the facts.
 */
export default function Seo({ title, description, noindex = false, includeStructuredData = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${business.name}` : business.name
    const path = pathname === '/' ? '' : pathname.replace(/\/$/, '')
    const url = business.siteUrlConfirmed ? `${business.siteUrl}${path || '/'}` : null
    const image = business.siteUrlConfirmed ? `${business.siteUrl}/og-image.png` : null

    document.title = fullTitle

    setMeta('meta[name="description"]', { name: 'description' }, description)
    setMeta('meta[name="robots"]', { name: 'robots' }, noindex ? 'noindex, follow' : null)

    setMeta('meta[property="og:title"]', { property: 'og:title' }, fullTitle)
    setMeta('meta[property="og:description"]', { property: 'og:description' }, description)
    setMeta('meta[property="og:url"]', { property: 'og:url' }, url)
    setMeta('meta[property="og:image"]', { property: 'og:image' }, image)
    setMeta(
      'meta[property="og:image:alt"]',
      { property: 'og:image:alt' },
      image ? `${business.name}, decorative festive artwork` : null,
    )
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, fullTitle)
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, image)

    setCanonical(noindex ? null : url)
    setJsonLd(includeStructuredData ? buildLocalBusinessJsonLd() : null)
  }, [title, description, noindex, includeStructuredData, pathname])

  return null
}
