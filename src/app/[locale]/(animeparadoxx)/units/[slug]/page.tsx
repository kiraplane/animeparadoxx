import { FaqSection } from '@/components/animeparadoxx/faq-section';
import { Badge } from '@/components/ui/badge';
import { getUnit, units } from '@/data/animeparadoxx/units';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    units.map((unit) => ({ locale, slug: unit.slug }))
  );
}
export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const unit = getUnit(slug);
  if (!unit) return {};
  return constructMetadata({
    title: `${unit.name} Anime Paradox X Build`,
    description: `${unit.name} Anime Paradox X profile: tier, rarity, role, combat style, best traits, partners, strengths, weaknesses, and upgrade priority.`,
    locale,
    pathname: `/units/${slug}`,
  });
}
export default async function UnitPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) notFound();
  return (
    <div className="space-y-7 py-5 text-slate-100">
      <header className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.18),transparent_45%),#0B1120] p-6 md:p-8">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-cyan-300 text-slate-950">{unit.tier}</Badge>
          <Badge className="bg-violet-300 text-slate-950">{unit.role}</Badge>
          <Badge variant="outline" className="border-white/10 text-slate-300">
            {unit.rarity}
          </Badge>
          <Badge variant="outline" className="border-white/10 text-slate-300">
            {unit.upgradePriority} priority
          </Badge>
        </div>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">{unit.name}</h1>
        {unit.alias ? (
          <p className="mt-2 text-sm text-slate-500">{unit.alias}</p>
        ) : null}
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          {unit.summary}
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
          <h2 className="font-black text-cyan-200">Combat role</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {unit.combatStyle}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
          <h2 className="font-black text-violet-200">Best traits</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {unit.bestTraits.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="border-violet-300/30 text-violet-200"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
          <h2 className="font-black text-amber-200">Best partners</h2>
          <div className="mt-3 grid gap-1 text-sm text-slate-300">
            {unit.bestPartners.map((item) => (
              <span key={item}>• {item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="rounded-xl border border-white/10 bg-[#0B1120] p-6">
        <h2 className="text-2xl font-black">How to get {unit.name}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {unit.obtainment ?? 'Check the current in-game unit index.'}
        </p>
        <p className="mt-3 text-xs text-amber-300">
          Availability and recipes are patch-sensitive. Confirm the live index
          before spending.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
          <h2 className="text-xl font-black text-emerald-200">Strengths</h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
            {unit.strengths.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
          <h2 className="text-xl font-black text-rose-200">Weaknesses</h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
            {unit.weaknesses.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
        <div className="flex flex-wrap gap-3">
          <LocaleLink
            href="/tier-list"
            className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950"
          >
            Compare tier list
          </LocaleLink>
          <LocaleLink
            href="/best-team"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-bold text-white"
          >
            Build a team
          </LocaleLink>
          <LocaleLink
            href="/traits"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-bold text-white"
          >
            Compare traits
          </LocaleLink>
        </div>
      </section>
      <FaqSection
        title={`${unit.name} FAQ`}
        items={[
          {
            question: `Is ${unit.name} worth building?`,
            answer: `${unit.name} is currently listed in ${unit.tier} tier with ${unit.upgradePriority.toLowerCase()} upgrade priority. Build it when the ${unit.role.toLowerCase()} role fixes a real account need.`,
          },
          {
            question: `What traits fit ${unit.name}?`,
            answer: `Compare ${unit.bestTraits.join(', ')} and stop at a practical result before chasing perfection.`,
          },
          {
            question: 'When was this profile checked?',
            answer: `This profile was last checked ${unit.lastChecked} for the Anime Paradox X re-release.`,
          },
        ]}
      />
    </div>
  );
}
