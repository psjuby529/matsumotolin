export interface ServiceLine {
  id: string;
  anchor: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export const serviceLines: ServiceLine[] = [
  {
    id: "custom",
    anchor: "custom",
    name: "投顧服務",
    tagline: "從判斷出發，完成有價值的升級",
    description:
      "從物件條件、持有策略與投入回報角度出發，先判斷什麼值得做、怎麼做更合理。",
    bullets: [
      "物件條件評估與風格對齊",
      "持有策略與投入回報校準",
      "決策先看見、再安心地下定",
    ],
  },
  {
    id: "smart",
    anchor: "smart",
    name: "空間資產升級策略",
    tagline: "不只變好看，更能保值升值",
    description:
      "不只改善居住感受，更從坪效、出租力、轉手價值與長期持有邏輯規劃升級方向。",
    bullets: [
      "坪效與生活機能的同時提升",
      "出租力與轉手價值的策略規劃",
      "長期持有邏輯下的投入排序",
    ],
  },
  {
    id: "pm",
    anchor: "pm",
    name: "模組化綠建材與系統整合",
    tagline: "效率與穩定度，來自模組化決策",
    description:
      "以系統櫃、木地板、牆板等模組化材料，提升施工效率、風格一致性與使用穩定度。",
    bullets: [
      "系統櫃、木地板與牆板的整合設計",
      "風格一致性與施工可控性",
      "長期使用穩定度與可維運",
    ],
  },
  {
    id: "experience",
    anchor: "experience",
    name: "智能家居與整合式落地",
    tagline: "讓展示效果真正走進日常",
    description:
      "讓智慧設備、空間規劃與施工安裝真正整合，從展示效果走到可落地的生活體驗。",
    bullets: [
      "智慧設備與空間規劃同一語彙",
      "施工安裝與動線體驗一致連動",
      "從可想像到可落地的整合體驗",
    ],
  },
];
