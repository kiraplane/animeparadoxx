import type { TeamBuild } from './types';

export const teams: TeamBuild[] = [
  {
    id: 'beginner-core',
    name: 'Beginner Progression Core',
    purpose: 'Clear early story while preserving scarce resources',
    core: ['shadow-vampire', 'sakura', 'executioner-awakened'],
    substitutes: [
      'Ulquiarro (Murcielago) for the main carry',
      'Any current support before another filler DPS',
      'Bulla only when the stage is long enough',
    ],
    notes:
      'Build one damage unit first, use cheap role coverage, and save premium trait rerolls for a unit you expect to keep.',
    confidence: 'medium',
  },
  {
    id: 'balanced-rerelease',
    name: 'Balanced Re-release Team',
    purpose: 'General story, raid, and farming coverage',
    core: ['storrk-resurreccion', 'idol-pop', 'bulla'],
    substitutes: [
      'Ichuga (Vasto Lorde) for Storrk',
      'Oreheme (Sacred) when sustain matters',
      'Brojo (Six Eyes) when control matters',
    ],
    notes:
      'The shape matters more than exact ownership: one carry, one multiplier/support, and one economy or utility slot.',
    confidence: 'medium',
  },
  {
    id: 'monarch-long-mode',
    name: 'Monarch Long-mode Core',
    purpose: 'Scale through raids, Boss Rush, and long waves',
    core: ['sun-jin-wu-monarch', 'igrus-elite-knight', 'idol-pop'],
    substitutes: [
      'Bulla for upgrade tempo',
      'Oreheme (Sacred) for sustain',
      'Megumo (Ten Shadows) for extra summon coverage',
    ],
    notes:
      'Protect the opening with an affordable unit, then let the Monarch/Igrus engine take over.',
    confidence: 'medium',
  },
  {
    id: 'boss-pressure',
    name: 'Boss Pressure Core',
    purpose: 'Concentrate damage on elite and boss targets',
    core: ['zid-atomic', 'sukuno-curse-king', 'idol-pop'],
    substitutes: [
      'Storrk (Resurreccion) for better wave coverage',
      'Brojo (Six Eyes) for control',
      'Oreheme (Sacred) for survival',
    ],
    notes:
      'Do not run three expensive boss units if the team cannot survive or fund the opening waves.',
    confidence: 'medium',
  },
];
