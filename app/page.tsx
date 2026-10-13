import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import { categories, posts } from "@/lib/posts";

export default function HomePage() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const latest = posts.filter((post) => post.slug !== featured.slug);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">A clearer view of the markets</span>
            <h1>Make sense of markets. <em>One idea at a time.</em></h1>
            <p className="hero-copy">Thoughtful, straightforward guides to stock-market basics, trading concepts, and risk management—made for curious learners, not quick-profit promises.</p>
            <div className="button-row">
              <Link className="button" href="/blog">Explore articles <ArrowRight size={16} /></Link>
              <Link className="button secondary" href="/about">Our approach</Link>
            </div>
            <div className="hero-note"><span className="note-dot" /> Education first. Risk always matters.</div>
          </div>
          <Link className="hero-visual" href={"/blog/" + featured.slug} aria-label={"Read " + featured.title}>
            <Image src={featured.coverImage} alt="Financial market data displayed on a screen" fill priority sizes="(max-width: 850px) 100vw, 50vw" />
            <span className="visual-label">Editor’s pick · {featured.category}</span>
            <div className="visual-caption">
              <span>Start with the fundamentals</span>
              <h2>{featured.title}</h2>
            </div>
          </Link>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container trust-inner">
          <strong>BUILT FOR LEARNING</strong>
          <span><BookOpen size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: 7 }} /> Clear explanations</span>
          <span><ShieldCheck size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: 7 }} /> Risk-aware perspective</span>
          <span><TrendingUp size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: 7 }} /> Market concepts, simplified</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">The reading list</span><h2>Ideas worth understanding.</h2><p>Start with the essentials, then build your knowledge at a pace that makes sense for you.</p></div>
            <Link className="text-link" href="/blog">All articles <ArrowRight size={15} /></Link>
          </div>
          <div className="post-grid">
            {latest.map((post) => (
              <article className="post-card" key={post.slug}>
                <Link className="post-image" href={"/blog/" + post.slug}>
                  <Image src={post.coverImage} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw" />
                </Link>
                <span className="post-category">{post.category}</span>
                <h3><Link href={"/blog/" + post.slug}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <div className="post-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
              </article>
            ))}
            <article className="post-card">
              <Link className="post-image" href={"/blog/" + featured.slug}>
                <Image src={featured.coverImage} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw" />
              </Link>
              <span className="post-category">{featured.category}</span>
              <h3><Link href={"/blog/" + featured.slug}>{featured.title}</Link></h3>
              <p>{featured.excerpt}</p>
              <div className="post-meta"><span>{featured.date}</span><span>{featured.readTime}</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Find your starting point</span><h2>Explore by topic.</h2><p>Build a stronger foundation one subject at a time.</p></div>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link href="/blog" className="category-card" key={category.name}>
                <span className="category-icon">{[<BookOpen size={18} key="book" />, <ShieldCheck size={18} key="shield" />, <TrendingUp size={18} key="chart" />, <Sparkles size={18} key="spark" />][index]}</span>
                <h3>{category.name}</h3><p>{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-panel">
          <div><span className="eyebrow" style={{ color: "#c9e4d2" }}>A steady learning habit</span><h2>Better questions lead to better decisions.</h2><p>Explore the fundamentals, keep your expectations realistic, and remember that every market involves risk.</p></div>
          <Link className="button" href="/blog">Read the latest <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}