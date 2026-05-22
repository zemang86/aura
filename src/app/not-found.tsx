import Image from "next/image";
import { LightButton } from "@/components/light-button";

const HERO_BG =
  "https://framerusercontent.com/images/8JwCpYZqtAGXFuwcoQydgn88ctQ.jpg";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-dark">
      <Image
        src={HERO_BG}
        alt=""
        fill
        sizes="(min-width: 1400px) 1400px, 100vw"
        className="object-cover opacity-70"
        unoptimized
      />
      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-9 px-9 py-24">
        <div className="flex flex-col items-center gap-5">
          <p className="text-pre-heading-20 text-accent-1">Oops!</p>
          <h1 className="text-h1-404 max-w-[900px] text-dark-text">404</h1>
          <p className="text-p16 max-w-[360px] text-center text-muted-text">
            The page you&rsquo;re looking for no longer exists. Let us take you
            back.
          </p>
        </div>
        <LightButton href="/" variant="main">
          Go to homepage
        </LightButton>
      </div>
    </section>
  );
}
