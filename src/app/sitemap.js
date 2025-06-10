import { getAllPostIds } from "@/lib/posts";

export default async function sitemap() {
  const baseUrl = "https://impulseblog.vercel.app";

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];

  const blogPosts = getAllPostIds(); // [{ params: { id: "slug" } }, ...]

  const blogUrls = blogPosts.map(({ params }) => ({
    url: `${baseUrl}/blog/${params.id}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...blogUrls];
}
