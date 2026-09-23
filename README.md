# Heart2Home — Child & Family Guidance by Shammy Akhter

A production-grade, vibrant, bilingual (English / বাংলা) multi-page website for Heart2Home (Lead Counsellor: Shammy Akhter), built with Next.js 14/15/16 (App Router), Tailwind CSS, Framer Motion, and Lucide React icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires Node.js 18.17+.

## Building for production

```bash
npm run build
npm run start
```

**Note:** `next/font/google` fetches font files from Google Fonts at build
time, so `npm run build` needs normal internet access (any laptop, CI runner,
or host like Vercel/Netlify works — this only fails in network-locked
sandboxes). The whole app was verified to compile and statically prerender
all 14 routes with zero errors before delivery; the only failure seen during
development was in a sandboxed environment that blocks `fonts.googleapis.com`.

## Deploying

The easiest path is [Vercel](https://vercel.com/new) — import this folder as
a project and it will detect Next.js automatically. Any Node host that runs
`npm run build && npm run start` also works.

## Everything you'll want to edit before launch

### 1. Contact details — `src/data/content.json` → `"site"`
```json
"site": {
  "phone": "+8801742220444",
  "whatsapp": "8801742220444",
  "email": "shammyakhterofficial@gmail.com",
  ...
}
```
Every WhatsApp button, the sticky mobile bar, the quiz's WhatsApp CTA, and the
booking form all read from this single object — updating it here updates the
entire site.

### 2. All page copy — `src/data/content.json`
Every string on every page, in both English and Bengali, lives in this one
file, organized by page/section (`home`, `servicesIndex`, `childParentPage`,
`aboutPage`, `credentialsPage`, `quiz`, `faqPage`, `contactPage`, `footer`,
`nav`, `common`). No component hardcodes text. Edit copy here — never inside
the `.tsx` files — and it will show up correctly in both languages.

### 3. Images — `public/images/`
- `shammy-portrait.jpg` — the original photo, used for the About page and
  the mini-bio section on the homepage (cropped/contained, not a cutout).
- `shammy-cutout.png` — a transparent PNG used in the homepage hero's 3D
  tilt effect. This is a clean, professionally-lit headshot with the
  background removed programmatically (the source had a plain, near-solid
  studio background, which keyed out cleanly with no artifacts — unlike an
  earlier source image that had a checkerboard-pattern background baked in
  as visible pixels). If you get an even better/different photo later, just
  replace this file with the same name.

### 4. Downloadable guides — `public/downloads/`
Two real, fully-styled PDFs (not placeholder links) are offered to parents
who score low/moderate on the Parent Readiness Quiz:
- `family-de-escalation-guide-en.pdf` — English
- `family-de-escalation-guide-bn.pdf` — বাংলা

Both are built from HTML/CSS via [WeasyPrint](https://weasyprint.org/) rather
than a plain PDF library — this matters specifically for the Bangla version,
because Bengali text requires complex-script shaping (conjuncts, vowel
reordering) that basic PDF text drawing does not do correctly. WeasyPrint
uses Pango/HarfBuzz under the hood, which shapes Bengali properly. If you
ever regenerate these PDFs with a different tool, render a page to an image
and visually check the Bangla text before shipping it — malformed shaping is
easy to miss by just checking the file opens.

Both footers include the phone number. Swap these files to update content —
the quiz links to them by filename.

### 5. Domain / canonical URLs
`src/app/layout.tsx` and each page's `metadata.alternates.canonical` /
`openGraph.url` currently point at `https://www.shammyakhter.com`. Update
`siteUrl` in `layout.tsx` and the JSON-LD blocks in `src/app/page.tsx` and
`src/app/about/page.tsx` once the real domain is live.

## Mobile optimization notes

Most traffic to a site like this is expected to be mobile, so this pass
specifically targeted phone usability rather than just "does it stack":

- **Language toggle bug fix**: `LanguageContext.tsx` called
  `window.localStorage` with no error handling. On iOS Safari private
  browsing, and in many in-app browsers (Instagram/Facebook/TikTok — a
  common way people reach a shared link), `localStorage.setItem` throws,
  which silently broke the toggle with nothing catching it. Now wrapped in
  try/catch, and the in-memory language switch always happens regardless of
  whether persisting the choice succeeds.
- **Every page is in the nav now**: the footer previously omitted Home and
  Contact, and never listed the 4 individual service pages anywhere. It's
  now organized into Explore / Services / Contact columns with every route
  linked. The mobile drawer also gives the 4 service sub-pages equal visual
  weight instead of a small muted afterthought.
- **iOS auto-zoom fix**: form inputs under 16px font-size trigger Safari's
  automatic zoom-on-focus, which feels broken to users. All `BookingForm`
  inputs/selects/textarea are now 16px (`text-base`) minimum.
- **44px minimum touch targets**: the language toggle, hamburger button,
  and quiz Back/Next buttons were all under Apple/WCAG's 44px recommended
  minimum tap size — enlarged.
- **Header overflow risk on narrow phones**: at ~320-360px viewport widths
  (small Android phones), the brand name + tagline + language toggle +
  hamburger could genuinely run out of horizontal room. The tagline now
  hides below `sm:`, and spacing/padding tightens on the smallest
  breakpoint, while touch target sizes are preserved.
- **Explicit viewport meta tag** (`width=device-width, initial-scale=1`,
  with `maximumScale: 5` so pinch-zoom still works for accessibility).
- **Defensive `overflow-x: hidden`** on `html`/`body` as a safety net
  against any stray element causing horizontal scroll on mobile.
- The homepage hero's 3D tilt effect is mouse-driven and simply does
  nothing on touch devices (no `onMouseMove` on mobile) — this is expected
  and fine, not a bug; the credential card and headline are still fully
  visible and readable without it. The scroll-triggered card reveal works
  identically on mobile via scroll events.

## Architecture notes

- **Bilingual state** — `src/context/LanguageContext.tsx` provides a
  `useLanguage()` hook (`lang`, `setLang`, `toggleLang`) backed by
  `localStorage`. The header's pill toggle switches every page instantly.
- **Content separation** — `src/data/content.json` is the single source of
  truth for copy; `src/lib/utils.ts` exports a `t(field, lang)` helper used
  everywhere to pull the right-language string.
- **Icons** — data-driven icon names (e.g. `"Flame"`, `"Baby"`) are resolved
  through `src/lib/icon-map.ts`, so `content.json` can reference icons by
  name without importing React components into JSON.
- **SEO** — per-route `metadata` exports (title, description, OpenGraph,
  canonical) on every page; JSON-LD (`LocalBusiness` on `/`, `Person` +
  `CounselingService` on `/about`, `FAQPage` on `/faq`) via the small
  `JsonLd` component.
- **Mobile UX** — `StickyMobileBar.tsx` shows WhatsApp + Book buttons on
  small screens only, and hides itself automatically when a text input or
  textarea is focused (virtual keyboard guard), per the safe-area rules
  (`pb-safe`, `env(safe-area-inset-bottom)`).
- **Accessibility** — `MobileDrawer.tsx` implements a focus trap (Tab/Shift+Tab
  cycling, Escape to close, focus restored to the trigger button on close).
- **Quiz logic** — `ParentReadinessQuiz.tsx` computes a weighted score across
  4 steps (max 12) and maps it to one of four tiers (`low`/`moderate` →
  PDF download CTA, `elevated`/`urgent` → pre-filled WhatsApp message). The
  same component is embedded both on the homepage and at
  `/parent-readiness-quiz`.

## Known limitations / things to double-check

- No backend/database exists. The booking form and quiz's "urgent" result
  both hand off to WhatsApp via a pre-filled `wa.me` link rather than
  submitting anywhere — there is nothing to configure server-side, but also
  nothing stored. If you later want submissions logged somewhere, that would
  need a form backend (e.g. a serverless function or a service like
  Formspree) added to `BookingForm.tsx`.

## Dependency / security notes

This project pins `next` to `16.3.5` and forces `postcss` to `8.5.28` via an
`overrides` entry in `package.json` — both were deliberate fixes for real
published vulnerabilities (a critical unauthenticated RCE in Next's image
optimization API below 16.3.3, and an XSS advisory in postcss below 8.5.10).

**Do not run `npm audit fix --force`** as a matter of habit — it resolves
vulnerabilities by installing whatever version satisfies the advisory,
including major version jumps, without checking your code still works on
that version. It has been known to jump dependencies to breaking major
versions unpredictably. If `npm audit` reports something new later, check
what version it wants to install and whether that's a minor/patch bump
(usually safe) or a major jump (verify compatibility first — this project
was manually re-verified with `tsc --noEmit` and `next build` after this
exact scenario played out during development).
