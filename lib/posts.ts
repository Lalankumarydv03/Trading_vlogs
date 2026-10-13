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
    readTime: "8 min read",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85",
    content: [
      "The stock market is a marketplace where investors buy and sell shares of publicly listed companies. A share represents a small ownership interest in a company, although the rights attached to shares depend on the type of security. Companies may use the money raised by issuing shares to fund operations, invest in growth, or strengthen their balance sheets.",
      "There are two important market settings. In a primary market, a company issues securities to investors, such as through an initial public offering. In a secondary market, investors trade existing securities with one another. Most day-to-day stock-market activity people see on an exchange takes place in the secondary market.",
      "A stock's price changes as buyers and sellers respond to company results, expected future growth, interest rates, inflation, industry news, and wider economic conditions. A rising price does not automatically mean a company is healthy, and a falling price does not by itself prove that a company is failing. Price is the result of many participants' expectations and available information.",
      "Beginners should learn a few basic terms. A ticker symbol identifies a listed security. Market capitalization is the market value of a company's outstanding shares. Liquidity describes how easily an asset can be bought or sold without greatly affecting its price. Volatility describes how much and how quickly a price changes. These terms help explain market behaviour but do not predict the next move.",
      "Orders also matter. A market order generally prioritizes execution, but the final price can differ from the last quoted price, especially in a fast-moving market. A limit order sets the maximum price a buyer will pay or the minimum price a seller will accept, but it may not execute. Learn order types and your broker's rules before placing an order.",
      "Investing and trading are related but different activities. Investing often focuses on longer-term ownership and business fundamentals, while trading usually involves more frequent decisions based on price movement, events, or a defined strategy. Neither approach guarantees a profit, and both can result in losses. Costs, taxes, liquidity, and your time horizon can affect outcomes.",
      "Before using real money, write down your goal, expected time horizon, and the amount of loss you could tolerate. Understand brokerage fees and applicable taxes, avoid borrowing to trade while learning, and consider practising with a simulator. A simulator can help you learn order mechanics, though it cannot fully reproduce the emotions and execution conditions of live markets.",
      "A useful beginner routine is to study one concept at a time, compare information from reliable sources, and keep notes on what you understand and what remains unclear. Never buy a security solely because of a social-media post or a dramatic price prediction. This article is general education, not personalized financial advice or a recommendation to buy or sell any security."
    ]
  },
  {
    slug: "risk-management-first",
    title: "Why Risk Management Comes Before a Trading Strategy",
    excerpt: "A practical introduction to position sizing, risk limits, and building consistent decision-making habits.",
    category: "Risk Management",
    date: "October 5, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A trading strategy describes the conditions under which someone may enter, manage, or exit a position. Risk management defines how much uncertainty and potential loss the trader is willing and able to accept. A strategy can look promising in a chart example and still fail in live conditions, so risk controls should be planned before an order is placed.",
      "Start by separating your essential living expenses and emergency savings from money you can afford to put at risk. There is no universal position size suitable for everyone. Your financial situation, experience, goals, and the volatility of the instrument all matter. Never treat a risk rule as permission to trade money you cannot afford to lose.",
      "Position sizing connects a trade idea to a defined risk amount. For example, if a hypothetical account is worth ₹50,000 and a learner chooses to risk 0.5% on one idea, the planned risk amount is ₹250. This is only an illustration, not a recommended percentage. Actual loss can exceed a planned amount because of gaps, slippage, fees, leverage, or execution delays.",
      "An exit plan should be defined before entry. Some traders use stop orders or price levels to indicate when their original idea is no longer valid. A stop order does not guarantee execution at the stop price, and a stop-limit order may not execute at all. Fast markets and illiquid securities can behave differently from examples in a textbook.",
      "Diversification can reduce dependence on one company or market exposure, but it cannot eliminate risk. Several investments may move together during market stress. Check whether positions share the same sector, underlying factor, currency, or other source of exposure instead of assuming that holding several symbols automatically creates diversification.",
      "Leverage deserves special care because it magnifies exposure relative to the cash committed. It can increase both gains and losses and may trigger margin calls or forced liquidation under a broker's rules. New traders should understand margin requirements, financing charges, and worst-case scenarios before considering leveraged products.",
      "Build a repeatable checklist: write down the reason for the trade, the conditions that would invalidate the idea, the intended position size, likely costs, and the maximum loss you are prepared to accept. If you cannot explain the trade in plain language, consider waiting until you understand it better. Missing a trade is generally preferable to entering one without a plan.",
      "Keep a journal that records decisions as well as outcomes. Note whether you followed your rules, what information you used, and how costs affected the result. Review a meaningful sample of trades rather than drawing conclusions from one win or loss. The goal is to improve decision quality and control exposure, not to promise a particular return."
    ]
  },
  {
    slug: "technical-analysis-foundations",
    title: "Technical Analysis: Start With the Foundations",
    excerpt: "Learn what charts, trends, support, and resistance can tell you—and what they cannot.",
    category: "Technical Analysis",
    date: "September 29, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Technical analysis studies price and trading-volume information to explore patterns in market behaviour. A chart is a visual record of past transactions, not a window into the future. Traders may use charts to describe trends, volatility, momentum, and areas where price previously attracted buying or selling interest.",
      "Choose a timeframe that matches the question you are asking. A one-minute chart can show short-term fluctuations, while a daily or weekly chart provides a broader view. A pattern that appears clear on one timeframe may look different on another. Switching timeframes can add context, but it can also encourage someone to search until they find a chart that supports a preferred opinion.",
      "A trend is a way to describe the direction of price over a chosen period. Analysts often describe sequences of higher highs and higher lows as an uptrend, and lower highs and lower lows as a downtrend. Real markets are noisy, and trend definitions can be subjective. A trend can pause, reverse, or become difficult to classify.",
      "Support and resistance are best treated as zones rather than perfectly precise lines. Support describes an area where buying interest has previously appeared; resistance describes an area where selling pressure has previously emerged. Neither area is guaranteed to hold. Once a level breaks, the market may continue, reverse, or move sideways, and different analysts may draw different zones from the same data.",
      "Candlesticks summarize open, high, low, and close prices for a selected period. Their shapes can help describe the relationship between price movements during that period, but a single candle is not a reliable signal on its own. The surrounding trend, trading volume, liquidity, and event context all influence how a chart should be interpreted.",
      "Indicators such as moving averages, relative strength index, and moving average convergence/divergence transform historical price or volume data. They can help organize observations, but many indicators lag because they use past data. Using several indicators that measure similar things can create the appearance of confirmation without adding independent evidence.",
      "Backtesting can help evaluate how a rule would have behaved on historical data, but a backtest is only as reliable as its assumptions. Watch for look-ahead bias, overfitting, survivorship bias, missing fees, and unrealistic fills. A rule that fits past data unusually well may not generalize to new market conditions. Paper trading can test workflow, though it does not perfectly reproduce live execution.",
      "Use technical analysis as one framework for asking structured questions rather than as a prediction machine. Write down what would support or invalidate your interpretation, consider the cost and liquidity of a trade, and decide how much risk is acceptable before acting. This article is educational and does not provide a trading signal or promise future results."
    ]
  },
  {
    slug: "trading-psychology-and-discipline",
    title: "Trading Psychology: Build Discipline Before Confidence",
    excerpt: "Learn how fear, overconfidence, and the urge to recover losses can affect decisions—and how a written process can help.",
    category: "Trading Psychology",
    date: "September 24, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Trading psychology is the study of how emotions, habits, and thinking patterns influence financial decisions. A person can understand a strategy in theory and still struggle to follow it when prices move quickly or money is at risk. Discipline is not the absence of emotion; it is the ability to use a consistent process even when emotions are present.",
      "Fear can lead someone to exit a position too early, avoid a well-understood decision, or freeze when a plan needs to be followed. Greed and overconfidence can encourage oversized positions or repeated trades after a winning streak. These reactions are common human tendencies, not proof that someone is uniquely unsuited to learning about markets.",
      "Loss aversion can make a loss feel more painful than an equivalent gain feels satisfying. One result may be holding a losing position simply to avoid admitting that an idea did not work. Another is taking a larger risk to recover money quickly. Trying to win back a loss immediately can turn a planned decision into an emotional reaction, so define stopping rules in advance.",
      "A written trading plan reduces the need to improvise under pressure. It can state which conditions you are studying, what evidence you require, how you will size a position, what would invalidate the idea, and when you will stop for the day. A plan should also state when not to trade, such as when you are tired, distracted, or unable to explain the risk.",
      "A journal helps turn vague impressions into observations. Record the reason for each decision, whether you followed your process, your emotional state, and any unexpected event or execution issue. Review the entries periodically to find recurring behaviours. Keep process quality separate from the result of one trade: a disciplined decision can lose money, and a poorly planned decision can occasionally make money.",
      "Create practical friction around impulsive actions. Use a checklist before submitting an order, set a limit on how much time you spend watching short-term price changes, and take a break after a stressful decision. If you find yourself unable to stop, hiding losses, borrowing to trade, or allowing trading to damage relationships or essential expenses, step away and seek support from a trusted person or qualified professional.",
      "Confidence should come from preparation, honest review, and understanding uncertainty—not from a few recent wins. No routine can remove market risk, and no psychological technique guarantees profitable results. Focus on behaviours you can control, such as preparation, position sizing, patience, and following your own risk limits.",
      "Use these ideas as general educational guidance. Trading and investing can lead to substantial losses, and this article is not personalized financial advice or a recommendation to make any specific transaction."
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
