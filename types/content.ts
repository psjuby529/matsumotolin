/** 首頁 Hero：背景與文案分離，利於 SEO 與後台編輯 */
export interface HomeHeroContent {
  brandNameZh: string;
  brandNameEn: string;
  taglineZh: string;
  taglineEn: string;
  /** 背景圖 URL（可為 CDN / Supabase Storage）；無則僅用 CSS 紋理 */
  backgroundImageUrl: string | null;
  backgroundAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface CoreCapability {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface ServiceTeaser {
  id: string;
  title: string;
  summary: string;
  href: string;
}

export interface CaseTeaser {
  id: string;
  slug: string;
  title: string;
  location: string;
  areaLabel: string;
  coverImageUrl: string | null;
  coverAlt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface InvestmentModuleContent {
  eyebrow: string;
  title: string;
  body: string[];
  highlights: { title: string; text: string }[];
}
