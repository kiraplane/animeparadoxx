import { TopicPage } from '@/components/animeparadoxx/topic-page';
import { getTopic } from '@/data/animeparadoxx/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Locale } from 'next-intl';
export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const topic = getTopic('re-release');
  return constructMetadata({
    title: topic.title,
    description: topic.description,
    locale,
    pathname: topic.route,
  });
}
export default function Page() {
  return <TopicPage topic={getTopic('re-release')} />;
}
