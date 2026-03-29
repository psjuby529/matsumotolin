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
    name: "全屋訂製 · 收納與立面",
    tagline: "秩序、比例、耐久",
    description:
      "從玄關、客餐廳到私域，以模組化邏輯整合收納與立面，維持視覺連續性與工法一致性。",
    bullets: [
      "材質拼配與收邊節點可追溯到工廠工法表",
      "與動線、採光一併檢視，避免為造型犧牲使用性",
      "支援階段性擴充與局部更新",
    ],
  },
  {
    id: "smart",
    anchor: "smart",
    name: "智慧居家 · 情境整合",
    tagline: "克制、直覺、可維運",
    description:
      "以情境光源、聯網裝置與介面層級的節制設計，讓科技退居幕後，服務於生活節奏。",
    bullets: [
      "可依預算分階段導入與擴充",
      "與全屋訂製與機電現場協同",
      "資料結構預留未來自動化與遠端維運接口",
    ],
  },
  {
    id: "pm",
    anchor: "pm",
    name: "精品工程 · 專案治理",
    tagline: "節點透明、可追溯",
    description:
      "以清楚里程碑管理丈量、複尺、安裝與驗收；文件與決策可回寫至內容與專案系統。",
    bullets: [
      "現場與工廠雙向校準，降低重工",
      "驗收標準與保固條款可閱讀、可對齊",
      "支援多專業介面（設備、軟裝、智能）",
    ],
  },
  {
    id: "experience",
    anchor: "experience",
    name: "體驗與內容 · AI / VR",
    tagline: "看得懂、選得篤定",
    description:
      "以 3D / VR 與線上對焦流程，讓抽象風格轉譯為可漫步的體驗；內容模組可再用於行銷與社群。",
    bullets: [
      "需求與偏好以結構化表單進入設計管線",
      "效果校準可反覆迭代並留痕",
      "產出可拆解為 SEO / SEM / 廣告素材",
    ],
  },
];
