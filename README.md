# Trading Vlogs

A responsive English-language blog starter focused on trading and stock-market education.

## Current status

The first public-facing UI foundation is in place with sample articles, responsive navigation, article pages, About and Disclaimer pages, SEO metadata, and a mobile-friendly editorial design. Sample articles are local demo content; Supabase publishing and the admin dashboard are not connected yet.

## Tech stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Supabase (planned for database, authentication, and image storage)
- Vercel (planned hosting)

## Run locally

1. Install Node.js (LTS).
2. Clone this repository.
3. Install dependencies with `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Run `npm run dev`.
6. Open http://localhost:3000.

The public pages currently use demo content from `lib/posts.ts`, so the Supabase environment variables are not required just to view the starter UI.

## Before production

- Create a Supabase project and configure the schema, authentication, storage, and Row Level Security policies.
- Implement and test protected administrator routes before enabling publishing.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Add environment variables in Vercel; never commit secrets.
- Replace demo content and verify every article, image, and disclaimer.
- Run `npm run build` and test public/private access boundaries.

## Project documentation

See [docs/PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md) for confirmed scope, architecture, security requirements, and roadmap.

## Educational notice

This website provides general education, not personalized financial advice or guaranteed trading outcomes. Trading and investing involve risk.
