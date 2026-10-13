export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  coverImage: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "understanding-stock-market-basics",
    title: "Stock Market Basics: A Beginner’s Guide",
    excerpt: "Understand what the stock market is, how shares work, and the key terms every new learner should know.",
    category: "Market Basics",
    date: "October 8, 2026",
    readTime: "6 min read",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85",
    content: [
      "The stock market is a marketplace where investors buy and sell shares of publicly listed companies. A share represents a small ownership interest in a company, though the rights attached to shares depend on the type of security.",
      "Two common market venues are primary markets, where companies issue securities to raise capital, and secondary markets, where investors trade securities with one another. Prices can move as buyers and sellers react to company performance, economic data, expectations, and broader market sentiment.",
      "Before placing a trade, learn the difference between market and limit orders, understand brokerage costs, and know that prices can move against you. A basic plan should include a goal, a time horizon, and a clear understanding of the amount you can afford to risk.",
      "Start with reliable educational resources and practise explaining a concept in your own words before using real money. This article is for general education and is not a recommendation to buy or sell any security."
    ]
  },
  {
    slug: "risk-management-first",
    title: "Why Risk Management Comes Before a Trading Strategy",
    excerpt: "A practical introduction to position sizing, risk limits, and building consistent decision-making habits.",
    category: "Risk Management",
    date: "October 5, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A trading strategy describes when someone may enter or exit a position. Risk management helps define what happens if the idea is wrong. Both matter, but risk controls are what keep a single decision from becoming an outsized loss.",
      "Learners often study entries first and leave position sizing until later. A more responsible approach is to define acceptable risk, understand potential loss scenarios, and decide in advance when a position no longer fits the plan.",
      "A stop order cannot guarantee a particular exit price in fast or illiquid markets. Gaps, slippage, fees, and leverage can make actual outcomes differ from a simple example, so risk calculations should be treated as estimates rather than promises.",
      "Keep a journal of the reason for each decision and review it over time. Focus on process and risk exposure, not only on whether one trade made money."
    ]
  },
  {
    slug: "technical-analysis-foundations",
    title: "Technical Analysis: Start With the Foundations",
    excerpt: "Learn what charts, trends, support, and resistance can tell you—and what they cannot.",
    category: "Technical Analysis",
    date: "September 29, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Technical analysis studies price and trading-volume information to explore patterns and market behaviour. Traders may use charts to describe trends, volatility, and areas where price previously reacted.",
      "Support and resistance are interpretive areas rather than exact barriers. A price level that mattered in the past can fail, and different analysts may draw different levels from the same chart.",
      "Indicators are transformations of historical data, not guarantees about future prices. Combining too many indicators can make a chart look convincing without improving a decision.",
      "Treat chart analysis as one framework for asking questions. Consider liquidity, costs, market context, and the possibility that a pattern will not repeat."
    ]
  }
];

export const categories = [
  { name: "Market Basics", description: "Build a clear foundation in how markets work." },
  { name: "Risk Management", description: "Understand uncertainty, exposure, and discipline." },
  { name: "Technical Analysis", description: "Learn to read charts with a critical mindset." },
  { name: "Trading Psychology", description: "Explore habits, patience, and decision-making." }
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return date;
}