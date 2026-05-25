type Wave = {
  n: number;
  period: string;
  title: string;
  body: string;
  now?: boolean;
};

const WAVES: Wave[] = [
  {
    n: 1,
    period: "Through Q1 2026",
    title: "Foundation locked",
    body: "AURA SDK v5 in production. LUT-FHE primitive validated against internal benchmark suite. Nine patents filed; technical foundation established. Coprocessor architecture operational. AuraPoly live — sealed-bid prediction market clearing real flow on AURA's encrypted compute layer. FHE AI inference operational for privacy-critical workloads. Mochi Labs team scaled to 20+ engineers.",
  },
  {
    n: 2,
    period: "Q2 2026",
    title: "Developer surface",
    body: "SDK v5 documentation expansion, tutorials, and Aura Playground browser IDE. Aura Wallet launches in beta with encrypted balances, swaps, and social transfers. $2M ecosystem grants program opens — 20+ grants of $50–100K to teams shipping on AURA SDK. First Solana DEX integrations announced (target: 3 partner LOIs signed by end of Q2). Pre-Series A first close at $10M.",
    now: true,
  },
  {
    n: 3,
    period: "Q3 2026",
    title: "Token launch and anchor integrations",
    body: "AURA Token Generation Event coordinated with AuraPoly token integration and broader dApp launches. 3+ mainnet dApps live using AURA SDK. First confidential AI inference partnerships announced. Independent benchmark verification published. Pre-Series A second close, completing $25M round.",
  },
  {
    n: 4,
    period: "Q4 2026",
    title: "Coprocessor network at scale",
    body: "Mining protocol public launch with 1,000+ pre-registered miners (advance to Q3 if integration readiness allows). PoEW genesis emissions begin against real workload mix. Coprocessor network handling 10K+ encrypted operations per day across live dApps. 5+ DEX integrations live; encrypted volume routed through AURA exceeds $50M cumulative. Series A conversations begin from a position of demonstrated network usage.",
  },
  {
    n: 5,
    period: "Q1 2027",
    title: "Chain-agnostic expansion",
    body: "Cross-chain integration goes live on first additional chain (Aptos or Monad — selection based on architectural fit). AURA SDK ports complete; coprocessor network serves multiple chains. Series A close target.",
  },
  {
    n: 6,
    period: "Q2 2027 onward",
    title: "Beyond Web3",
    body: "First confidential AI inference workloads in production. Institutional pilot programs for RWA tokenization. Enterprise FHE-as-a-service commercial launches. Global ecosystem narrative established for $1B+ valuation comp set.",
  },
];

export function Roadmap() {
  return (
    <section className="m-roadmap">
      <div className="roadmap-head">
        <h2>Roadmap</h2>
        <div className="hud-meta-line">
          <b>Wave-based</b> · each wave creates demand for the next.
          Every milestone is a demoable, announceable event.
        </div>
      </div>
      <div className="roadmap-list">
        {WAVES.map((w) => (
          <div key={w.n} className="rm-row">
            <div className="rm-year">
              Wave {w.n} &nbsp;
              <span style={{ color: "var(--bone-faint)" }}>·</span>
              &nbsp; {w.period}
              {w.now && (
                <>
                  &nbsp;<span className="now">Now</span>
                </>
              )}
            </div>
            <div className="rm-content">
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
