import { Badge } from '@/components/ui/badge';
import { guides } from '@/data/animeparadoxx/guides';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Paradox X Guides',
    description:
      'Anime Paradox X guides for beginner progression, units, teams, evolution, Etherealize, traits, materials, Story, Raid, Siege, Boss Rush, and AFK.',
    locale,
    pathname: '/guides',
  });
}
export default function GuidesPage() {
  const categories = [...new Set(guides.map((guide) => guide.category))];
  return (
    <div className="space-y-8 py-5 text-slate-100">
      <header>
        <Badge className="bg-violet-300 text-slate-950">
          {guides.length} guides
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Paradox X Guides
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Decision-first routes for the re-release. Current facts are dated;
          legacy recipes and exact counts are not treated as guaranteed.
        </p>
      </header>
      {categories.map((category) => (
        <section key={category}>
          <h2 className="text-2xl font-black">{category}</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {guides
              .filter((guide) => guide.category === category)
              .map((guide) => (
                <LocaleLink
                  href={`/guides/${guide.slug}`}
                  key={guide.slug}
                  className="group rounded-xl border border-white/10 bg-[#0B1120] p-5 hover:border-cyan-300/35"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Badge
                      variant="outline"
                      className="border-white/10 text-slate-400"
                    >
                      {guide.difficulty}
                    </Badge>
                    <ArrowRight className="size-4 text-cyan-300 transition group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-4 text-xl font-black text-white group-hover:text-cyan-200">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {guide.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-violet-300">
                        #{tag.replaceAll(' ', '')}
                      </span>
                    ))}
                  </div>
                </LocaleLink>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
