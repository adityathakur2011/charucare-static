# CharuCare

A Next.js 15 website for CharuCare, built with the App Router, TypeScript, and Tailwind CSS.

## Install

```bash
npm install
```

## Run

**Development** (with hot reload):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production** (run a built app locally):

```bash
npm run build
npm start
```

## Build

```bash
npm run build
```

Runs the Next.js production build. Ensures TypeScript and ESLint pass. Use this before deploying or running `npm start`.

## Lint

```bash
npm run lint
```

## Editing site content

All copy and structured content lives in **`src/content/siteContent.ts`**. Edit this file to change:

- **Brand:** `site.name`, `site.tagline`, `site.description`
- **Hero & navigation:** `hero`, `nav`
- **Stats, features, audiences, steps, values, FAQs, testimonials**
- **Footer:** `footerLinks`

## Deployment

### Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo.
3. Leave **Framework Preset** as Next.js and **Build Command** as `npm run build` (or `next build`).
4. Deploy. Vercel sets the correct output and Node version for Next.js.

Optional: add **Root Directory** if the app lives in a subfolder of the repo.

### GitHub Pages

This project deploys as a **static export** to:

**https://adityathakur2011.github.io/charucare-static/**

1. **Repo Settings** → **Pages** → **Source**: **GitHub Actions**
2. Push to `main` (or run **Actions → Deploy Next.js to GitHub Pages → Run workflow**)
3. Wait for the green checkmark; the site is served from the `out` folder

`next.config.ts` sets `basePath` / `assetPrefix` to `/charucare-static` for this project-pages URL. Locally, open **http://localhost:3000/charucare-static** after `npm run dev`.

### Netlify

1. Push the repo to your Git provider.
2. In [Netlify](https://netlify.com), **Add new site** → **Import an existing project** and connect the repo.
3. **Build command:** `npm run build` (or `npx next build`)
4. **Publish directory:** `.next` (Netlify’s Next.js runtime will use this)
5. Ensure **Node version** is 18+ (e.g. set `NODE_VERSION=20` in environment variables or add a `.nvmrc` with `20`).
6. Deploy.

For the best Next.js experience on Netlify, use the [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/) (often auto-installed when Netlify detects Next.js).

### Static export (optional)

This project is set up for **server/Node deployment** (e.g. Vercel, Netlify, Node host). If you need a **fully static export** (plain HTML/CSS/JS):

1. In `next.config.ts`, set `output: "export"`.
2. Run `npm run build`. Output will be in the `out` folder.
3. Host `out` on any static host (e.g. GitHub Pages, S3, Cloudflare Pages).

Note: Some Next.js features (API routes, server components that need the server, image optimization) are limited or unavailable with static export.

## SEO and social sharing

- **Metadata** (title template, description, Open Graph, Twitter Card) is set in **`src/app/layout.tsx`**. Child pages can export their own `metadata` to override title/description.
- **OG image:** Add an image at **`public/og.jpg`** (recommended **1200×630 px**) for link previews. It is referenced in layout metadata; if missing, previews will show no image until you add it.
- **Base URL:** Set **`NEXT_PUBLIC_SITE_URL`** (e.g. `https://yoursite.com`) in your environment so the sitemap, `robots.txt`, and OG/Twitter image URLs are absolute. Used at build time (static-compatible).

## Project structure

- **`src/app/`** – App Router pages and layout (`page.tsx`, `layout.tsx`, `globals.css`)
- **`src/components/`** – Reusable UI (Header, Footer, Button, Card, Accordion, etc.)
- **`src/content/siteContent.ts`** – Single source of truth for all site copy
- **`src/lib/cn.ts`** – `cn()` helper for class names
- **`public/`** – Static assets (reference as `/filename.jpg`). Add **`og.jpg`** (1200×630) for social previews.
- **`src/app/sitemap.ts`** – Generates `/sitemap.xml` (static at build time).
- **`src/app/robots.ts`** – Generates `/robots.txt` (static at build time).

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **MUI Icons** (icons only)
- **clsx** (className utility)
