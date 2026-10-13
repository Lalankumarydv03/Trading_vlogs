import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const siteUrl = "https://trading-ten-green.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/disclaimer`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
