import { createBrowserClient } from "@supabase/ssr";

import type { Database } from "@/types/database";

import { getSupabaseAnonKey, getSupabaseUrl } from "./env";

/**
 * Browser client for interactive, client-side needs only
 * (e.g. filtering, form submission). Server rendering should use
 * `lib/supabase/server.ts` instead.
 */
export function createClient() {
  return createBrowserClient<Database>(getSupabaseUrl(), getSupabaseAnonKey());
}
