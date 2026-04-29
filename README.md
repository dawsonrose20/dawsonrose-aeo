# aeo-site

Personal webpage for AEO (Answer Engine Optimization) consulting services.

Single-page Next.js site. Hero, About, What is AEO, Services, FAQ, Contact (mailto). Includes JSON-LD `Person` + `ProfessionalService` + `FAQPage` schema, so the page is itself an example of the work.

## Before deploying: fill in your details

Open `app/layout.tsx` and edit the `SITE` constant:

```ts
export const SITE = {
  name: "Your Name",
  role: "AEO Consultant for Local Businesses",
  region: "Your Region",
  email: "you@example.com",
  url: "https://your-domain.com",  // your live URL, used in JSON-LD and OG tags
};
```

Everything on the page (title, OG tags, schema, body copy, footer) reads from this one object, so a single edit propagates everywhere.

## Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Build check

```bash
npm run build
```

Should finish with no type errors.

## Deploy: simplest path

From `aeo-site/`:

```bash
npx vercel
```

Walks through Vercel signup/login on the first run, then deploys. ~30 seconds to a live `*.vercel.app` URL. For production:

```bash
npx vercel --prod
```

After the first deploy, copy the live URL into the `SITE.url` field in `app/layout.tsx` and redeploy so the JSON-LD and OG tags use the real URL.

## Custom domain (optional)

vercel.com → your project → Settings → Domains → add domain → follow the DNS instructions from your registrar.

## Verify the AEO setup

After deploying:

1. View page source, confirm a `<script type="application/ld+json">` block is present.
2. Paste the live URL into [validator.schema.org](https://validator.schema.org), should parse without errors.
3. Run Chrome DevTools → Lighthouse → aim for 95+ on Performance, Accessibility, SEO.
4. **The real AEO test**: in 2–4 weeks, ask Claude or ChatGPT *"who does AEO consulting in {your region}"*, you should appear.
