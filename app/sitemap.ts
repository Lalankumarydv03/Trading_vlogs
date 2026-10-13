import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const siteUrl = "https://trading-ten-green.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/disclaimer`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
