import { AiVrProcessSection } from "@/components/marketing/home/AiVrProcessSection";
import { CoreCapabilitiesSection } from "@/components/marketing/home/CoreCapabilitiesSection";
import { CtaFormSection } from "@/components/marketing/home/CtaFormSection";
import { FaqSection } from "@/components/marketing/home/FaqSection";
import { FeaturedCasesSection } from "@/components/marketing/home/FeaturedCasesSection";
import { FeaturedServicesSection } from "@/components/marketing/home/FeaturedServicesSection";
import { HeroSection } from "@/components/marketing/home/HeroSection";
import { InvestmentAdvisorSection } from "@/components/marketing/home/InvestmentAdvisorSection";
import {
  homeAiVrSteps,
  homeCoreCapabilities,
  homeFaq,
  homeFeaturedCases,
  homeFeaturedServices,
  homeHero,
  homeInvestment,
} from "@/lib/data/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "松本霖 MatsumotoLin｜輕奢生活，輕盈入手",
  description:
    "MatsumotoLin 松本霖 — Effortless Luxury. 全屋訂製、智慧整合與精品工程治理。",
};

export default function HomePage() {
  return (
    <>
      <HeroSection data={homeHero} />
      <CoreCapabilitiesSection items={homeCoreCapabilities} />
      <AiVrProcessSection steps={homeAiVrSteps} />
      <FeaturedServicesSection items={homeFeaturedServices} />
      <FeaturedCasesSection items={homeFeaturedCases} />
      <InvestmentAdvisorSection data={homeInvestment} />
      <FaqSection items={homeFaq} />
      <CtaFormSection />
    </>
  );
}
