import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_TC } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: "松本霖 MatsumotoLin｜輕奢生活，輕盈入手",
    template: "%s | 松本霖 MatsumotoLin",
  },
  description:
    "輕奢生活，輕盈入手。Effortless Luxury. 全屋訂製、智慧整合與精品工程治理。",
  metadataBase: new URL(siteUrl),
  applicationName: "松本霖 MatsumotoLin",
  openGraph: {
    locale: "zh_TW",
    type: "website",
    url: siteUrl,
    siteName: "松本霖 MatsumotoLin",
    title: "松本霖 MatsumotoLin｜輕奢生活，輕盈入手",
    description:
      "輕奢生活，輕盈入手。Effortless Luxury. 全屋訂製、智慧整合與精品工程治理。",
  },
  twitter: {
    card: "summary_large_image",
    title: "松本霖 MatsumotoLin｜輕奢生活，輕盈入手",
    description:
      "輕奢生活，輕盈入手。Effortless Luxury. 全屋訂製、智慧整合與精品工程治理。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSansTc.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ml-navy-950 text-ml-ivory">
        {children}
      </body>
    </html>
  );
}
