"use client";

import { useState } from "react";
import {
  budgetRangeOptions,
  leadFormSchema,
  spaceTypeOptions,
  type LeadFormValues,
} from "@/lib/schemas/lead";
import type { LeadInsert } from "@/types/lead";

function toLeadInsert(values: LeadFormValues): Omit<
  LeadInsert,
  "status" | "source"
> {
  return {
    name: values.name,
    phone: values.phone,
    line_or_email: values.line_or_email,
    region: values.region,
    space_type: values.space_type,
    area_ping: values.area_ping,
    budget_range: values.budget_range,
    has_floor_plan: values.has_floor_plan === "yes",
    has_reference_images: values.has_reference_images === "yes",
    needs_full_house_planning: values.needs_full_house_planning === "yes",
    needs_smart_home: values.needs_smart_home === "yes",
    message: values.message,
  };
}

const yesNo = [
  { value: "yes" as const, label: "是" },
  { value: "no" as const, label: "否" },
];

const defaultValues: LeadFormValues = {
  name: "",
  phone: "",
  line_or_email: "",
  region: "",
  space_type: "新成屋",
  area_ping: "",
  budget_range: "未設定",
  has_floor_plan: "no",
  has_reference_images: "no",
  needs_full_house_planning: "no",
  needs_smart_home: "no",
  message: "",
};

export function LeadForm({
  id,
  formName = "lead",
}: {
  id?: string;
  formName?: string;
}) {
  const [values, setValues] = useState<LeadFormValues>(defaultValues);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormValues, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof LeadFormValues>(
    key: K,
    v: LeadFormValues[K],
  ) {
    setValues((s) => ({ ...s, [key]: v }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = leadFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof LeadFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0];
        if (typeof path === "string" && path in defaultValues) {
          fieldErrors[path as keyof LeadFormValues] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }
    const payload = toLeadInsert(parsed.data);
    // V1：示意；之後改為 POST /api/leads → Supabase
    console.log("[lead:mock]", payload);
    setSubmitted(true);
  }

  const inputClass =
    "mt-1 w-full rounded-sm border border-white/12 bg-ml-navy-950/80 px-3 py-2.5 text-sm text-ml-ivory placeholder:text-ml-ivory/30 focus:border-ml-gold-400/45 focus:outline-none focus:ring-1 focus:ring-ml-gold-400/30";

  const labelClass = "block text-[11px] tracking-[0.12em] text-ml-ivory/55";

  return (
    <form id={id} name={formName} onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="姓名" error={errors.name}>
          <input
            className={inputClass}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Field>
        <Field label="電話" error={errors.phone}>
          <input
            className={inputClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Field>
      </div>
      <Field label="LINE / Email" error={errors.line_or_email}>
        <input
          className={inputClass}
          name="line_or_email"
          autoComplete="email"
          value={values.line_or_email}
          onChange={(e) => handleChange("line_or_email", e.target.value)}
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="區域" error={errors.region}>
          <input
            className={inputClass}
            name="region"
            placeholder="例：台北市大安區"
            value={values.region}
            onChange={(e) => handleChange("region", e.target.value)}
          />
        </Field>
        <Field label="空間類型" error={errors.space_type}>
          <select
            className={inputClass}
            name="space_type"
            value={values.space_type}
            onChange={(e) =>
              handleChange("space_type", e.target.value as LeadFormValues["space_type"])
            }
          >
            {spaceTypeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="坪數" error={errors.area_ping}>
          <input
            className={inputClass}
            name="area_ping"
            placeholder="例：35 坪"
            value={values.area_ping}
            onChange={(e) => handleChange("area_ping", e.target.value)}
          />
        </Field>
        <Field label="預算區間" error={errors.budget_range}>
          <select
            className={inputClass}
            name="budget_range"
            value={values.budget_range}
            onChange={(e) =>
              handleChange(
                "budget_range",
                e.target.value as LeadFormValues["budget_range"],
              )
            }
          >
            {budgetRangeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <YesNoField
          label="是否已有平面圖"
          name="has_floor_plan"
          value={values.has_floor_plan}
          onChange={(v) => handleChange("has_floor_plan", v)}
          error={errors.has_floor_plan}
          inputClass={inputClass}
          labelClass={labelClass}
        />
        <YesNoField
          label="是否已有參考圖片"
          name="has_reference_images"
          value={values.has_reference_images}
          onChange={(v) => handleChange("has_reference_images", v)}
          error={errors.has_reference_images}
          inputClass={inputClass}
          labelClass={labelClass}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <YesNoField
          label="是否需要全屋規劃"
          name="needs_full_house_planning"
          value={values.needs_full_house_planning}
          onChange={(v) => handleChange("needs_full_house_planning", v)}
          error={errors.needs_full_house_planning}
          inputClass={inputClass}
          labelClass={labelClass}
        />
        <YesNoField
          label="是否需要智能家居"
          name="needs_smart_home"
          value={values.needs_smart_home}
          onChange={(v) => handleChange("needs_smart_home", v)}
          error={errors.needs_smart_home}
          inputClass={inputClass}
          labelClass={labelClass}
        />
      </div>
      <Field label="需求說明" error={errors.message}>
        <textarea
          className={`${inputClass} min-h-[120px] resize-y`}
          name="message"
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </Field>
      {submitted ? (
        <p className="text-sm text-ml-gold-300/90" role="status">
          已收到您的需求（示意）。正式上線後將寫入系統並由顧問與您聯繫。
        </p>
      ) : (
        <button
          type="submit"
          className="w-full rounded-sm border border-ml-gold-400/45 bg-ml-gold-400/10 py-3 text-xs tracking-[0.25em] text-ml-gold-200 transition-colors hover:bg-ml-gold-400/15 sm:w-auto sm:px-12"
        >
          送出需求
        </button>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.12em] text-ml-ivory/55">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs text-red-300/90" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function YesNoField({
  label,
  name,
  value,
  onChange,
  error,
  inputClass,
  labelClass,
}: {
  label: string;
  name: string;
  value: "yes" | "no";
  onChange: (v: "yes" | "no") => void;
  error?: string;
  inputClass: string;
  labelClass: string;
}) {
  return (
    <div>
      <span className={labelClass}>{label}</span>
      <select
        className={inputClass}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value as "yes" | "no")}
      >
        {yesNo.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error ? (
        <p className="mt-1 text-xs text-red-300/90" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
