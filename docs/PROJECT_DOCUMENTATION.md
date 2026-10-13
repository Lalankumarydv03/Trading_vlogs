# Trading Vlogs — Blog Website Project Documentation

**Status:** Planning and requirements  
**Repository:** https://github.com/Lalankumarydv03/Trading_vlogs  
**Document version:** 1.0

## 1. Project Overview

Trading Vlogs is planned as a professional, responsive blogging website where readers can discover and read useful articles. The initial content direction is trading and market education, based on the repository name. The website should be easy to navigate, fast, accessible, search-engine friendly, and straightforward for its owner to maintain.

This document defines the proposed product scope and technical plan. No website application code is included in this planning stage.

## 2. Goals

- Publish well-organized articles with titles, cover images, categories, and tags.
- Provide a polished reading experience on desktop, tablet, and mobile.
- Let the site owner create, edit, preview, publish, and unpublish posts through a protected admin area.
- Make articles discoverable through search engines, categories, tags, and site search.
- Keep the first release small enough to build and maintain reliably.

## 3. Target Audience

- Readers learning about trading and financial markets.
- People looking for educational explainers, market concepts, and trading-related articles.
- Returning readers who want to browse posts by topic.

**Editorial note:** Content should be educational, clearly dated where relevant, and transparent about risks. Avoid presenting articles as guaranteed financial returns or personalized financial advice.

## 4. Website Structure and Pages

| Page | Purpose |
|---|---|
| Home | Introduce the publication, highlight featured and recent posts, and show key categories. |
| Blog | Browse all published articles with pagination. |
| Article detail | Read an article, see its author/date/category, and discover related posts. |
| Category page | Browse articles grouped by topic. |
| Search results | Find published articles by title and relevant text. |
| About | Explain the site's purpose and editorial approach. |
| Contact | Provide a contact method or contact form, with spam protection if a form is added. |
| Privacy policy | Explain what information is collected and how it is used. |
| Terms and disclaimer | Set expectations for site use and educational financial content. |
| Admin sign-in | Secure entry to content management. |
| Admin dashboard | View and manage posts and publication status. |
| Post editor | Create, edit, preview, publish, and unpublish articles. |

## 5. Core Features

### Public reader experience
- Responsive navigation and mobile menu.
- Featured article and latest-post sections on the home page.
- Article cards with cover image, title, short excerpt, category, and publication date.
- Article reading page with readable typography and shareable URL.
- Category and tag browsing.
- Search and pagination.
- Related-article suggestions.
- Loading, empty, and not-found states.
- Accessible keyboard navigation, form labels, and image alternative text.

### Content management
- Protected administrator sign-in.
- Create, edit, preview, publish, and unpublish posts.
- Draft and published statuses.
- Cover image upload with file-type and size validation.
- Slug generation with collision checks.
- Assign categories and tags.
- SEO title, meta description, and social preview image fields.
- Confirmation before destructive actions.

### Quality and discoverability
- Unique page titles and meta descriptions.
- Canonical URLs, sitemap, robots rules, and Open Graph metadata.
- Structured data for articles where appropriate.
- Optimized images and sensible caching.
- Clear 404 page and helpful error messages.
- Analytics only after choosing a provider and reviewing privacy requirements.

## 6. Recommended Technology Stack

The stack below is a proposal and can be changed before implementation.

| Layer | Recommendation | Reason |
|---|---|---|
| Framework | Next.js with TypeScript | React-based pages, routing, and SEO-friendly rendering. |
| Styling | Tailwind CSS | Consistent, responsive UI and fast iteration. |
| Database | Supabase PostgreSQL | Managed relational database for posts, categories, and tags. |
| Authentication | Supabase Auth | Protected admin access without building password storage from scratch. |
| Image storage | Supabase Storage | Centralized article cover-image storage. |
| Content editor | A maintained Markdown or rich-text editor | Comfortable writing and predictable article rendering. |
| Hosting | Vercel | Convenient deployment for a Next.js application. |
| Version control | Git and GitHub | Reviewable changes and project history. |

Use compatible, stable package versions at implementation time. Keep credentials in environment variables and never commit secret keys.

## 7. Proposed Data Model

### profiles
- id — user ID linked to the authentication provider.
- display_name — public author name.
- avatar_url — optional profile image.
- created_at — creation timestamp.

### posts
- id — unique post ID.
- title — article title.
- slug — unique URL-friendly identifier.
- excerpt — short summary.
- content — article body in the selected editor format.
- cover_image_url — optional cover image.
- author_id — reference to the author profile.
- status — draft or published.
- published_at — publication timestamp.
- seo_title — optional search title.
- seo_description — optional search description.
- created_at and updated_at — timestamps.

### categories
- id — unique category ID.
- name — display name.
- slug — unique URL-friendly identifier.

### tags
- id — unique tag ID.
- name — display name.
- slug — unique URL-friendly identifier.

### Relationships
- A post belongs to a category, if categories are implemented as a single category per post.
- Posts and tags use a join table such as post_tags to support multiple tags per post.
- A post references its author profile.
- Add database indexes for published status, publication date, slug, and frequently searched fields as appropriate.

The exact schema should be finalized before database migrations are written.

## 8. Security and Privacy Requirements

- Only authorized administrators can access content-management actions.
- Enforce authorization in server-side logic and database policies; hiding UI controls is not sufficient.
- Configure Supabase Row Level Security policies before connecting production data.
- Public readers should only be able to read published posts and other intentionally public records.
- Validate and sanitize editor content before rendering it.
- Validate image type, size, and upload permissions.
- Keep service-role keys and other secrets on the server only.
- Add rate limiting and spam protection to public forms if those features are enabled.
- Collect the minimum personal information needed and publish an accurate privacy policy.
- Back up production content and test recovery procedures.

## 9. Design Direction

The visual style should feel modern, editorial, and trustworthy rather than like a generic dashboard.

- Strong typography and clear content hierarchy.
- Generous whitespace and readable article line length.
- Consistent spacing, borders, and subtle shadows.
- High-quality article thumbnails with consistent aspect ratios.
- A restrained color palette with one recognizable accent color.
- Accessible contrast and visible keyboard focus.
- Mobile-first layouts that work without horizontal scrolling.
- Avoid distracting animations and excessive pop-ups.

The final color palette, logo, typography, and homepage layout will be decided during UI design.

## 10. Non-Functional Requirements

- Good performance on typical mobile connections.
- Responsive layouts across common screen sizes.
- Semantic HTML and basic WCAG accessibility practices.
- Reliable error handling and useful empty states.
- Maintainable components and typed data models.
- SEO metadata for every public article.
- No secrets or private draft content exposed to public pages.
- Clear development and deployment instructions.

## 11. Implementation Roadmap

### Phase 1 — Documentation and decisions
- Review and approve this scope.
- Confirm the content niche, branding, and technology stack.
- Finalize the page structure and database schema.

### Phase 2 — Foundation
- Set up the Next.js and TypeScript project.
- Add styling, shared layout, navigation, and reusable components.
- Configure environment variables and linting.

### Phase 3 — Public blog
- Build the home page, blog listing, article detail, category, and search pages.
- Add responsive states, metadata, sitemap, and not-found handling.
- Start with sample content clearly marked as demo content.

### Phase 4 — Content management
- Configure Supabase database, storage, authentication, and access policies.
- Build the protected admin dashboard and post editor.
- Test drafts, publishing, editing, and image uploads.

### Phase 5 — Testing and launch
- Test desktop and mobile layouts, navigation, forms, and access control.
- Check performance, accessibility, SEO metadata, and error states.
- Configure production environment variables and deployment.
- Verify the live site and document ongoing maintenance.

## 12. Acceptance Criteria for the First Release

- Visitors can browse and open published posts without signing in.
- Draft posts are not visible to public readers.
- The administrator can sign in and manage posts.
- Article URLs are stable and unique.
- Search, categories, and pagination work as specified.
- Layouts work on mobile and desktop.
- Images have alternative text and are optimized.
- Protected operations are enforced server-side and by database policies.
- Setup and deployment steps are documented.
- No secret credentials are committed to the repository.

## 13. Out of Scope for the Initial Release

To keep the first version manageable, defer these until the core blog is stable:

- Reader accounts and personalized feeds.
- Comments and community discussions.
- Paid subscriptions or memberships.
- Automated trading signals or broker integrations.
- Push notifications.
- Multi-author editorial workflows.
- Advanced recommendation systems.

## 14. Open Decisions Before Development

1. Is the website specifically for trading and financial-market content, or will it cover general topics?
2. What site name, logo, and color palette should be used?
3. Should posts be written in English, Hindi, or both?
4. Is a single administrator enough for the first release?
5. Should comments or an email newsletter be included in the first version?
6. Is the proposed Next.js + Supabase stack acceptable?

## 15. Project Status

**Current milestone:** Documentation first.  
**Next milestone:** Confirm the open decisions, then implement the website in small, reviewable steps.  
**Important:** This document is a proposed plan, not a claim that the website or its features have already been implemented.
