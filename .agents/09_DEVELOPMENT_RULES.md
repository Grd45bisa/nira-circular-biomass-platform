# NIRA Development Rules

# 1. Development Philosophy

Build NIRA as a premium sustainability platform.

Code quality and user experience are equally important.

------------------------------------------------------------------------

# 2. Anti AI Slop Rules

Never create:

-   Generic landing page layout
-   Random components
-   Excessive animation
-   Decorative elements without purpose
-   Copy-paste UI patterns

Every element must have a reason.

------------------------------------------------------------------------

# 3. Code Quality Rules

Required:

-   TypeScript strict typing
-   Reusable components
-   Clean naming
-   Clear folder structure
-   Maintainable code

Avoid:

-   Duplicate code
-   Large monolithic components
-   Unnecessary dependencies

------------------------------------------------------------------------

# 4. Component Rules

Before creating a component ask:

Is this reusable?

Does this improve maintainability?

Does this support NIRA experience?

------------------------------------------------------------------------

# 5. Styling Rules

Use:

Tailwind CSS

Follow:

NIRA Design System

Do not introduce random: - Colors - Fonts - Shadows - Border styles

------------------------------------------------------------------------

# 6. Animation Rules

Animation must support storytelling.

Allowed: - Fade reveal - Smooth transitions - Scroll animation - Counter
animation

Avoid: - Excessive motion - Distracting effects

------------------------------------------------------------------------

# 7. Responsive Rules

Every component must work on:

-   Mobile portrait
-   Tablet portrait
-   Tablet landscape
-   Desktop

Never optimize only for desktop.

------------------------------------------------------------------------

# 8. Performance Rules

Must:

-   Optimize images
-   Use Next Image
-   Avoid unnecessary client components
-   Lazy load heavy content

------------------------------------------------------------------------

# 9. SEO Rules

Every public page requires:

-   Metadata
-   Title
-   Description
-   Open Graph data

------------------------------------------------------------------------

# 10. Review Checklist

Before finishing any feature:

Design: ✓ Matches NIRA identity

UX: ✓ Easy to understand

Code: ✓ Clean and reusable

Performance: ✓ Fast loading

Responsive: ✓ Works on all screens
