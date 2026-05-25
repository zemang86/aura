import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUT-FHE Technology | Bootstrap-Free Encryption | Aura FHE",
  description:
    "Discover Aura's LUT-FHE architecture. Defeat the bootstrapping bottleneck with 0.04μs integer addition and post-quantum security on the Solana blockchain.",
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
              Aura is the only protocol delivering FHE at the speed of a modern
              blockchain. We abandoned the legacy lattice playbook entirely to
              build something no other Web3 project has shipped.
            </div>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>Existing FHE cannot run on Solana.</h2>
            <div className="right">
              <p>
                Lattice-based FHE schemes require a refresh process called
                bootstrapping — a structural bottleneck.
              </p>
              <p>
                Every encrypted operation introduces noise; the ciphertext must
                be homomorphically decrypted and re-encrypted. The fastest
                production implementations measure bootstrapping in tens of
                milliseconds per gate. A 400 ms Solana block cannot accommodate
                this.
              </p>
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

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Engineered for the <em>speed</em> of finance.
            </h2>
            <div className="right">
              Numbers that matter, measured against the production state of the
              art.
            </div>
          </div>

          <div className="principle-grid">
            {BENCHMARKS.map((b) => (
              <div key={b.title} className="principle">
                <div className="principle-num">{b.value}</div>
                <h3>{b.title}</h3>
                <p>{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Four pillars of the <em>LUT-FHE</em> scheme.
            </h2>
            <div className="right">
              The architectural commitments that let Aura clear a Solana block
              while every other scheme is still bootstrapping.
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

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Head-to-head against the <em>field.</em>
            </h2>
            <div className="right">
              The honest comparison. Numbers from each project&rsquo;s public
              documentation, normalized to the same hardware envelope.
            </div>
          </div>

          <div className="cmp-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th />
                  {COMPARISON.cols.map((c, i) => (
                    <th key={c} className={i === 0 ? "us" : ""}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((r) => (
                  <tr key={r.label}>
                    <td className="label">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td key={i} className={i === 0 ? "us" : ""}>
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

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>The coprocessor model.</h2>
            <div className="right">
              Validators verify cryptographic proofs of correctness — they do
              not run the FHE workload. Solana&rsquo;s native throughput stays
              intact.
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
              The AURA SDK exposes three primitives. Drop them into any Solana
              program; ship a confidential version in under an hour.
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
            <a
              className="m-btn-primary"
              href="https://docs.afhe.io/whitepaper/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Read the whitepaper <span className="arr">→</span>
            </a>
            <a
              className="m-btn-outline"
              href="https://github.com/aurafhe/shield-sdk/tree/shield_sdk"
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
