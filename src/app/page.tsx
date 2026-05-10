import Link from "next/link";
import { getAllThoughts, formatDate } from "@/lib/thoughts";
import { products } from "@/content/products";

export default function HomePage() {
  const latestThoughts = getAllThoughts().slice(0, 4);
  const featured = products.slice(0, 3);

  return (
    <div className="container-wide pt-20 sm:pt-28">
      {/* Hero */}
      <section className="max-w-[720px]">
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
          Hi, I&apos;m doublewater
        </p>
        <h1 className="text-[38px] font-semibold leading-[1.15] tracking-tight text-[color:var(--color-fg)] sm:text-[52px]">
          出海，AI 追赶浪潮的人
          <span className="cursor-blink" />
        </h1>
        <p className="mt-6 max-w-[560px] text-[17px] leading-[1.8] text-[color:var(--color-fg-muted)]">
          我在做独立产品，也在把每一次追赶 AI 浪潮的笔记写下来。
          这里有我做过的东西，和路上想明白的事。
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-[14px]">
          <Link
            href="/thoughts"
            className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--color-fg)] px-4 py-2 text-[color:var(--color-bg)] transition hover:bg-[color:var(--color-accent)]"
          >
            读想法 <span aria-hidden>→</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] px-4 py-2 text-[color:var(--color-fg)] transition hover:border-[color:var(--color-fg)]"
          >
            看产品
          </Link>
        </div>
      </section>

      {/* Latest thoughts */}
      <section className="mt-28 sm:mt-36">
        <SectionHeading title="想法 / Thoughts" href="/thoughts" linkLabel="全部" />
        <ul className="mt-6 divide-y divide-[color:var(--color-border)]">
          {latestThoughts.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/thoughts/${t.slug}`}
                className="group grid grid-cols-[90px_1fr] items-baseline gap-5 py-5 sm:grid-cols-[110px_1fr_auto]"
              >
                <span className="font-mono text-[12px] text-[color:var(--color-fg-subtle)]">
                  {formatDate(t.date)}
                </span>
                <span className="text-[16px] text-[color:var(--color-fg)] transition group-hover:text-[color:var(--color-accent)]">
                  {t.title}
                </span>
                <span className="hidden text-[13px] text-[color:var(--color-fg-subtle)] sm:block">
                  {t.tags?.[0] ?? ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured products */}
      <section className="mt-28 sm:mt-36">
        <SectionHeading title="产品 / Products" href="/products" linkLabel="全部" />
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-6 transition hover:border-[color:var(--color-fg)] hover:bg-[color:var(--color-bg-elevated)]"
            >
              <div className="mb-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
                <span>{p.year}</span>
                <span>·</span>
                <span>{p.platform}</span>
                <span>·</span>
                <StatusDot status={p.status} />
                <span>{p.status}</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[color:var(--color-fg)] transition group-hover:text-[color:var(--color-accent)]">
                {p.name}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-fg-muted)]">
                {p.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  title,
  href,
  linkLabel
}: {
  title: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-[color:var(--color-border)] pb-3">
      <h2 className="text-[13px] font-mono uppercase tracking-[0.18em] text-[color:var(--color-fg-muted)]">
        {title}
      </h2>
      <Link
        href={href}
        className="text-[13px] text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-accent)]"
      >
        {linkLabel} →
      </Link>
    </div>
  );
}

function StatusDot({ status }: { status: "live" | "building" | "archived" }) {
  const color =
    status === "live"
      ? "bg-emerald-500"
      : status === "building"
      ? "bg-amber-500"
      : "bg-neutral-400";
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${color}`} />;
}
