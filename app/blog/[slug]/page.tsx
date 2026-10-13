import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.coverImage], type: "article" }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="article-page">
      <article className="container article-shell">
        <div className="article-topline"><Link href="/blog">Articles</Link><span>·</span><span>{post.category}</span><span>·</span><span>{post.readTime}</span></div>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
        <Image className="article-cover" src={post.coverImage} alt={"Cover image for " + post.title} width={1400} height={800} priority />
        <div className="post-meta"><span>{post.date}</span><span>Trading Vlogs Editorial</span></div>
        <div className="article-body">
          {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <aside className="article-disclaimer">Educational content only. This article is not investment advice or a recommendation to buy or sell any financial instrument. Trading and investing involve risk, including the possible loss of capital.</aside>
      </article>
      <section className="container" style={{ paddingBottom: 50 }}>
        <Link className="text-link" href="/blog">← Back to all articles</Link>
      </section>
    </main>
  );
}