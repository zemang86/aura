const CAPS: Array<[string, string, string]> = [
  [
    "01",
    "Bootstrapping-free",
    "The slowest step in classical FHE — noise reset — designed out of the protocol entirely.",
  ],
  [
    "02",
    "~500× faster",
    "Sub-second encrypted operations. Fits inside Solana's 400ms block target.",
  ],
  [
    "03",
    "SVM-native",
    "Runs as a Solana sBPF extension. No L2, no sidechain, no bridge.",
  ],
  [
    "04",
    "No trusted hardware",
    "No SGX, no TEE, no enclave. The math is the guarantee.",
  ],
  [
    "05",
    "No threshold committees",
    "No MPC quorum. No multisig you have to believe in. Pure cryptography.",
  ],
  [
    "06",
    "Three-line SDK",
    "Drop encryption into any Solana app without rewriting it. JavaScript, Rust, and CLI.",
  ],
  [
    "07",
    "Verifiable by design",
    "Every encrypted computation produces a succinct correctness proof, validator-checkable.",
  ],
  [
    "08",
    "Open construction",
    "Whitepaper, formal proofs, reference implementation. Peer review > press release.",
  ],
];

export function Capabilities() {
  return (
    <section className="caps">
      <div className="caps-head">
        <h2>
          What the protocol <em>actually does</em>
        </h2>
      </div>
      <div className="caps-grid">
        {CAPS.map(([n, t, b]) => (
          <div key={n} className="cap">
            <div className="cap-num">{n}</div>
            <h3>{t}</h3>
            <p>{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
