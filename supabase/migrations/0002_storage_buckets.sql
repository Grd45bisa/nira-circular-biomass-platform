-- NIRA Phase 5: Storage buckets for product, material, community, and
-- journal imagery. Buckets are public-read (anyone can view an uploaded
-- image by URL) but writes are restricted to the service role, so images
-- are only added through the Supabase dashboard or an authenticated
-- admin tool (Phase 9).

insert into storage.buckets (id, name, public)
values
  ('products', 'products', true),
  ('materials', 'materials', true),
  ('community', 'community', true),
  ('journal', 'journal', true)
on conflict (id) do nothing;

create policy "Public can read product images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'products');

create policy "Public can read material images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'materials');

create policy "Public can read community images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'community');

create policy "Public can read journal images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'journal');
