export type SourceType =
  | 'official'
  | 'guide_site'
  | 'community'
  | 'youtube'
  | 'tested'
  | 'unknown';

export type Confidence = 'high' | 'medium' | 'low' | 'needs_verification';

export interface DataSource {
  type: SourceType;
  label: string;
  url?: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface GameCode {
  code: string;
  reward: string;
  status: 'working' | 'expired' | 'needs_check';
  firstSeen?: string;
  lastChecked: string;
  levelRequirement?: number;
  sources: DataSource[];
  notes?: string;
}

export type UnitRarity =
  | 'Paradox'
  | 'Secret'
  | 'Exclusive'
  | 'Mythic'
  | 'Legendary'
  | 'Epic';

export type UnitRole =
  | 'DPS'
  | 'Support'
  | 'Farm'
  | 'Control'
  | 'Boss'
  | 'Summoner'
  | 'Hybrid';

export type UnitTier = 'Meta' | 'S' | 'A' | 'B' | 'Watchlist';

export interface Unit {
  id: string;
  slug: string;
  name: string;
  alias?: string;
  rarity: UnitRarity;
  role: UnitRole;
  combatStyle: string;
  tier: UnitTier;
  obtainment?: string;
  bestTraits: string[];
  bestPartners: string[];
  summary: string;
  strengths: string[];
  weaknesses: string[];
  upgradePriority: 'High' | 'Medium' | 'Low' | 'Situational';
  versionTag?: string;
  sources: DataSource[];
  lastChecked: string;
  confidence: Confidence;
}

export interface TierEntry {
  unitSlug: string;
  tier: Exclude<UnitTier, 'Watchlist'>;
  mode: 'overall' | 'story' | 'raid' | 'boss' | 'support' | 'early';
  reason: string;
  confidence: Confidence;
  sources: DataSource[];
}

export interface TeamBuild {
  id: string;
  name: string;
  purpose: string;
  core: string[];
  substitutes: string[];
  notes: string;
  confidence: Confidence;
}

export interface Trait {
  slug: string;
  name: string;
  tier: 'S' | 'A' | 'B' | 'Situational';
  odds?: string;
  bestFor: UnitRole[];
  effect: string;
  rerollAdvice: string;
  sources: DataSource[];
  confidence: Confidence;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category:
    | 'Start Here'
    | 'Codes'
    | 'Units & Teams'
    | 'Traits & Growth'
    | 'Re-release'
    | 'Game Modes';
  sourceStrategy:
    | 'user_intent_youtube'
    | 'popular_youtube'
    | 'youtube_explainer'
    | 'manual_data'
    | 'official'
    | 'community_crosscheck';
  videoSearchQueries?: string[];
  sourceNotes?: string;
  coverImageUrl?: string;
  video?: {
    id: string;
    title: string;
    channel?: string;
    url?: string;
    thumbnailUrl?: string;
    publishedAt?: string;
    viewCountLabel?: string;
    checkedAt?: string;
  };
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  body: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedRoutes: string[];
}

export interface TopicPage {
  route: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    links?: Array<{ label: string; href: string }>;
  }>;
  faq: Array<{ question: string; answer: string }>;
  relatedRoutes: string[];
}
