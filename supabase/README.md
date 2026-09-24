# NIRA Supabase setup

## 1. Create the project

Create a project at [supabase.com](https://supabase.com). Note the project URL and anon key from Project Settings → API.

## 2. Run the migrations

In the Supabase SQL Editor, run in order:

1. `migrations/0001_init.sql` — tables, RLS policies, indexes
2. `migrations/0002_storage_buckets.sql` — public-read storage buckets

## 3. Seed initial content (optional)

Run `seed/seed.sql` to load the products, materials, and journal articles that match the site's original static copy. `impact_metrics`, `community`, and `partners` are left empty on purpose — no verified data exists yet, and the frontend renders an honest empty state until real rows are added.

## 4. Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-public-key>
```

Only the anon key is used — it is safe for the browser bundle because Row Level Security restricts it to published rows and insert-only access on `inquiries`. Never put the `service_role` key in `NEXT_PUBLIC_*` env vars or commit it.

## 5. Uploading images

Upload files through the Supabase dashboard's Storage UI into the `products`, `materials`, `community`, or `journal` buckets, then paste the public URL into the matching row's `image_url` / `thumbnail_url` column. Optimize images (WebP, reasonable dimensions) before upload — the app does not transform images server-side.
