import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, posts } from "@/lib/posts";

const siteUrl = "https://trading-ten-green.vercel.app";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found", robots: { index: false, follow: false } };

  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    keywords: [post.category, "AI and software jobs", "Zoho salary hike", "artificial intelligence", "technology careers"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Trading Vlogs",
      images: [{ url: post.coverImage, alt: post.title }],
      type: "article",
      publishedTime: "2026-10-13T00:00:00.000Z"
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.coverImage] }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    author: { "@type": "Organization", name: "Trading Vlogs Editorial" },
    publisher: { "@type": "Organization", name: "Trading Vlogs" },
    mainEntityOfPage: articleUrl
  };

  return (
    <main className="article-page">
      <article className="container article-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <div className="article-topline"><Link href="/blog">Articles</Link><span>·</span><span>{post.category}</span><span>·</span><span>{post.readTime}</span></div>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
        <Image className="article-cover" src={post.coverImage} alt={"Editorial cover image for " + post.title} width={1400} height={800} priority />
        <div className="post-meta"><span>{post.date}</span><span>Trading Vlogs Editorial</span></div>
        <div className="article-body">
          {post.content.map((paragraph, index) =>
            paragraph.startsWith("## ")
              ? <h2 key={index}>{paragraph.slice(3)}</h2>
              : <p key={index}>{paragraph}</p>
          )}
        </div>
        {post.sources && post.sources.length > 0 && (
          <section className="article-sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading">Sources and further reading</h2>
            <ol>
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
                  <span> — {source.publisher}</span>
                </li>
              ))}
            </ol>
          </section>
        )}
        <aside className="article-disclaimer">This article is for general informational purposes. It is not personalized career, legal, investment, or financial advice. Company-specific statements are attributed to the linked reporting; analysis and future scenarios are not guarantees.</aside>
      </article>
      <section className="container" style={{ paddingBottom: 50 }}>
        <Link className="text-link" href="/blog">← Back to all articles</Link>
      </section>
    </main>
  );
}
