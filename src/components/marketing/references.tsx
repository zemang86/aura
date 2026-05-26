import Link from "next/link";

export function References() {
  return (
    <section className="refs">
      <div className="refs-head">
        <h2>
          Reference <em>materials</em>
        </h2>
      </div>
      <div className="refs-grid">
        <div className="ref">
          <div className="ref-tag">Whitepaper</div>
          <h3>
            Bootstrapping-Free Fully Homomorphic Encryption for Programmable
            Chains <em>— 38pp</em>
          </h3>
          <p>
            The cryptographic construction, security proofs, and benchmark
            results that the protocol stands on. Reading prerequisite:
            undergraduate lattice cryptography.
          </p>
          <Link className="ref-link" href="/docs/whitepaper">
            Read it <span className="arr">→</span>
          </Link>
        </div>
        <div className="ref">
          <div className="ref-tag">Reference implementation</div>
          <h3>
            aura-protocol <em>— Rust + sBPF</em>
          </h3>
          <p>
            The full open-source runtime, SDK, and reference DEX. Apache 2.0.
            Audited by Trail of Bits, ongoing peer review.
          </p>
          <a
            className="ref-link"
            href="https://github.com/aurafhe/aura-sdk"
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit GitHub <span className="arr">→</span>
          </a>
        </div>
        <div className="ref">
          <div className="ref-tag">Docs &amp; cookbook</div>
          <h3>
            Documentation <em>— quickstart in 3 minutes</em>
          </h3>
          <p>
            From{" "}
            <code
              style={{
                color: "var(--bone)",
                fontFamily: "var(--m-mono)",
                fontSize: ".86em",
              }}
            >
              npm install @aura/sdk
            </code>{" "}
            to your first encrypted transfer. Recipes for every primitive on
            the page above.
          </p>
          <Link className="ref-link" href="/docs">
            Read the docs <span className="arr">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
