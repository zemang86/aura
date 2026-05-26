import type { Metadata } from "next";

// Original home sections (restored from git for audit)
import { Hero as OriginalHero } from "@/components/home/hero";
import { HeroStats } from "@/components/home/hero-stats";
import { DisclaimerBanner } from "@/components/home/disclaimer-banner";
import { Features } from "@/components/home/features";
import { Process } from "@/components/home/process";

// Marketing-v2 sections (dark editorial brand)
import { CaseGrid } from "@/components/marketing/case-grid";

export const metadata: Metadata = {
  title: "Aura FHE — The Encrypted Compute Layer for Solana",
  description:
    "Aura runs Solana programs on data while it stays sealed. Privacy as a mathematical guarantee, not a policy.",
  alternates: { canonical: "/" },
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
      <CaseGrid />
    </>
  );
}
