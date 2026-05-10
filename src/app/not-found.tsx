"use client";

import Link from "next/link";
import * as React from "react";

export default function NotFound() {
  const [bubbles, setBubbles] = React.useState<number[]>([]);

  const pop = () => {
    const id = Date.now();
    setBubbles((b) => [...b, id]);
    setTimeout(() => setBubbles((b) => b.filter((x) => x !== id)), 1400);
  };

  return (
    <div className="container-prose py-32 text-center">
      <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
        404
      </p>
      <h1 className="text-[38px] font-semibold tracking-tight">
        水底没有这一页
      </h1>
      <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
        你找的东西游走了。点下面那条小鱼试试，或者回到首页继续逛。
      </p>

      <button
        onClick={pop}
        aria-label="戳一下小鱼"
        className="relative mx-auto mt-10 flex h-16 w-40 cursor-pointer items-center justify-center text-3xl"
      >
        <span className="select-none">🐟</span>
        {bubbles.map((id) => (
          <span
            key={id}
            className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xl"
            style={{
              animation: "dw-bubble 1.4s ease-out forwards"
            }}
          >
            ○
          </span>
        ))}
      </button>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] px-4 py-2 text-[14px] text-[color:var(--color-fg)] transition hover:border-[color:var(--color-fg)]"
        >
          ← 回到首页
        </Link>
      </div>

      <style>{`
        @keyframes dw-bubble {
          0% { transform: translate(-50%, 0) scale(0.6); opacity: 0.8; }
          100% { transform: translate(-50%, -60px) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
