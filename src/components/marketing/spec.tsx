export function Spec() {
  return (
    <section className="spec" style={{ gridTemplateColumns: "1fr", gap: 0 }}>
      <div>
        <h2>
          Aura specializes in <em>fully homomorphic encryption</em>, encrypted
          execution, and protocol-level privacy for financial systems.
        </h2>
        <div className="spec-deck">
          <p>
            Aura is the encrypted compute layer that ends the Invisible Tax.
            Our bootstrapping-free FHE construction runs ~500× faster than
            legacy schemes — fast enough to keep pace with the fastest chain on
            Earth, without ever decrypting what it touches.
          </p>
        </div>
        <div className="spec-cta-row">
          <a className="spec-cta" href="/technology">
            Read the whitepaper <span className="arr">→</span>
          </a>
          <a className="spec-cta" href="/contact">
            Talk to the team <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
