'use client';

import { Badge } from '@/components/ui/badge';
import { activeCodes } from '@/data/animeparadoxx/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  ChevronDown,
  Compass,
  FlaskConical,
  Gamepad2,
  GitBranch,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: Array<{ href: string; label: string }>;
  activePrefixes?: string[];
}

export const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Wiki Home' },
      { href: '/updates/re-release', label: 'Re-release Hub' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/discord', label: 'Discord' },
      { href: '/official-links', label: 'Official Links' },
    ],
  },
  {
    title: 'Codes & Progress',
    icon: RadioTower,
    links: [
      { href: '/codes', label: 'Active Codes' },
      { href: '/guides/fast-progression', label: 'Fast Progression' },
      { href: '/guides/codes-redeem-troubleshooting', label: 'Code Fixes' },
      { href: '/guides/afk-chamber', label: 'AFK Chamber' },
    ],
  },
  {
    title: 'Units & Teams',
    icon: Users,
    links: [
      { href: '/tier-list', label: 'Tier List' },
      { href: '/units', label: 'Units Database' },
      { href: '/best-team', label: 'Best Team' },
      { href: '/guides/best-starter-units', label: 'Starter Units' },
      { href: '/guides/how-to-get-secret-units', label: 'Secret Units' },
    ],
    activePrefixes: ['/units'],
  },
  {
    title: 'Growth Systems',
    icon: Sparkles,
    links: [
      { href: '/traits', label: 'Traits' },
      { href: '/evolution', label: 'Evolution' },
      { href: '/materials', label: 'Materials & Items' },
      { href: '/guides/etherealize-guide', label: 'Etherealize' },
      { href: '/guides/unit-passives', label: 'Unit Passives' },
    ],
  },
  {
    title: 'Game Modes',
    icon: Gamepad2,
    links: [
      { href: '/game-modes', label: 'Mode Directory' },
      { href: '/guides/story-mode', label: 'Story Mode' },
      { href: '/guides/raid-guide', label: 'Raid' },
      { href: '/guides/siege-guide', label: 'Siege' },
      { href: '/guides/boss-rush-guide', label: 'Boss Rush' },
    ],
  },
  {
    title: 'Guide Library',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/how-to-build-a-team', label: 'Team Building' },
      { href: '/guides/evolution-guide', label: 'Evolution Guide' },
      { href: '/guides/trait-reroll-strategy', label: 'Reroll Strategy' },
      { href: '/guides/re-release-overview', label: 'Re-release Overview' },
    ],
    activePrefixes: ['/guides'],
  },
];

const iconMap = {
  '/': Compass,
  '/codes': RadioTower,
  '/tier-list': Trophy,
  '/units': Boxes,
  '/best-team': Swords,
  '/traits': Sparkles,
  '/evolution': GitBranch,
  '/materials': FlaskConical,
  '/game-modes': Gamepad2,
  '/guides': BookOpen,
  '/official-links': ShieldCheck,
};

function isActivePath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function groupIsActive(currentPath: string | undefined, group: WikiNavGroup) {
  if (!currentPath) return false;
  return (
    group.links.some((link) => isActivePath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function NavLink({
  currentPath,
  href,
  label,
}: { currentPath?: string; href: string; label: string }) {
  const active = isActivePath(currentPath, href);
  const Icon = iconMap[href as keyof typeof iconMap] ?? ArrowRight;
  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-sm transition',
        active
          ? 'border-cyan-300/70 bg-cyan-300 font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.16)]'
          : 'border-white/8 bg-white/[0.025] text-slate-300 hover:border-cyan-300/35 hover:bg-cyan-300/5 hover:text-white'
      )}
    >
      <span className="inline-flex min-w-0 items-center gap-2.5">
        <Icon className="size-4 shrink-0" />
        <span>{label}</span>
      </span>
      <ArrowRight
        className={cn(
          'size-3.5 shrink-0 transition group-hover:translate-x-0.5',
          active ? 'text-slate-900' : 'text-violet-300'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return (
    <div className="space-y-3">
      {wikiNavGroups.map((group) => {
        const Icon = group.icon;
        return (
          <details
            key={group.title}
            open={groupIsActive(currentPath, group)}
            className="group/nav"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-2 font-semibold text-slate-200 text-sm hover:bg-white/5 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                <Icon className="size-4 text-cyan-300" />
                {group.title}
              </span>
              <span className="inline-flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="h-5 border-white/10 px-1.5 text-[10px] text-slate-400"
                >
                  {group.links.length}
                </Badge>
                <ChevronDown className="size-4 transition group-open/nav:rotate-180" />
              </span>
            </summary>
            <div className="mt-1 grid gap-1.5">
              {group.links.map((link) => (
                <NavLink key={link.href} currentPath={currentPath} {...link} />
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}

export function AnimeParadoxXMobileMenu({
  currentPath,
}: { currentPath?: string }) {
  return (
    <details className="rounded-xl border border-white/10 bg-[#0B1120] p-4 shadow-xl lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-white [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <Compass className="size-5 text-cyan-300" />
          Open Wiki Menu
        </span>
        <ChevronDown className="size-5" />
      </summary>
      <div className="mt-4">
        <NavGroups currentPath={currentPath} />
      </div>
    </details>
  );
}

export function AnimeParadoxXRouteSidebar({
  currentPath,
}: { currentPath?: string }) {
  return (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-[276px] shrink-0 self-start overflow-y-auto rounded-xl border border-white/10 bg-[#0B1120] p-4 shadow-2xl shadow-black/30 lg:block">
      <div className="mb-4 rounded-xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,.25),transparent_50%),linear-gradient(135deg,#111B33,#0A1020)] p-4">
        <p className="text-[11px] font-bold uppercase tracking-[.2em] text-cyan-300">
          Anime Paradox X
        </p>
        <h2 className="mt-1 text-xl font-black text-white">Wiki Navigation</h2>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          Codes, units, growth systems, game modes, and decision-first guides.
        </p>
      </div>
      <NavGroups currentPath={currentPath} />
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-between rounded-lg border border-amber-300/20 bg-amber-300/5 p-3 text-sm text-amber-200 hover:bg-amber-300/10"
      >
        <span>
          <strong className="block text-white">Codes checked</strong>
          {activeCodes.length} working
        </span>
        <RadioTower className="size-5" />
      </LocaleLink>
    </aside>
  );
}

export function AnimeParadoxXPageShell({ children }: { children: ReactNode }) {
  const currentPath = useLocalePathname();
  if (currentPath === '/') return <>{children}</>;
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6">
      <AnimeParadoxXMobileMenu currentPath={currentPath} />
      <div className="mt-6 grid gap-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_276px]">
        <div className="min-w-0">{children}</div>
        <AnimeParadoxXRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}
