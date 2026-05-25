import Image from "next/image";
import { CipherStream } from "@/components/marketing/cipher-stream";

const HERO_BG =
  "https://framerusercontent.com/images/8JwCpYZqtAGXFuwcoQydgn88ctQ.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden bg-dark">
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        sizes="(min-width: 1400px) 1400px, 100vw"
        className="object-cover"
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/80" />

      {/* Cipher stream — atmospheric matrix of live encrypted ops behind the title */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.35,
        }}
      >
        <CipherStream rows={16} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 px-5 md:px-9 pb-20">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-h1 max-w-[900px] text-dark-text">
            The Encrypted Compute Layer for Solana.
          </h1>
          <p className="text-p16 max-w-[626px] text-center text-muted-text">
            Solana is the world&rsquo;s most performant blockchain, but its
            transparency is a structural ceiling. Aura FHE brings high-speed,
            confidential compute to the Solana Virtual Machine. Private by
            default. Verifiable by design.
          </p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <a
            className="m-btn-primary"
            href="https://docs.afhe.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read the docs <span className="arr">→</span>
          </a>
          <a
            className="m-btn-outline"
            style={{
              padding: "18px 28px",
              fontSize: 13,
              letterSpacing: "0.16em",
            }}
            href="https://github.com/aurafhe/shield-sdk/tree/shield_sdk"
            target="_blank"
            rel="noreferrer noopener"
          >
            Start building <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
