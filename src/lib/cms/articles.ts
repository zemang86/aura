import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  date: string;
  image: string | null;
  html: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

async function readArticleFile(filename: string): Promise<Article> {
  const slug = filename.replace(/\.md$/, "");
  const raw = await fs.readFile(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    image: data.image ? String(data.image) : null,
    html: content.trim(),
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const files = await fs.readdir(ARTICLES_DIR);
  const articles = await Promise.all(
    files.filter((f) => f.endsWith(".md")).map(readArticleFile),
  );
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    return await readArticleFile(`${slug}.md`);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const files = await fs.readdir(ARTICLES_DIR);
  return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}
