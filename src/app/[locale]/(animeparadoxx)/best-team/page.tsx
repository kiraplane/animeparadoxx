import { FaqSection } from '@/components/animeparadoxx/faq-section';
import { Badge } from '@/components/ui/badge';
import { teams } from '@/data/animeparadoxx/teams';
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
    title: 'Anime Paradox X Best Team Builds',
    description:
      'Anime Paradox X team templates for beginners, balanced re-release play, Monarch long modes, and boss pressure.',
    locale,
    pathname: '/best-team',
  });
}
export default function BestTeamPage() {
  return (
    <div className="space-y-7 py-5 text-slate-100">
      <header>
        <Badge className="bg-cyan-300 text-slate-950">
          Role-first team builder
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Paradox X Best Teams
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Use these as team shapes. Substituting a finished unit with the same
          job is better than forcing an unbuilt meta name.
        </p>
      </header>
      {teams.map((team) => (
        <article
          key={team.id}
          className="rounded-xl border border-white/10 bg-[#0B1120] p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-300">
                {team.purpose}
              </p>
              <h2 className="mt-2 text-2xl font-black">{team.name}</h2>
            </div>
            <Badge variant="outline" className="border-white/10 text-slate-400">
              {team.confidence}
            </Badge>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-cyan-200">Core slots</h3>
              <div className="mt-3 grid gap-2">
                {team.core.map((slug) => {
                  const unit = getUnit(slug);
                  return unit ? (
                    <LocaleLink
                      href={`/units/${slug}`}
                      key={slug}
                      className="rounded-lg border border-white/8 bg-black/15 px-3 py-2 text-sm text-slate-200 hover:border-cyan-300/30"
                    >
                      {unit.name} · {unit.role}
                    </LocaleLink>
                  ) : (
                    <span
                      key={slug}
                      className="rounded-lg border border-white/8 bg-black/15 px-3 py-2 text-sm text-slate-200"
                    >
                      {slug}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-amber-200">Substitutes</h3>
              <ul className="mt-3 grid gap-2 text-sm text-slate-400">
                {team.substitutes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 border-white/8 border-t pt-4 text-sm leading-6 text-slate-300">
            {team.notes}
          </p>
        </article>
      ))}
      <FaqSection
        items={[
          {
            question: 'What is the best overall team?',
            answer:
              'A balanced shape is one main carry, one support, and one economy or utility slot, then mode-specific coverage.',
          },
          {
            question: 'What is the best long-mode core?',
            answer:
              'Sun Jin Wu (Monarch), Igrus (Elite Knight), and Idol (Pop) are a useful current engine.',
          },
          {
            question: 'Do I need every listed unit?',
            answer:
              'No. Substitute a finished unit that performs the same role.',
          },
        ]}
      />
    </div>
  );
}
