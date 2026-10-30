# Sri Parameswara Crackers & Fireworks: website

An informational business website built with React, Vite, Tailwind CSS v4, React Router and Lucide icons.

**This is an information website only.** It has no cart, checkout, ordering, payments, delivery, product catalogue, prices or stock listings, and it must stay that way until the owner has written confirmation from a qualified lawyer or the licensing authority (see "Legal review" below).

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/information` | `src/pages/Information.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| `/safety-legal` | `src/pages/SafetyLegal.jsx` |
| any other address | `src/pages/NotFound.jsx` (404) |

## Installing these files into your existing project (Windows PowerShell)

Run everything from the project folder:

```powershell
cd C:\Projects\sri-parameswara-website
```

1. Copy the contents of this package into the project folder, **replacing** `index.html`, the whole `src` folder and the whole `public` folder. Add `vercel.json` next to `package.json`. (Keep your existing `package.json`, `vite.config.js` and `.gitignore`.)
2. Delete files left over from the Vite template if they exist: `src\App.css` and `src\assets\react.svg`.
3. Install the two self-hosted font packages (the other packages are already installed):

```powershell
npm install @fontsource-variable/inter @fontsource-variable/playfair-display
```

4. Check that `npm ls react-router-dom lucide-react tailwindcss @tailwindcss/vite` lists all four. If one is missing, install it with `npm install <name>`.

## Commands

```powershell
npm run dev       # local development server (http://localhost:5173)
npm run build     # production build into the dist folder
npm run preview   # serve the production build locally to check it
```

## Where to edit things

| To change | Edit |
|---|---|
| Phone, address, map link, hours, email, announcement text, intro text | `src/data/business.js` |
| Navigation links | `src/data/navigation.js` |
| Colours and fonts | `@theme` block in `src/index.css` |
| Logo (currently text-based) | `src/components/Logo.jsx` |
| Page text | the matching file in `src/pages/` |

### `business.js` switches

- `verified.address`, `verified.phone`: set to `true` **only after** the owner confirms them. Search-engine structured data (JSON-LD) is published only when both are `true`.
- `hours`: leave `null` until confirmed. The Contact page shows a "to be confirmed" message meanwhile.
- `showDraftNotices`: set to `false` before launch to hide the dashed "Draft, owner to confirm" boxes.
- `siteUrl` and `siteUrlConfirmed`: put the real domain in `siteUrl` and set `siteUrlConfirmed` to `true`. Only then are canonical links, `og:url` and `og:image` added.
- `mapLinkOverride`: paste an exact Google Maps share link, or leave `null` to search by address.

## Before going live: domain placeholders

Search the project for `your-domain-here.example` and replace it in:

- `public/sitemap.xml` (5 places)
- `public/robots.txt` (uncomment the `Sitemap:` line)
- `src/data/business.js` (`siteUrl`)

## Testing checklist

1. `npm run dev`, then open every route: `/`, `/about`, `/information`, `/contact`, `/safety-legal`, and a nonsense address such as `/xyz` (should show the 404 page).
2. Open the browser DevTools console (F12). There should be no red errors.
3. Toggle the device toolbar (Ctrl+Shift+M in Chrome/Edge). Check widths 320, 375, 390, 768, 1024 and 1440. Nothing should scroll sideways, and the menu button should appear below 1024px.
4. Keyboard: press Tab from the top. The first stop should be "Skip to main content". Open the mobile menu with Enter and close it with Esc.
5. Click every link in the navbar and footer, "Call us" (opens your phone dialler on mobile) and "View location on map".
6. Turn on "reduce motion" in your operating system and confirm that content still appears without animation.
7. `npm run build`, then `npm run preview`. Repeat steps 1 and 2 there, and reload a deep link such as `/contact`.
8. Run Lighthouse (DevTools, Lighthouse tab) in an Incognito window on the preview.

## Deployment

Any static host works. Two routing files are included because React Router needs every address to serve `index.html`:

- `vercel.json` for Vercel.
- `public/_redirects` for Netlify and Cloudflare Pages.

### Put the code on GitHub

```powershell
cd C:\Projects\sri-parameswara-website
git add .
git commit -m "Complete informational website"
```

Create an empty repository on github.com (no README, no .gitignore), then run the two commands GitHub shows, which look like this (use your own address):

```powershell
git remote add origin https://github.com/YOUR-USERNAME/sri-parameswara-website.git
git push -u origin main
```

If your branch is called `master`, run `git branch -M main` first.

### Deploy on Vercel (or Netlify / Cloudflare Pages)

1. Sign in to the host with your GitHub account and choose "Add new project", then pick the repository.
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. No environment variables are needed. This site has no secrets.
4. Deploy. Open the provided `*.vercel.app` address and run the testing checklist above.

### Domain and HTTPS

1. The owner should **buy the domain in their own name** and keep the registrar login.
2. In the host's "Domains" settings, add the domain and copy the DNS records it shows into the registrar's DNS page.
3. HTTPS certificates are issued automatically once DNS works. Check that `http://` redirects to `https://`.
4. Update the domain placeholders (see above), rebuild and redeploy. Then submit `sitemap.xml` in Google Search Console and claim the Google Business Profile if the owner has one.

## SEO note

This is a client-side rendered single-page app. Page titles, descriptions and social tags are set in the browser per route. Google runs JavaScript and handles this well, but some crawlers and social-preview bots read only the raw `index.html`, so shared links will show the default title and description. If stronger SEO matters later, add build-time prerendering of the five routes (for example a Vite prerender plugin), or move to a framework with static generation such as Astro or Next.js. For a five-page local-business site, this is optional.

## Legal review (owner must complete)

The PESO circular of 11 April 2023 on online fireworks sales has not been verified by the developer. Before adding any product list, "enquiry" feature, WhatsApp link or similar, ask a qualified lawyer or the licensing authority:

1. Does a catalogue that only displays products count as online sale or advertisement?
2. May product names or categories appear, and must licence details accompany them?
3. Is a call or enquiry channel acceptable?
4. May the licence number be shown, and in what form?
5. Are there rules on advertising wording, such as "green" or "eco-friendly"?
6. May both retail and wholesale activity be described publicly?
7. Are there Andhra Pradesh or district-level conditions?
8. What disclaimers must the site show?

## Optional phase 2 (not built)

An admin area for editing approved content (for example with Supabase) is possible later. It would need real admin authentication, row-level security policies, no service-role keys in the front end, input validation, and no customer data collection. It must never include ordering or payment features.
