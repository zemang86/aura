import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/cms/articles";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const metadata = {
  title: "Blog · AFHE",
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <main className="flex-1 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 text-center space-y-4">
          <p className="text-pre-heading-16 text-accent-1">/blog</p>
          <h1 className="text-h2 text-dark-text">Engineering notes</h1>
          <p className="text-p16 text-muted-text max-w-2xl mx-auto">
            Deep dives on fully homomorphic encryption, private DeFi, and the
            engineering behind Aura.
          </p>
        </header>

        <ul className="grid gap-10 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className="group block space-y-4"
              >
                {article.image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--color-elevated)] ring-1 ring-[var(--color-border-token)]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <p className="text-p14 text-muted-text">
                    {article.date
                      ? dateFormatter.format(new Date(article.date))
                      : ""}
                  </p>
                  <h2 className="text-h3-24 text-dark-text group-hover:text-accent-1 transition-colors">
                    {article.title}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
