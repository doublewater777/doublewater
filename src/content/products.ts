export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  platform?: string;
  year: string;
  status: "live" | "building" | "archived";
};

export const products: Product[] = [
  {
    slug: "pocket-mole-watch",
    name: "Pocket Mole: Watch Game",
    tagline: "手表上的打地鼠小游戏，通勤路上也能玩一局。",
    description:
      "一款为 Apple Watch 设计的极简打地鼠游戏。专注单手操作、短时长的沉浸体验，利用 Digital Crown 和 Haptic 反馈，让 30 秒也能成为一次放松。",
    url: "https://apps.apple.com/app/pocket-mole-watch/id6766255492",
    platform: "Apple Watch · iOS",
    year: "2025",
    status: "live"
  },
  {
    slug: "stock-average-calculators",
    name: "Stock Average Calculators",
    tagline: "一站式股票成本均价与盈亏计算工具集。",
    description:
      "面向散户与长期投资者的在线计算器合集：摊薄成本、止盈止损、复利计划、汇率换算等。不需要注册，打开就算。",
    url: "https://www.stockaveragecalculators.com/",
    platform: "Web",
    year: "2025",
    status: "live"
  }
];
