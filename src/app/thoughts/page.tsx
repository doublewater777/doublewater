import Link from "next/link";
import type { Metadata } from "next";
import { getAllThoughts, groupByYear, formatDate } from "@/lib/thoughts";

export const metadata: Metadata = {
  title: "想法",
  description: "AI 浪潮里一个追赶者的笔记。"
};

export default function ThoughtsPage() {
  const all = getAllThoughts();
  const grouped = groupByYear(all);
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="container-prose py-20">
      <header className="mb-14">
        <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
          Thoughts
        </p>
        <h1 className="text-[34px] font-semibold leading-tight tracking-tight">
          想法档案
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
          出海路上、AI 浪潮里的笔记。不定期更新，写完才算数。
        </p>
      </header>

      <div className="space-y-14">
        {years.map((year) => (
          <section key={year}>
            <h2 className="mb-4 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
              {year}
            </h2>
            <ul className="divide-y divide-[color:var(--color-border)]">
              {grouped[year].map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/thoughts/${t.slug}`}
                    className="group grid grid-cols-[90px_1fr] items-baseline gap-5 py-4"
                  >
                    <span className="font-mono text-[12px] text-[color:var(--color-fg-subtle)]">
                      {formatDate(t.date)}
                    </span>
                    <div>
                      <h3 className="text-[16px] text-[color:var(--color-fg)] transition group-hover:text-[color:var(--color-accent)]">
                        {t.title}
                      </h3>
                      {t.summary && (
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[color:var(--color-fg-muted)]">
                          {t.summary}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
