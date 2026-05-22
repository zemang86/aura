import Image from "next/image";

const DEFAULT_BG =
  "https://framerusercontent.com/images/8JwCpYZqtAGXFuwcoQydgn88ctQ.jpg";

type HeroBannerProps = {
  title: string;
  preHeading?: string;
  description?: string;
  bg?: string;
  minHeight?: string;
};

export function HeroBanner({
  title,
  preHeading,
  description,
  bg = DEFAULT_BG,
  minHeight = "74vh",
}: HeroBannerProps) {
  return (
    <section
      className="relative flex w-full items-end justify-center overflow-hidden bg-dark"
      style={{ minHeight }}
    >
      <Image
        src={bg}
        alt=""
        fill
        priority
        sizes="(min-width: 1400px) 1400px, 100vw"
        className="object-cover"
        unoptimized
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-5 px-9 pb-20 pt-[120px]">
        {preHeading && (
          <p className="text-pre-heading-16 text-accent-1">{preHeading}</p>
        )}
        <h1 className="text-h1 max-w-[900px] text-center text-dark-text">
          {title}
        </h1>
        {description && (
          <p className="text-p16 max-w-[560px] text-center text-muted-text">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
