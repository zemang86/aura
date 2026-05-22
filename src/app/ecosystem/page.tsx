import type { Metadata } from "next";
import { HeroBanner } from "@/components/hero-banner";
import { TextBlock } from "@/components/text-block";
import { DarkButton } from "@/components/dark-button";
import { LightButton } from "@/components/light-button";

export const metadata: Metadata = {
  title: "Private DeFi & AI on Solana | Aura FHE Ecosystem",
  description:
    "Explore the applications powered by Aura FHE. From AuraPoly's sealed-bid prediction markets to confidential AI inference and private real-world assets.",
};

type Status = "Live today" | "Immediately buildable" | "In development";

type Surface = "light" | "dark";

type Section = {
  number: string;
  status: Status;
  surface: Surface;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  cardClass: string;
};

/*
 * Status badge styles by (status weight × surface polarity).
 * On light cards: dark text on subtle dark wash.
 * On dark cards: white text on subtle white wash.
 */
const BADGE_STYLES: Record<Status, Record<Surface, string>> = {
  "Live today": {
    light:
      "border-dark/15 bg-gradient-to-b from-dark/[0.10] to-dark/[0.04] text-dark shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)]",
    dark: "border-white/25 bg-gradient-to-b from-white/[0.16] to-white/[0.06] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
  },
  "Immediately buildable": {
    light:
      "border-dark/10 bg-gradient-to-b from-dark/[0.06] to-dark/[0.02] text-dark/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]",
    dark: "border-white/15 bg-gradient-to-b from-white/[0.10] to-white/[0.04] text-white/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
  },
  "In development": {
    light:
      "border-dark/[0.06] bg-gradient-to-b from-dark/[0.03] to-dark/[0.01] text-dark/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)]",
    dark: "border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] text-white/65 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
  },
};

/*
 * Cards descend from near-white → near-black across four sections.
 * Sharp polarity flip between #02 (light) and #03 (dark) is the page's
 * dramatic moment — readers cross from "what exists" into "what's being built".
 */
const SECTIONS: Section[] = [
  {
    number: "01",
    status: "Live today",
    surface: "light",
    title: "Sealed-Bid Prediction Markets",
    body: "AuraPoly serves as our flagship production application and is officially live, clearing real flow on the Aura encrypted compute layer. It operates as a sealed-bid prediction market where a half-million dollar fill stays completely invisible until the moment it settles on-chain. By utilizing FHE, we ensure zero information leakage between participants, solving the structural problem of large fills moving the price before execution.",
    cta: { label: "Launch AuraPoly", href: "https://aurapoly.com/" },
    cardClass:
      "bg-gradient-to-b from-[#FAFAFC] to-[#EDEEF1] border-white/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_8px_24px_-8px_rgba(0,0,0,0.06)]",
  },
  {
    number: "02",
    status: "Immediately buildable",
    surface: "light",
    title: "Confidential AI Inference",
    body: "The Aura coprocessor also supports FHE-based Artificial Intelligence inference. This allows sophisticated models to run on encrypted prompts without ever decrypting the input, returning secure outputs that only the specific user can read. This technology enables high-stakes, privacy-critical workloads such as medical diagnostic AI on patient records, legal AI on privileged documents, and financial advisory tools on private portfolio positions.",
    cardClass:
      "bg-gradient-to-b from-[#D6DAE0] to-[#BFC4CC] border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75),0_12px_32px_-8px_rgba(0,0,0,0.14)]",
  },
  {
    number: "03",
    status: "In development",
    surface: "dark",
    title: "Institutional Real-World Assets and DeFi",
    body: "Tokenized real-world assets represent a multi-trillion-dollar market that cannot operate on transparent rails due to commercially sensitive counterparty positions and settlement amounts. Aura FHE provides the critical encryption layer that makes regulated RWA tokenization viable on Solana's public infrastructure. Additionally, our primitives enable encrypted order books for decentralized exchanges and dark pools, allowing wholesale institutional capital to execute large trades without leaking their positions to MEV bots watching the mempool.",
    cardClass:
      "bg-gradient-to-b from-[#3A3D44] to-[#26282E] border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_16px_36px_-8px_rgba(0,0,0,0.25)]",
  },
  {
    number: "04",
    status: "Live today",
    surface: "dark",
    title: "Three Lines to Total Privacy",
    body: "AURA SDK v5 is live in production, empowering developers to build the next generation of on-chain finance with privacy by default. Our SDK exposes three highly optimized core primitives: encrypt, compute, and decrypt. With this straightforward interface, a Solana developer can take any existing transparent program, modify just three lines of code, and ship a fully confidential version in under an hour. This seamless integration instantly unlocks a library of higher-level constructs for real-world applications, including encrypted swaps, sealed-bid auctions, and confidential balances.",
    cta: {
      label: "Browse the SDK",
      href: "https://github.com/aurafhe/shield-sdk/tree/shield_sdk",
    },
    cardClass:
      "bg-gradient-to-b from-[#15171B] to-[#0B0B0D] border-white/8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_20px_44px_-8px_rgba(0,0,0,0.35)]",
  },
];

export default function EcosystemPage() {
  return (
    <>
      <HeroBanner title="Building the Encrypted Economy" />

      <TextBlock>
        The Aura FHE architecture only matters if developers can build
        paradigm-shifting applications with it. Our protocol unlocks entirely
        new categories of decentralized applications that were fundamentally
        impossible on transparent blockchains. Everything in our ecosystem is
        either live today, in active development with institutional partners,
        or immediately buildable using our current software development kit.
      </TextBlock>

      <section className="w-full bg-white pb-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-9">
          {SECTIONS.map((s) => {
            const isDark = s.surface === "dark";
            return (
              <article
                key={s.number}
                className={`rounded-3xl border p-10 backdrop-blur-md md:p-14 ${s.cardClass}`}
              >
                <div className="flex flex-col items-start gap-6">
                  <div
                    className={`inline-flex items-center rounded-full border px-4 py-1.5 backdrop-blur-md ${BADGE_STYLES[s.status][s.surface]}`}
                  >
                    <span className="text-pre-heading-16">
                      {s.number} · {s.status}
                    </span>
                  </div>
                  <h3
                    className={`text-h3-36 max-w-[1128px] ${
                      isDark ? "text-dark-text" : "text-dark"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-p16 max-w-[1128px] ${
                      isDark ? "text-muted-text" : "text-dark/80"
                    }`}
                  >
                    {s.body}
                  </p>
                  {s.cta &&
                    (isDark ? (
                      <LightButton href={s.cta.href} variant="main" external>
                        {s.cta.label}
                      </LightButton>
                    ) : (
                      <DarkButton href={s.cta.href} variant="main" external>
                        {s.cta.label}
                      </DarkButton>
                    ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
