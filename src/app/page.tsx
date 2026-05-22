import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { HeroStats } from "@/components/home/hero-stats";
import { DisclaimerBanner } from "@/components/home/disclaimer-banner";
import { Features } from "@/components/home/features";
import { Process } from "@/components/home/process";
import { Industries } from "@/components/home/industries";
import { Roadmap } from "@/components/home/roadmap";

export const metadata: Metadata = {
  title: "Aura FHE | The Encrypted Compute Layer for Solana",
  description:
    "Aura FHE brings sub-microsecond, bootstrap-free encryption to Solana. End MEV leakage and unlock institutional capital with the LUT-FHE privacy layer.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroStats />
      <DisclaimerBanner />
      <Features />
      <Process />
      <Industries />
      <Roadmap />
    </>
  );
}
