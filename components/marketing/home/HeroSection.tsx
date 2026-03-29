import Image from "next/image";
import Link from "next/link";
import type { HomeHeroContent } from "@/types/content";

export function HeroSection({ data }: { data: HomeHeroContent }) {
  return (
    <section
      className="relative flex min-h-[88vh] items-end pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32"
      aria-labelledby="hero-heading"
    >
      {/* 背景層：圖片與紋理、漸層分離，文字在獨立層 */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {data.backgroundImageUrl ? (
          <Image
            src={data.backgroundImageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : null}
        <div
          className={`absolute inset-0 ${data.backgroundImageUrl ? "bg-ml-navy-950/75" : ""} ml-leather-bg`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ml-navy-950 via-ml-navy-950/40 to-transparent sm:bg-gradient-to-r sm:from-ml-navy-950 sm:via-ml-navy-950/50 sm:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-ml-gold-300/85">
            {data.brandNameEn}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-medium tracking-[0.12em] text-ml-ivory sm:text-5xl"
          >
            {data.brandNameZh}
          </h1>
          <p className="mt-6 text-lg font-light tracking-wide text-ml-ivory/90 sm:text-xl">
            {data.taglineZh}
          </p>
          <p className="font-display mt-5 text-2xl italic leading-snug text-ml-gold-200 sm:text-3xl">
            {data.taglineEn}
          </p>
          <p className="sr-only">
            背景為品牌視覺氛圍，非標語圖片。標語英文為 Effortless Luxury.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={data.primaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-ml-gold-400/45 bg-ml-gold-400/10 px-8 py-3 text-xs tracking-[0.2em] text-ml-gold-200 transition-colors hover:bg-ml-gold-400/15"
            >
              {data.primaryCta.label}
            </Link>
            <Link
              href={data.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-white/15 px-8 py-3 text-xs tracking-[0.2em] text-ml-ivory/85 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              {data.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
