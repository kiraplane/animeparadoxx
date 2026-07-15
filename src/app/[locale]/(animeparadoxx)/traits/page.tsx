import { FaqSection } from '@/components/animeparadoxx/faq-section';
import { Badge } from '@/components/ui/badge';
import { traits } from '@/data/animeparadoxx/traits';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Paradox X Traits Tier List',
    description:
      'Compare Eternal, Vampiric, Angelic, Revenant, Blessing, and Greed traits with odds, roles, and reroll advice.',
    locale,
    pathname: '/traits',
  });
}
export default function TraitsPage() {
  return (
    <div className="space-y-7 py-5 text-slate-100">
      <header>
        <Badge className="bg-violet-300 text-slate-950">
          Trait reroll guide
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Paradox X Traits
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Roll for the unit&apos;s job and use practical stop points. Listed
          odds come from current guide coverage and should be checked against
          the live UI.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {traits.map((trait) => (
          <article
            key={trait.slug}
            className="rounded-xl border border-white/10 bg-[#0B1120] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-cyan-300 text-slate-950">
                  {trait.tier}
                </Badge>
                <h2 className="text-xl font-black">{trait.name}</h2>
              </div>
              {trait.odds ? (
                <span className="text-xs font-bold text-amber-300">
                  {trait.odds}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {trait.effect}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {trait.bestFor.map((role) => (
                <Badge
                  key={role}
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  {role}
                </Badge>
              ))}
            </div>
            <p className="mt-4 border-white/8 border-t pt-4 text-sm leading-6 text-slate-400">
              <strong className="text-white">Reroll advice:</strong>{' '}
              {trait.rerollAdvice}
            </p>
          </article>
        ))}
      </div>
      <FaqSection
        items={[
          {
            question: 'What is the best trait?',
            answer:
              'Eternal, Vampiric, and Angelic are rare premium results, but the best roll still depends on the unit role.',
          },
          {
            question: 'Where should Greed go?',
            answer:
              'On a dedicated farm unit such as Bulla, not on a permanent damage carry.',
          },
          {
            question: 'Should beginners chase 0.1% traits?',
            answer:
              'Usually no. Keep a strong practical roll and finish the rest of the team first.',
          },
        ]}
      />
    </div>
  );
}
