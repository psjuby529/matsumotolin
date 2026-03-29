import { Container } from "@/components/ui/Container";
import { aboutPage } from "@/lib/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於松本霖｜MatsumotoLin",
  description:
    "品牌理念、AI 原生基因與整合能力。輕奢生活，輕盈入手。Effortless Luxury.",
};

export default function AboutPage() {
  return (
    <div className="border-t border-white/5 py-20 sm:py-28">
      <Container>
        <header className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-ml-gold-400/80">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-normal tracking-tight text-ml-ivory">
            {aboutPage.title}
          </h1>
          <p className="mt-6 text-lg font-light leading-relaxed text-ml-ivory/75">
            {aboutPage.intro}
          </p>
          <p className="font-display mt-8 text-2xl italic text-ml-gold-200/95">
            Effortless Luxury.
          </p>
        </header>
        <div className="mt-16 space-y-16">
          {aboutPage.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="grid gap-6 border-t border-white/8 pt-12 lg:grid-cols-[220px_1fr]"
            >
              <h2 className="text-sm font-medium tracking-[0.2em] text-ml-gold-300/90">
                {pillar.title}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-ml-ivory/62">
                {pillar.paragraphs.map((p, i) => (
                  <p key={`${pillar.title}-${i}`}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
