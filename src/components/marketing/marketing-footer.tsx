import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="m-foot">
      <div className="foot-inner">
      <h2 className="foot-display">
        The Glass House Era is <em>over.</em>
        <br />
        Join the Encrypted Everything Movement.
      </h2>

      <div className="foot-row">
        <div className="foot-col">
          <h4>For builders</h4>
          <ul>
            <li>
              <Link href="/docs">
                Documentation <span className="arr">→</span>
              </Link>
            </li>
            <li>
              <Link href="/docs/whitepaper">
                Whitepaper <span className="arr">→</span>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/aurafhe/aura-sdk"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub <span className="arr">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/afhe"
                target="_blank"
                rel="noreferrer noopener"
              >
                Discord <span className="arr">→</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>For partners</h4>
          <ul>
            <li>
              <a href="mailto:hello@afhe.io">
                hello@afhe.io <span className="arr">→</span>
              </a>
            </li>
            <li>
              <a href="/contact">
                Partner program <span className="arr">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/AfheLabs"
                target="_blank"
                rel="noreferrer noopener"
              >
                X / @AfheLabs <span className="arr">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/aura-fhe/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn <span className="arr">→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot-bottom">
        <span className="legal">
          <b>Aura FHE · 2026</b> &nbsp; All rights reserved. Not available in
          the People&apos;s Republic of China. Nothing on this site constitutes
          financial advice or an offer of securities.
        </span>
        <span>
          <b>Mainnet</b> beta · v 0.9
        </span>
      </div>
      </div>
    </footer>
  );
}
