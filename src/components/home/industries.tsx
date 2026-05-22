const INDUSTRIES = [
  "DEX",
  "Defi",
  "AMMs",
  "Bridges",
  "DAOs",
  "Wallet",
  "Payments",
  "AI",
];

export function Industries() {
  return (
    <section className="w-full bg-white py-[56px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-12 px-5 md:px-9 md:flex-row">
        <div className="relative flex h-[670px] max-w-[500px] flex-1 items-center justify-center overflow-hidden border border-border-token bg-dark">
          <div className="flex flex-wrap items-center justify-center gap-3 p-6 md:p-9">
            {INDUSTRIES.map((label) => (
              <span
                key={label}
                className="flex items-center justify-center gap-2.5 border border-border-token bg-elevated px-5 py-[17px] text-body text-dark-text"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start gap-9">
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 max-w-[700px] text-left text-dark">
              What You Can Build on AURA FHE
            </h2>
            <p className="text-p16 max-w-[626px] text-dark/70">
              AURA FHE unlocks application categories that are impossible on a
              transparent chain. From sealed-bid prediction markets to
              confidential AI inference, here is what becomes possible when
              computation is truly private.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
