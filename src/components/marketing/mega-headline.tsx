const CHIPS = [
  "Private DEXs",
  "MEV-resistant AMMs",
  "Confidential Lending",
  "Sealed-Bid Governance",
  "Private Bridges",
  "Confidential AI",
  "Encrypted Order Books",
];

export function MegaHeadline() {
  const loop = [...CHIPS, ...CHIPS];
  return (
    <section className="mega">
      <div className="mega-meta">
        <span>
          <b>01</b> &nbsp;/&nbsp; Encrypted compute layer
        </span>
        <span>Aura FHE · Bootstrapping-free · SVM-native</span>
      </div>

      <div className="mega-display">
        <h1>
          <em>Encrypted&nbsp;compute</em>
          <br />
          for capital,
          <br />
          data and <span className="coral">control</span>
        </h1>

        <div className="mega-sub">
          <p>
            Aura runs Solana programs on data while it stays sealed. Fully
            Homomorphic Encryption that fits inside a 400&nbsp;ms block —
            <b>
              {" "}
              no trusted hardware, no threshold committees, no &ldquo;just
              trust us.&rdquo;
            </b>{" "}
            Privacy as a mathematical guarantee, not a policy.
          </p>
          <a
            className="mega-cta"
            href="https://docs.afhe.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read the docs <span className="arr">→</span>
          </a>
        </div>
      </div>

      <div className="chip-rail" aria-hidden="true">
        <div className="chip-track">
          {loop.map((c, i) => (
            <span key={i} className="chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
