import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "产品",
  description: "doublewater 做过和正在做的产品。"
};

export default function ProductsPage() {
  return (
    <div className="container-wide py-20">
      <header className="mb-12 max-w-[640px]">
        <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
          Products
        </p>
        <h1 className="text-[34px] font-semibold leading-tight tracking-tight">
          做过的东西
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
          这里是我亲手做到上线的产品——不追求多，追求每一个都敢署上自己的名字。
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="group rounded-xl border border-[color:var(--color-border)] p-6 transition hover:border-[color:var(--color-fg)] hover:bg-[color:var(--color-bg-elevated)]"
          >
            <div className="mb-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
              <span>{p.year}</span>
              <span>·</span>
              <span>{p.platform}</span>
            </div>
            <h2 className="text-[20px] font-semibold text-[color:var(--color-fg)] transition group-hover:text-[color:var(--color-accent)]">
              {p.name}
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-fg-muted)]">
              {p.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3 text-[12px] text-[color:var(--color-fg-subtle)]">
              <span className="inline-flex items-center gap-1.5">
                <span
                  className={
                    "inline-block h-1.5 w-1.5 rounded-full " +
                    (p.status === "live"
                      ? "bg-emerald-500"
                      : p.status === "building"
                      ? "bg-amber-500"
                      : "bg-neutral-400")
                  }
                />
                {p.status}
              </span>
              <span>→ 详情</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
