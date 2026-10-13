import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { BlogBrowser } from "@/components/blog-browser";

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
        <BlogBrowser posts={posts} />
        <p style={{ marginTop: 30, color: "var(--muted)", fontSize: 12 }}>You’re viewing the starter article collection. More topics can be added through the content system in a later phase.</p>
      </section>
    </main>
  );
}