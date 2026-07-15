import { sources } from './sources';
import type { TierEntry } from './types';

const tierSources = [sources.pggTierList, sources.destructoidTierList];

export const tierEntries: TierEntry[] = [
  [
    'storrk-resurreccion',
    'Meta',
    'overall',
    'Wide coverage and late-wave value make Storrk one of the safest all-purpose premium investments.',
  ],
  [
    'zid-atomic',
    'Meta',
    'boss',
    'Zid is a high-investment damage target once the account already has support and economy.',
  ],
  [
    'sun-jin-wu-monarch',
    'Meta',
    'overall',
    'Monarch scaling and summon pressure anchor long-mode teams.',
  ],
  [
    'idol-pop',
    'Meta',
    'support',
    'Idol improves finished carries and fits more teams than another narrow damage unit.',
  ],
  [
    'igrus-elite-knight',
    'S',
    'raid',
    'Igrus is especially valuable beside Sun Jin Wu and in sustained content.',
  ],
  [
    'brojo-six-eyes',
    'S',
    'overall',
    'Brojo mixes area pressure with control utility.',
  ],
  [
    'megumo-ten-shadows',
    'S',
    'raid',
    'Megumo provides scaling summon coverage in long modes.',
  ],
  [
    'ichuga-vasto-lorde',
    'S',
    'story',
    'Ichuga is a broad, practical evolved carry.',
  ],
  [
    'sukuno-curse-king',
    'S',
    'boss',
    'Sukuno is a strong boss-pressure choice when waves are already covered.',
  ],
  [
    'oreheme-sacred',
    'S',
    'support',
    'Oreheme adds sustain to teams that already pass damage checks.',
  ],
  [
    'bulla',
    'S',
    'support',
    'Bulla accelerates expensive upgrades in modes where economy has time to pay back.',
  ],
  [
    'executioner-awakened',
    'A',
    'early',
    'Executioner is a reachable evolved carry for progression accounts.',
  ],
  [
    'ulquiarro-murcielago',
    'A',
    'story',
    'Ulquiarro provides reliable area damage before secret carries arrive.',
  ],
  [
    'shadow-vampire',
    'A',
    'early',
    'Shadow Vampire is a useful transitional unit that should not consume premium rerolls.',
  ],
  [
    'sakura',
    'B',
    'early',
    'Sakura fills an early support gap but is not a long-term build priority.',
  ],
].map(([unitSlug, tier, mode, reason]) => ({
  unitSlug,
  tier,
  mode,
  reason,
  confidence: 'medium',
  sources: tierSources,
})) as TierEntry[];

export const tierMethodology = [
  'Role coverage matters: one support or farm unit can improve several carries.',
  'Current re-release usefulness is weighted above old patch statistics.',
  'Obtainability and upgrade cost matter for beginner recommendations.',
  'Exact rankings remain provisional while the July 2026 re-release meta settles.',
];
