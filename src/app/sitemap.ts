import type { MetadataRoute } from 'next';
import { postsData } from './blog/[slug]/page'; // Assuming postsData is exported and accessible

const BASE_URL = 'https://www.infiniteo.org';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes = [
    '/',
    '/about',
    '/solutions',
    '/technology',
    '/impact',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));

  // Dynamic routes for blog posts
  const blogPostRoutes = postsData.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogPostRoutes];
}
