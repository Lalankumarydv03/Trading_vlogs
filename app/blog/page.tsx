import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Articles",
  description: "Browse educational articles about stock-market basics, trading concepts, and risk management."
};

export default function BlogPage() {
  return (
    <main className="page-main">
      <section className="container page-heading">
        <span className="eyebrow">The Trading Vlogs journal</span>
        <h1>Ideas for a stronger foundation.</h1>
        <p>Practical explanations of market concepts, risk, and trading terminology. Start with the basics and keep learning.</p>
      </section>
      <section className="container blog-list">
        <div className="post-grid">
          {posts.map((post) => (
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
        </div>
        <p style={{ marginTop: 30, color: "var(--muted)", fontSize: 12 }}>You’re viewing the starter article collection. More topics can be added through the content system in a later phase.</p>
      </section>
    </main>
  );
}