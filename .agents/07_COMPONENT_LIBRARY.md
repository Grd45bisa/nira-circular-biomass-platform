# NIRA Component Library

# 1. Component Philosophy

Components must be:

-   Reusable
-   Consistent
-   Maintainable
-   Purpose-driven

Avoid creating one-time components unless necessary.

------------------------------------------------------------------------

# 2. Layout Components

## Container

Purpose:

Controls maximum content width.

Properties:

-   max width
-   padding
-   responsive spacing

------------------------------------------------------------------------

## Section Wrapper

Purpose:

Controls section spacing.

Properties:

-   background
-   spacing
-   alignment

------------------------------------------------------------------------

# 3. Hero Components

## HeroSection

Purpose:

Main website introduction.

Contains:

-   Title
-   Description
-   CTA
-   Image

Rules:

Should feel premium and emotional.

------------------------------------------------------------------------

# 4. Story Components

## StorySection

Purpose:

Explain NIRA narrative.

Layout:

Desktop: Image + Text

Mobile: Stacked layout

------------------------------------------------------------------------

# 5. Product Components

## ProductCard

Contains:

-   Product image
-   Name
-   Category
-   Description
-   Sustainability value

Used for:

-   NIRA Energy
-   NIRA Grow
-   NIRA Living
-   NIRA Craft

------------------------------------------------------------------------

# 6. Impact Components

## ImpactCounter

Purpose:

Display measurable impact.

Example:

5000+

Kg Waste Transformed

100+

Community Members

------------------------------------------------------------------------

## ImpactCard

Contains:

-   Number
-   Label
-   Description

------------------------------------------------------------------------

# 7. Transformation Components

## CoconutTransformation

Purpose:

Show coconut journey.

Flow:

Material

↓

Process

↓

Product

↓

Impact

Can include interactive animation.

------------------------------------------------------------------------

# 8. Journal Components

## ArticleCard

Contains:

-   Thumbnail
-   Title
-   Category
-   Date

------------------------------------------------------------------------

# 9. CTA Components

## PartnershipCTA

Purpose:

Encourage collaboration.

Contains:

-   Headline
-   Description
-   Button

------------------------------------------------------------------------

# 10. Component Rules

Every component must:

-   Have clear purpose
-   Support responsive behavior
-   Avoid unnecessary complexity
-   Follow NIRA design system

------------------------------------------------------------------------

# 11. Naming Convention

Use PascalCase.

Example:

HeroSection.tsx

ProductCard.tsx

ImpactCounter.tsx

------------------------------------------------------------------------

# 12. Component Folder Structure

components/

├── ui/

├── layout/

├── sections/

├── products/

├── impact/

└── journal/

------------------------------------------------------------------------

# Final Principle

Components should help tell the NIRA story, not only organize code.
