-- NIRA Phase 5 seed data
-- Mirrors the copy that previously lived in lib/content.ts and inline JSX,
-- so the live site renders identically after switching to Supabase.
-- impact_metrics and community are intentionally left empty: no verified
-- numeric impact data or documented community stories exist yet.

insert into public.products
  (name, slug, category, description, material_source, process, sustainability_value, image_url, image_alt, image_note, display_order)
values
  (
    'NIRA Energy',
    'energy',
    'Energy',
    'A useful fuel form made from a part of the coconut often left behind.',
    'Coconut shell',
    'Shells are collected, carbonized, and shaped into briquettes.',
    'Creates a new use for coconut shell material.',
    '/images/energy-concept.webp',
    'Concept image of coconut shell charcoal briquettes beside a coconut shell',
    'Concept visualization; not a photograph of a NIRA product.',
    1
  ),
  (
    'NIRA Grow',
    'grow',
    'Grow',
    'A plant-growing medium that gives coconut residue another purpose.',
    'Coconut residue',
    'Fine coconut material is prepared as cocopeat growing medium.',
    'Keeps useful organic material in circulation.',
    '/images/cocopeat-tray.jpg',
    'Seedling tray filled with cocopeat growing medium',
    'Representative material photograph; not a NIRA product.',
    2
  ),
  (
    'NIRA Living',
    'living',
    'Living',
    'A natural vessel for plants and everyday green living.',
    'Coconut husk fiber',
    'Husk fibers are separated and formed into cocofiber pots.',
    'Turns resilient natural fiber into a useful form.',
    '/images/coir-pot.jpg',
    'Two plant pots formed from coconut coir fiber',
    'Representative product type; not a NIRA product photograph.',
    3
  ),
  (
    'NIRA Craft',
    'craft',
    'Craft',
    'Functional objects that keep the character of the original material.',
    'Coconut shell',
    'Shells are cleaned and finished into simple crafted objects.',
    'Extends the life and value of coconut shells.',
    '/images/craft-concept.webp',
    'Concept image of a bowl shaped from a coconut shell',
    'Concept visualization; not a photograph of a NIRA product.',
    4
  )
on conflict (slug) do nothing;

insert into public.journal
  (title, slug, excerpt, content, thumbnail_url, thumbnail_alt, category, published_at)
values
  (
    'Beyond the shell',
    'beyond-the-shell',
    'A closer look at the useful materials hidden in one coconut.',
    'A coconut is more than the part we eat or drink. Its husk contains fiber, its fine residue can become growing medium, and its shell can be shaped into something useful.'
    || E'\n\n' ||
    'The first shift is in how we look at what remains. When materials are separated and prepared with care, each part can follow a different path instead of ending its story after a single use.'
    || E'\n\n' ||
    'For NIRA, that view is the starting point: understand the material, choose a responsible use, and make room for people to participate in the value that follows.',
    '/images/nira-still-life.webp',
    'Editorial still life of coconut shell, fiber, and a sprout',
    'Sustainability',
    now()
  ),
  (
    'The hands in the journey',
    'hands-in-the-journey',
    'Why a circular material story must also make room for people.',
    'A material does not transform itself. Collection, sorting, preparation, making, and sharing all depend on people and the knowledge they bring.'
    || E'\n\n' ||
    'NIRA''s intended model places community participation alongside product development. The goal is to build useful routes for coconut materials while opening opportunities for local skills and livelihoods.'
    || E'\n\n' ||
    'This is the direction behind the work, rather than a report of outcomes already achieved. As collaborations develop, this space can hold the voices and experiences of the people involved.',
    '/images/coir-fiber.jpg',
    'Collected coconut coir fiber prepared for processing',
    'Community',
    now()
  ),
  (
    'From husk to form',
    'from-husk-to-form',
    'Following coconut fiber from a rough husk to a useful form.',
    'The rough outer husk protects the coconut. Inside it are fibers that can be separated, cleaned, and prepared for different uses.'
    || E'\n\n' ||
    'One possible path leads to cocofiber pots. The material is shaped into a vessel that can support plants while retaining the texture of its source.'
    || E'\n\n' ||
    'The photograph here shows the product type as a reference. NIRA-specific production details and product photography will be added when those materials are approved.',
    '/images/coir-pot.jpg',
    'Representative pots made from coconut coir fiber',
    'Process notes',
    now()
  )
on conflict (slug) do nothing;

insert into public.materials
  (name, slug, description, source_part, transformation_process, output_product, display_order)
values
  (
    'Coconut Husk',
    'coconut-husk',
    'The rough outer husk protects the coconut and contains long, resilient fibers.',
    'Husk',
    'Fibers are separated, cleaned, and dried before shaping.',
    'Cocofiber pots',
    1
  ),
  (
    'Coconut Fiber',
    'coconut-fiber',
    'Fine fibrous residue left after processing coconut husk.',
    'Husk residue',
    'Residue is graded and compressed into a growing medium.',
    'Cocopeat',
    2
  ),
  (
    'Coconut Shell',
    'coconut-shell',
    'The hard shell that remains after the husk and fiber are removed.',
    'Shell',
    'Shells are cleaned, carbonized, or finished depending on the intended product.',
    'Charcoal briquettes and crafted objects',
    3
  )
on conflict (slug) do nothing;

-- impact_metrics: intentionally empty. No verified, sourced measurements exist yet.
-- community: intentionally empty. No documented, consented community stories exist yet.
-- partners: intentionally empty. No confirmed collaborations exist yet.
