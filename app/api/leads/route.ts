import { leadFormSchema } from "@/lib/schemas/lead";
import { getSupabaseAdminClient } from "@/lib/supabase/server";
import type { LeadInsert } from "@/types/lead";
import { NextResponse } from "next/server";

function normalizeLeadPayload(raw: unknown): LeadInsert {
  const parsed = leadFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "表單資料格式不正確");
  }

  return {
    name: parsed.data.name,
    phone: parsed.data.phone,
    line_or_email: parsed.data.line_or_email,
    region: parsed.data.region,
    space_type: parsed.data.space_type,
    area_ping: parsed.data.area_ping,
    budget_range: parsed.data.budget_range,
    has_floor_plan: parsed.data.has_floor_plan === "yes",
    has_reference_images: parsed.data.has_reference_images === "yes",
    needs_full_house_planning: parsed.data.needs_full_house_planning === "yes",
    needs_smart_home: parsed.data.needs_smart_home === "yes",
    message: parsed.data.message,
    status: "new",
    metadata: {},
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = normalizeLeadPayload(body);
    const supabase = getSupabaseAdminClient();

    const { error } = await supabase.from("leads").insert({
      ...payload,
      source: "website",
    });

    if (error) {
      console.error("[api/leads] insert failed", error);
      return NextResponse.json(
        { message: "系統暫時忙碌，請稍後再試或直接與我們聯繫。" },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "已收到您的需求，我們會盡快與您聯繫。" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "請確認表單內容後重新送出";
    return NextResponse.json({ message }, { status: 400 });
  }
}
