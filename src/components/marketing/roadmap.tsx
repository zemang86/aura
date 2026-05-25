const ROWS = [
  {
    year: "2024",
    q: "Q1",
    title: "Bootstrapping-free FHE construction published",
    body: "Three years of research crystallizes into a new homomorphic scheme that removes the noise-reset bottleneck entirely. Peer review in progress; preprint on the Cryptology ePrint Archive.",
  },
  {
    year: "2024",
    q: "Q4",
    title: "SVM-native runtime — devnet",
    body: "Integrated as a Solana sBPF extension. First encrypted-transfer transaction lands in <1s.",
  },
  {
    year: "2025",
    q: "Q2",
    title: "Reference DEX & AMM",
    body: "Two open-source reference implementations ship. Both audited by Trail of Bits.",
  },
  {
    year: "2025",
    q: "Q4",
    title: "Mainnet beta, partner programs live",
    body: "Aura is mainnet beta with three confidential-finance partners deploying initial flows.",
    now: true,
  },
  {
    year: "2026",
    q: "Q2",
    title: "General availability & permissionless SDK",
    body: "Anyone can deploy encrypted Solana programs. Three-line integration.",
  },
];

export function Roadmap() {
  return (
    <section className="m-roadmap">
      <div className="roadmap-head">
        <h2>Roadmap</h2>
        <div className="hud-meta-line">
          <b>From research paper to production protocol</b>
        </div>
      </div>
      <div className="roadmap-list">
        {ROWS.map((r, i) => (
          <div key={i} className="rm-row">
            <div className="rm-year">
              {r.year} &nbsp;<span style={{ color: "var(--bone-faint)" }}>·</span>
              &nbsp; {r.q}
              {r.now && (
                <>
                  &nbsp;<span className="now">Now</span>
                </>
              )}
            </div>
            <div className="rm-content">
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
