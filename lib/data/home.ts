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
  subtitle:
    "以投顧服務與空間資產升級策略為核心，整合模組化綠建材、智能家居與裝修改造，為空間與資產創造更長期的價值。",
  description:
    "從系統櫃、木地板到全屋規劃，松本霖不只提供更高級的審美與更有效率的交付，更從投顧服務與資產升級視角出發，重新定義當代居住與持有價值。",
  backgroundImageUrl: "/hero-bg.jpg",
  backgroundAlt:
    "低調輕奢室內氛圍參考圖（背景層，標語為獨立文字）",
  primaryCta: { label: "預約諮詢", href: "/contact#lead-form" },
  secondaryCta: { label: "上傳需求", href: "/contact#upload" },
};

export const homeBrandValue = {
  heading: "高級感，不該是高門檻。",
  body1:
    "真正好的空間升級，不是盲目堆疊昂貴材料，而是在預算、審美、功能與長期價值之間，找到更好的平衡。",
  body2:
    "松本霖提供的不只是產品或施工，而是一套兼顧美感、效率與可持續迭代的整合方案。",
};

export const homeCoreCopy = {
  heading: "從材料到落地，一站完成空間升級。",
};

export const homeCoreCapabilities: CoreCapability[] = [
  {
    id: "1",
    title: "模組化綠建材",
    description:
      "以系統櫃、木地板、牆板等模組化材料，提升施工效率、風格一致性與長期使用穩定度。",
  },
  {
    id: "2",
    title: "智能家居包安裝",
    description:
      "讓智慧設備不只是科技配件，而是真正融入日常動線與生活節奏的升級。",
  },
  {
    id: "3",
    title: "投顧服務與空間資產升級策略",
    description:
      "不只考慮現在好不好看，更從居住品質、坪效、出租力、轉手價值與長期持有策略來規劃每一次改造。",
  },
];

export const homeAiVrCopy = {
  heading: "看得懂，選得定。",
  subtitle:
    "從參考圖片到 3D / VR 呈現，先把想像變清楚，再讓選擇更安心。",
};

export const homeAiVrSteps: ProcessStep[] = [
  {
    id: "a1",
    title: "喜歡的風格，不再只能靠想像溝通",
    description: "把偏好視覺化，讓你與團隊在同一個畫面上討論。",
  },
  {
    id: "a2",
    title: "效果可先對焦，減少施工後落差",
    description: "在動工前先校準關鍵感受，避免後續反覆修改。",
  },
  {
    id: "a3",
    title: "重要選擇先看見，再更安心地下決定",
    description: "把關鍵決策前移，讓每一步都更踏實可控。",
  },
  {
    id: "a4",
    title: "上傳參考圖與需求",
    description: "先把喜歡的風格、空間條件與預期效果整理進來。",
  },
  {
    id: "a5",
    title: "線上效果校準",
    description: "先對齊想像，再進入下一步，不讓施工建立在模糊理解上。",
  },
  {
    id: "a6",
    title: "3D / VR 呈現與落地整合",
    description: "從可視化到交付執行，體驗與落地一致連動。",
  },
];

export const homeFeaturedServicesCopy = {
  heading: "從投顧判斷出發，完成空間與資產升級。",
  footer:
    "不是先決定做什麼，而是先判斷什麼值得做，再用材料、智能與整合式施工把價值落地。",
};

export const homeFeaturedServices: ServiceTeaser[] = [
  {
    id: "s1",
    title: "投顧服務",
    summary:
      "從物件條件、持有策略與投入回報角度出發，先判斷什麼值得做、怎麼做更合理。",
    href: "/services#custom",
  },
  {
    id: "s2",
    title: "空間資產升級策略",
    summary:
      "不只改善居住感受，更從坪效、出租力、轉手價值與長期持有邏輯規劃升級方向。",
    href: "/services#smart",
  },
  {
    id: "s3",
    title: "模組化綠建材與系統整合",
    summary:
      "以系統櫃、木地板、牆板等模組化材料，提升施工效率、風格一致性與使用穩定度。",
    href: "/services#pm",
  },
  {
    id: "s4",
    title: "智能家居與整合式落地",
    summary:
      "讓智慧設備、空間規劃與施工安裝真正整合，從展示效果走到可落地的生活體驗。",
    href: "/services#experience",
  },
];

export const homeFeaturedCasesCopy = {
  heading: "案例不是只展示效果，而是展示判斷力。",
  subtitle:
    "從小戶型優化、老屋翻新，到投資型改造與智能整合，松本霖更重視的是：每一個空間，是否真的更適合生活，也更值得持有。",
};

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
  title: "投顧服務，連接空間升級與資產升級。",
  body: [
    "松本霖的核心，不只是把空間做得更好看，而是以投顧服務與空間資產升級策略為出發點，判斷什麼該做、怎麼做、做到什麼程度最有價值。",
    "有些改造，是為了住得更舒服；有些改造，則能同時提升出租力、轉手價值與整體投報率。松本霖將材料、裝修、空間規劃與房產判斷結合，讓每一次投入都更接近長期價值。",
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
  cta: { label: "了解投顧服務與資產升級方案", href: "/contact#lead-form" },
};

export const homeFaq: FaqItem[] = [
  {
    id: "f1",
    question: "你們是做裝修，還是做建材？",
    answer:
      "松本霖不是單一類型公司，而是以模組化綠建材、智能家居與整合式裝修改造為核心，提供更完整的空間升級方案。",
  },
  {
    id: "f2",
    question: "可以只做系統櫃或木地板嗎？",
    answer:
      "可以。你可以從單一品項開始，也可以整合成更完整的規劃與施工方案。",
  },
  {
    id: "f3",
    question: "沒有平面圖，也可以先諮詢嗎？",
    answer:
      "可以先初步諮詢；若要進入更精準的規劃與報價，仍建議提供平面圖、現場照片或後續丈量資料。",
  },
  {
    id: "f4",
    question: "你們有做全屋規劃嗎？",
    answer:
      "有。全屋規劃案件可進一步進入平面配置、3D、VR 漫遊與材料整合階段。",
  },
  {
    id: "f5",
    question: "你們只適合自住客嗎？",
    answer:
      "不是。除了自住型客戶，投資型物件、老屋改造與資產升級需求，也都是松本霖的重點服務場景。",
  },
];

export const homeFinalCtaCopy = {
  heading: "把你的需求交給我們，下一步就會更清楚。",
  body:
    "不論你現在只有一張參考圖、一個想法，還是一個準備升級的完整物件，松本霖都可以從投顧判斷、需求整理、效果校準到正式規劃，陪你走到更清晰的一步。",
  primaryCta: "預約諮詢",
  secondaryCta: "上傳需求",
};
