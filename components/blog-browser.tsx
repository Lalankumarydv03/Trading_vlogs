"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { BlogPost } from "@/lib/posts";

export function BlogBrowser({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All topics");
  const categories = ["All topics", ...Array.from(new Set(posts.map((post) => post.category)))];
  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All topics" || post.category === category;
      const searchable = [post.title, post.excerpt, post.category, ...post.content].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [posts, query, category]);

  return (
    <>
      <div className="blog-controls">
        <label className="search-box">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search articles</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search topics, concepts, articles..." />
          {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={16} /></button>}
        </label>
        <label className="category-select-label">
          <span className="sr-only">Filter by topic</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <p className="results-count" aria-live="polite">{filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found</p>
      {filteredPosts.length ? (
        <div className="post-grid">
          {filteredPosts.map((post) => (
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
      ) : (
        <div className="empty-state"><strong>No articles match that search.</strong><p>Try another keyword or select “All topics”.</p><button className="button secondary" onClick={() => { setQuery(""); setCategory("All topics"); }}>Reset filters</button></div>
      )}
    </>
  );
}