import Link from "next/link";
import { AnimatedNumber } from "@/components/animated-number";

type Stat = {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
};

// Source: sandwiched.me. Update STATS and LAST_UPDATED together.
const STATS: Stat[] = [
  { label: "Sandwiches", value: 77522 },
  { label: "Extracted", value: 10652.874, decimals: 3, suffix: " SOL" },
  { label: "Swap Volume", value: 5.04, decimals: 2, suffix: "B SOL" },
  { label: "Cost", value: 234.936, decimals: 3, suffix: " SOL" },
  { label: "Victims", value: 48882 },
  { label: "Attackers", value: 207 },
];

const LAST_UPDATED = "May 22, 2026";

export function Features() {
  return (
    <section className="w-full bg-white py-[56px] md:py-[103px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-[10px]">
        <div className="flex flex-col items-center gap-6 px-6">
          <h2 className="text-h2 max-w-[700px] text-dark">
            The price of transparency
          </h2>
          <p className="text-p16 max-w-[626px] text-center text-dark/70">
            Solana processes more than 65 million transactions daily. Every
            sender, receiver, amount, and smart contract interaction is
            visible. We call this the Invisible Tax. AURA FHE is the cure for
            transparency.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-4 px-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-1 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-1" />
              </span>
              <p className="text-pre-heading-16 text-accent-1">
                Live · Last 30 days
              </p>
            </div>
            <p className="text-p16 max-w-[626px] text-center text-dark/70">
              Real-time MEV extraction on Solana over the past 30 days. Every
              number below is happening to a real wallet right now.
            </p>
          </div>

          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map((s) => (
              <li
                key={s.label}
                className="flex flex-col gap-4 border border-dark/10 bg-white p-6 md:p-8"
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-dark/55">
                  {s.label}
                </p>
                <p className="font-display text-[34px] font-semibold leading-none tracking-tight text-dark md:text-[44px]">
                  <AnimatedNumber
                    value={s.value}
                    decimals={s.decimals ?? 0}
                    suffix={s.suffix}
                  />
                </p>
              </li>
            ))}
          </ul>

          <p className="text-p14 text-dark/55">
            Source:{" "}
            <a
              href="https://sandwiched.me/sandwiches"
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 transition-colors hover:text-accent-1"
            >
              sandwiched.me ↗
            </a>
            {" · Updated "}
            {LAST_UPDATED}
          </p>
        </div>

        <Link
          href="/about"
          className="text-body inline-flex h-10 w-60 items-center justify-center rounded-[10px] bg-[rgb(51,51,51)] text-white transition-colors hover:bg-[rgb(51,51,51)]/85"
        >
          Find out more
        </Link>
      </div>
    </section>
  );
}
