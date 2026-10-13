# Trading Vlogs — Project Documentation

**Status:** Requirements confirmed; public UI foundation in progress  
**Version:** 1.2  
**Repository:** https://github.com/Lalankumarydv03/Trading_vlogs

## 1. Project Overview

Trading Vlogs will be a professional English-language blog focused on trading and stock-market education. It will publish educational explainers about market fundamentals, trading concepts, risk management, technical analysis, and financial literacy. The site is an educational publication, not a source of guaranteed returns or personalized investment advice.

The first release is for public readers and one administrator. Visitors do not need accounts to read articles. The administrator will use a protected dashboard to manage posts.

## 2. Confirmed Product Decisions

- **Topic:** Trading and stock-market education.
- **Content language:** English.
- **Publishing model:** One administrator.
- **Framework:** Next.js with TypeScript.
- **Styling:** Tailwind CSS.
- **Database and authentication:** Supabase (PostgreSQL and Supabase Auth).
- **Image storage:** Supabase Storage.
- **Hosting:** Vercel.
- **Version control:** GitHub.
- **Reader accounts:** Not in the initial release.
- **Comments:** Deferred from the initial release.
- **Newsletter:** Deferred until the core blog is stable.

## 3. Goals

- Publish articles with titles, cover images, excerpts, categories, and tags.
- Offer a polished, responsive reading experience on mobile, tablet, and desktop.
- Allow the administrator to draft, preview, publish, edit, and unpublish posts.
- Help readers discover articles using search, categories, tags, related posts, and SEO.
- Keep the initial version secure, maintainable, and affordable to operate.

## 4. Audience and Editorial Guidelines

The audience includes beginners learning about markets and readers looking for explanations of trading terminology, market mechanics, and risk management.

Editorial guidelines:
- Clearly distinguish educational information from personal financial advice.
- Explain risks and limitations; never promise profits or guaranteed outcomes.
- Add publication and update dates when relevant.
- Check facts and cite credible sources for claims, data, and market events.
- Avoid presenting stale market prices or time-sensitive information as current.
- Include a visible educational disclaimer on relevant pages.

## 5. Site Map

| Route / page | Purpose |
|---|---|
| / | Homepage with featured content, recent posts, and topic categories. |
| /blog | All published articles with pagination and search. |
| /blog/[slug] | Full article with metadata, category, tags, and related posts. |
| /categories/[slug] | Articles in a category. |
| /about | Purpose, author/editorial approach, and publication information. |
| /contact | Contact details or a future protected contact form. |
| /privacy | Privacy notice appropriate to the services actually enabled. |
| /disclaimer | Educational and financial-risk disclaimer. |
| /admin/login | Administrator sign-in. |
| /admin | Protected content dashboard. |
| /admin/posts/new | Create a post. |
| /admin/posts/[id]/edit | Edit an existing post. |

## 6. Core Features

### Public website
- Responsive header, navigation, and footer.
- Editorial-style homepage with a featured article and recent posts.
- Article cards with cover image, title, excerpt, category, and date.
- Readable article typography and stable, shareable slugs.
- Search, category browsing, tags, pagination, and related posts.
- Loading, empty, error, and not-found states.
- Mobile-friendly layouts, keyboard accessibility, visible focus states, and image alt text.

### Administrator content management
- Supabase Auth sign-in for the single authorized administrator.
- Dashboard listing posts and publication statuses.
- Create, edit, preview, publish, and unpublish articles.
- Draft and published states.
- Cover image upload with type and size validation.
- Slug generation and uniqueness validation.
- Category and tag assignment.
- SEO title, meta description, and social preview fields.
- Confirmation for destructive operations.

### SEO and performance
- Unique page titles and descriptions.
- Canonical URLs, sitemap, robots rules, and Open Graph metadata.
- Article structured data where appropriate.
- Optimized images and caching.
- Useful 404 and error pages.
- Analytics only after a provider is selected and privacy implications are reviewed.

## 7. Design Direction

Create a refined financial-editorial aesthetic rather than a trading terminal or generic admin template:
- Deep navy/charcoal text, off-white backgrounds, and a restrained emerald accent.
- Clear typography, generous whitespace, and comfortable article line lengths.
- Strong headline hierarchy and high-quality, consistently cropped article covers.
- Subtle borders and restrained shadows; avoid excessive gradients and animations.
- Responsive design with accessible color contrast.
- The brand name remains **Trading Vlogs** unless changed later.

The logo and final design details can be refined during implementation.

## 8. Technology Architecture

| Layer | Choice | Responsibilities |
|---|---|---|
| Frontend and server rendering | Next.js App Router + TypeScript | Pages, layouts, server rendering, route handlers, metadata. |
| UI styling | Tailwind CSS | Responsive styles and reusable design patterns. |
| Database | Supabase PostgreSQL | Posts, categories, tags, and relationships. |
| Authentication | Supabase Auth | Administrator authentication. |
| Storage | Supabase Storage | Article cover images. |
| Hosting | Vercel | Deployment and environment configuration. |
| Source control | GitHub | Version history and collaboration. |

Use maintained, compatible package versions at setup time. Do not commit .env files or credentials.

## 9. Proposed Data Model

### posts
- id — UUID primary key.
- title — required article title.
- slug — required unique URL slug.
- excerpt — short summary.
- content — article content in the selected editor format.
- cover_image_url — optional public cover-image URL.
- category_id — category reference.
- status — draft or published.
- published_at — publication timestamp.
- seo_title, seo_description — optional SEO metadata.
- created_at, updated_at — timestamps.

### categories
- id — UUID primary key.
- name — category label.
- slug — unique URL slug.

### tags and post_tags
- tags stores tag names and unique slugs.
- post_tags joins posts to tags and prevents duplicate post/tag pairs.

The initial release has one administrator; author profiles and multi-author workflows are not required. The schema and migrations must be committed to the repository before production setup.

## 10. Security and Privacy

- Public visitors can read published posts only.
- Drafts and admin operations must be protected on the server and by database Row Level Security (RLS) policies.
- Restrict administrator access to the intended account; do not allow public self-registration for the admin area.
- Never expose the Supabase service-role key in client-side code.
- Keep secrets in local environment variables and Vercel environment settings.
- Validate user input and sanitize/render article content safely.
- Validate uploaded image formats and sizes.
- Protect any future contact form from spam and abuse.
- Publish a privacy notice that matches the services and data collection actually used.
- Keep backups and test content recovery.

## 11. Implementation Roadmap

### Phase 1 — Requirements and documentation
- Confirm topic, language, single-admin model, and technology stack. **Complete.**
- Finalize initial feature scope and acceptance criteria. **Complete.**

### Phase 2 — Application foundation
- Create the Next.js App Router + TypeScript project with Tailwind CSS. **Initial files added.**
- Add global design tokens, shared layout, navigation, and responsive components. **Initial UI added.**
- Add environment-variable examples and setup instructions. **Added.**

### Phase 3 — Public blog
- Implement homepage, blog listing, article details, search/topic filtering, About, and Disclaimer. **Initial pages and local search/filter added.**
- Add demo articles clearly marked as sample content until real content is supplied. **Sample articles added; replace before launch.**
- Add metadata and not-found handling. **Initial metadata and 404 added.** Sitemap, robots rules, category routes, and pagination remain to be completed.

### Phase 4 — Data and admin
- Add Supabase schema/migrations, RLS policies, authentication, and storage configuration.
- Implement protected admin routes and post editing.
- Test draft/publish workflows and uploads.

### Phase 5 — Quality and deployment
- Test mobile/desktop layouts, accessibility, SEO, and authorization boundaries.
- Configure Vercel environment variables and deployment.
- Verify the production site and document maintenance.

## 12. First-Release Acceptance Criteria

- Visitors can browse published posts without signing in.
- Draft posts never appear on public pages or public search results.
- The single administrator can securely sign in and manage articles.
- Slugs are unique and stable.
- Search, category browsing, and pagination behave consistently.
- Pages work on common mobile and desktop sizes.
- Images are optimized and have meaningful alt text.
- Server-side checks and database policies protect private operations.
- Local setup and deployment are documented.
- No secrets are committed to GitHub.

## 13. Deferred Features

- Reader accounts and personalized feeds.
- Comments and community discussions.
- Email newsletter and notifications.
- Paid memberships or subscriptions.
- Broker integrations, automated signals, or trading execution.
- Multi-author editorial workflows.
- Advanced recommendation systems.

## 14. Current Status and Next Step

Requirements are confirmed and documented before coding. The initial Next.js/TypeScript/Tailwind foundation and public-facing UI have been committed, including sample articles and client-side search/topic filtering. This code has not been installed, built, or runtime-tested in this session. Supabase-powered publishing, protected admin pages, database policies, sitemap/robots, category routes, and production deployment remain pending. Supabase and Vercel integrations must not be described as live until configured and tested.
