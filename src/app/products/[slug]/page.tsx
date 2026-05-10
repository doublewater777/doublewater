import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/content/products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline
  };
}

export default async function ProductDetail(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <article className="container-prose py-20">
      <nav className="mb-10 text-[13px] text-[color:var(--color-fg-muted)]">
        <Link href="/products" className="link-underline hover:text-[color:var(--color-fg)]">
          ← 返回产品列表
        </Link>
      </nav>

      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-fg-subtle)]">
          <span>{product.year}</span>
          <span>·</span>
          <span>{product.platform}</span>
          <span>·</span>
          <span
            className={
              "inline-block h-1.5 w-1.5 rounded-full " +
              (product.status === "live"
                ? "bg-emerald-500"
                : product.status === "building"
                ? "bg-amber-500"
                : "bg-neutral-400")
            }
          />
          <span>{product.status}</span>
        </div>

        <h1 className="text-[36px] font-semibold leading-tight tracking-tight">
          {product.name}
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-[color:var(--color-fg-muted)]">
          {product.tagline}
        </p>
      </header>

      <div className="prose-dw">
        <p>{product.description}</p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-fg)] px-5 py-2.5 text-[14px] text-[color:var(--color-bg)] transition hover:bg-[color:var(--color-accent)]"
        >
          访问产品 <span aria-hidden>↗</span>
        </a>
      </div>
    </article>
  );
}
