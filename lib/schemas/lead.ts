import { z } from "zod";

export const budgetRangeOptions = [
  "未設定",
  "80–150 萬",
  "150–300 萬",
  "300–500 萬",
  "500 萬以上",
] as const;

export const spaceTypeOptions = [
  "新成屋",
  "中古屋",
  "商業空間",
  "其他",
] as const;

export const leadFormSchema = z.object({
  name: z.string().min(1, "請填寫姓名"),
  phone: z.string().min(8, "請填寫有效電話"),
  line_or_email: z.string().min(1, "請填寫 LINE 或 Email"),
  region: z.string().min(1, "請選擇或填寫區域"),
  space_type: z.enum(spaceTypeOptions),
  area_ping: z.string().min(1, "請填寫坪數或範圍"),
  budget_range: z.enum(budgetRangeOptions),
  has_floor_plan: z.enum(["yes", "no"]),
  has_reference_images: z.enum(["yes", "no"]),
  needs_full_house_planning: z.enum(["yes", "no"]),
  needs_smart_home: z.enum(["yes", "no"]),
  message: z.string().min(10, "需求說明至少 10 字，方便為您規劃"),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
