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

        <Link href="/about" className="m-btn-primary">
          Find out more <span className="arr">→</span>
        </Link>

        <div className="flex w-full flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-6 px-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-1 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-1" />
              </span>
              <p className="text-pre-heading-16 text-accent-1">
                Live · Last 30 days
              </p>
            </div>
            <h3 className="text-h2 max-w-[800px] text-dark">
              The Invisible Tax, in real numbers
            </h3>
            <p className="text-p16 max-w-[626px] text-center text-dark/70">
              Real-time MEV extraction on Solana over the past 30 days. Every
              number below is happening to a real wallet right now.
            </p>
          </div>

          <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {STATS.map((s) => (
              <li
                key={s.label}
                className="flex flex-col gap-2 border border-dark/10 bg-white p-4 sm:gap-4 sm:p-6 md:p-8"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-dark/55 sm:text-[12px]">
                  {s.label}
                </p>
                <p className="font-display text-[22px] font-semibold leading-none tracking-tight text-dark sm:text-[34px] md:text-[44px]">
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
      </div>
    </section>
  );
}
