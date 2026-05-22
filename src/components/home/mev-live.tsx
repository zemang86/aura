import { AnimatedNumber } from "@/components/animated-number";

type Stat = {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
};

// Update STATS and LAST_UPDATED together when refreshing from sandwiched.me.
const STATS: Stat[] = [
  { label: "Sandwiches", value: 77522 },
  { label: "Extracted", value: 10652.874, decimals: 3, suffix: " SOL" },
  { label: "Swap Volume", value: 5.04, decimals: 2, suffix: "B SOL" },
  { label: "Cost", value: 234.936, decimals: 3, suffix: " SOL" },
  { label: "Victims", value: 48882 },
  { label: "Attackers", value: 207 },
];

const LAST_UPDATED = "May 22, 2026";

export function MevLive() {
  return (
    <section className="w-full bg-dark py-[56px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-12 px-5 md:px-9">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-1 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-1" />
            </span>
            <p className="text-pre-heading-16 text-accent-1">
              Live · Last 30 days
            </p>
          </div>
          <h2 className="text-h2 max-w-[800px] text-center text-dark-text">
            The Invisible Tax, in real numbers
          </h2>
          <p className="text-p16 max-w-[626px] text-center text-muted-text">
            Real-time MEV extraction on Solana over the past 30 days. Every
            number below is happening to a real wallet right now.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="flex flex-col gap-4 border border-white/10 bg-elevated p-6 md:p-8"
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-text">
                {s.label}
              </p>
              <p className="font-display text-[34px] font-semibold leading-none tracking-tight text-dark-text md:text-[44px]">
                <AnimatedNumber
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix}
                />
              </p>
            </li>
          ))}
        </ul>

        <p className="text-p14 text-muted-text">
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
    </section>
  );
}
