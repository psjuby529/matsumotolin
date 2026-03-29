import { ImageResponse } from "next/og";

export const alt =
  "MatsumotoLin 松本霖 — Effortless Luxury. 輕奢生活，輕盈入手";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

/** OG 圖僅用於社群預覽；品牌中文標語以 HTML meta 與頁面文字為準。 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(165deg, #0a1628 0%, #050a12 45%, #0f2138 100%)",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#f4f1eb",
            letterSpacing: "0.2em",
            fontWeight: 500,
          }}
        >
          MatsumotoLin
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 36,
            color: "#d4c4a8",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          Effortless Luxury.
        </div>
      </div>
    ),
    { ...size }
  );
}
