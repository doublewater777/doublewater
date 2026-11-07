import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { getResume, type Block } from "@/lib/resume";

export const metadata: Metadata = {
  title: "简历",
  description: "潘洋：全栈工程师 / AI 应用工程师，独立开发海外 AI 视频站和 Apple 生态 App。"
};

// **加粗** → <b>，其余原样输出
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.+?\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <b key={i} className="font-semibold text-[color:var(--color-fg)]">
            {part.slice(2, -2)}
          </b>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

function contactNode(c: string): ReactNode {
  if (c.includes("@")) return <span className="select-all">{c}</span>;
  if (/^[\w.-]+\.\w+(\/[\w.-]+)?$/.test(c))
    return (
      <a href={`https://${c}`} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-accent)]">
        {c}
      </a>
    );
  return c;
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "lead":
      return (
        <p className="text-[14px] text-[color:var(--color-fg-muted)]">
          <Inline text={block.text} />
        </p>
      );
    case "job":
      return (
        <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 first:mt-0">
          <h3 className="text-[19px] font-semibold tracking-tight">{block.title}</h3>
          <span className="font-mono text-[13px] tabular-nums text-[color:var(--color-fg-subtle)]">{block.when}</span>
        </div>
      );
    case "project":
      return (
        <h4 className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[16px] font-semibold">
          {block.name}
          {block.tag && (
            <span className="text-[13px] font-normal text-[color:var(--color-fg-subtle)]">{block.tag}</span>
          )}
        </h4>
      );
    case "list":
      return (
        <ul className="grid list-disc gap-1.5 pl-5 text-[color:var(--color-fg-muted)] marker:text-[color:var(--color-fg-subtle)]">
          {block.items.map((item) => (
            <li key={item}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    case "skills":
      return (
        <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-[max-content_1fr]">
          {block.rows.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-medium">{k}</dt>
              <dd className="mb-2 min-w-0 text-[color:var(--color-fg-muted)] sm:mb-0">{v}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default function ResumePage() {
  const r = getResume();
  return (
    <article className="container-wide max-w-[820px] py-20 text-[15px] leading-[1.75]">
      <header className="mb-14 grid gap-6 border-b border-[color:var(--color-fg)] pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="grid min-w-0 gap-2">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">Resume</p>
          <h1 className="text-[34px] font-semibold leading-tight tracking-tight">{r.name}</h1>
          <p className="text-[17px] font-medium">{r.role}</p>
          <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px] text-[color:var(--color-fg-muted)]">
            {r.contact.map((c) => (
              <li key={c} className="min-w-0 break-all">
                {contactNode(c)}
              </li>
            ))}
          </ul>
          <p className="text-[14px] text-[color:var(--color-fg-muted)]">{r.education}</p>
        </div>
        <a
          href="/resume.pdf"
          download="潘洋-简历.pdf"
          className="inline-flex items-center justify-self-start gap-2 rounded-md bg-[color:var(--color-fg)] px-4 py-2 text-[14px] text-[color:var(--color-bg)] transition hover:bg-[color:var(--color-accent)] sm:justify-self-end"
        >
          下载 PDF <span aria-hidden>↓</span>
        </a>
      </header>

      <div className="grid gap-14">
        {r.sections.map((s) => (
          <section key={s.title} className="grid gap-3">
            <h2 className="mb-2 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
              {s.title}
              <span className="h-px flex-1 bg-[color:var(--color-border)]" />
            </h2>
            {s.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
