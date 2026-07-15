import { Badge } from '@/components/ui/badge';
import type { Unit } from '@/data/animeparadoxx/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

export function UnitCard({ unit }: { unit: Unit }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#0B1120] p-5 transition hover:border-cyan-300/35">
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-cyan-300 text-slate-950">{unit.tier}</Badge>
        <Badge className="bg-violet-300 text-slate-950">{unit.role}</Badge>
        <Badge variant="outline" className="border-white/10 text-slate-300">
          {unit.rarity}
        </Badge>
      </div>
      <h3 className="mt-4 text-xl font-black text-white">{unit.name}</h3>
      <p className="mt-1 text-xs text-slate-500">{unit.combatStyle}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
        {unit.summary}
      </p>
      <div className="mt-4 rounded-lg bg-black/20 p-3 text-xs">
        <span className="text-slate-500">Traits</span>
        <strong className="mt-1 block text-slate-200">
          {unit.bestTraits.join(' · ')}
        </strong>
      </div>
      <LocaleLink
        href={`/units/${unit.slug}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-300"
      >
        Open profile <ArrowRight className="size-4" />
      </LocaleLink>
    </article>
  );
}
