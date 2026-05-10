import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Thought = {
  slug: string;
  title: string;
  date: string; // ISO date
  summary: string;
  tags?: string[];
  content: string;
};

const THOUGHTS_DIR = path.join(process.cwd(), "src/content/thoughts");

export function getAllThoughts(): Thought[] {
  if (!fs.existsSync(THOUGHTS_DIR)) return [];
  const files = fs.readdirSync(THOUGHTS_DIR).filter((f) => f.endsWith(".mdx"));
  const thoughts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(THOUGHTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "1970-01-01",
      summary: data.summary ?? "",
      tags: data.tags ?? [],
      content
    } satisfies Thought;
  });
  return thoughts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getThought(slug: string): Thought | null {
  const all = getAllThoughts();
  return all.find((t) => t.slug === slug) ?? null;
}

export function groupByYear(thoughts: Thought[]): Record<string, Thought[]> {
  return thoughts.reduce<Record<string, Thought[]>>((acc, t) => {
    const year = t.date.slice(0, 4);
    (acc[year] ??= []).push(t);
    return acc;
  }, {});
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}
