import type { Metadata } from "next";
import { HeroBanner } from "@/components/hero-banner";
import { DarkButton } from "@/components/dark-button";
import { AnimatedNumber } from "@/components/animated-number";

export const metadata: Metadata = {
  title: "LUT-FHE Technology | Bootstrap-Free Encryption | Aura FHE",
  description:
    "Discover Aura's LUT-FHE architecture. Defeat the bootstrapping bottleneck with 0.04μs integer addition and post-quantum security on the Solana blockchain.",
};

const HERO_STATS = [
  { value: 0.04, decimals: 2, prefix: "~", suffix: "μs", label: "Integer addition" },
  { value: 3.7, decimals: 1, suffix: " MB", label: "WASM runtime" },
  { value: 100, suffix: "×", label: "Faster than legacy FHE" },
  { value: 0.1, decimals: 1, prefix: "~", suffix: "s", label: "Verification time" },
];

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

const BENCHMARKS = [
  { value: 13500, suffix: "×", title: "vs Microsoft CKKS", sub: "CNN inference" },
  { value: 84500, suffix: "×", title: "vs Zama TFHE", sub: "CNN inference" },
  { value: 50, suffix: " tps", title: "Encrypted LLM", sub: "Consumer hardware" },
  { value: 12, suffix: "+ yrs", title: "Cryptographic research", sub: "Behind the protocol" },
];

const COMPARISON = {
  cols: ["Aura FHE", "Zama TFHE", "Microsoft CKKS"],
  rows: [
    { label: "Bootstrapping", values: ["None", "Required", "Required"] },
    {
      label: "Security model",
      values: ["MQ (NP-hard, proven)", "LWE (believed hard)", "LWE"],
    },
    { label: "Runtime size", values: ["3.7 MB WASM", "Multi-GB", "Multi-GB"] },
    { label: "Per-op cost", values: ["~0.04 μs", "ms–s", "ms–s"] },
    {
      label: "Hardware required",
      values: ["Consumer", "Enterprise GPU", "Enterprise GPU"],
    },
  ],
};

export default function TechnologyPage() {
  return (
    <>
      <HeroBanner title="Discover Aura's architecture" />

      <section className="w-full border-t border-b border-white/10 bg-dark py-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 px-5 md:px-9 md:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="font-display text-[40px] font-semibold leading-none tracking-tight text-dark-text md:text-[48px]">
                <AnimatedNumber
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </span>
              <span className="text-p14 text-muted-text">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-5 md:px-9">
          <h2 className="text-h2 max-w-[900px] text-dark">
            Different mathematics. Unmatched Performance.
          </h2>
          <p className="text-p16 max-w-[700px] text-center text-dark/80">
            Aura is the only protocol in the industry capable of delivering FHE
            at the speed of a modern blockchain. Aura FHE has abandoned legacy
            methods to create a fundamentally different mathematical approach,
            resulting in an architecture that no other project in the Web3
            space has successfully achieved.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-9 px-5 md:px-9">
          <h2 className="text-h2 max-w-[900px] text-dark">
            Existing FHE cannot run on Solana
          </h2>
          <div className="flex w-full max-w-[760px] flex-col gap-6 text-p16 text-dark/80">
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
          </div>
          <div className="flex w-full max-w-[760px] flex-col gap-2 border-l-2 border-accent-1 pl-6">
            <p className="text-pre-heading-16 text-left text-accent-1">
              The Aura answer
            </p>
            <p className="text-p16 text-dark">
              AURA FHE abandons lattice-based FHE entirely and solves this
              speed-to-privacy mismatch by replacing ring-based ciphertext
              arithmetic with precomputed lookup tables, known as LUT-FHE,
              defined over a Multivariate Quadratic structure.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-dark py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">Numbers that matter</p>
          <h2 className="text-h2 max-w-[700px] text-left text-dark-text">
            Engineered for the speed of finance
          </h2>
          <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {BENCHMARKS.map((b) => (
              <li
                key={b.title}
                className="flex flex-col gap-4 border border-white/10 bg-elevated p-6 md:p-8"
              >
                <span className="font-display text-[34px] font-semibold leading-none tracking-tight text-dark-text md:text-[44px]">
                  <AnimatedNumber value={b.value} suffix={b.suffix} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-h4 text-dark-text">{b.title}</h3>
                  <p className="text-p14 text-muted-text">{b.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-[56px] pt-[56px] md:pb-[100px] md:pt-[100px]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-9">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <li
                key={p.title}
                className="flex flex-col gap-4 border border-border-token bg-elevated p-5 md:p-7"
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

      <section className="w-full bg-dark py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">
            The honest comparison
          </p>
          <h2 className="text-h2 max-w-[700px] text-left text-dark-text">
            Head-to-head against the field
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-white/15 px-5 py-4 text-left text-p14 font-medium text-muted-text" />
                  {COMPARISON.cols.map((c, i) => (
                    <th
                      key={c}
                      className={`border-b border-white/15 px-5 py-4 text-left text-p14 font-semibold ${
                        i === 0 ? "text-accent-1" : "text-muted-text"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((r) => (
                  <tr key={r.label}>
                    <td className="border-b border-white/5 px-5 py-5 text-p14 text-muted-text">
                      {r.label}
                    </td>
                    {r.values.map((v, i) => (
                      <td
                        key={i}
                        className={`border-b border-white/5 px-5 py-5 text-p14 ${
                          i === 0 ? "font-medium text-dark-text" : "text-muted-text"
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-dark py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
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

      <section className="w-full bg-white py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-9 px-5 md:px-9">
          <div className="flex flex-col items-center gap-6">
            <p className="text-pre-heading-16 text-accent-1">For developers</p>
            <h2 className="text-h2 max-w-[700px] text-center text-dark">
              Three lines to total privacy
            </h2>
            <p className="text-p16 max-w-[626px] text-center text-dark/70">
              The AURA SDK exposes three primitives:{" "}
              <code className="font-mono text-accent-1">encrypt</code>,{" "}
              <code className="font-mono text-accent-1">compute</code>,{" "}
              <code className="font-mono text-accent-1">decrypt</code>. Drop
              them into any Solana program.
            </p>
          </div>

          <pre className="w-full max-w-[820px] overflow-x-auto rounded-2xl border border-border-token bg-dark p-6 md:p-8 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.20)]">
            <code className="font-mono text-p14 leading-relaxed text-dark-text whitespace-pre">
              <span className="text-muted-text">{`// Three primitives. One Solana transaction.`}</span>
              {"\n"}
              <span className="text-accent-2">const</span> encrypted ={" "}
              <span className="text-accent-2">await</span> aura.
              <span className="text-accent-1">encrypt</span>(amount);
              {"\n"}
              <span className="text-accent-2">const</span> result    ={" "}
              <span className="text-accent-2">await</span> aura.
              <span className="text-accent-1">compute</span>(swapProgram, encrypted);
              {"\n"}
              <span className="text-accent-2">const</span> value     ={" "}
              <span className="text-accent-2">await</span> aura.
              <span className="text-accent-1">decrypt</span>(result);
            </code>
          </pre>
        </div>
      </section>

      <section className="w-full bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto flex max-w-[1128px] flex-col items-center gap-9 px-5 md:px-9">
          <p className="text-h3-24 text-center text-dark">
            Protected by nine patents and validated by twelve years of
            cryptographic research, Aura FHE is a true unicorn in the privacy
            landscape.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <DarkButton
              href="https://docs.afhe.io/whitepaper/"
              variant="main"
              external
            >
              Read the Whitepaper
            </DarkButton>
            <DarkButton
              href="https://github.com/aurafhe/shield-sdk/tree/shield_sdk"
              variant="secondary"
              external
            >
              Browse the SDK
            </DarkButton>
          </div>
        </div>
      </section>
    </>
  );
}
