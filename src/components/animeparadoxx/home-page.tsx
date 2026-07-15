import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes } from '@/data/animeparadoxx/codes';
import { guides } from '@/data/animeparadoxx/guides';
import { officialGameFacts } from '@/data/animeparadoxx/sources';
import { featuredUnits } from '@/data/animeparadoxx/units';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ExternalLink,
  Gamepad2,
  RadioTower,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { CodeCopyButton } from './code-copy-button';
import {
  AnimeParadoxXMobileMenu,
  AnimeParadoxXRouteSidebar,
} from './wiki-navigation';

const quickLinks = [
  { label: 'Current Codes', href: '/codes', icon: RadioTower },
  { label: 'Tier List', href: '/tier-list', icon: Trophy },
  { label: 'Units Database', href: '/units', icon: Users },
  { label: 'Best Team', href: '/best-team', icon: Swords },
  { label: 'Traits', href: '/traits', icon: Sparkles },
  { label: 'Game Modes', href: '/game-modes', icon: Gamepad2 },
];

function compactNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

export function AnimeParadoxXHomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: officialGameFacts.siteName,
        url: officialGameFacts.canonicalUrl,
        description:
          'Independent Anime Paradox X wiki for codes, units, traits, evolution, materials, modes, and guides.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        url: officialGameFacts.robloxUrl,
        gamePlatform: 'Roblox',
        genre: officialGameFacts.genre,
        author: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
          url: officialGameFacts.creatorGroupUrl,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden bg-[#070A13] text-slate-100">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-white/10 border-b">
        <Image
          src={officialGameFacts.heroImage}
          alt="Anime Paradox X official Roblox artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,19,.98)_0%,rgba(7,10,19,.76)_48%,rgba(7,10,19,.62)_100%),linear-gradient(0deg,#070A13_0%,transparent_42%)]" />
        <Container className="relative grid min-h-[500px] items-center gap-8 px-4 py-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-cyan-300 text-slate-950">
                July 2026 re-release
              </Badge>
              <Badge className="border border-violet-300/30 bg-violet-300/10 text-violet-200">
                Unofficial community wiki
              </Badge>
            </div>
            <h1 className="mt-5 max-w-full whitespace-normal text-4xl font-black leading-[.95] tracking-tight sm:max-w-4xl sm:text-6xl lg:text-7xl">
              Anime Paradox X <span className="text-cyan-300">Wiki</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Current codes, role-first unit rankings, traits, evolution
              decisions, materials, teams, and mode guides for Lunmei&apos;s
              Roblox tower defense re-release.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-cyan-300 font-bold text-slate-950 hover:bg-cyan-200"
              >
                <a
                  href={officialGameFacts.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play on Roblox <ExternalLink className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-violet-300/40 bg-slate-950/40 text-white hover:bg-violet-300/10"
              >
                <LocaleLink href="/guides/beginner-guide">
                  Start the beginner route <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ['Working codes', activeCodes.length],
                [
                  'Visits at check',
                  compactNumber(officialGameFacts.visitsAtCheck),
                ],
                [
                  'Players at check',
                  compactNumber(officialGameFacts.activePlayersAtCheck),
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur"
                >
                  <strong className="block text-xl text-amber-300 sm:text-2xl">
                    {value}
                  </strong>
                  <span className="text-[11px] text-slate-400 sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden justify-self-end lg:block">
            <div className="relative size-72 overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-slate-950/70 shadow-[0_0_70px_rgba(34,211,238,.16)]">
              <Image
                src={officialGameFacts.icon}
                alt="Anime Paradox X icon"
                fill
                sizes="288px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <AnimeParadoxXMobileMenu currentPath="/" />
        <div className="mt-6 grid gap-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_276px]">
          <main className="min-w-0 space-y-10">
            <section>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
                    Find your answer
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-white">
                    Wiki shortcuts
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  Checked Jul 15
                </Badge>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {quickLinks.map(({ label, href, icon: Icon }) => (
                  <LocaleLink
                    key={href}
                    href={href}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0B1120] p-4 transition hover:border-cyan-300/40 hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-3 font-bold">
                      <span className="rounded-lg bg-cyan-300/10 p-2 text-cyan-300">
                        <Icon className="size-5" />
                      </span>
                      {label}
                    </span>
                    <ArrowRight className="size-4 text-violet-300 transition group-hover:translate-x-1" />
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#0B1120] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">
                    Redeem first
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Working Anime Paradox X codes
                  </h2>
                </div>
                <LocaleLink
                  href="/codes"
                  className="text-sm font-bold text-cyan-300 hover:text-cyan-200"
                >
                  All code notes →
                </LocaleLink>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                Copy case and punctuation exactly. Codes were cross-checked on
                July 15, 2026; release rewards can expire without notice.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {activeCodes.slice(0, 4).map((item) => (
                  <div
                    key={item.code}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-black/20 p-3"
                  >
                    <div className="min-w-0">
                      <code className="font-bold text-amber-200">
                        {item.code}
                      </code>
                      <p className="mt-1 truncate text-xs text-slate-500">
                        {item.reward}
                      </p>
                    </div>
                    <CodeCopyButton code={item.code} />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-300">
                Build decisions
              </p>
              <h2 className="mt-2 text-3xl font-black">
                Units worth comparing
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {featuredUnits.map((unit) => (
                  <LocaleLink
                    href={`/units/${unit.slug}`}
                    key={unit.slug}
                    className="rounded-xl border border-white/10 bg-[#0B1120] p-5 hover:border-violet-300/40"
                  >
                    <div className="flex justify-between gap-3">
                      <Badge className="bg-violet-300 text-slate-950">
                        {unit.tier}
                      </Badge>
                      <span className="text-xs text-slate-500">
                        {unit.role}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-black text-white">
                      {unit.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {unit.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
                    Decision-first library
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Latest guide routes
                  </h2>
                </div>
                <BookOpen className="size-7 text-cyan-300" />
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {guides.slice(0, 6).map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-xl border border-white/10 bg-[#0B1120] p-4 hover:border-cyan-300/35"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-300">
                      {guide.category}
                    </span>
                    <h3 className="mt-2 font-bold text-white group-hover:text-cyan-200">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {guide.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(34,211,238,.08),rgba(139,92,246,.07))] p-6">
              <div className="flex items-start gap-4">
                <BadgeCheck className="mt-1 size-6 shrink-0 text-cyan-300" />
                <div>
                  <h2 className="text-2xl font-black">Current-safe sourcing</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Roblox identity is verified against Place ID{' '}
                    {officialGameFacts.placeId} and Universe ID{' '}
                    {officialGameFacts.universeId}. Rotating codes and rankings
                    have check dates. Legacy recipes are labeled for in-game
                    verification instead of being presented as current facts.
                  </p>
                  <LocaleLink
                    href="/official-links"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-300"
                  >
                    See verified links <ArrowRight className="size-4" />
                  </LocaleLink>
                </div>
              </div>
            </section>
          </main>
          <AnimeParadoxXRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
