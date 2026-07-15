import { FaqSection } from '@/components/animeparadoxx/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { getGuide, guides } from '@/data/animeparadoxx/guides';
import { officialGameFacts } from '@/data/animeparadoxx/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}
export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
  });
}

export default async function GuidePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const cover =
    guide.coverImageUrl ||
    guide.video?.thumbnailUrl ||
    officialGameFacts.heroImage;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.seoDescription,
    dateModified: '2026-07-15',
    image: cover.startsWith('http')
      ? cover
      : `${officialGameFacts.canonicalUrl}${cover}`,
    mainEntityOfPage: `${officialGameFacts.canonicalUrl}/guides/${guide.slug}`,
    publisher: { '@type': 'Organization', name: officialGameFacts.siteName },
  };
  return (
    <article className="space-y-7 py-5 text-slate-100">
      <JsonLd data={jsonLd} />
      <header>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-violet-300 text-slate-950">
            {guide.category}
          </Badge>
          <Badge variant="outline" className="border-white/10 text-slate-300">
            {guide.difficulty}
          </Badge>
          {guide.video ? (
            <Badge className="bg-cyan-300 text-slate-950">
              <PlayCircle className="mr-1 size-3" />
              Video supported
            </Badge>
          ) : null}
        </div>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
          {guide.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          {guide.summary}
        </p>
      </header>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
        <div className="relative aspect-video">
          <Image
            src={cover}
            alt={`${guide.title} cover`}
            fill
            priority
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
          />
        </div>
        {guide.video ? (
          <a
            href={guide.video.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 border-white/10 border-t bg-[#0B1120] px-4 py-3 text-sm text-slate-300 hover:text-cyan-200"
          >
            <span>
              {guide.video.title}
              {guide.video.channel ? ` · ${guide.video.channel}` : ''}
            </span>
            <ArrowRight className="size-4 shrink-0" />
          </a>
        ) : null}
      </div>
      {guide.body.map((section, index) => (
        <section
          key={section.heading}
          className="rounded-xl border border-white/10 bg-[#0B1120] p-6"
        >
          <h2 className="text-2xl font-black">{section.heading}</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets ? (
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-lg border border-white/8 bg-black/15 px-3 py-2"
                >
                  • {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          {index === 1 && guide.video ? (
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}?rel=0`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : null}
        </section>
      ))}
      <FaqSection items={guide.faq} />
      <section className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
        <h2 className="text-xl font-black">Continue your route</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {guide.relatedRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 hover:border-cyan-300/35 hover:text-cyan-200"
            >
              <span>
                {route.replaceAll('-', ' ').replaceAll('/', ' ').trim()}
              </span>
              <ArrowRight className="size-4" />
            </LocaleLink>
          ))}
        </div>
      </section>
    </article>
  );
}
