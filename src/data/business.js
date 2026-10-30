/**
 * CENTRAL BUSINESS CONFIGURATION
 * ---------------------------------------------------------------
 * Every business fact used on the website lives in this file.
 * Edit here, and every page, the footer and the SEO tags update.
 *
 * RULES
 * - Anything not yet confirmed by the owner must stay `null`
 *   (or `verified.xxx = false`). Components hide `null` values.
 * - Do NOT add products, prices, stock, offers, delivery claims,
 *   licence numbers, awards or testimonials until the owner has
 *   confirmed them AND a qualified lawyer / the licensing authority
 *   has confirmed they may be published.
 */

export const business = {
  // ---- Identity ------------------------------------------------
  name: 'Sri Parameswara Crackers & Fireworks',
  category: 'Fireworks retail and wholesale', // owner to confirm the exact public wording

  // ---- Contact (supplied by the business, awaiting verification)
  phone: {
    display: '+91 90327 67732',
    tel: '+919032767732', // digits only, used for tel: links
  },
  email: null, // e.g. 'hello@your-domain.in' once the owner confirms an address

  // ---- Address (supplied by the business, awaiting verification)
  address: {
    plusCode: '626V+Q6R',
    // Lines shown on the website, top to bottom
    lines: [
      '626V+Q6R, Vinukonda Road',
      'Vidya Nagar, Lingamguntla Agraharam Rural',
      'Andhra Pradesh 522603',
      'India',
    ],
    // Structured pieces, used only for structured data (JSON-LD)
    street: 'Vinukonda Road, Vidya Nagar',
    locality: 'Lingamguntla Agraharam Rural',
    region: 'Andhra Pradesh',
    postalCode: '522603',
    countryCode: 'IN',
  },

  // Leave null to build the link automatically from the address above.
  // To use an exact Google Maps share link, paste it between the quotes.
  mapLinkOverride: null,

  // ---- Opening hours -------------------------------------------
  // null until the owner confirms. When confirmed, use this shape:
  // [
  //   { days: 'Monday to Saturday', time: '9:00 am to 7:00 pm' },
  //   { days: 'Sunday', time: 'Closed' },
  // ]
  hours: null,

  // ---- Licence details -----------------------------------------
  // Keep null. Only add after the owner supplies it AND legal advice
  // confirms it may be shown publicly.
  licence: null,

  // ---- Verification flags --------------------------------------
  // Set each to true ONLY after the owner has confirmed that item.
  // Structured data (JSON-LD for search engines) is published only
  // when the address and phone are both verified.
  verified: {
    address: false,
    phone: false,
    hours: false,
  },

  // While true, small "draft / owner to confirm" notes are visible on
  // some pages. Set to false before the public launch.
  showDraftNotices: true,

  // ---- Website address ----------------------------------------
  // PLACEHOLDER. Replace with the real domain, then set
  // siteUrlConfirmed to true. Canonical links, social-share URLs and
  // structured-data URLs are only produced once it is confirmed.
  siteUrl: 'https://www.your-domain-here.example',
  siteUrlConfirmed: false,

  // ---- Announcement bar ----------------------------------------
  // Keep it factual. No discounts, offers, delivery or stock claims.
  announcement: {
    enabled: true,
    text: 'Celebrate responsibly: please follow all applicable laws and official safety guidance.',
  },

  // ---- Editable page text --------------------------------------
  // Draft wording for the owner to review. `null` hides a block.
  content: {
    intro:
      'Sri Parameswara Crackers & Fireworks is a fireworks retail and wholesale business on Vinukonda Road in Andhra Pradesh. This website is the place to find our address, contact details and general safety information.',
    aboutPreview:
      'Learn how we approach customer service and responsible celebration, and what this website does and does not offer.',
    // Owner to supply. Do not invent a founding year, founder names or history.
    aboutBackground: null,
  },
}

/** Full address on one line, used for map searches. */
export function getFullAddress() {
  return business.address.lines.join(', ')
}

/** Link that opens the location in Google Maps (or the user's map app). */
export function getMapLink() {
  if (business.mapLinkOverride) return business.mapLinkOverride
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`
}
