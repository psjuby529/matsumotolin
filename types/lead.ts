/**
 * 對應未來 Supabase `leads` 表欄位；前端表單與 API 共用。
 */
export type LeadStatus = "new" | "contacted" | "qualified" | "closed";

export interface LeadRow {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  phone: string;
  line_or_email: string;
  region: string;
  space_type: string;
  area_ping: string;
  budget_range: string;
  has_floor_plan: boolean;
  has_reference_images: boolean;
  needs_full_house_planning: boolean;
  needs_smart_home: boolean;
  message: string;
  status: LeadStatus;
  source: string;
  metadata: Record<string, unknown> | null;
}

export type LeadInsert = Omit<
  LeadRow,
  "id" | "created_at" | "updated_at" | "status" | "metadata"
> & {
  status?: LeadStatus;
  metadata?: Record<string, unknown> | null;
};
