"use client";

import { useEffect, useRef, useState } from "react";

type Component = {
  title: string;
  body: string;
};

const COMPONENTS: Component[] = [
  {
    title: "The SDK",
    body: "Three-line integration that lets any developer add encryption to their app.",
  },
  {
    title: "The AURA Token",
    body: "The unit of account for every encrypted computation on the network.",
  },
  {
    title: "The Aura Wallet",
    body: "The consumer surface for encrypted balances, swaps, and transfers.",
  },
  {
    title: "The Coprocessor & Mining Protocol",
    body: "The distributed compute substrate executing the FHE work.",
  },
  {
    title: "The Global Ecosystem",
    body: "Extension into real-world enterprise compute and confidential AI inference.",
  },
];

export function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({
        left: card.offsetLeft - el.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((c, i) => {
        const cardCenter = c.offsetLeft - el.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < closestDist) {
          closest = i;
          closestDist = dist;
        }
      });
      setActive(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(COMPONENTS.length - 1, active + 1));

  return (
    <section className="w-full bg-white py-[56px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-12 px-5">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-h2 max-w-[700px] text-center text-dark">
            Encryption at Solana speed
          </h2>
          <p className="text-p16 max-w-[700px] text-center text-dark/70">
            The challenge with existing FHE is speed. Traditional FHE is too
            slow to compete when the target is Solana&rsquo;s 400ms block time.
            Aura FHE is the encrypted compute layer for Solana, delivering
            institutional-grade privacy with sub-microsecond performance. Your
            transaction data is encrypted before it ever touches the chain
            protecting both what you&rsquo;re doing and how you&rsquo;re doing
            it. AURA FHE is one protocol expressed across five aligned
            components:
          </p>
        </div>

        <div
          ref={scrollRef}
          className="-mx-5 flex w-screen snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:w-full md:grid-cols-5 md:gap-5 md:overflow-visible md:px-0 md:snap-none md:pb-0"
        >
          {COMPONENTS.map((c) => (
            <article
              key={c.title}
              className="flex w-[calc(100vw-40px)] shrink-0 snap-center flex-col gap-4 border border-border-token bg-elevated p-5 sm:w-[calc(60vw-40px)] md:w-auto md:shrink md:snap-align-none md:p-7"
            >
              <h3 className="text-h3-24 text-dark-text">{c.title}</h3>
              <p className="text-p16 text-muted-text">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="flex items-center gap-6 md:hidden">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous component"
            disabled={active === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-token text-dark transition-opacity hover:bg-elevated disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="flex items-center gap-2">
            {COMPONENTS.map((c, i) => (
              <button
                key={c.title}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to ${c.title}`}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-8 bg-dark" : "w-2 bg-dark/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next component"
            disabled={active === COMPONENTS.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-token text-dark transition-opacity hover:bg-elevated disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
