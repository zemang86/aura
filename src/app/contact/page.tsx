import Image from "next/image";

const HERO_BG =
  "https://framerusercontent.com/images/8JwCpYZqtAGXFuwcoQydgn88ctQ.jpg";

const CHANNELS: Array<{ label: string; href: string }> = [
  { label: "Discord", href: "https://discord.gg/QJEQ8BUuRP" },
  { label: "X (Twitter)", href: "https://x.com/AfheLabs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/aura-fhe/" },
];

export default function ContactPage() {
  return (
    <section className="relative w-full overflow-hidden bg-dark">
      <Image
        src={HERO_BG}
        alt=""
        fill
        sizes="(min-width: 1400px) 1400px, 100vw"
        className="object-cover opacity-70"
        unoptimized
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-start gap-12 px-9 pb-20 pt-[180px]">
        <div className="flex flex-col gap-5">
          <p className="text-pre-heading-16 text-accent-1">COMMUNITY</p>
          <h1 className="text-h1 max-w-[900px] text-left text-dark-text">
            Join the AURA Community
          </h1>
          <p className="text-p16 max-w-[480px] text-muted-text">
            Connect with us on socials, jump into Discord, or reach out for
            partnerships.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-p14 inline-flex items-center gap-2 text-dark-text transition-colors hover:text-accent-1"
              >
                {c.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
