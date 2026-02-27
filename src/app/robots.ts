import copy from '@/constants/copy';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/studio/',
        '/studio/structure/',
        '/studio/vision/',
        '/studio/presentation/',
      ],
    },
    sitemap: `https://${copy.seo.url}/sitemap.xml`,
  };
}
