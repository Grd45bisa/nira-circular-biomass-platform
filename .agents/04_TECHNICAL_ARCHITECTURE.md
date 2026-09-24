# NIRA Technical Architecture

# 1. Technology Stack

## Frontend

Framework: Next.js

Language: TypeScript

Styling: Tailwind CSS

Animation: Framer Motion

UI: shadcn/ui

Icons: Lucide React

------------------------------------------------------------------------

# Backend

Platform: Supabase

Services: - PostgreSQL Database - Storage - Authentication (future) -
Edge Functions (future)

------------------------------------------------------------------------

# Deployment

Frontend: Vercel

Backend: Supabase Cloud

------------------------------------------------------------------------

# 2. Application Architecture

Pattern: Next.js App Router

Flow:

Browser ↓ Next.js Application ↓ Server Components ↓ Supabase ↓ Database

------------------------------------------------------------------------

# 3. Folder Structure

app/ - page.tsx - about/ - transformation/ - products/ - impact/ -
journal/ - partnership/

components/ - ui/ - sections/ - products/ - impact/

lib/ - supabase - utils

types/

public/

------------------------------------------------------------------------

# 4. Development Principle

Follow:

Component Driven Development

Reusable components: - HeroSection - ProductCard - ImpactCounter -
StorySection

------------------------------------------------------------------------

# 5. Rendering Strategy

Server Components: - Static content - SEO pages - Product data

Client Components: - Animation - Interactive elements

Avoid unnecessary client rendering.

------------------------------------------------------------------------

# 6. Database Preparation

Supabase tables:

-   products
-   materials
-   impact_metrics
-   community
-   journal
-   partners

Authentication is not implemented in Phase 1.

------------------------------------------------------------------------

# 7. Performance Rules

Must: - Optimize images - Use Next Image - Lazy load content - Avoid
unnecessary Javascript - Maintain fast loading

------------------------------------------------------------------------

# 8. SEO Requirements

Every page: - Metadata - Open Graph - Description - Structured content

------------------------------------------------------------------------

# 9. Security

Follow: - Environment variables - Supabase security policies - No
exposed secret keys

------------------------------------------------------------------------

# 10. Future Scalability

Phase 2: CMS Management

Phase 3: Impact Dashboard

Phase 4: Product Traceability QR

Phase 5: Marketplace

------------------------------------------------------------------------

# Final Technical Principle

Build NIRA as a scalable sustainability platform, not only a marketing
website.
