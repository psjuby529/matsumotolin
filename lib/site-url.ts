/**
 * Vercel Preview／Production 自動帶 VERCEL_URL；
 * 自訂網域可設 NEXT_PUBLIC_SITE_URL（需含 https://）。
 */
export function getSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (custom?.startsWith("http://") || custom?.startsWith("https://")) {
    return custom.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}
