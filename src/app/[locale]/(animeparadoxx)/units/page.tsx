import { UnitsBrowser } from '@/components/animeparadoxx/units-browser';
import { Badge } from '@/components/ui/badge';
import { units } from '@/data/animeparadoxx/units';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Paradox X Units Database',
    description:
      'Browse selected Anime Paradox X units by tier, rarity, role, combat style, best traits, partners, and upgrade priority.',
    locale,
    pathname: '/units',
  });
}
export default function UnitsPage() {
  return (
    <div className="space-y-7 py-5 text-slate-100">
      <header>
        <Badge className="bg-violet-300 text-slate-950">
          {units.length} selected profiles
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Paradox X Units
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          A role-first database for the July 2026 re-release. Exact legacy stats
          and recipes are excluded until current-client verification.
        </p>
      </header>
      <UnitsBrowser units={units} />
    </div>
  );
}
