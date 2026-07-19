import type { Guide } from './types';

const hero = '/animeparadoxx/media/official-1.png';
const beginnerVideo = {
  id: '0sadfUyWA5w',
  title: '*BEGINNER GUIDE* HOW TO PROGRESS FAST IN ANIME PARADOX X!',
  channel: 'ArchieBloxYT',
  url: 'https://www.youtube.com/watch?v=0sadfUyWA5w',
  thumbnailUrl: 'https://i.ytimg.com/vi/0sadfUyWA5w/hq720.jpg',
  checkedAt: '2026-07-19',
};
const rereleaseVideo = {
  id: 'Z3Rq9W6tm6U',
  title: 'This Anime Tower Defense is BACK...',
  channel: 'NagBlox',
  url: 'https://www.youtube.com/watch?v=Z3Rq9W6tm6U',
  thumbnailUrl: 'https://i.ytimg.com/vi/Z3Rq9W6tm6U/hq720.jpg',
  checkedAt: '2026-07-19',
};
const starterVideo = {
  id: 'j9QeVACQFnU',
  title: 'Best Starter Units in Anime Paradox X',
  channel: 'ArchieBloxYT',
  url: 'https://www.youtube.com/watch?v=j9QeVACQFnU',
  thumbnailUrl: 'https://i.ytimg.com/vi/j9QeVACQFnU/hq720.jpg',
  checkedAt: '2026-07-19',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Anime Paradox X Beginner Guide',
    seoTitle: 'Anime Paradox X Beginner Guide - First Team & Progression',
    seoDescription:
      'Start Anime Paradox X with the right codes, first carry, team roles, Story route, materials, and resource priorities.',
    summary:
      'Redeem the current codes, build one dependable carry, add role coverage, and let the next blocked stage choose your farm.',
    category: 'Start Here',
    sourceStrategy: 'user_intent_youtube',
    video: beginnerVideo,
    videoSearchQueries: [
      'anime paradox x beginner guide',
      'anime paradox x progression',
    ],
    sourceNotes:
      'Current exact-intent video, cross-checked against the live re-release identity.',
    coverImageUrl: beginnerVideo.thumbnailUrl,
    tags: ['Beginner', 'Progression', 'First Team'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Your first ten minutes',
        paragraphs: [
          'Join through the verified Roblox experience, redeem every working code, and inspect the starter roster before summoning. Release rewards are most valuable before the first large spend.',
        ],
        bullets: [
          'Copy punctuation exactly on the Codes page.',
          'Keep premium trait rerolls untouched.',
          'Choose one affordable unit to carry early Story.',
        ],
      },
      {
        heading: 'Build roles, not six random units',
        paragraphs: [
          'Start with one carry, one support or control unit, and an economy slot only when the stage is long enough. A finished simple team clears more than six half-built rare units.',
        ],
        bullets: [
          'Upgrade the main carry first.',
          'Add wave coverage when enemies leak.',
          'Add boss damage only when the boss is the failure point.',
        ],
      },
      {
        heading: 'Let progression choose the farm',
        paragraphs: [
          'Push Story until a clear bottleneck appears. Then farm the missing material, level, or team role instead of rotating through every mode. Confirm all evolution recipes in the current X client.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I spend first?',
        answer:
          'Use free code resources to establish one main carry; save premium trait rerolls and universal materials.',
      },
      {
        question: 'When should I leave Story?',
        answer:
          'When the next meaningful upgrade comes from a named material or mode unlock rather than another Story clear.',
      },
    ],
    relatedRoutes: ['/codes', '/units', '/best-team', '/game-modes'],
  },
  {
    slug: 'fast-progression',
    title: 'How to Progress Fast in Anime Paradox X',
    seoTitle: 'Anime Paradox X Fast Progression Guide',
    seoDescription:
      'A fast Anime Paradox X progression route for Story, codes, team upgrades, modes, materials, and AFK time.',
    summary:
      'Fast progress comes from finishing one upgrade loop at a time, not from touching every system on day one.',
    category: 'Start Here',
    sourceStrategy: 'user_intent_youtube',
    video: beginnerVideo,
    coverImageUrl: beginnerVideo.thumbnailUrl,
    tags: ['Fast Progression', 'Story', 'Farming'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Convert codes into progress',
        paragraphs: [
          'Redeem current codes before the first summon or reroll session. Gems and gold accelerate the opening; scarce rerolls should wait for a long-term unit.',
        ],
      },
      {
        heading: 'Use a push, diagnose, farm loop',
        paragraphs: [
          'Push the next stage, identify exactly why the run failed, then farm only the fix. Early leaks need coverage or placement; late bosses need damage; slow upgrades may justify economy.',
        ],
        bullets: [
          'Do not farm without a named target.',
          'Finish one evolution before starting three.',
          'Use AFK Chamber when active play is not possible.',
        ],
      },
      {
        heading: 'Protect the account ceiling',
        paragraphs: [
          'Temporary units need practical upgrades, not perfect traits. The resources you preserve early become the final build for Storrk, Zid, Sun Jin Wu, or another current carry.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the fastest mode?',
        answer:
          'The best mode is the one that drops the exact resource blocking your next finished upgrade.',
      },
      {
        question: 'Should I reroll starter units?',
        answer:
          'Use only cheap practical rolls; keep rare rerolls for permanent units.',
      },
    ],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/materials',
      '/evolution',
      '/game-modes',
    ],
  },
  {
    slug: 'best-starter-units',
    title: 'Best Starter Units in Anime Paradox X',
    seoTitle: 'Anime Paradox X Best Starter Units',
    seoDescription:
      'Choose Anime Paradox X starter units by role, upgrade cost, Story usefulness, and long-term resource safety.',
    summary:
      'The best starter is the unit you can finish without blocking the account, backed by cheap support and a clear replacement plan.',
    category: 'Units & Teams',
    sourceStrategy: 'user_intent_youtube',
    video: starterVideo,
    coverImageUrl: starterVideo.thumbnailUrl,
    tags: ['Starter Units', 'Units', 'Beginner'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Use accessibility as a strength',
        paragraphs: [
          'Shadow Vampire and Sakura are useful examples of transitional roles, while Executioner (Awakened) or Ulquiarro (Murcielago) can become reachable carry projects. Check the current roster before copying any name.',
        ],
      },
      {
        heading: 'Pick one damage project',
        paragraphs: [
          'A starter carry must clear waves at a cost your account can fund. Add support after the carry has a stable upgrade curve, and use Bulla only in modes long enough to repay the slot.',
        ],
      },
      {
        heading: 'Know when to stop investing',
        paragraphs: [
          'Once a stronger current carry arrives, move resources forward. Do not chase Eternal or another ultra-rare trait on a unit you plan to replace.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is rarity the same as starter value?',
        answer:
          'No. Upgrade cost, obtainability, and role coverage matter more during early Story.',
      },
      {
        question: 'Can a starter stay useful?',
        answer:
          'Yes, especially supports, but review the slot whenever a stronger role specialist arrives.',
      },
    ],
    relatedRoutes: ['/units', '/tier-list', '/guides/how-to-build-a-team'],
  },
  {
    slug: 'how-to-build-a-team',
    title: 'How to Build a Team in Anime Paradox X',
    seoTitle: 'Anime Paradox X Team Building Guide',
    seoDescription:
      'Build an Anime Paradox X team with carry, support, control, farm, summon, and boss roles.',
    summary:
      'Start with a carry and add each later slot only when it solves a measured failure.',
    category: 'Units & Teams',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['Teams', 'Roles', 'Meta'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Choose the win condition',
        paragraphs: [
          'Storrk covers broad waves, Zid pressures bosses, and Sun Jin Wu builds a long-mode summon engine. Pick the job before comparing rarity.',
        ],
      },
      {
        heading: 'Add multipliers and stability',
        paragraphs: [
          'Idol improves the team engine, Oreheme adds sustain, Brojo adds control, and Bulla changes upgrade timing. Each earns a slot only when the target mode benefits.',
        ],
      },
      {
        heading: 'Test one change at a time',
        paragraphs: [
          'Run the same mode after changing one unit, trait, or upgrade order. If several layers change together, you cannot tell which investment solved the stage.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many carries should I use?',
        answer:
          'Usually one primary carry first; add a second only after support, opening cost, and mode needs are covered.',
      },
      {
        question: 'Is Bulla required?',
        answer:
          'No. Economy is valuable only when the stage lasts long enough to recover the slot and upgrade cost.',
      },
    ],
    relatedRoutes: ['/best-team', '/units', '/traits', '/game-modes'],
  },
  {
    slug: 'evolution-guide',
    title: 'Anime Paradox X Evolution Guide',
    seoTitle: 'Anime Paradox X Evolution Guide - What to Evolve First',
    seoDescription:
      'Plan Anime Paradox X evolutions with current recipes, material bottlenecks, unit roles, and safe investment order.',
    summary:
      'Verify the live recipe, finish the form, and only then spend premium traits and stat resources.',
    category: 'Traits & Growth',
    sourceStrategy: 'community_crosscheck',
    coverImageUrl: hero,
    tags: ['Evolution', 'Materials', 'Units'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Treat old recipes as historical',
        paragraphs: [
          'The X re-release can change counts, sources, and availability. Use older guides to understand the interface, but use the current evolution panel as the source of truth.',
        ],
      },
      {
        heading: 'Evolve the account gap',
        paragraphs: [
          'Choose a carry when damage blocks progress, control when waves leak, or sustain when a team collapses. A rarer form that does not solve the gap is not the next upgrade.',
        ],
      },
      {
        heading: 'Spend in a safe order',
        paragraphs: [
          'Confirm the recipe, farm the bottleneck, evolve, test the final form, then invest rerolls and stat chips. This prevents premium resources from being trapped on an unfinished route.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I evolve first?',
        answer:
          'A reachable unit that fixes your current Story or mode blocker.',
      },
      {
        question: 'Are legacy recipes reliable?',
        answer:
          'Not as current facts; confirm every requirement inside Anime Paradox X.',
      },
    ],
    relatedRoutes: ['/evolution', '/materials', '/units'],
  },
  {
    slug: 'etherealize-guide',
    title: 'Anime Paradox X Etherealize Guide',
    seoTitle: 'Anime Paradox X Etherealize Guide',
    seoDescription:
      'Understand Anime Paradox X Etherealize decisions, resource safety, and when a unit is ready for deeper investment.',
    summary:
      'Etherealize is an official core growth mechanic, but live requirements should be checked in game before committing materials.',
    category: 'Traits & Growth',
    sourceStrategy: 'official',
    coverImageUrl: hero,
    tags: ['Etherealize', 'Growth', 'Materials'],
    difficulty: 'Advanced',
    body: [
      {
        heading: 'Use the live panel as truth',
        paragraphs: [
          'The official game description names Etherealize as a core growth action. Exact costs and eligibility can change, so this guide focuses on decision order rather than unverified numbers.',
        ],
      },
      {
        heading: 'Prepare a permanent unit',
        paragraphs: [
          'Only deepen investment after the unit has a stable team role, reachable final form, and regular use in the mode you care about.',
        ],
      },
      {
        heading: 'Test before and after',
        paragraphs: [
          'Record the unit, team, mode, and failure wave before spending. Re-run the same setup afterward to measure whether the resource changed a real clear.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which unit should I Etherealize?',
        answer:
          'A permanent unit whose role and final form already solve content you play regularly.',
      },
      {
        question: 'Where are the exact costs?',
        answer:
          'Use the current in-game Etherealize panel; no legacy count is presented here as guaranteed.',
      },
    ],
    relatedRoutes: ['/evolution', '/materials', '/tier-list'],
  },
  {
    slug: 'materials-and-items',
    title: 'Anime Paradox X Materials and Items Guide',
    seoTitle: 'Anime Paradox X Materials & Items Guide',
    seoDescription:
      'Protect and farm Anime Paradox X essences, stat chips, trait rerolls, evolution items, gems, and gold.',
    summary:
      'Name the build, identify its bottleneck, and farm that item instead of accumulating disconnected materials.',
    category: 'Traits & Growth',
    sourceStrategy: 'community_crosscheck',
    coverImageUrl: hero,
    tags: ['Materials', 'Items', 'Farming'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Know the resource jobs',
        paragraphs: [
          'Gems and gold support the opening economy; essences and unit items gate evolutions; stat chips refine finished units; trait rerolls can change the value of a permanent carry.',
        ],
      },
      {
        heading: 'Protect scarce resources',
        paragraphs: [
          'Claim code rewards, avoid rolling temporary units, and keep universal materials until the full live recipe is visible.',
        ],
      },
      {
        heading: 'Farm the bottleneck',
        paragraphs: [
          'When a recipe is chosen, target the rarest missing input first. Recheck the panel before conversion or crafting because re-release values may move.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should beginners save?',
        answer:
          'Premium trait rerolls, high-tier stat chips, and universal evolution materials.',
      },
      {
        question: 'Why are exact recipes omitted?',
        answer:
          'Older pages may not match the current X re-release; the in-game panel is safer.',
      },
    ],
    relatedRoutes: ['/materials', '/codes', '/evolution'],
  },
  {
    slug: 'trait-reroll-strategy',
    title: 'Anime Paradox X Trait Reroll Strategy',
    seoTitle: 'Anime Paradox X Traits & Reroll Strategy',
    seoDescription:
      'Know when to keep Eternal, Vampiric, Angelic, Revenant, Blessing, or Greed in Anime Paradox X.',
    summary:
      'Roll for the unit role, stop at a strong practical result, and improve the rest of the team before chasing perfection.',
    category: 'Traits & Growth',
    sourceStrategy: 'community_crosscheck',
    coverImageUrl: hero,
    tags: ['Traits', 'Rerolls', 'Builds'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Set the role before rolling',
        paragraphs: [
          'Damage and boss units value premium offensive rolls; supports value useful uptime or flexibility; farm units have the clearest case for Greed.',
        ],
      },
      {
        heading: 'Use stop points',
        paragraphs: [
          'Eternal, Vampiric, and Angelic are exceptionally rare. Revenant or Blessing can be sensible endpoints when the whole account still needs work.',
        ],
      },
      {
        heading: 'Avoid sunk-cost rolling',
        paragraphs: [
          'A long streak does not make the next roll better. Keep a usable result, test the unit, and only reopen the trait project when the team is otherwise complete.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I keep Greed?',
        answer:
          'Keep it on a dedicated farm unit such as Bulla; reroll it from a permanent damage carry.',
      },
      {
        question: 'Is Eternal required?',
        answer:
          'No. A complete team with practical traits usually beats one perfect trait surrounded by unfinished units.',
      },
    ],
    relatedRoutes: ['/traits', '/units', '/best-team'],
  },
  {
    slug: 'unit-passives',
    title: 'Anime Paradox X Unit Passives Guide',
    seoTitle: 'Anime Paradox X Unit Passives Explained',
    seoDescription:
      'Evaluate Anime Paradox X unit passives by role, trigger, mode, team synergy, and real clear value.',
    summary:
      'A passive matters only when its trigger appears in the mode and changes the job your team needs.',
    category: 'Units & Teams',
    sourceStrategy: 'community_crosscheck',
    coverImageUrl: hero,
    tags: ['Passives', 'Units', 'Builds'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Read the trigger first',
        paragraphs: [
          'Separate permanent bonuses from effects that require a wave, target type, partner, summon, or health state. A powerful condition can be irrelevant on a short farm map.',
        ],
      },
      {
        heading: 'Map passive to role',
        paragraphs: [
          'Carry passives should improve damage windows, control passives should prevent leaks, and support passives should increase team output or survival.',
        ],
      },
      {
        heading: 'Test in the target mode',
        paragraphs: [
          'Use the same upgrade order and note when the passive activates. Legacy passive pages are orientation only until current behavior is confirmed.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do old passive values still apply?',
        answer:
          'Do not assume so after the X re-release; confirm current tooltips and behavior.',
      },
      {
        question: 'Is a rare passive always better?',
        answer: 'No. Trigger reliability and role fit determine real value.',
      },
    ],
    relatedRoutes: ['/units', '/best-team', '/tier-list'],
  },
  {
    slug: 'how-to-get-secret-units',
    title: 'How to Get Secret Units in Anime Paradox X',
    seoTitle: 'Anime Paradox X Secret Units Guide',
    seoDescription:
      'Plan for Anime Paradox X Secret units without wasting gems, pity progress, materials, or trait rerolls.',
    summary:
      'Verify the active source and pity rules in game, then budget enough to finish the unit rather than chasing a screenshot.',
    category: 'Units & Teams',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['Secret Units', 'Summoning', 'Pity'],
    difficulty: 'Advanced',
    body: [
      {
        heading: 'Verify the current source',
        paragraphs: [
          'Secret units may come from banners, modes, evolution paths, or limited systems. Check the current unit index and banner details before spending.',
        ],
      },
      {
        heading: 'Budget the complete build',
        paragraphs: [
          'Acquisition is only the first cost. Include evolution materials, levels, stat chips, support slots, and a practical trait plan.',
        ],
      },
      {
        heading: 'Do not confuse rarity with need',
        paragraphs: [
          'Storrk, Zid, and Sun Jin Wu have strong current signals, but the best chase is the one that fixes your account and has a realistic completion path.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Secret unit?',
        answer:
          'It depends on role: Storrk for broad carry coverage, Zid for boss pressure, and Sun Jin Wu for long-mode summons are useful current comparisons.',
      },
      {
        question: 'Should I spend every gem?',
        answer:
          'Only after confirming the active source, pity rules, and a reserve for the rest of the build.',
      },
    ],
    relatedRoutes: ['/units', '/tier-list', '/guides/summoning-and-pity'],
  },
  {
    slug: 'summoning-and-pity',
    title: 'Anime Paradox X Summoning and Pity Guide',
    seoTitle: 'Anime Paradox X Summoning & Pity Guide',
    seoDescription:
      'Use Anime Paradox X banners and pity safely by checking live rates, featured units, rotation, and budget.',
    summary:
      'The live banner panel is the only safe source for current rates and pity; decide the target and stop condition before summoning.',
    category: 'Units & Teams',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['Summoning', 'Pity', 'Gems'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Read the banner before the first pull',
        paragraphs: [
          'Confirm the featured roster, exact rate display, pity behavior, currency, and rotation timer. Screenshots from the old game may be wrong.',
        ],
      },
      {
        heading: 'Set a stop condition',
        paragraphs: [
          'Choose a target, a gem reserve, and the point where a usable account upgrade is better than continuing. Do not turn compensation codes into an unplanned chase.',
        ],
      },
      {
        heading: 'Evaluate the whole account',
        paragraphs: [
          'If a team lacks support or economy, a mid-rarity role unit may improve progress more than another premium damage project.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does pity carry over?',
        answer:
          'Check the current banner panel or official announcement; this can change and is not assumed here.',
      },
      {
        question: 'When should I summon?',
        answer:
          'When the active pool contains a unit that fixes a real gap and your budget has a clear stop point.',
      },
    ],
    relatedRoutes: ['/codes', '/units', '/guides/how-to-get-secret-units'],
  },
  {
    slug: 'story-mode',
    title: 'Anime Paradox X Story Mode Guide',
    seoTitle: 'Anime Paradox X Story Mode Progression Guide',
    seoDescription:
      'Clear Anime Paradox X Story by diagnosing wave leaks, boss checks, upgrade timing, and team roles.',
    summary:
      'Story is the progression spine: push until failure, identify the failure type, then make the smallest upgrade that fixes it.',
    category: 'Game Modes',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['Story', 'Progression', 'Teams'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Use a stable opening',
        paragraphs: [
          'Place an affordable carry or early unit first. Expensive secrets do not help if enemies leak before their first useful upgrade.',
        ],
      },
      {
        heading: 'Diagnose the lost run',
        paragraphs: [
          'Early leaks point to coverage, placement, or opening cost. A surviving boss points to concentrated damage. A collapse in long waves may need support or sustain.',
        ],
      },
      {
        heading: 'Move modes with a reason',
        paragraphs: [
          'Leave Story temporarily when an evolution item, level gate, or named reward from another mode is the exact next upgrade.',
        ],
      },
    ],
    faq: [
      {
        question: 'What team clears Story?',
        answer:
          'One affordable carry, support or control, and later a boss or economy slot depending on the stage.',
      },
      {
        question: 'Should I auto-farm old stages?',
        answer:
          'Yes when they drop the exact resource you need; otherwise push progression.',
      },
    ],
    relatedRoutes: ['/game-modes', '/best-team', '/guides/fast-progression'],
  },
  {
    slug: 'raid-guide',
    title: 'Anime Paradox X Raid Guide',
    seoTitle: 'Anime Paradox X Raid Guide - Teams & Farming',
    seoDescription:
      'Prepare an Anime Paradox X Raid team with sustained damage, support, economy, and current reward checks.',
    summary:
      'Raids reward a stable team engine: cover the opening, scale a carry, and farm only when the reward advances a chosen build.',
    category: 'Game Modes',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['Raid', 'Teams', 'Farming'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Enter with a reward target',
        paragraphs: [
          'Check the current Raid reward before repeating the mode. Farm because it completes an evolution or build, not because Raid is available.',
        ],
      },
      {
        heading: 'Balance opening and scaling',
        paragraphs: [
          'Sun Jin Wu with Igrus is a strong long-mode shape, while Storrk offers broad coverage. Add Idol, Bulla, or Oreheme according to the actual failure.',
        ],
      },
      {
        heading: 'Coordinate group roles',
        paragraphs: [
          'In team play, avoid duplicating every support and economy slot. Agree on who covers early waves, team amplification, and boss pressure.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Raid carry?',
        answer:
          'Use a finished current carry; Storrk and Monarch-oriented teams are useful comparisons, but mode mechanics matter.',
      },
      {
        question: 'Is economy good in Raid?',
        answer:
          'Only when the run lasts long enough and the team can survive the lost combat slot.',
      },
    ],
    relatedRoutes: ['/game-modes', '/best-team', '/units'],
  },
  {
    slug: 'siege-guide',
    title: 'Anime Paradox X Siege Guide',
    seoTitle: 'Anime Paradox X Siege Guide - Team Roles',
    seoDescription:
      'Build an Anime Paradox X Siege team by checking current objectives, enemy lanes, control, and group roles.',
    summary:
      'Read the current Siege objective first, then build for coverage and coordination instead of copying a generic damage list.',
    category: 'Game Modes',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['Siege', 'Teams', 'Control'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Confirm the live objective',
        paragraphs: [
          'Siege rules and rewards are current-client facts. Check the mode panel before assuming the old Anime Paradox route still applies.',
        ],
      },
      {
        heading: 'Cover lanes and timing',
        paragraphs: [
          'Area damage and control often matter when pressure arrives across lanes. Brojo-style control can be more valuable than a third boss specialist.',
        ],
      },
      {
        heading: 'Build a group plan',
        paragraphs: [
          'Share supports and assign opening, scaling, and boss roles. The strongest individual roster can still fail when every player saves for an expensive unit.',
        ],
      },
    ],
    faq: [
      {
        question: 'What units are best for Siege?',
        answer:
          'Prioritize reliable area coverage, control, and one finished carry; adjust after reading the current objective.',
      },
      {
        question: 'Can I solo Siege?',
        answer:
          'Check the current mode requirements; if solo is available, use a balanced team rather than group-specialized slots.',
      },
    ],
    relatedRoutes: ['/game-modes', '/best-team', '/units/brojo-six-eyes'],
  },
  {
    slug: 'boss-rush-guide',
    title: 'Anime Paradox X Boss Rush Guide',
    seoTitle: 'Anime Paradox X Boss Rush Guide',
    seoDescription:
      'Build Anime Paradox X Boss Rush teams with focused damage, sustain, support, and safe upgrade timing.',
    summary:
      'Boss Rush asks for concentrated damage without losing the opening: fund one boss carry, amplify it, and add sustain only when required.',
    category: 'Game Modes',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['Boss Rush', 'Boss', 'Teams'],
    difficulty: 'Advanced',
    body: [
      {
        heading: 'Choose one boss engine',
        paragraphs: [
          'Zid or Sukuno are current boss-pressure comparisons. A broad carry such as Storrk may be safer when waves between bosses still matter.',
        ],
      },
      {
        heading: 'Amplify instead of duplicating',
        paragraphs: [
          'Idol can improve the primary engine; Oreheme adds sustain if survival is the check. A third expensive boss unit may delay the upgrade that matters.',
        ],
      },
      {
        heading: 'Measure each boss',
        paragraphs: [
          'Record where the run ends and whether the failure is damage, uptime, or survival. Change one slot or upgrade order at a time.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is best for Boss Rush?',
        answer:
          'Use your most complete boss-focused carry; Zid and Sukuno are current comparison points.',
      },
      {
        question: 'Do I need sustain?',
        answer: 'Only if survival, not damage, ends the run.',
      },
    ],
    relatedRoutes: ['/game-modes', '/best-team', '/units/zid-atomic'],
  },
  {
    slug: 'afk-chamber',
    title: 'Anime Paradox X AFK Chamber Guide',
    seoTitle: 'Anime Paradox X AFK Chamber Guide',
    seoDescription:
      'Use the Anime Paradox X AFK Chamber efficiently and verify current timers, caps, rewards, and session rules.',
    summary:
      'AFK progress complements targeted active farming; check the live reward rate and collect before any current cap.',
    category: 'Game Modes',
    sourceStrategy: 'manual_data',
    coverImageUrl: hero,
    tags: ['AFK Chamber', 'Farming', 'Progression'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Check the live rules',
        paragraphs: [
          'Timers, reward pools, caps, and reconnection behavior can change. Read the current AFK interface before planning around an old guide.',
        ],
      },
      {
        heading: 'Use idle time for broad resources',
        paragraphs: [
          'AFK rewards are best when active time is reserved for specific evolution items, modes, and first clears.',
        ],
      },
      {
        heading: 'Collect and convert deliberately',
        paragraphs: [
          'After collecting, assign rewards to the same carry or evolution target you were already building. Passive income should not create five new unfinished projects.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long can I stay AFK?',
        answer:
          'Check the current in-game timer or cap; this guide does not assume a legacy duration.',
      },
      {
        question: 'Is AFK faster than active farming?',
        answer:
          'Usually it is a supplement. Active modes are better when you need a specific reward.',
      },
    ],
    relatedRoutes: ['/game-modes', '/materials', '/guides/fast-progression'],
  },
  {
    slug: 'codes-redeem-troubleshooting',
    title: 'Anime Paradox X Codes Not Working?',
    seoTitle: 'Anime Paradox X Codes Not Working - Fixes',
    seoDescription:
      'Fix Anime Paradox X code errors by checking punctuation, case, server version, expiry, and the official redemption flow.',
    summary:
      'Copy the code exactly, join a current server, and treat release codes as time-sensitive.',
    category: 'Codes',
    sourceStrategy: 'community_crosscheck',
    coverImageUrl: hero,
    tags: ['Codes', 'Troubleshooting', 'Rewards'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Use the current flow',
        paragraphs: [
          'Open Anime Paradox X, choose the Codes button on the right, paste the code, and press Redeem. Remove accidental spaces before submitting.',
        ],
      },
      {
        heading: 'Check spelling and punctuation',
        paragraphs: [
          'Capitalization and exclamation marks matter. SORRYFORDELAY has conflicting published punctuation, so the Codes page marks it needs-check instead of guaranteeing a variant.',
        ],
      },
      {
        heading: 'Refresh the server context',
        paragraphs: [
          'If a newly released code fails, join a newer server. If it still fails after exact copy, it may be expired, account-limited, or temporarily disabled.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are codes case-sensitive?',
        answer:
          'Treat them as case-sensitive and copy the displayed spelling exactly.',
      },
      {
        question: 'Why does a new code fail?',
        answer:
          'The server may be old, punctuation may differ, or the developer may have disabled the code.',
      },
    ],
    relatedRoutes: ['/codes', '/official-links', '/updates/re-release'],
  },
  {
    slug: 're-release-overview',
    title: 'Anime Paradox X Re-release Overview',
    seoTitle: 'Anime Paradox X Re-release - What to Do First',
    seoDescription:
      'Start the July 2026 Anime Paradox X re-release with verified links, working codes, current units, and safe progression.',
    summary:
      'Re-check every rotating fact after the return: codes, banners, recipes, modes, and tier rankings.',
    category: 'Re-release',
    sourceStrategy: 'popular_youtube',
    video: rereleaseVideo,
    coverImageUrl: rereleaseVideo.thumbnailUrl,
    tags: ['Re-release', 'July 2026', 'Update'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Verify the experience',
        paragraphs: [
          'The current Roblox identity uses Place ID 76806550943352, Universe ID 7652830984, and creator group Lunmei. Avoid lookalike links and script pages.',
        ],
      },
      {
        heading: 'Claim release resources',
        paragraphs: [
          'Redeem the current code set before judging the cost of summons, traits, or evolutions. Keep the disputed delay-code punctuation marked as unverified.',
        ],
      },
      {
        heading: 'Rebuild knowledge, not the whole account',
        paragraphs: [
          'Inspect what you own, test current behavior, and replace old assumptions one system at a time. Current sources support Storrk, Zid, Sun Jin Wu, Igrus, Brojo, and key supports as useful comparison points.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did the re-release go live?',
        answer:
          'Current sources and Roblox activity show the July 2026 re-release; this site checked it on July 15, 2026.',
      },
      {
        question: 'Are old guides useless?',
        answer:
          'No, but use them only for system orientation and confirm every rotating fact in the current client.',
      },
    ],
    relatedRoutes: [
      '/updates/re-release',
      '/codes',
      '/official-links',
      '/tier-list',
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
