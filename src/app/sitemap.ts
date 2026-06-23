import type { MetadataRoute } from 'next'
import { BRAND_URL } from '@/constants/brand'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/despre', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/cum-functioneaza', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/piloni', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/arii', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/pachete', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/pentru-cine', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${BRAND_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
