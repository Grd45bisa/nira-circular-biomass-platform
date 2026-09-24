-- NIRA Phase 5: Supabase content foundation
-- Tables: products, materials, impact_metrics, community, journal, partners, inquiries
-- All tables are public-read (RLS enabled, anon SELECT only). Writes are not exposed
-- to the public role in this phase; content is managed directly via the Supabase
-- dashboard or service-role scripts until an admin dashboard (Phase 9) exists.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- products
-- ---------------------------------------------------------------------------
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category text not null check (category in ('Energy', 'Grow', 'Living', 'Craft')),
  description text not null,
  material_source text not null,
  process text not null,
  sustainability_value text not null,
  image_url text,
  image_alt text,
  image_note text,
  display_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.products is 'NIRA product ecosystem (Energy / Grow / Living / Craft).';

-- ---------------------------------------------------------------------------
-- materials
-- ---------------------------------------------------------------------------
create table if not exists public.materials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null,
  source_part text not null,
  transformation_process text not null,
  output_product text not null,
  image_url text,
  image_alt text,
  display_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

comment on table public.materials is 'Coconut transformation materials (husk, fiber, shell, ...).';

-- ---------------------------------------------------------------------------
-- impact_metrics
-- ---------------------------------------------------------------------------
create table if not exists public.impact_metrics (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('Environmental', 'Social', 'Economic')),
  metric_name text not null,
  value numeric,
  unit text,
  description text not null,
  year integer,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

comment on table public.impact_metrics is 'Verified NIRA impact data, published only when measured.';

-- ---------------------------------------------------------------------------
-- community
-- ---------------------------------------------------------------------------
create table if not exists public.community (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  location text,
  role text,
  story text not null,
  impact_description text,
  image_url text,
  image_alt text,
  display_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

comment on table public.community is 'Community stories connected to the NIRA transformation journey.';

-- ---------------------------------------------------------------------------
-- journal
-- ---------------------------------------------------------------------------
create table if not exists public.journal (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  thumbnail_url text,
  thumbnail_alt text,
  category text not null,
  published_at timestamptz,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

comment on table public.journal is 'NIRA editorial / educational articles.';

-- ---------------------------------------------------------------------------
-- partners
-- ---------------------------------------------------------------------------
create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization text,
  category text not null,
  logo_url text,
  logo_alt text,
  description text not null,
  display_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

comment on table public.partners is 'Collaboration and partnership information.';

-- ---------------------------------------------------------------------------
-- inquiries (write-only from the public partnership form; not publicly readable)
-- ---------------------------------------------------------------------------
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization text,
  email text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_review', 'closed')),
  created_at timestamptz not null default now()
);

comment on table public.inquiries is 'Partnership requests submitted through the public inquiry form.';

-- ---------------------------------------------------------------------------
-- updated_at trigger for products (the only table with an update workflow so far)
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_products_updated_at on public.products;
create trigger set_products_updated_at
  before update on public.products
  for each row
  execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.products enable row level security;
alter table public.materials enable row level security;
alter table public.impact_metrics enable row level security;
alter table public.community enable row level security;
alter table public.journal enable row level security;
alter table public.partners enable row level security;
alter table public.inquiries enable row level security;

-- Public (anon + authenticated) read access, published rows only.
create policy "Public can read published products"
  on public.products for select
  to anon, authenticated
  using (is_published = true);

create policy "Public can read published materials"
  on public.materials for select
  to anon, authenticated
  using (is_published = true);

create policy "Public can read published impact metrics"
  on public.impact_metrics for select
  to anon, authenticated
  using (is_published = true);

create policy "Public can read published community stories"
  on public.community for select
  to anon, authenticated
  using (is_published = true);

create policy "Public can read published journal articles"
  on public.journal for select
  to anon, authenticated
  using (is_published = true);

create policy "Public can read published partners"
  on public.partners for select
  to anon, authenticated
  using (is_published = true);

-- Inquiries: public can INSERT (submit a form) but never SELECT/UPDATE/DELETE.
create policy "Public can submit inquiries"
  on public.inquiries for insert
  to anon, authenticated
  with check (true);

-- ---------------------------------------------------------------------------
-- Indexes
-- ---------------------------------------------------------------------------
create index if not exists idx_products_published_order on public.products (is_published, display_order);
create index if not exists idx_materials_published_order on public.materials (is_published, display_order);
create index if not exists idx_impact_metrics_published_category on public.impact_metrics (is_published, category);
create index if not exists idx_community_published_order on public.community (is_published, display_order);
create index if not exists idx_journal_published_date on public.journal (is_published, published_at desc);
create index if not exists idx_partners_published_order on public.partners (is_published, display_order);
