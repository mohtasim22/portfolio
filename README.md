# mohtasimfahim.com

My personal portfolio: a playful, fast, fully static site built with Next.js 16.

**Live:** [mohtasimfahim.com](https://mohtasimfahim.com)

![Portfolio preview](https://mohtasimfahim.com/opengraph-image)

## Features

- **Pop design system:** CSS-variable color tokens with Tailwind CSS v4, light and dark themes
- **Case-study pages** for each project, statically generated with `generateStaticParams`
- **Contact form** using a Server Action, Zod validation, Resend email and a spam honeypot
- **Generated link previews:** Open Graph images built with `next/og` for every page
- **SEO:** metadata, canonical URLs, sitemap and robots.txt
- **Accessible:** keyboard focus styles, skip link, reduced-motion support; Lighthouse 95+ / 100 / 100 / 100

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-themes · Zod · Resend · Vercel

## Project structure

src/
├─ app/            routes, metadata, OG images, sitemap, server actions
├─ components/     layout, sections and UI components
├─ data/           all content: projects, stack, site details
└─ lib/            shared helpers (contact schema, site URL, fonts)

All content lives in `src/data`, so adding a project means adding one entry to `projects.ts`.

## Running locally

npm install
npm run dev

Create a `.env.local` file for the contact form:

RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=you@example.com
