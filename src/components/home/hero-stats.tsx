import { AnimatedNumber } from "@/components/animated-number";

const STATS = [
  {
    value: 100,
    prefix: "$",
    suffix: "T+",
    label: "Institutional capital blocked from DeFi",
  },
  {
    value: 100,
    suffix: "×",
    label: "Faster than legacy FHE",
  },
  {
    value: 0.04,
    decimals: 2,
    prefix: "~",
    suffix: "μs",
    label: "Integer addition on encrypted data",
  },
];

export function HeroStats() {
  return (
    <section className="w-full border-t border-b border-white/10 bg-dark py-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-y-8 px-5 md:px-9 md:grid-cols-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="font-display text-[40px] font-semibold leading-none tracking-tight text-dark-text md:text-[48px]">
              <AnimatedNumber
                value={s.value}
                decimals={s.decimals ?? 0}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            </span>
            <span className="text-p14 max-w-[260px] text-muted-text">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
