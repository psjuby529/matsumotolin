import Image from "next/image";
import Link from "next/link";
import type { HomeHeroContent } from "@/types/content";

export function HeroSection({ data }: { data: HomeHeroContent }) {
  return (
    <section
      className="relative flex min-h-[86vh] items-end pb-12 pt-24 sm:items-center sm:min-h-[88vh] sm:pb-28 sm:pt-36"
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
          className={`absolute inset-0 ${data.backgroundImageUrl ? "bg-ml-navy-950/75" : ""} ml-leather-bg opacity-80`}
        />
        {/* 更細緻的深藍遮罩：提升可讀性與高級層次感 */}
        <div className="absolute inset-0 bg-gradient-to-t from-ml-navy-950/88 via-ml-navy-900/45 to-transparent sm:bg-gradient-to-r sm:from-ml-navy-950/90 sm:via-ml-navy-900/35 sm:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-ml-gold-300/85">
            {data.brandNameEn}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-medium leading-[1.06] tracking-[0.12em] text-ml-ivory sm:text-6xl"
          >
            {data.brandNameZh}
          </h1>
          <p className="mt-7 text-lg font-light tracking-wide text-ml-ivory/90 sm:text-xl">
            {data.taglineZh}
          </p>
          <p className="font-display mt-5 text-[28px] italic leading-snug text-ml-gold-200 sm:text-4xl">
            {data.taglineEn}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-ml-ivory/75 sm:text-base">
            {data.subtitle}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ml-ivory/58 sm:text-[13px]">
            {data.description}
          </p>
          <p className="sr-only">
            背景為品牌視覺氛圍，非標語圖片。標語英文為 Effortless Luxury.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:mt-14 sm:flex-row sm:items-center">
            <Link
              href={data.primaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-ml-gold-400/60 bg-ml-gold-400/12 px-8 py-3 text-xs tracking-[0.2em] text-ml-gold-200 transition-colors hover:bg-ml-gold-400/18 hover:border-ml-gold-400/75"
            >
              {data.primaryCta.label}
            </Link>
            <Link
              href={data.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-white/12 bg-transparent px-8 py-3 text-xs tracking-[0.2em] text-ml-ivory/78 transition-colors hover:border-ml-gold-400/35 hover:bg-white/0"
            >
              {data.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
