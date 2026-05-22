import type { Metadata } from "next";
import { HeroBanner } from "@/components/hero-banner";
import { TextBlock } from "@/components/text-block";
import { DarkButton } from "@/components/dark-button";
import { LightButton } from "@/components/light-button";
import { AnimatedNumber } from "@/components/animated-number";
import { faqSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Private DeFi & AI on Solana | Aura FHE Ecosystem",
  description:
    "Explore the applications powered by Aura FHE. From AuraPoly's sealed-bid prediction markets to confidential AI inference and private real-world assets.",
};

type Status = "Live today" | "Immediately buildable" | "In development";

type Surface = "light" | "dark";

type Metric = { label: string; value: string };

type HeroStat = { value: string; label: string };

type Section = {
  number: string;
  status: Status;
  surface: Surface;
  title: string;
  body: string;
  hero?: HeroStat;
  metrics?: Metric[];
  cta?: { label: string; href: string };
  cardClass: string;
};

const HERO_STATS = [
  {
    value: 100,
    prefix: "$",
    suffix: "T+",
    label: "Institutional capital blocked from DeFi",
  },
  {
    value: 65,
    suffix: "M+",
    label: "Solana daily transactions exposed",
  },
  {
    value: 4,
    label: "Application categories unlocked",
  },
  {
    value: 3,
    label: "SDK primitives to integrate",
  },
];

const USE_CASES = [
  "Encrypted swaps",
  "Sealed-bid auctions",
  "Dark pools",
  "Private lending",
  "Encrypted order books",
  "MEV protection",
  "Encrypted LLM inference",
  "Medical AI",
  "Legal AI",
  "Financial advisory",
  "RWA tokenization",
  "Compliant settlement",
  "Wholesale execution",
  "Confidential balances",
  "Private credit scoring",
  "Sealed prediction markets",
];

const FAQS = faqSchema.mainEntity.map((q) => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

/*
 * Status badge styles by (status weight × surface polarity).
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

const SECTIONS: Section[] = [
  {
    number: "01",
    status: "Live today",
    surface: "light",
    title: "Sealed-Bid Prediction Markets",
    body: "AuraPoly serves as our flagship production application and is officially live, clearing real flow on the Aura encrypted compute layer. It operates as a sealed-bid prediction market where a half-million dollar fill stays completely invisible until the moment it settles on-chain. By utilizing FHE, we ensure zero information leakage between participants, solving the structural problem of large fills moving the price before execution.",
    metrics: [
      { label: "TVL", value: "—" },
      { label: "Markets", value: "—" },
      { label: "Resolved volume", value: "—" },
    ],
    cta: { label: "Launch AuraPoly", href: "https://aurapoly.com/" },
    cardClass:
      "bg-gradient-to-b from-[#FAFAFC] to-[#EDEEF1] border-white/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_8px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_16px_36px_-8px_rgba(0,0,0,0.10)]",
  },
  {
    number: "02",
    status: "Immediately buildable",
    surface: "light",
    title: "Confidential AI Inference",
    body: "The Aura coprocessor also supports FHE-based Artificial Intelligence inference. This allows sophisticated models to run on encrypted prompts without ever decrypting the input, returning secure outputs that only the specific user can read. This technology enables high-stakes, privacy-critical workloads such as medical diagnostic AI on patient records, legal AI on privileged documents, and financial advisory tools on private portfolio positions.",
    hero: {
      value: "50 tps",
      label: "encrypted LLM inference on consumer hardware",
    },
    cardClass:
      "bg-gradient-to-b from-[#D6DAE0] to-[#BFC4CC] border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75),0_12px_32px_-8px_rgba(0,0,0,0.14)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75),0_20px_44px_-8px_rgba(0,0,0,0.18)]",
  },
  {
    number: "03",
    status: "In development",
    surface: "dark",
    title: "Institutional Real-World Assets and DeFi",
    body: "Tokenized real-world assets represent a multi-trillion-dollar market that cannot operate on transparent rails due to commercially sensitive counterparty positions and settlement amounts. Aura FHE provides the critical encryption layer that makes regulated RWA tokenization viable on Solana's public infrastructure. Additionally, our primitives enable encrypted order books for decentralized exchanges and dark pools, allowing wholesale institutional capital to execute large trades without leaking their positions to MEV bots watching the mempool.",
    hero: {
      value: "$100T+",
      label: "institutional capital unlocked",
    },
    cardClass:
      "bg-gradient-to-b from-[#3A3D44] to-[#26282E] border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_16px_36px_-8px_rgba(0,0,0,0.25)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_24px_48px_-8px_rgba(0,0,0,0.32)]",
  },
  {
    number: "04",
    status: "Live today",
    surface: "dark",
    title: "Three Lines to Total Privacy",
    body: "AURA SDK v5 is live in production, empowering developers to build the next generation of on-chain finance with privacy by default. Our SDK exposes three highly optimized core primitives: encrypt, compute, and decrypt. With this straightforward interface, a Solana developer can take any existing transparent program, modify just three lines of code, and ship a fully confidential version in under an hour. This seamless integration instantly unlocks a library of higher-level constructs for real-world applications, including encrypted swaps, sealed-bid auctions, and confidential balances.",
    hero: {
      value: "< 1 hr",
      label: "to ship a confidential Solana app",
    },
    cta: {
      label: "Browse the SDK",
      href: "https://github.com/aurafhe/shield-sdk/tree/shield_sdk",
    },
    cardClass:
      "bg-gradient-to-b from-[#15171B] to-[#0B0B0D] border-white/8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_20px_44px_-8px_rgba(0,0,0,0.35)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_28px_56px_-8px_rgba(0,0,0,0.45)]",
  },
];

export default function EcosystemPage() {
  return (
    <>
      <HeroBanner
        title="Building the Encrypted Economy"
        description="Live applications, institutional partnerships, and developer primitives shipping the encrypted economy on Solana today."
      />

      <section className="w-full border-t border-b border-white/10 bg-dark py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 md:px-9">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="font-display text-[40px] font-semibold leading-none tracking-tight text-dark-text md:text-[48px]">
                  <AnimatedNumber
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </span>
                <span className="text-p14 max-w-[220px] text-muted-text">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 border-t border-white/5 pt-6">
            <span className="text-pre-heading-16 text-muted-text">
              Built for
            </span>
            <span className="font-display text-[20px] font-semibold tracking-tight text-dark-text">
              Solana
            </span>
          </div>
        </div>
      </section>

      <TextBlock>
        The Aura FHE architecture only matters if developers can build
        paradigm-shifting applications with it. Our protocol unlocks entirely
        new categories of decentralized applications that were fundamentally
        impossible on transparent blockchains. Everything in our ecosystem is
        either live today, in active development with institutional partners,
        or immediately buildable using our current software development kit.
      </TextBlock>

      <section className="w-full bg-dark py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">The landscape</p>
          <h2 className="text-h2 max-w-[700px] text-left text-dark-text">
            What you can build
          </h2>
          <p className="text-p16 max-w-[1128px] text-muted-text">
            Aura FHE primitives unlock entire categories of applications that
            were fundamentally impossible on transparent rails. Here&rsquo;s
            the landscape that becomes possible when computation is truly
            private.
          </p>
          <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {USE_CASES.map((label) => (
              <li
                key={label}
                className="flex items-center gap-3 border border-white/10 bg-elevated px-5 py-4 transition-colors hover:border-accent-1/40 hover:bg-elevated/80"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                <span className="text-p14 text-dark-text">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-[56px] pt-[40px] md:pb-[100px] md:pt-[60px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 md:px-9">
          {SECTIONS.map((s) => {
            const isDark = s.surface === "dark";
            return (
              <article
                key={s.number}
                className={`rounded-3xl border p-10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 md:p-14 ${s.cardClass}`}
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

                  {s.hero && (
                    <div
                      className={`flex w-full max-w-[640px] flex-col items-start gap-2 rounded-2xl border p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-5 ${
                        isDark
                          ? "border-white/10 bg-white/[0.04]"
                          : "border-dark/10 bg-white/60"
                      }`}
                    >
                      <span
                        className={`font-display text-[40px] font-semibold leading-none tracking-tight sm:text-[44px] ${
                          isDark ? "text-dark-text" : "text-dark"
                        }`}
                      >
                        {s.hero.value}
                      </span>
                      <span
                        className={`text-p14 ${
                          isDark ? "text-muted-text" : "text-dark/55"
                        }`}
                      >
                        {s.hero.label}
                      </span>
                    </div>
                  )}

                  {s.metrics && (
                    <ul className="grid w-full max-w-[640px] grid-cols-1 gap-3 sm:grid-cols-3">
                      {s.metrics.map((m) => (
                        <li
                          key={m.label}
                          className="flex flex-col gap-1 rounded-xl border border-dark/10 bg-white/60 px-4 py-3 backdrop-blur-sm"
                        >
                          <span className="text-p14 text-dark/55">
                            {m.label}
                          </span>
                          <span className="font-display text-[24px] font-semibold leading-none text-dark">
                            {m.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.cta &&
                    (isDark ? (
                      <LightButton
                        href={s.cta.href}
                        variant="main"
                        external
                      >
                        {s.cta.label}
                      </LightButton>
                    ) : (
                      <DarkButton
                        href={s.cta.href}
                        variant="main"
                        external
                      >
                        {s.cta.label}
                      </DarkButton>
                    ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-white pb-[56px] md:pb-[100px]">
        <div className="mx-auto flex max-w-[900px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">FAQ</p>
          <h2 className="text-h2 max-w-[700px] text-left text-dark">
            Common questions
          </h2>
          <div className="w-full border-t border-dark/10">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-dark/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-h4 text-dark">{faq.question}</span>
                  <span className="font-display text-[28px] font-light leading-none text-dark/40 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-p16 pb-5 pr-12 text-dark/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-dark py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-9 px-5 md:px-9">
          <div className="flex flex-col items-center gap-6">
            <p className="text-pre-heading-16 text-accent-1">Start shipping</p>
            <h2 className="text-h2 max-w-[700px] text-center text-dark-text">
              What will you build?
            </h2>
            <p className="text-p16 max-w-[626px] text-center text-muted-text">
              Three primitives. Three lines of code. Ship a fully confidential
              Solana app this week.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <LightButton
              href="https://docs.afhe.io"
              variant="main"
              external
            >
              Read the docs
            </LightButton>
            <LightButton
              href="https://discord.gg/afhe"
              variant="secondary"
              external
            >
              Join Discord
            </LightButton>
            <LightButton href="/about" variant="secondary">
              Submit your app
            </LightButton>
          </div>
        </div>
      </section>
    </>
  );
}
