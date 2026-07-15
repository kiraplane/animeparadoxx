import { AnimeParadoxXHomePage } from '@/components/animeparadoxx/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Paradox X Wiki - Codes, Units & Guides',
    description:
      'Current Anime Paradox X Wiki for working codes, units, tier list, traits, evolution, materials, teams, game modes, and beginner guides.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return <AnimeParadoxXHomePage />;
}
