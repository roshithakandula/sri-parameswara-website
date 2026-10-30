# Sri Parameswara Crackers & Fireworks Website

An informational business website built with React, Vite, React Router, and Lucide icons.

**Important:** This is an informational website only. It does not include shopping carts, online ordering, payments, delivery, product catalogues, prices, or stock listings. Obtain appropriate legal guidance before adding commercial features.

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/information` | `src/pages/Information.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| `/safety-legal` | `src/pages/SafetyLegal.jsx` |
| Other addresses | `src/pages/NotFound.jsx` |

## Technologies

- React
- Vite
- JavaScript
- CSS
- React Router
- Lucide icons

## Run Locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

```bash
npm run build
```

The production files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/components/` — reusable UI components
- `src/data/` — business information and navigation data
- `src/hooks/` — custom React hooks
- `src/layouts/` — shared page layouts
- `src/pages/` — website pages
- `public/` — static assets and deployment files

## Before Deployment

1. Verify the business address, phone number, and opening hours.
2. Replace placeholder domain values in the relevant SEO and sitemap files.
3. Test all pages on desktop and mobile.
4. Run `npm run build` and resolve any errors.
5. Obtain appropriate legal guidance before adding commercial features.

## Deployment

This project includes `vercel.json` for Vercel deployment and `public/_redirects` for compatible static hosting providers.

For Vercel, use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Check the deployed website and test all routes before sharing it publicly.