import type { Metadata } from "next";
import { HeroBanner } from "@/components/hero-banner";
import { TextBlock } from "@/components/text-block";

export const metadata: Metadata = {
  title: "LUT-FHE Technology | Bootstrap-Free Encryption | Aura FHE",
  description:
    "Discover Aura's LUT-FHE architecture. Defeat the bootstrapping bottleneck with 0.04μs integer addition and post-quantum security on the Solana blockchain.",
};

const PILLARS = [
  {
    title: "Noise-Free structure",
    body: "The scheme eliminates bootstrapping entirely.",
  },
  {
    title: "Maximum throughput",
    body: "Integer addition completes in approximately 0.04 microseconds.",
  },
  {
    title: "Lightweight runtime",
    body: "The runtime fits in 3.7MB of WASM.",
  },
  {
    title: "Post-Quantum security",
    body: "Security reduces to the Multivariate Quadratic (MQ) problem, proven NP-hard.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeroBanner title="Discover Aura's architecture" />

      <TextBlock preHeading="Different mathematics. Unmatched Performance.">
        Aura is the only protocol in the industry capable of delivering FHE at
        the speed of a modern blockchain. Aura FHE has abandoned legacy methods
        to create a fundamentally different mathematical approach, resulting in
        an architecture that no other project in the Web3 space has
        successfully achieved.
      </TextBlock>

      <section className="w-full bg-white py-[60px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-9">
          <p className="text-pre-heading-16 text-accent-1">
            Existing FHE cannot run on Solana
          </p>
          <div className="flex max-w-[1128px] flex-col gap-6 text-p16 text-dark/80">
            <p>
              Lattice-based FHE schemes require a time-consuming refresh
              process called bootstrapping that creates a structural
              bottleneck.
            </p>
            <p>
              Every encrypted operation in lattice-based FHE introduces noise
              into the ciphertext. The ciphertext must be bootstrapped,
              homomorphically decrypted and re-encrypted, refreshing the noise.
              The fastest production implementations measure bootstrapping in
              tens of milliseconds per gate. A 400ms Solana block cannot
              accommodate this.
            </p>
            <p>
              AURA FHE abandons lattice-based FHE entirely and solves this
              speed-to-privacy mismatch by replacing ring-based ciphertext
              arithmetic with precomputed lookup tables, known as LUT-FHE,
              defined over a Multivariate Quadratic structure.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-[100px]">
        <div className="mx-auto max-w-[1400px] px-9">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <li
                key={p.title}
                className="flex flex-col gap-4 border border-border-token bg-elevated p-7"
              >
                <span className="font-display text-[14px] font-medium tracking-[0.06em] text-accent-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h4 text-dark-text">{p.title}</h3>
                <p className="text-p16 text-muted-text">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-dark py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-9">
          <p className="text-pre-heading-16 text-accent-1">
            The Coprocessor Model
          </p>
          <p className="text-p16 max-w-[1128px] text-muted-text">
            Aura FHE operates via a sophisticated coprocessor model. Solana
            programs built with our SDK do not perform heavy FHE computation
            directly; instead, they submit encrypted requests to the Aura
            coprocessor network, receive a verifiable ciphertext result, and
            proceed with on-chain settlement. This architecture preserves
            Solana&rsquo;s massive native throughput because validators only
            verify the cryptographic proof of correctness rather than executing
            the FHE workload themselves.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[80px]">
        <div className="mx-auto max-w-[1128px] px-9">
          <p className="text-h3-24 text-center text-dark">
            Protected by nine patents and validated by twelve years of
            cryptographic research, Aura FHE is a true unicorn in the privacy
            landscape.
          </p>
        </div>
      </section>
    </>
  );
}
