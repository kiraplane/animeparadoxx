import { sources } from './sources';
import type { GameCode } from './types';

export const codes: GameCode[] = [
  {
    code: 'BIGTHINGSSOON',
    reward:
      'Free limited-time rewards; the exact contents are not consistently itemized.',
    status: 'working',
    firstSeen: '2026-07-15',
    lastChecked: '2026-07-21',
    sources: [sources.tryHardCodes, sources.nerdsChalkCodes],
    notes:
      'Newest cross-source-consistent code in the July 19 pass. Copy the uppercase spelling exactly and redeem it before the older re-release batch.',
  },
  {
    code: 'OOPSIES!!',
    reward:
      'Free re-release rewards; exact contents were not consistently itemized.',
    status: 'working',
    firstSeen: '2026-07-13',
    lastChecked: '2026-07-21',
    sources: [sources.pggCodes, sources.mrGuiderCodes],
    notes:
      'Cross-source-consistent spelling. Redeem promptly because release compensation codes can expire quickly.',
  },
  {
    code: 'Re-Release!',
    reward:
      '50 Trait Rerolls, 2,000 Gems, 7,500 Gold, mixed Essences and 1 Rainbow Essence.',
    status: 'working',
    firstSeen: '2026-07-13',
    lastChecked: '2026-07-21',
    sources: [sources.pggCodes, sources.mrGuiderCodes],
    notes: 'Use the exact capital R characters and final exclamation mark.',
  },
  {
    code: 'PARADOX!!',
    reward: '50 Trait Rerolls, 2,500 Gems and 2,000 APX Coins.',
    status: 'working',
    firstSeen: '2026-07-13',
    lastChecked: '2026-07-21',
    sources: [sources.pggCodes, sources.mrGuiderCodes],
    notes: 'Two exclamation marks are part of the published spelling.',
  },
  {
    code: 'HolyMoly',
    reward:
      '75 Trait Rerolls, 5,000 Gems, 35 Stat Chips and 25 Super Stat Chips.',
    status: 'working',
    firstSeen: '2026-07-13',
    lastChecked: '2026-07-21',
    sources: [sources.pggCodes, sources.mrGuiderCodes],
    notes: 'Spend the rerolls only after choosing a unit you expect to keep.',
  },
  {
    code: 'NoctisBoctis',
    reward: '1 Trait Reroll, 1 Gem and 1 Gold.',
    status: 'working',
    firstSeen: '2026-07-13',
    lastChecked: '2026-07-21',
    sources: [sources.pggCodes, sources.mrGuiderCodes],
    notes: 'A small novelty reward, but the mixed-case spelling still matters.',
  },
  {
    code: 'SORRYFORDELAY!!',
    reward: 'Reported as 50 Trait Rerolls, 1,000 Gems and 1,512 Gold.',
    status: 'needs_check',
    firstSeen: '2026-07-13',
    lastChecked: '2026-07-21',
    sources: [sources.pggCodes, sources.mrGuiderCodes, sources.redditCodes],
    notes:
      'Current sources disagree between one and two final exclamation marks. Try the in-game announcement spelling first; this page does not mark either variant guaranteed.',
  },
  ...[
    'FreeTrophies',
    'UPDATE3.5!',
    'SBR!',
    'NyoHo',
    'RESTOCK',
    'SORRYFORBUGS',
    'Update3Fumble',
    'FATE!',
    'ANIMEPARADOX2026',
    'RECORDOFRAGNAROK',
  ].map(
    (code): GameCode => ({
      code,
      reward:
        'Old Anime Paradox reward; not active for the current X re-release.',
      status: 'expired',
      lastChecked: '2026-07-21',
      sources: [sources.pggCodes, sources.mrGuiderCodes],
      notes:
        'Archived to prevent an old Update 3/3.5 code from being mistaken for a current X code.',
    })
  ),
];

export const activeCodes = codes.filter((item) => item.status === 'working');
export const needsCheckCodes = codes.filter(
  (item) => item.status === 'needs_check'
);
export const expiredCodes = codes.filter((item) => item.status === 'expired');
