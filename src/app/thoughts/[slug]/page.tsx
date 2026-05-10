import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllThoughts, getThought, formatDate } from "@/lib/thoughts";
import { ReadingProgress } from "@/components/reading-progress";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllThoughts().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const t = getThought(slug);
  if (!t) return {};
  return {
    title: t.title,
    description: t.summary,
    openGraph: {
      title: t.title,
      description: t.summary,
      type: "article",
      publishedTime: t.date
    }
  };
}

export default async function ThoughtPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const t = getThought(slug);
  if (!t) notFound();

  const all = getAllThoughts();
  const idx = all.findIndex((x) => x.slug === slug);
  const prev = idx < all.length - 1 ? all[idx + 1] : null;
  const next = idx > 0 ? all[idx - 1] : null;

  return (
    <>
      <ReadingProgress />
      <article className="container-prose py-20">
        <nav className="mb-10 text-[13px] text-[color:var(--color-fg-muted)]">
          <Link href="/thoughts" className="link-underline hover:text-[color:var(--color-fg)]">
            ← 返回想法
          </Link>
        </nav>

        <header className="mb-10">
          <p className="mb-3 font-mono text-[12px] tracking-wider text-[color:var(--color-fg-subtle)]">
            {formatDate(t.date)}
            {t.tags && t.tags.length > 0 && (
              <>
                <span className="mx-2">·</span>
                {t.tags.join(" / ")}
              </>
            )}
          </p>
          <h1 className="text-[34px] font-semibold leading-tight tracking-tight">
            {t.title}
          </h1>
          {t.summary && (
            <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--color-fg-muted)]">
              {t.summary}
            </p>
          )}
        </header>

        <div className="prose-dw">
          <MDXRemote
            source={t.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug]
              }
            }}
          />
        </div>

        <hr className="my-14 border-[color:var(--color-border)]" />

        <nav className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/thoughts/${prev.slug}`}
              className="group rounded-lg border border-[color:var(--color-border)] p-4 transition hover:border-[color:var(--color-fg)]"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
                ← 上一篇
              </div>
              <div className="mt-1.5 text-[14px] text-[color:var(--color-fg)] group-hover:text-[color:var(--color-accent)]">
                {prev.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/thoughts/${next.slug}`}
              className="group rounded-lg border border-[color:var(--color-border)] p-4 text-right transition hover:border-[color:var(--color-fg)]"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
                下一篇 →
              </div>
              <div className="mt-1.5 text-[14px] text-[color:var(--color-fg)] group-hover:text-[color:var(--color-accent)]">
                {next.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </>
  );
}
