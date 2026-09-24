import { createClient as createSupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@/types/database";

import {
  getSupabaseAnonKey,
  getSupabaseUrl,
  isSupabaseConfigured,
} from "./env";

/**
 * Server-side client for Server Components, generateStaticParams, and
 * SEO pages (sitemap, metadata). Returns null gracefully if credentials
 * are not supplied, letting queries fall back to seed/curated data.
 */
export function createClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }
  return createSupabaseClient<Database>(
    getSupabaseUrl(),
    getSupabaseAnonKey(),
    {
      auth: { persistSession: false },
    },
  );
}
