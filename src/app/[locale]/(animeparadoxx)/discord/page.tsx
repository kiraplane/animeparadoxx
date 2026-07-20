import { TopicPage } from '@/components/animeparadoxx/topic-page';
import { getTopic } from '@/data/animeparadoxx/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Locale } from 'next-intl';

const officialLinks = getTopic('official-links');
const topic = {
  ...officialLinks,
  route: '/discord',
  label: 'Discord',
  title: 'Anime Paradox X Discord',
  description:
    'Open the current Anime Paradox X Discord invite, verify the Lunmei Roblox identity, and avoid fake giveaways, scripts, or credential requests.',
  summary:
    'Use the community server for update discussion and player help, but verify codes and game changes inside the official Roblox experience.',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Paradox X Discord - Official Community and Safety',
    description: topic.description,
    locale,
    pathname: topic.route,
  });
}

export default function DiscordPage() {
  return <TopicPage topic={topic} />;
}
