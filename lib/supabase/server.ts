import { createClient } from "@supabase/supabase-js";

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  return value;
}

export function getSupabaseAdminClient() {
  const url = getEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  const serviceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");

  if (!url) throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL");

  // Phase 2A：若尚未提供 service role key，仍可使用 anon key
  // （前提：RLS 已允許 insert，且資料由 API 端 schema 驗證）
  const key = serviceRoleKey ?? anonKey;
  if (!key) {
    throw new Error(
      "Missing environment variable: provide SUPABASE_SERVICE_ROLE_KEY 或 NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
