import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/marketing/forms/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡與預約｜松本霖 MatsumotoLin",
  description:
    "預約諮詢與結構化需求送出。輕奢生活，輕盈入手。Effortless Luxury.",
};

export default function ContactPage() {
  return (
    <div className="border-t border-white/5">
      <section className="py-20 sm:py-24" aria-labelledby="contact-hero">
        <Container>
          <p className="text-[10px] uppercase tracking-[0.35em] text-ml-gold-400/80">
            Contact · Book
          </p>
          <h1
            id="contact-hero"
            className="mt-3 font-display text-4xl font-normal tracking-tight text-ml-ivory"
          >
            聯絡與預約
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ml-ivory/60">
            若您準備展開討論，請使用結構化表單留下需求；上傳參考圖將於串接
            Storage 後啟用。
          </p>
          <p className="font-display mt-8 text-2xl italic text-ml-gold-200/90">
            Effortless Luxury.
          </p>
        </Container>
      </section>

      <section
        id="upload"
        className="border-t border-white/5 bg-ml-navy-900/25 py-14"
        aria-labelledby="upload-heading"
      >
        <Container>
          <h2
            id="upload-heading"
            className="font-display text-2xl font-normal text-ml-ivory"
          >
            上傳需求
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ml-ivory/55">
            參考圖、平面與現場照片將於下一階段透過 Supabase Storage
            安全上傳；目前請先於下方「需求說明」描述檔案連結或交付方式，或聯繫顧問協助。
          </p>
        </Container>
      </section>

      <section
        id="lead-form"
        className="py-20 sm:py-28"
        aria-labelledby="lead-form-heading"
      >
        <Container>
          <h2
            id="lead-form-heading"
            className="font-display text-2xl font-normal text-ml-ivory"
          >
            結構化需求表單
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ml-ivory/55">
            送出後將由顧問與您聯繫確認細節，並保留於需求資料庫供後續追蹤。
          </p>
          <div className="mx-auto mt-10 max-w-2xl border border-white/10 bg-ml-navy-900/35 p-6 sm:p-8">
            <LeadForm id="contact-lead-form" formName="contact_lead" />
          </div>
        </Container>
      </section>
    </div>
  );
}
