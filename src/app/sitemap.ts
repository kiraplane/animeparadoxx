import { guides } from '@/data/animeparadoxx/guides';
import { units } from '@/data/animeparadoxx/units';
import type { MetadataRoute } from 'next';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  '/',
  '/codes',
  '/tier-list',
  '/units',
  '/traits',
  '/evolution',
  '/materials',
  '/best-team',
  '/game-modes',
  '/guides',
  '/updates/re-release',
  '/discord',
  '/official-links',
  '/privacy',
  '/terms',
  '/cookie',
  '/disclaimer',
];
const routes = [
  ...coreRoutes,
  ...guides.map((guide) => `/guides/${guide.slug}`),
  ...units.map((unit) => `/units/${unit.slug}`),
];
const lastModified = new Date('2026-07-15T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalBaseUrl();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' || route === '/codes' ? 'daily' : 'weekly',
    priority:
      route === '/'
        ? 1
        : route === '/codes' || route === '/tier-list'
          ? 0.9
          : route.startsWith('/guides/') || route.startsWith('/units/')
            ? 0.8
            : 0.75,
  }));
}
