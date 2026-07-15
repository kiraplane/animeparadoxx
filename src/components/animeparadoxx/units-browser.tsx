'use client';
import { Input } from '@/components/ui/input';
import type { Unit, UnitRarity, UnitRole } from '@/data/animeparadoxx/types';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { UnitCard } from './unit-card';

export function UnitsBrowser({ units }: { units: Unit[] }) {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState<UnitRole | 'all'>('all');
  const [rarity, setRarity] = useState<UnitRarity | 'all'>('all');
  const roles = ['all', ...new Set(units.map((unit) => unit.role))] as Array<
    UnitRole | 'all'
  >;
  const rarities = [
    'all',
    ...new Set(units.map((unit) => unit.rarity)),
  ] as Array<UnitRarity | 'all'>;
  const filtered = useMemo(
    () =>
      units.filter((unit) => {
        const text = [
          unit.name,
          unit.alias,
          unit.role,
          unit.rarity,
          unit.combatStyle,
          ...unit.bestTraits,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return (
          text.includes(query.toLowerCase()) &&
          (role === 'all' || unit.role === role) &&
          (rarity === 'all' || unit.rarity === rarity)
        );
      }),
    [units, query, role, rarity]
  );
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-white/10 bg-[#0B1120] p-4">
        <div className="relative block">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search unit, role, rarity, or trait"
            className="border-white/10 bg-black/20 pl-9 text-white"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {roles.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setRole(item)}
              className={`rounded-lg border px-3 py-2 text-xs font-bold ${role === item ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 text-slate-300'}`}
            >
              {item === 'all' ? 'All roles' : item}
            </button>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {rarities.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setRarity(item)}
              className={`rounded-lg border px-3 py-2 text-xs font-bold ${rarity === item ? 'border-violet-300 bg-violet-300 text-slate-950' : 'border-white/10 text-slate-300'}`}
            >
              {item === 'all' ? 'All rarities' : item}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm text-slate-500">{filtered.length} units shown</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}
