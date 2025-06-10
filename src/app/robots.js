export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/privacy',
    },
    sitemap: 'https://impulseblog.vercel.app/sitemap.xml',
  }
}