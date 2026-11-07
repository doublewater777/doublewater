import fs from "node:fs";
import path from "node:path";

// 解析 src/content/resume.md（和 PDF 导出用的是同一份格式）。
export type Block =
  | { kind: "lead"; text: string }
  | { kind: "job"; title: string; when: string }
  | { kind: "project"; name: string; tag?: string }
  | { kind: "list"; items: string[] }
  | { kind: "skills"; rows: [string, string][] };

export type Resume = {
  name: string;
  role: string;
  contact: string[];
  education: string;
  sections: { title: string; blocks: Block[] }[];
};

export function getResume(): Resume {
  const src = fs.readFileSync(path.join(process.cwd(), "src/content/resume.md"), "utf8");
  const lines = src.trim().split("\n");
  const name = lines[0].replace(/^#\s*/, "").trim();
  const role = lines[1].replace(/\*\*/g, "").trim();
  const contact = lines[3].split("|").map((s) => s.trim());
  const education = lines[4].trim();

  const sections: Resume["sections"] = [];
  let section: Resume["sections"][number] | undefined;
  const push = (b: Block) => section?.blocks.push(b);

  for (const raw of lines.slice(5)) {
    const s = raw.trim();
    if (!s || s === "---") continue;
    if (s.startsWith("## ")) {
      section = { title: s.slice(3), blocks: [] };
      sections.push(section);
      continue;
    }
    if (!section) continue;
    const last = section.blocks.at(-1);
    if (s.startsWith("- ")) {
      const item = s.slice(2);
      const skill = section.title === "技术栈" && item.match(/^\*\*(.+?)\*\*：(.*)$/);
      if (skill) {
        if (last?.kind === "skills") last.rows.push([skill[1], skill[2]]);
        else push({ kind: "skills", rows: [[skill[1], skill[2]]] });
      } else if (last?.kind === "list") last.items.push(item);
      else push({ kind: "list", items: [item] });
    } else if (s.startsWith("### ")) {
      const i = s.lastIndexOf("|");
      push({ kind: "job", title: s.slice(4, i).trim(), when: s.slice(i + 1).trim() });
    } else if (/^\*\*\d+\.\s.+\*\*$/.test(s)) {
      const t = s.slice(2, -2).replace(/^\d+\.\s/, "");
      const m = t.match(/^(.+?)（([^（）]*)）$/);
      if (m && /·|上线|仓库/.test(m[2])) push({ kind: "project", name: m[1], tag: m[2] });
      else push({ kind: "project", name: t });
    } else {
      push({ kind: "lead", text: s });
    }
  }
  return { name, role, contact, education, sections };
}
