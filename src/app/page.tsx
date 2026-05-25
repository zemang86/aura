import type { Metadata } from "next";

// Original home sections (restored from git for audit)
import { Hero as OriginalHero } from "@/components/home/hero";
import { HeroStats } from "@/components/home/hero-stats";
import { DisclaimerBanner } from "@/components/home/disclaimer-banner";
import { Features } from "@/components/home/features";
import { Process } from "@/components/home/process";

// Marketing-v2 sections (dark editorial brand)
import { Hero as CipherCover } from "@/components/marketing/hero";
import { MegaHeadline } from "@/components/marketing/mega-headline";
import { Spec } from "@/components/marketing/spec";
import { CaseGrid } from "@/components/marketing/case-grid";
import { Roadmap } from "@/components/marketing/roadmap";
import { Capabilities } from "@/components/marketing/capabilities";
import { References } from "@/components/marketing/references";

export const metadata: Metadata = {
  title: "Aura FHE — The Encrypted Compute Layer for Solana",
  description:
    "Aura runs Solana programs on data while it stays sealed. Privacy as a mathematical guarantee, not a policy.",
};

export default function HomePage() {
  return (
    <>
      {/* ---- ORIGINAL HOME SECTIONS ---- */}
      <OriginalHero />
      <HeroStats />
      <DisclaimerBanner />
      <Features />
      <Process />

      {/* ---- MARKETING-V2 SECTIONS ---- */}
      <CipherCover />
      <MegaHeadline />
      <Spec />
      <CaseGrid />
      <Roadmap />
      <Capabilities />
      <References />
    </>
  );
}
