# Anime Paradox X Wiki PRD and Implementation Plan

## 1. Product brief

- Site: Anime Paradox X Wiki
- Canonical URL: `https://www.animeparadoxx.wiki`
- Platform: Roblox
- Project / GitHub / Cloudflare name: `animeparadoxx`
- Core keyword: `anime paradox x`
- Primary audience: English-speaking players deciding what to redeem, summon, build, evolve, reroll, and farm after the July 2026 re-release.
- Launch model: a current-version guide hub with a small verified data layer and hand-written decision guides. It must not treat old Anime Paradox data as automatically current.
- Source template: `universaltowerdefense-z`, selected by explicit user direction because its unit/build/tower-defense information architecture is a better match than the newest generic Roblox template.

## 2. Approved experience identity

Checked on 2026-07-15 through Roblox first-party pages and APIs:

- Official experience: `https://www.roblox.com/games/76806550943352/Anime-Paradox-X`
- Place ID: `76806550943352`
- Universe ID: `7652830984`
- Creator: `Lunmei`, Roblox Group ID `35958846`
- Current official title: `[RELEASE] Anime Paradox X`
- Roblox genres: Strategy / Tower Defense
- Official loop: summon units, let AI-controlled units auto-fight, level units, Etherealize, Evolve, and play multiple modes with friends.
- Independent official website: not verified.
- Community links discovered through current guide sources: Discord invite `animeparadox` and X account `@LunmeiGames`; these are secondary community references, not substitutes for Roblox identity evidence.

Identity boundary: the re-release reuses older Anime Paradox systems and content, but every code, ranking, reward, requirement, and patch-sensitive claim must carry a current check date or be presented as a workflow rather than permanent fact.

## 3. Keyword and route matrix

Serper was not available in the runtime. Candidate discovery used Google autocomplete, current web results, Roblox, current competitor articles, and YouTube search on 2026-07-15.

| Keyword | Intent | Route | Priority | Status | Evidence / decision |
|---|---|---|---|---|---|
| anime paradox x | head term | `/` | P0 | keep | Current official title and autocomplete result. |
| anime paradox x wiki | reference hub | `/` | P0 | keep | Domain intent and multiple older wiki competitors. |
| anime paradox x codes | redeem rewards | `/codes` | P0 | keep | Only strong X-specific autocomplete; multiple current July results. |
| anime paradox codes | legacy/current mixed codes | `/codes` | P0 | keep | Strong autocomplete; page must separate X re-release codes from expired old codes. |
| anime paradox x tier list | unit investment | `/tier-list` | P0 | keep | Current Pro Game Guides and Destructoid re-release coverage. |
| anime paradox tier list | unit investment | `/tier-list` | P0 | keep | Strong autocomplete with update modifiers. |
| anime paradox x units | roster decisions | `/units` | P0 | keep | Official summon loop plus current tier-list demand. |
| anime paradox traits | reroll decision | `/traits` | P0 | keep | Autocomplete includes traits, list, wiki, best traits; current code rewards include rerolls. |
| anime paradox trait tier list | trait ranking | `/traits` | P0 | keep | Autocomplete and current source coverage; one consolidated page avoids duplication. |
| anime paradox best team | team composition | `/best-team` | P0 | keep | Current tier articles rank DPS, support, farm, and role balance. |
| anime paradox beginner guide | first-session route | `/guides/beginner-guide` | P0 | keep | Autocomplete plus current and historical YouTube coverage. |
| anime paradox progression guide | account progression | `/guides/fast-progression` | P0 | keep | Current beginner searches and multiple modes/resources. |
| anime paradox evolution | evolution workflow | `/evolution` | P0 | keep | Autocomplete, official Evolve mechanic, multiple material/evolution sources. |
| anime paradox x evolve | evolution workflow | `/evolution` | P0 | keep | Current official description. |
| anime paradox etherealize | system explanation | `/guides/etherealize-guide` | P1 | keep | Weak autocomplete, but explicitly named by the current official experience description. |
| anime paradox materials | farming/crafting | `/materials` | P0 | keep | Multiple dedicated guides and evolution dependency. |
| anime paradox passives | ability lookup | `/guides/unit-passives` | P1 | keep | Dedicated competitor article and in-match inspection problem. |
| anime paradox secret units | obtainment | `/guides/how-to-get-secret-units` | P1 | keep | Autocomplete includes `secret`; current tier sources list obtainment routes. |
| anime paradox best starter units | early investment | `/guides/best-starter-units` | P1 | keep | Beginner and tier-list results distinguish starter decisions. |
| anime paradox game modes | mode selection | `/game-modes` | P1 | keep | Official description; current sources reference Story, Raid, Siege, Boss Rush and AFK Chamber. |
| anime paradox raid guide | mode progression | `/guides/raid-guide` | P1 | keep | Current unit obtainment and evolution materials use raids. |
| anime paradox siege guide | mode progression | `/guides/siege-guide` | P1 | keep | Current secret-unit and shop references. |
| anime paradox boss rush | end-game mode | `/guides/boss-rush-guide` | P1 | keep | Current re-release guide and tier sources. |
| anime paradox afk chamber | passive rewards | `/guides/afk-chamber` | P1 | keep | Competitor inventories and current unit obtainment references. |
| anime paradox discord | community link | `/official-links` | P1 | keep | Current search result resolves to an Anime Paradox X Discord invite. |
| anime paradox trello | board lookup | `/official-links` | P2 | watch | Autocomplete exists, but no current official Trello was verified. Do not invent a board URL. |
| anime paradox update / re-release | version status | `/updates/re-release` | P1 | keep | Current Roblox title and current July editorial coverage. |
| anime paradox scripts / macro | unsafe shortcut | `/official-links` | P2 | ignore | No scripts, executors, macros, or modified clients; official Roblox access and risk guidance only. |
| xếp hạng anime paradox | Vietnamese tier intent | `/tier-list` | P2 | localize_later | Relevant non-English autocomplete; English core launches first. |

## 4. Competitor benchmark

### Pro Game Guides

- Strengths: current re-release codes, redemption steps, trait-reroll explanation, broad tier list, passives inventory.
- Weaknesses: tier copy contains mixed old/re-release snapshots and patch-sensitive conclusions; no owned game-specific hub architecture.
- We improve with: checked dates, source-conflict notes, role-first team decisions, a clear old-version boundary, and internal paths from codes to traits and progression.

### Destructoid

- Strengths: July 14 re-release tier update, role-aware ranking, obtainment hints, investment explanations.
- Weaknesses: one long article carries many intents and is difficult to navigate as a reusable wiki.
- We improve with: tier hub, selected unit profiles, separate beginner/team/secret-unit routes, explicit related links, and a homepage keyword hub.

### anime-paradox.com

- Strengths: category hubs for codes, units, farming, gameplay, resources, community, traits, passives, and materials.
- Weaknesses: older identity, outdated February data, thin duplicated category copy, and public promotion of TinyTask/macros that this project will not reproduce.
- We improve with: current X identity, safe official-link guidance, fewer duplicate intents, richer decision prose, and date-sensitive status notes.

### animeparadox.org

- Strengths: broad category inventory and localization.
- Weaknesses: older February content, aggressive page splitting, generic headings, and machine-localized expansion risk.
- We improve with: English-first quality, consolidated intent pages, current sources, and no localization until the English core is proven.

### BloxInformer and anime-paradox.wiki

- Strengths: evolution and code UI explanations; entity/database page ideas.
- Weaknesses: stale pre-re-release codes and some low-confidence generic material records.
- We improve with: only a selected unit database at launch, no invented material values, and explicit current-version checks.

Competitor sitemap note: direct sitemap and robots requests for the two dedicated legacy sites returned provider errors (402/451), so breadth was audited from indexed category/navigation inventories rather than claimed as a complete URL count.

## 5. Source policy

Priority order:

1. Roblox experience page and Roblox API for identity, creator, genre, current title, and official media.
2. Current re-release editorial sources for codes and role/tier signals, always with checked dates.
3. Current YouTube videos for player flow and visual cross-checks.
4. Older Anime Paradox sources only for system discovery; current X facts require re-verification.

Codes launch policy:

- Publish five cross-source-consistent July re-release codes as `working` with a 2026-07-15 check date.
- Keep the disputed `SORRYFORDELAY!` versus `SORRYFORDELAY!!` spelling as `needs_check`, explain the conflict, and do not call it guaranteed.
- Keep old Update 3/3.5 codes in an expired/watch section, never mixed with the active list.

Tier policy:

- Rank roles and investment confidence rather than copying a competitor's entire table.
- Publish a selected current roster with source links and a `current snapshot` warning.
- Do not invent exact damage, range, cooldown, pity, drop-rate, or recipe numbers without current verification.

## 6. Video selection

Selected current videos:

| Guide | Video | Why selected |
|---|---|---|
| Beginner guide | `0sadfUyWA5w` — ArchieBloxYT | Exact Anime Paradox X beginner intent; published about 19 hours before the 2026-07-15 check. |
| Re-release overview / hero trust media | `Z3Rq9W6tm6U` — NagBlox | Explicitly covers the game's return; about 64.9K views and five days old at check time. |
| Best starter units | `j9QeVACQFnU` — ArchieBloxYT | Exact re-release starter-unit intent; recent, used as a cross-check rather than sole ranking source. |
| Codes troubleshooting | `1KHvdjV41XY` — B Max Rohaan YT | Exact re-release codes flow; low traction, used only as a compact UI cross-check. |

Rejected or limited-use videos:

- `XKS4wUSB1ys`: exact tier intent but the channel branding includes “Scripts”; excluded to avoid unsafe shortcut association.
- Older five-month evolution and beginner videos: useful only for system discovery, not as current X authority.
- Broad reaction videos: not attached to specific system articles unless they answer the route's intent.
- Etherealize: no reliable current intent-specific video selected; publish a manual/official system guide without an unrelated embed.

## 7. Launch information architecture

Core hubs and status pages:

```text
/
/codes
/tier-list
/units
/units/<selected-unit>
/traits
/evolution
/materials
/best-team
/game-modes
/guides
/updates/re-release
/official-links
/disclaimer
/privacy
/terms
/cookie
```

Guide articles:

```text
/guides/beginner-guide
/guides/fast-progression
/guides/best-starter-units
/guides/how-to-build-a-team
/guides/evolution-guide
/guides/etherealize-guide
/guides/materials-and-items
/guides/trait-reroll-strategy
/guides/unit-passives
/guides/how-to-get-secret-units
/guides/summoning-and-pity
/guides/story-mode
/guides/raid-guide
/guides/siege-guide
/guides/boss-rush-guide
/guides/afk-chamber
/guides/codes-redeem-troubleshooting
/guides/re-release-overview
```

Selected unit profiles focus on durable role and obtainment decisions, not a full thin database. Expected English launch breadth: roughly 40-45 indexable URLs including legal pages and selected unit profiles.

## 8. Homepage and navigation requirement

User-specific requirement:

- Keep the hero full-width and compact.
- Immediately below the hero, render the homepage as `main content + 276px right wiki sidebar`, matching the established Corsa Legends pattern.
- The sidebar begins at the post-hero content band, not at the top of the hero.
- Desktop sidebar is sticky, grouped, collapsed by default, and shows count badges; the active group opens automatically.
- Home is visibly active in the Start Here group.
- On mobile, replace the desktop sidebar with an expandable wiki menu directly below the hero.
- The same navigation component powers content pages so labels, counts, and current-page state do not drift.

Homepage modules:

1. Compact hero with current Roblox media, primary CTA, codes CTA, official Roblox CTA, short quick links, and a re-release gameplay video.
2. Six compact high-intent cards.
3. Current re-release pulse and first-session path.
4. Systems hub covering traits, evolution, materials, modes, and selected units.
5. Latest hand-written guides with relevant video thumbnails.
6. Keyword-complete route board linking every P0/P1 page.
7. FAQ and official-play closing CTA.

## 9. Visual direction

- Official icon and experience thumbnail are the visual source of truth.
- Palette: near-black navy background, electric cyan and violet for rift energy, warm amber for rewards/status, high-contrast white text.
- Avoid keeping the source template's red/gold colors.
- Keep the navbar logo around 36px without a decorative ring.
- Cards use compact spacing, subtle borders, and readable information density rather than SaaS-style empty hero space.

## 10. Implementation and validation

1. Rename the template route, data, component, and public namespaces to `animeparadoxx`.
2. Remove the template PRD, localized copied content, update archives, units, codes, IDs, domains, and assets.
3. Use English-only routing at launch to avoid thin copied translations.
4. Add official Roblox icon/hero media and sync favicon, manifest, OG, navbar, and schema references.
5. Implement the data layer with source confidence and checked dates.
6. Implement core hubs, guide routes, selected unit routes, schemas, metadata, sitemap, robots, nav, footer, and legal pages.
7. Implement and visually verify the Hero-below-sidebar requirement at desktop and mobile widths.
8. Verify no advertising-provider placeholders, ad routes, old template identity, old IDs, or old analytics ID remain.
9. Run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm next:build`, and `pnpm build`.
10. Launch GitHub, Cloudflare, domain binding, GitHub builds, GA4, and Shipmanager when authentication permits.
