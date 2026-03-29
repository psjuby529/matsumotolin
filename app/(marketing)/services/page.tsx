import { Container } from "@/components/ui/Container";
import { serviceLines } from "@/lib/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務項目｜松本霖 MatsumotoLin",
  description:
    "四條服務線：全屋訂製、智慧居家、精品工程、體驗與 AI / VR。",
};

export default function ServicesPage() {
  return (
    <div className="border-t border-white/5 py-20 sm:py-28">
      <Container>
        <header className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-ml-gold-400/80">
            Services
          </p>
          <h1 className="mt-3 font-display text-4xl font-normal tracking-tight text-ml-ivory">
            四條服務線
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-ml-ivory/60">
            可依專案階段組合模組；資料結構與交付節點與未來後台一致。
          </p>
        </header>
        <div className="mt-16 space-y-0">
          {serviceLines.map((line, index) => (
            <article
              key={line.id}
              id={line.anchor}
              className="scroll-mt-28 border-t border-white/8 py-14 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-16">
                <div className="lg:w-52 shrink-0">
                  <span className="font-display text-sm text-ml-gold-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 text-xl font-medium tracking-wide text-ml-ivory">
                    {line.name}
                  </h2>
                  <p className="mt-2 text-xs tracking-[0.2em] text-ml-gold-300/75">
                    {line.tagline}
                  </p>
                </div>
                <div className="max-w-2xl flex-1">
                  <p className="text-sm leading-relaxed text-ml-ivory/65">
                    {line.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-ml-ivory/55">
                    {line.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-px w-6 shrink-0 bg-ml-gold-400/35" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
