import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LUT-FHE Technology | Bootstrap-Free Encryption | Aura FHE",
  description:
    "Discover Aura's LUT-FHE architecture. Defeat the bootstrapping bottleneck with 0.04μs integer addition and post-quantum security on the Solana blockchain.",
  alternates: { canonical: "/technology" },
};

const HERO_KPIS = [
  { value: "~0.04μs", label: "Integer addition" },
  { value: "3.7 MB", label: "WASM runtime" },
  { value: "100×", label: "Faster than legacy FHE" },
  { value: "~0.1s", label: "Verification time" },
];

const PILLARS = [
  {
    title: "Noise-free structure",
    body: "The scheme eliminates bootstrapping entirely.",
  },
  {
    title: "Maximum throughput",
    body: "Integer addition completes in approximately 0.04 microseconds.",
  },
  {
    title: "Lightweight runtime",
    body: "The full runtime fits in 3.7 MB of WASM.",
  },
  {
    title: "Post-quantum security",
    body: "Security reduces to the Multivariate Quadratic problem, proven NP-hard.",
  },
];

const BENCHMARKS = [
  { value: "13,500×", title: "vs Microsoft CKKS", sub: "CNN inference" },
  { value: "84,500×", title: "vs Zama TFHE", sub: "CNN inference" },
  { value: "50 tps", title: "Encrypted LLM", sub: "Consumer hardware" },
  { value: "12+ yrs", title: "Cryptographic research", sub: "Behind the protocol" },
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
    { label: "Per-op cost", values: ["~0.04 μs", "ms – s", "ms – s"] },
    {
      label: "Hardware required",
      values: ["Consumer", "Enterprise GPU", "Enterprise GPU"],
    },
  ],
};

export default function TechnologyPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-meta">Technology · LUT-FHE</div>
          <h1>
            Discover Aura&rsquo;s <em>architecture.</em>
          </h1>
          <p className="page-hero-deck">
            A bootstrap-free scheme over multivariate quadratic structure.
            Encrypted compute at the speed of a Solana block — no enterprise GPU
            required.
          </p>
        </div>
      </section>

      <div className="kpi-row">
        {HERO_KPIS.map((k) => (
          <div key={k.label} className="kpi">
            <div className="kpi-num">{k.value}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </div>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Different mathematics. <em>Unmatched</em> performance.
            </h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  Aura is the only protocol delivering FHE at the speed of a
                  modern blockchain.{" "}
                  <strong>
                    We abandoned the legacy lattice playbook entirely
                  </strong>{" "}
                  to build something no other Web3 project has shipped.
                </p>
              </div>
            </div>
          </div>

          <div className="cmp-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Existing FHE solutions</th>
                  <th className="us">AFHE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label">Verification time</td>
                  <td>10+ seconds</td>
                  <td className="us">~0.1 seconds</td>
                </tr>
                <tr>
                  <td className="label">Bootstrapping</td>
                  <td>Required (slow &amp; expensive)</td>
                  <td className="us">Eliminated entirely</td>
                </tr>
                <tr>
                  <td className="label">Hardware requirements</td>
                  <td>Enterprise GPU / ASIC clusters</td>
                  <td className="us">Consumer-grade devices</td>
                </tr>
                <tr>
                  <td className="label">Integration</td>
                  <td>Chain-level changes required</td>
                  <td className="us">Application-layer — no validator changes</td>
                </tr>
                <tr>
                  <td className="label">Quantum security</td>
                  <td>LWE (believed hard)</td>
                  <td className="us">MQ (proven NP-hard)</td>
                </tr>
                <tr>
                  <td className="label">Trust model</td>
                  <td>Threshold committees</td>
                  <td className="us">True end-to-end encryption</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>Existing FHE cannot run on Solana.</h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  Lattice-based FHE schemes require a refresh process called
                  bootstrapping — <strong>a structural bottleneck.</strong>
                </p>
                <p>
                  Every encrypted operation introduces noise; the ciphertext
                  must be homomorphically decrypted and re-encrypted. The
                  fastest production implementations measure bootstrapping in
                  tens of milliseconds per gate.{" "}
                  <strong>
                    A 400&nbsp;ms Solana block cannot accommodate this.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="m-prose">
            <p className="pull">
              Aura abandons lattice-based FHE entirely. We replace ring-based
              ciphertext arithmetic with precomputed lookup tables — LUT-FHE —
              defined over a Multivariate Quadratic structure.
            </p>
          </div>
        </div>
      </section>

      {/* "Engineered for the speed of finance" benchmarks section hidden
       * for now. BENCHMARKS data above is kept; restore the <section>
       * block here to bring it back. */}

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Four pillars of the <em>LUT-FHE</em> scheme.
            </h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  The architectural commitments that let Aura{" "}
                  <strong>clear a Solana block</strong> while every other
                  scheme is still bootstrapping.
                </p>
              </div>
            </div>
          </div>

          <div className="principle-grid">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="principle">
                <div className="principle-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head-to-head comparison table hidden for now — kept in source for
       * later. Restore the <section> block + COMPARISON data above to bring
       * it back. */}

      <section className="m-section light">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Encrypted compute at <em>speed.</em>
            </h2>
            <div className="right">
              No bootstrapping, no GPU clusters, no trust assumptions — just
              the math, running at Solana block time.
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(10, 10, 11, 0.08)",
              overflow: "hidden",
              background: "rgba(10, 10, 11, 0.03)",
            }}
          >
            <video
              src="/videos/afhe-speed.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>The coprocessor model.</h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  Validators verify cryptographic proofs of correctness —{" "}
                  <strong>they do not run the FHE workload.</strong>{" "}
                  Solana&rsquo;s native throughput stays intact.
                </p>
              </div>
            </div>
          </div>
          <div className="m-prose">
            <p>
              Aura FHE operates via a sophisticated coprocessor model. Solana
              programs built with our SDK do not perform heavy FHE computation
              directly; instead, they submit encrypted requests to the Aura
              coprocessor network, receive a verifiable ciphertext result, and
              proceed with on-chain settlement.
            </p>
            <p>
              Validators only verify the cryptographic proof of correctness, not
              the FHE compute itself. The chain stays fast; the data stays
              sealed.
            </p>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Three lines to <em>total</em> privacy.
            </h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  The AURA SDK exposes three primitives. Drop them into any
                  Solana program;{" "}
                  <strong>
                    ship a confidential version in under an hour.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <pre className="code-pane">
            <code>
              <span className="c-com">{`// Three primitives. One Solana transaction.`}</span>
              {"\n"}
              <span className="c-kw">const</span> encrypted ={" "}
              <span className="c-kw">await</span> aura.
              <span className="c-fn">encrypt</span>(amount);
              {"\n"}
              <span className="c-kw">const</span> result    ={" "}
              <span className="c-kw">await</span> aura.
              <span className="c-fn">compute</span>(swapProgram, encrypted);
              {"\n"}
              <span className="c-kw">const</span> value     ={" "}
              <span className="c-kw">await</span> aura.
              <span className="c-fn">decrypt</span>(result);
            </code>
          </pre>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block-inner">
          <h2>
            Read the <em>full</em> spec.
          </h2>
          <p>
            Protected by nine patents and validated by twelve years of
            cryptographic research. Aura FHE is a true unicorn in the privacy
            landscape.
          </p>
          <div className="row">
            <Link className="m-btn-primary" href="/docs/whitepaper">
              Read the whitepaper <span className="arr">→</span>
            </Link>
            <a
              className="m-btn-outline"
              href="https://github.com/aurafhe/aura-sdk"
              target="_blank"
              rel="noreferrer noopener"
            >
              Browse the SDK <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
