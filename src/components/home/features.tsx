import Image from "next/image";
import Link from "next/link";

type FeatureCard = {
  bg?: string;
  image: string;
  imageAspect: number;
  title: string;
  body: string;
};

const CARDS: FeatureCard[] = [
  {
    bg: "https://framerusercontent.com/images/FBW3KOe0hdGanbYIjPQoCW6Pz8.png",
    image: "https://framerusercontent.com/images/UQWq3tALDzhY4QFwbeexfUiooI.png",
    imageAspect: 1.171,
    title: "Billions lost to MEV on Solana",
    body: "Every transaction you submit is visible to the entire world. Bots reorder, front-run, and extract value from your trades before they even settle. Your alpha is their profit.",
  },
  {
    image: "https://framerusercontent.com/images/YqAWY7OOpp4wsNSKKSZy4mj6zY.png",
    imageAspect: 1.794,
    title: "Your entire history is searchable by anyone",
    body: "Connect your wallet once and your entire financial life is exposed. Net worth, holdings, every transaction are permanently indexed and findable by everyone.",
  },
];

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

        <Link
          href="/about"
          className="text-body inline-flex h-10 w-60 items-center justify-center rounded-[10px] bg-[rgb(51,51,51)] text-white transition-colors hover:bg-[rgb(51,51,51)]/85"
        >
          Find out more
        </Link>

        <div className="grid w-full grid-cols-1 gap-2.5 md:grid-cols-2">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="relative flex flex-col gap-6 overflow-hidden bg-elevated p-6 md:p-9"
            >
              {card.bg && (
                <Image
                  src={card.bg}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-60"
                  unoptimized
                />
              )}
              <div className="relative z-10 flex flex-1 flex-col gap-6">
                <div className="relative w-full overflow-hidden rounded">
                  <Image
                    src={card.image}
                    alt=""
                    width={500}
                    height={Math.round(500 / card.imageAspect)}
                    className="h-auto w-full"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-h3-24 text-dark-text">{card.title}</h3>
                  <p className="text-p16 text-muted-text">{card.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
