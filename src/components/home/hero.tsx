import Image from "next/image";
import { LightButton } from "@/components/light-button";

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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/40" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 px-9 pb-20">
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
        <div className="flex flex-wrap items-center justify-center gap-5">
          <LightButton
            href="https://docs.afhe.io"
            variant="secondary"
            external
          >
            Read the docs
          </LightButton>
          <LightButton
            href="https://github.com/aurafhe/shield-sdk/tree/shield_sdk"
            variant="secondary"
            external
          >
            Start Building
          </LightButton>
        </div>
      </div>
    </section>
  );
}
