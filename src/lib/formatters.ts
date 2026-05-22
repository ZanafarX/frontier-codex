// =============================================================================
// FORMATTERS & SMALL UTILITIES
// =============================================================================
// Display-layer helpers: turn machine values (kebab-case slugs, partial cost
// objects, range enums) into the strings shown on the page. Centralized here
// so the same weapon-type or rank-name renders identically across pages.
//
// If you add a new variant to a schema enum, update the corresponding map
// here too. TypeScript won't catch the omission — the fallback returns a
// title-cased version of the slug, which works for most cases but loses
// special capitalizations (Psy-Slinger, not Psy Slinger).
// =============================================================================

// -----------------------------------------------------------------------------
// ID helpers
// -----------------------------------------------------------------------------

/** Strip parent folders from an Astro entry ID — `handguns/peacemaker` → `peacemaker`. */
export function lastIdSegment(id: string): string {
  return id.split('/').pop() ?? id;
}

/**
 * Title-case a kebab-case slug, replacing hyphens with spaces.
 *   'long-gun'       → 'Long Gun'
 *   'stable-breach'  → 'Stable Breach'
 *
 * For exact enum-to-label mappings with special capitalizations
 * (Psy-Slinger, The Ash Belt, Veil-Born), use the dedicated format*()
 * helpers — those check a label map first and fall back to this.
 */
export function titleCaseSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.length === 0 ? '' : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
}

// -----------------------------------------------------------------------------
// Talent cost
// -----------------------------------------------------------------------------

export interface TalentCost {
  strain?: number;
  erosion?: number;
  memory?: number;
  mettle?: number;
  hp?: number;
  passive?: boolean;
  uses_per_scene?: number;
  uses_per_rest?: number;
  uses_per_session?: number;
}

/**
 * Format a TalentCost object for display.
 * Examples:
 *   { strain: 1 }                 → "1 Strain"
 *   { strain: 2, hp: 1 }          → "2 Strain + 1 HP"
 *   { passive: true }             → "Passive"
 *   { uses_per_scene: 1 }         → "1/scene"
 *   { strain: 1, uses_per_rest:1} → "1 Strain · 1/rest"
 *   {}                            → "Free"
 */
export function formatCost(cost: TalentCost | undefined): string {
  if (!cost) return 'Free';
  if (cost.passive) return 'Passive';

  const resources: string[] = [];
  if (cost.strain)  resources.push(`${cost.strain} Strain`);
  if (cost.erosion) resources.push(`${cost.erosion} Erosion`);
  if (cost.memory)  resources.push(`${cost.memory} Memory`);
  if (cost.mettle)  resources.push(`${cost.mettle} Mettle`);
  if (cost.hp)      resources.push(`${cost.hp} HP`);

  const usage: string[] = [];
  if (cost.uses_per_scene)   usage.push(`${cost.uses_per_scene}/scene`);
  if (cost.uses_per_rest)    usage.push(`${cost.uses_per_rest}/rest`);
  if (cost.uses_per_session) usage.push(`${cost.uses_per_session}/session`);

  const resourceStr = resources.join(' + ');
  const usageStr = usage.join(' · ');

  if (resourceStr && usageStr) return `${resourceStr} · ${usageStr}`;
  if (resourceStr) return resourceStr;
  if (usageStr) return usageStr;
  return 'Free';
}

/**
 * Format a tempo value for compact display.
 *   number  → "T4"
 *   'passive' → "—"
 *   string  → as-is (variable tempos like "see effect")
 */
export function formatTempo(tempo: number | string | undefined): string {
  if (tempo === undefined || tempo === null) return '—';
  if (tempo === 'passive') return '—';
  if (typeof tempo === 'number') return `T${tempo}`;
  return tempo;
}

// -----------------------------------------------------------------------------
// Slug → display label maps
// Hardcoded for proper capitalization (Psy-Slinger, The Ash Belt, Veil-Born).
// Fallback title-cases unknowns.
// -----------------------------------------------------------------------------

const DISCIPLINE_LABELS: Record<string, string> = {
  'psy-slinger':  'Psy-Slinger',
  'bastion-soul': 'Bastion Soul',
  'seer':         'Seer',
  'flesh-shaper': 'Flesh Shaper',
  'mindweaver':   'Mindweaver',
};

const CALLING_LABELS: Record<string, string> = {
  'gunhand':     'Gunhand',
  'muck-raker':  'Muck-Raker',
  'high-roller': 'High-Roller',
  'shepherd':    'Shepherd',
  'rail-jack':   'Rail-Jack',
};

const REGION_LABELS: Record<string, string> = {
  'ash-belt':     'The Ash Belt',
  'scorchveil':   'The Scorchveil',
  'stormrise':    'The Stormrise',
  'graven-plain': 'The Graven Plain',
  'the-fen':      'The Fen',
};

const WEAPON_TYPE_LABELS: Record<string, string> = {
  'handgun':     'Handgun',
  'long-gun':    'Long Gun',
  'shotgun':     'Shotgun',
  'heavy-iron':  'Heavy Iron',
  'melee':       'Melee',
  'thrown':      'Thrown',
  'unarmed':     'Unarmed',
};

const RANGE_LABELS: Record<string, string> = {
  'point-blank': 'Point-Blank',
  'close':       'Close',
  'near':        'Near',
  'far':         'Far',
  'extreme':     'Extreme',
};

const FACTION_TYPE_LABELS: Record<string, string> = {
  'corporate':  'Corporate',
  'tribal':     'Tribal',
  'religious':  'Religious',
  'arcane':     'Arcane',
  'mercenary':  'Mercenary',
};

const RANK_NAMES = ['', 'Cantrip', 'Tactic', 'Power', 'Devastation', 'Miracle'] as const;

const SEVERITY_LABELS: Record<string, string> = {
  'minor':    'Minor',
  'moderate': 'Moderate',
  'severe':   'Severe',
  'critical': 'Critical',
};

const TALENT_CATEGORY_LABELS: Record<string, string> = {
  'combat':     'Combat',
  'non-combat': 'Non-Combat',
  'calling':    'Calling',
};

// The skills `category` enum.
const SKILL_CATEGORY_LABELS: Record<string, string> = {
  'combat':    'Combat',
  'physical':  'Physical',
  'social':    'Social',
  'knowledge': 'Knowledge',
  'survival':  'Survival',
  'technical': 'Technical',
  'psionic':   'Psionic',
};

// The rules `book` enum.
const BOOK_LABELS: Record<string, string> = {
  'introduction':     'Introduction',
  'drifter':          'Book I — The Drifter',
  'law-of-lead':      'Book II — The Law of Lead',
  'current':          'Book III — The Current',
  'marshals-almanac': "Book IV — The Marshal's Almanac",
};

// The creatures `creature_type` enum. Hardcoded so "veil-born" preserves
// its hyphen as "Veil-Born" — the rulebook's canonical form. Other
// creature types (human, beast, construct) title-case cleanly without
// the explicit map, but routing them through the map keeps consistency.
const CREATURE_TYPE_LABELS: Record<string, string> = {
  'human':     'Human',
  'veil-born': 'Veil-Born',
  'beast':     'Beast',
  'construct': 'Construct',
};

// The landmarks `landmark_type` enum. Hardcoded so "stable-breach" reads
// as "Stable Breach" (no hyphen) instead of "Stable-Breach". Other values
// title-case cleanly but flow through the map for consistency.
const LANDMARK_TYPE_LABELS: Record<string, string> = {
  'stable-breach': 'Stable Breach',
  'scar':          'Scar',
  'ruin':          'Ruin',
  'natural':       'Natural',
  'cursed':        'Cursed',
};

// -----------------------------------------------------------------------------
// format*() helpers — slug → display string
// Each checks a label map first, falls back to titleCaseSlug.
// -----------------------------------------------------------------------------

export function formatDiscipline(slug: string): string {
  return DISCIPLINE_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatCalling(slug: string): string {
  return CALLING_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatRegion(slug: string): string {
  return REGION_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatWeaponType(slug: string): string {
  return WEAPON_TYPE_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatRange(slug: string): string {
  return RANGE_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatFactionType(slug: string): string {
  return FACTION_TYPE_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatSeverity(slug: string): string {
  return SEVERITY_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatTalentCategory(slug: string): string {
  return TALENT_CATEGORY_LABELS[slug] ?? titleCaseSlug(slug);
}

/**
 * Format a skill `category` enum slug into its display label.
 *   'combat' → 'Combat'   'knowledge' → 'Knowledge'   'psionic' → 'Psionic'
 */
export function formatSkillCategory(slug: string): string {
  return SKILL_CATEGORY_LABELS[slug] ?? titleCaseSlug(slug);
}

export function formatRankName(rank: number): string {
  return RANK_NAMES[rank] ?? `R${rank}`;
}

/**
 * Format a rules-book enum slug into its display label.
 *   'introduction' → 'Introduction'
 *   'drifter'      → 'Book I — The Drifter'
 */
export function formatBook(slug: string): string {
  return BOOK_LABELS[slug] ?? titleCaseSlug(slug);
}

/**
 * Format an armor `armor_type` enum slug.
 *   'light' → 'Light'   'shield' → 'Shield'
 */
export function formatArmorType(slug: string): string {
  return titleCaseSlug(slug);
}

/**
 * Format an ammunition `ammo_type` enum slug.
 *   'standard' → 'Standard'   'special' → 'Special'
 */
export function formatAmmoType(slug: string): string {
  return titleCaseSlug(slug);
}

/**
 * Format a gear `gear_type` enum slug.
 *   'tool' → 'Tool'   'survival' → 'Survival'   'misc' → 'Misc'
 */
export function formatGearType(slug: string): string {
  return titleCaseSlug(slug);
}

/**
 * Format a weapon-quality `applies_to` enum slug.
 *   'firearm' → 'Firearm'   'all' → 'All'
 */
export function formatAppliesTo(slug: string): string {
  return titleCaseSlug(slug);
}

/**
 * Format a keyword `category` enum slug.
 *   'mechanic' → 'Mechanic'   'resource' → 'Resource'
 */
export function formatKeywordCategory(slug: string): string {
  return titleCaseSlug(slug);
}

/**
 * Format a creature `creature_type` enum slug. Preserves "Veil-Born"
 * hyphenation; other values title-case cleanly.
 */
export function formatCreatureType(slug: string): string {
  return CREATURE_TYPE_LABELS[slug] ?? titleCaseSlug(slug);
}

/**
 * Format a creature/NPC `tier` enum slug.
 *   'minion' → 'Minion'   'soldier' → 'Soldier'   'boss' → 'Boss'
 */
export function formatTier(slug: string): string {
  return titleCaseSlug(slug);
}

/**
 * Format a landmark `landmark_type` enum slug. "stable-breach" renders
 * as "Stable Breach" (no hyphen in display) per existing convention.
 */
export function formatLandmarkType(slug: string): string {
  return LANDMARK_TYPE_LABELS[slug] ?? titleCaseSlug(slug);
}

/**
 * Format a landmark `danger_level` enum slug.
 *   'low' → 'Low'   'moderate' → 'Moderate'   'extreme' → 'Extreme'
 */
export function formatDangerLevel(slug: string): string {
  return titleCaseSlug(slug);
}

/**
 * Map a landmark `danger_level` to the corresponding Badge variant.
 *   'low'      → 'severity-minor'
 *   'moderate' → 'severity-moderate'
 *   'high'     → 'severity-severe'
 *   'extreme'  → 'severity-critical'
 *   (anything else falls back to 'muted')
 *
 * Returns string (rather than the tight severity union) so callers can
 * pass the result directly to <Badge variant={...} /> without casting.
 * Badge.astro's variant prop is typed as string.
 */
export function dangerVariant(level: string): string {
  switch (level) {
    case 'low':      return 'severity-minor';
    case 'moderate': return 'severity-moderate';
    case 'high':     return 'severity-severe';
    case 'extreme':  return 'severity-critical';
    default:         return 'muted';
  }
}

/** Format Scrip prices: 120 → "§120". */
export function formatScrip(n: number | undefined): string {
  if (n === undefined || n === null) return '—';
  return `§${n}`;
}

// -----------------------------------------------------------------------------
// Lede extraction from markdown body
// -----------------------------------------------------------------------------

/**
 * Extract the first content paragraph from a markdown body, strip simple
 * inline markdown, return plain text. Skips headings, blockquotes, tables,
 * horizontal rules, and code fences.
 */
export function extractLede(body: string | undefined): string {
  if (!body) return '';
  const paragraphs = body.split(/\n\n+/).map((p) => p.trim());
  for (const p of paragraphs) {
    if (!p) continue;
    if (p.startsWith('#')) continue;
    if (p.startsWith('>')) continue;
    if (p.startsWith('|')) continue;
    if (p.startsWith('---')) continue;
    if (p.startsWith('```')) continue;
    if (p.startsWith('![')) continue;
    return p
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\n/g, ' ')
      .trim();
  }
  return '';
}

/** Truncate text to a max length on a word boundary, with ellipsis. */
export function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}
