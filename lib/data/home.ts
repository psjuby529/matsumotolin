import type {
  CaseTeaser,
  CoreCapability,
  FaqItem,
  HomeHeroContent,
  InvestmentModuleContent,
  ProcessStep,
  ServiceTeaser,
} from "@/types/content";

export const homeHero: HomeHeroContent = {
  brandNameZh: "松本霖",
  brandNameEn: "MatsumotoLin",
  taglineZh: "輕奢生活，輕盈入手",
  taglineEn: "Effortless Luxury.",
  backgroundImageUrl: "/hero-bg.jpg",
  backgroundAlt:
    "低調輕奢室內氛圍參考圖（背景層，標語為獨立文字）",
  primaryCta: { label: "預約諮詢", href: "/contact#lead-form" },
  secondaryCta: { label: "上傳需求", href: "/contact#upload" },
};

export const homeCoreCapabilities: CoreCapability[] = [
  {
    id: "1",
    title: "工廠級精度 × 設計敘事",
    description:
      "從板材、收邊到光影層次，以製程級標準落實空間語言；讓每一道線條都經得起近距離凝視。",
  },
  {
    id: "2",
    title: "AI 原生資料結構",
    description:
      "需求、偏好與現場條件以結構化資料貫穿設計、估價與交付，為未來 CRM / SCM 整合預留一致語彙。",
  },
  {
    id: "3",
    title: "輕奢節奏的專案治理",
    description:
      "清楚節點、可追溯決策、可閱讀的進度敘事；降低不確定性，讓您專注於生活本身。",
  },
];

export const homeAiVrSteps: ProcessStep[] = [
  {
    id: "a1",
    title: "需求校準",
    description: "以結構化問卷與參考素材對齊風格、機能與預算區間，形成可運算的設計輸入。",
  },
  {
    id: "a2",
    title: "線上效果對焦",
    description: "在進場前完成方向收斂，減少重工與隱性成本，讓決策可被記錄與追蹤。",
  },
  {
    id: "a3",
    title: "3D / VR 空間演繹",
    description: "以可漫步的視覺模型輔助理解比例與動線，協助您做出更篤定的選擇。",
  },
  {
    id: "a4",
    title: "交付與擴充",
    description: "成果可回寫至內容與物料系統，支援後續維運、智能家居與模組化更新。",
  },
];

export const homeFeaturedServices: ServiceTeaser[] = [
  {
    id: "s1",
    title: "全屋訂製與收納",
    summary: "動線、收納與材質一體配置，維持空間秩序與留白。",
    href: "/services#custom",
  },
  {
    id: "s2",
    title: "智慧居家整合",
    summary: "情境光源、聯網裝置與介面層級的克制呈現。",
    href: "/services#smart",
  },
  {
    id: "s3",
    title: "精品工程管理",
    summary: "節點透明、工法可追溯，讓品質可被閱讀。",
    href: "/services#pm",
  },
];

export const homeFeaturedCases: CaseTeaser[] = [
  {
    id: "c1",
    slug: "taipei-skyline-residence",
    title: "都會景深 · 私宅",
    location: "台北",
    areaLabel: "約 35 坪",
    coverImageUrl: null,
    coverAlt: "深海軍藍客廳與霧面金屬收邊的室內場景示意",
  },
  {
    id: "c2",
    slug: "hsinchu-penthouse",
    title: "秩序與留白 · 複層",
    location: "新竹",
    areaLabel: "約 52 坪",
    coverImageUrl: null,
    coverAlt: "開放式廚餐區與線性燈帶的室內場景示意",
  },
  {
    id: "c3",
    slug: "taichung-clubhouse",
    title: "低調輕奢 · 會所",
    location: "台中",
    areaLabel: "商空",
    coverImageUrl: null,
    coverAlt: "接待大廳與石材地坪的室內場景示意",
  },
];

export const homeInvestment: InvestmentModuleContent = {
  eyebrow: "Spatial Asset",
  title: "投資顧問視角下的「空間資產」升級",
  body: [
    "我們將住宅與商空視為可管理的資產：從耐久材、可維運性到租售與生活週期，協助您做出更理性的配置決策。",
    "不以堆砌材價取勝，而以秩序、可讀性與可延續性，讓空間在時間裡維持價值曲線。",
  ],
  highlights: [
    {
      title: "生命週期成本",
      text: "從首購、換屋到租賃與商務置產，提供可討論的框架與情境。",
    },
    {
      title: "品牌一致性",
      text: "材質、工法與體驗敘事對齊，強化物件辨識度與轉述效率。",
    },
    {
      title: "可擴充性",
      text: "預留智能、模組與內容系統接口，降低未來改裝摩擦。",
    },
  ],
};

export const homeFaq: FaqItem[] = [
  {
    id: "f1",
    question: "與一般裝修或木作店有何不同？",
    answer:
      "松本霖以品牌型交付與資料化流程為核心：設計語彙、工法標準與專案節點皆可被閱讀與追蹤，並為後續系統整合預留結構。",
  },
  {
    id: "f2",
    question: "是否一定要做全屋規劃？",
    answer:
      "可依範圍調整；我們會在需求校準後提出最合適的階段性方案，避免過度承諾或隱性追加。",
  },
  {
    id: "f3",
    question: "預約後的流程為何？",
    answer:
      "線上送出結構化需求後，顧問將與您確認細節與時程；必要時安排現場丈量與材質選配，再進入正式報價與生產排程。",
  },
  {
    id: "f4",
    question: "資料是否安全？",
    answer:
      "表單與附件將依階段導入加密傳輸與權限管理（V1 為前台結構化收集，後續串接 Supabase 與後台治理）。",
  },
];
