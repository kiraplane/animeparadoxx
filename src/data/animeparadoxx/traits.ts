import { sources } from './sources';
import type { Trait } from './types';

const traitSource = [sources.pggTierList, sources.pggPassives];

export const traits: Trait[] = [
  {
    slug: 'eternal',
    name: 'Eternal',
    tier: 'S',
    odds: '0.10%',
    bestFor: ['DPS', 'Boss', 'Summoner'],
    effect:
      'A very rare premium trait associated with top-end carry investment.',
    rerollAdvice:
      'Keep it on a current meta carry. Do not keep rolling for a cosmetic improvement after landing Eternal.',
    sources: traitSource,
    confidence: 'medium',
  },
  {
    slug: 'vampiric',
    name: 'Vampiric',
    tier: 'S',
    odds: '0.15%',
    bestFor: ['DPS', 'Hybrid', 'Summoner'],
    effect:
      'A premium sustain-oriented trait for units expected to stay active through long waves.',
    rerollAdvice:
      'Best on a unit you use in raids, bosses, or long modes. It is usually an immediate stop point.',
    sources: traitSource,
    confidence: 'medium',
  },
  {
    slug: 'angelic',
    name: 'Angelic',
    tier: 'S',
    odds: '0.20%',
    bestFor: ['DPS', 'Support', 'Boss'],
    effect: 'A rare all-around high-value trait for finished units.',
    rerollAdvice:
      'Keep on a strong current unit unless its role has a clearer specialist trait.',
    sources: traitSource,
    confidence: 'medium',
  },
  {
    slug: 'revenant',
    name: 'Revenant',
    tier: 'A',
    odds: '0.30%',
    bestFor: ['DPS', 'Boss', 'Hybrid'],
    effect: 'A high-rarity offensive stop point for damage-focused units.',
    rerollAdvice:
      'A practical keep when premium rerolls are limited; improve the whole team before chasing a rarer roll.',
    sources: traitSource,
    confidence: 'medium',
  },
  {
    slug: 'blessing',
    name: 'Blessing',
    tier: 'A',
    odds: '0.50%',
    bestFor: ['Support', 'Control', 'Hybrid'],
    effect: 'A rare flexible trait that fits utility and balanced units.',
    rerollAdvice:
      'Keep on supports or utility units when the role is already solved. Save top rolls for the main carry.',
    sources: traitSource,
    confidence: 'medium',
  },
  {
    slug: 'greed',
    name: 'Greed',
    tier: 'Situational',
    bestFor: ['Farm'],
    effect:
      'An economy-focused trait used on farm units rather than damage carries.',
    rerollAdvice:
      'Keep on Bulla or another dedicated farm unit. Reroll it from a premium damage unit.',
    sources: [sources.destructoidTierList],
    confidence: 'medium',
  },
];

export function getTrait(slug: string) {
  return traits.find((trait) => trait.slug === slug);
}
