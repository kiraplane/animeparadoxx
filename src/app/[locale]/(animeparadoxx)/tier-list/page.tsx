import { FaqSection } from '@/components/animeparadoxx/faq-section';
import { Badge } from '@/components/ui/badge';
import { tierEntries, tierMethodology } from '@/data/animeparadoxx/tier-list';
import { getUnit } from '@/data/animeparadoxx/units';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Paradox X Tier List (Re-release)',
    description:
      'Current Anime Paradox X tier list for overall, story, raid, boss, support, and early-game roles.',
    locale,
    pathname: '/tier-list',
  });
}
const tiers = ['Meta', 'S', 'A', 'B'] as const;
export default function TierListPage() {
  return (
    <div className="space-y-7 py-5 text-slate-100">
      <header>
        <Badge className="bg-cyan-300 text-slate-950">
          Provisional re-release ranking
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Paradox X Tier List
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Use this as an investment shortlist, not a promise that one six-unit
          team wins every mode.
        </p>
      </header>
      <section className="rounded-xl border border-amber-300/15 bg-amber-300/5 p-5">
        <h2 className="font-black text-amber-200">How units are judged</h2>
        <ul className="mt-3 grid gap-2 text-sm text-slate-300">
          {tierMethodology.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
      {tiers.map((tier) => {
        const items = tierEntries.filter((item) => item.tier === tier);
        return (
          <section
            key={tier}
            className="rounded-xl border border-white/10 bg-[#0B1120] p-5"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex size-12 items-center justify-center rounded-xl text-xl font-black ${tier === 'Meta' ? 'bg-cyan-300 text-slate-950' : tier === 'S' ? 'bg-violet-300 text-slate-950' : tier === 'A' ? 'bg-amber-300 text-slate-950' : 'bg-slate-700 text-white'}`}
              >
                {tier}
              </span>
              <div>
                <h2 className="text-2xl font-black">{tier} tier</h2>
                <p className="text-xs text-slate-500">
                  {items.length} selected units
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {items.map((entry) => {
                const unit = getUnit(entry.unitSlug);
                if (!unit) return null;
                return (
                  <LocaleLink
                    key={`${entry.unitSlug}-${entry.mode}`}
                    href={`/units/${entry.unitSlug}`}
                    className="rounded-lg border border-white/8 bg-black/15 p-4 hover:border-cyan-300/30"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-white">{unit.name}</strong>
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-400"
                      >
                        {entry.mode}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {entry.reason}
                    </p>
                  </LocaleLink>
                );
              })}
            </div>
          </section>
        );
      })}
      <FaqSection
        items={[
          {
            question: 'Who is the best Anime Paradox X unit?',
            answer:
              'Storrk, Zid, and Sun Jin Wu are strong current carry comparisons, but they solve different modes and team needs.',
          },
          {
            question: 'Why is Idol ranked Meta?',
            answer:
              'A strong support can improve several finished carries and fits more team shapes than another narrow DPS.',
          },
          {
            question: 'Will the tier list change?',
            answer:
              'Yes. Re-release balance, availability, and live testing can move rankings.',
          },
        ]}
      />
    </div>
  );
}
