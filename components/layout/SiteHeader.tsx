import Link from "next/link";

const nav = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於" },
  { href: "/services", label: "服務" },
  { href: "/contact", label: "聯絡預約" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ml-navy-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-sm font-medium tracking-[0.2em] text-ml-ivory">
            松本霖
          </span>
          <span className="text-[10px] font-normal tracking-[0.28em] text-ml-gold-300/90">
            MatsumotoLin
          </span>
        </Link>
        <nav
          className="hidden items-center gap-8 text-xs tracking-[0.18em] text-ml-ivory/80 md:flex"
          aria-label="主要導覽"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ml-gold-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact#lead-form"
          className="ml-auto hidden rounded-sm border border-ml-gold-400/35 bg-ml-gold-400/5 px-4 py-2 text-xs tracking-[0.14em] text-ml-gold-200 transition-colors hover:border-ml-gold-400/55 hover:bg-ml-gold-400/10 md:inline-flex"
        >
          預約諮詢
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="ml-focus-ring cursor-pointer list-none rounded-sm border border-white/10 px-3 py-2 text-xs tracking-widest text-ml-ivory/90">
        選單
      </summary>
      <div className="absolute right-0 mt-2 w-52 border border-white/10 bg-ml-navy-900/95 p-3 shadow-xl backdrop-blur">
        <nav className="flex flex-col gap-2 text-sm" aria-label="手機版導覽">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-2 text-ml-ivory/85 hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#lead-form"
            className="mt-1 rounded-sm border border-ml-gold-400/30 px-2 py-2 text-center text-ml-gold-200"
          >
            預約諮詢
          </Link>
        </nav>
      </div>
    </details>
  );
}
