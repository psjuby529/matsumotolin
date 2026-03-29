import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "關於松本霖" },
  { href: "/services", label: "服務項目" },
  { href: "/contact", label: "聯絡與預約" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ml-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-ml-ivory">
              松本霖 MatsumotoLin
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ml-ivory/55">
              輕奢生活，輕盈入手。品牌型官網與可營運資料結構，為長期整合預留路徑。
            </p>
            <p className="mt-4 font-display text-lg italic text-ml-gold-300/90">
              Effortless Luxury.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-[10px] uppercase tracking-[0.25em] text-ml-ivory/40">
              Explore
            </span>
            <nav aria-label="頁尾導覽" className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-ml-ivory/70 transition-colors hover:text-ml-gold-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-12 h-px w-full max-w-md ml-gold-line opacity-60" />
        <p className="mt-8 text-[11px] tracking-[0.08em] text-ml-ivory/35">
          © {new Date().getFullYear()} MatsumotoLin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
