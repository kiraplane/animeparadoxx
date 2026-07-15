import type { TopicPage } from './types';

export const topics: Record<string, TopicPage> = {
  evolution: {
    route: '/evolution',
    label: 'Evolution',
    eyebrow: 'Growth system',
    title: 'Anime Paradox X Evolution Guide',
    description:
      'How to choose an evolution target, check current materials, and avoid wasting scarce items.',
    summary:
      'Evolution is a commitment decision. Confirm the live recipe, unit role, and team gap before crafting.',
    sections: [
      {
        heading: 'Safe evolution workflow',
        paragraphs: [
          'Open the live unit index or evolution panel first. Old Anime Paradox recipes may no longer match Anime Paradox X.',
        ],
        bullets: [
          'Choose a unit that fixes a real team gap.',
          'Confirm every current material in game.',
          'Farm the bottleneck before spending universal materials.',
          'Evolve first; reroll premium traits after the final form is secured.',
        ],
      },
      {
        heading: 'What to evolve first',
        paragraphs: [
          'A reachable main carry usually beats a half-finished secret project. Executioner (Awakened), Ulquiarro (Murcielago), and Ichuga (Vasto Lorde) are useful comparison pages, but availability must be checked live.',
        ],
        links: [
          { label: 'Compare units', href: '/units' },
          { label: 'Build a team', href: '/best-team' },
        ],
      },
    ],
    faq: [
      {
        question: 'Do old Anime Paradox evolution recipes still work?',
        answer:
          'Do not assume so. Use old guides only to understand the system, then confirm the current X recipe in game.',
      },
      {
        question: 'Should I reroll before evolving?',
        answer:
          'Usually no. Secure the final form and role first, then invest premium rerolls.',
      },
    ],
    relatedRoutes: ['/materials', '/units', '/guides/evolution-guide'],
  },
  materials: {
    route: '/materials',
    label: 'Materials',
    eyebrow: 'Farming decisions',
    title: 'Anime Paradox X Materials & Items',
    description:
      'A current-safe material guide focused on farming decisions instead of stale recipe counts.',
    summary:
      'Treat the in-game recipe panel as the source of truth and farm toward one finished build at a time.',
    sections: [
      {
        heading: 'Material categories to protect',
        paragraphs: [
          'Essences, stat chips, super stat chips, trait rerolls, gems, gold, and unit-specific evolution items all compete for your time. Exact recipes are patch-sensitive.',
        ],
        bullets: [
          'Claim working codes before farming.',
          'Reserve trait rerolls for permanent units.',
          'Use stat chips only after deciding the role.',
          'Do not convert a universal material until the full recipe is visible.',
        ],
      },
      {
        heading: 'Farm by bottleneck',
        paragraphs: [
          'Pick one evolution or build, identify its rarest missing item, and choose the mode that drops that item. Avoid spreading stamina across several incomplete units.',
        ],
        links: [
          { label: 'Current codes', href: '/codes' },
          { label: 'Evolution guide', href: '/evolution' },
        ],
      },
    ],
    faq: [
      {
        question: 'Where are exact material recipes?',
        answer:
          'Check the current in-game evolution panel. The re-release can invalidate older counts.',
      },
      {
        question: 'What should beginners save?',
        answer:
          'Premium trait rerolls, universal materials, and high-tier stat chips.',
      },
    ],
    relatedRoutes: ['/evolution', '/codes', '/guides/materials-and-items'],
  },
  'game-modes': {
    route: '/game-modes',
    label: 'Game Modes',
    eyebrow: 'Mode directory',
    title: 'Anime Paradox X Game Modes',
    description:
      'Choose the right team and reward route for Story, Raid, Siege, Boss Rush, and AFK Chamber.',
    summary:
      'Each mode asks a different question: progression, sustained damage, boss pressure, or passive farming.',
    sections: [
      {
        heading: 'Mode map',
        paragraphs: [
          'Start with Story, then use advanced modes when their reward solves the next account bottleneck.',
        ],
        bullets: [
          'Story: unlock progression and test the main team.',
          'Raid: sustained group pressure and targeted farming.',
          'Siege: mode-specific coordination and coverage.',
          'Boss Rush: focused boss damage and survivability.',
          'AFK Chamber: passive progress when active farming is not possible.',
        ],
      },
      {
        heading: 'Choose a team by failure point',
        paragraphs: [
          'If waves leak, add coverage or control. If the boss survives, add concentrated damage. If upgrades arrive too late, add economy only when the mode is long enough.',
        ],
        links: [
          { label: 'Best team templates', href: '/best-team' },
          { label: 'All mode guides', href: '/guides' },
        ],
      },
    ],
    faq: [
      {
        question: 'Which mode should a beginner play first?',
        answer:
          'Story, until the next unlock or material goal clearly points elsewhere.',
      },
      {
        question: 'Is one team best everywhere?',
        answer:
          'No. Keep a stable core but change economy, sustain, control, and boss slots by mode.',
      },
    ],
    relatedRoutes: ['/best-team', '/guides/story-mode', '/guides/raid-guide'],
  },
  're-release': {
    route: '/updates/re-release',
    label: 'Re-release',
    eyebrow: 'July 2026',
    title: 'Anime Paradox X Re-release Guide',
    description:
      'What changed with the July 2026 Anime Paradox X return and what to do first.',
    summary:
      'The experience is live again under the X identity. Re-check codes, recipes, banners, and rankings instead of importing old assumptions.',
    sections: [
      {
        heading: 'First-session checklist',
        paragraphs: [
          'Join through the verified Roblox experience and treat the live client as the final source for rotating details.',
        ],
        bullets: [
          'Redeem the current re-release codes.',
          'Review owned units before summoning.',
          'Choose one carry and one support path.',
          'Confirm evolution requirements in game.',
          'Unlock Story progression before niche farming.',
        ],
      },
      {
        heading: 'What this wiki marks carefully',
        paragraphs: [
          'Codes include a last-checked date, rankings use current re-release sources, and exact legacy recipes are not presented as guaranteed current facts.',
        ],
        links: [
          { label: 'Current codes', href: '/codes' },
          { label: 'Current tier list', href: '/tier-list' },
        ],
      },
    ],
    faq: [
      {
        question: 'Is Anime Paradox X a separate Roblox experience?',
        answer:
          'Use Place ID 76806550943352 and Universe ID 7652830984 as the verified identity.',
      },
      {
        question: 'Can I use old Anime Paradox guides?',
        answer:
          'Only for system orientation. Verify codes, recipes, banners, and balance in the current X client.',
      },
    ],
    relatedRoutes: ['/codes', '/guides/re-release-overview', '/official-links'],
  },
  'official-links': {
    route: '/official-links',
    label: 'Official Links',
    eyebrow: 'Verified access',
    title: 'Anime Paradox X Official Links',
    description:
      'Verified Roblox identity and clearly labeled creator/community links.',
    summary:
      'Use the Roblox experience as the identity source of truth. Community links are useful for announcements but can change.',
    sections: [
      {
        heading: 'Verified Roblox identity',
        paragraphs: [
          'Official experience: Place ID 76806550943352, Universe ID 7652830984. Creator: Lunmei, Group ID 35958846.',
        ],
        links: [
          {
            label: 'Play Anime Paradox X on Roblox',
            href: 'https://www.roblox.com/games/76806550943352/Anime-Paradox-X',
          },
          {
            label: 'Lunmei creator group',
            href: 'https://www.roblox.com/communities/35958846/Lunmei',
          },
        ],
      },
      {
        heading: 'Community and creator channels',
        paragraphs: [
          'The current Discord invite and Lunmei Games X account are secondary references. Check the destination identity before signing in or trusting a giveaway.',
        ],
        links: [
          {
            label: 'Anime Paradox Discord',
            href: 'https://discord.com/invite/animeparadox',
          },
          { label: 'Lunmei Games on X', href: 'https://x.com/LunmeiGames' },
        ],
      },
      {
        heading: 'Safety',
        paragraphs: [
          'This wiki does not provide scripts, executors, macros, modified clients, or Robux generators. Never share a Roblox password, cookie, or recovery code.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Anime Paradox X Roblox game?',
        answer: 'The verified experience uses Place ID 76806550943352.',
      },
      {
        question: 'Does this wiki offer scripts?',
        answer:
          'No. Use the official Roblox client and avoid credential-stealing tools.',
      },
    ],
    relatedRoutes: ['/updates/re-release', '/disclaimer'],
  },
};

export function getTopic(slug: string) {
  return topics[slug];
}
