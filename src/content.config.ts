// =============================================================================
// THE VEIL & LEAD — CONTENT SCHEMAS
// =============================================================================
// This file defines the SHAPE of every content type in the game.
// Each schema is the authoritative answer to "what fields must this file
// have?" — if a content file is missing a required field or has the wrong
// type, the build fails here with a clear error message pointing at the
// offending file.
//
// You don't normally edit this file. You edit content files in
// /src/content/. This file is what catches typos when you build the site.
//
// ASTRO 5 NOTE — Content Layer API
// --------------------------------
// Each collection uses a `loader: glob({...})` to find its files.
// This replaces the old `type: 'content'` syntax from Astro 2-4.
// Benefits: much faster builds (~5x for Markdown), smaller memory
// footprint, and content can technically live anywhere on disk.
// We keep everything under src/content/<collection>/ by convention.
// =============================================================================

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

// -----------------------------------------------------------------------------
// SHARED VOCABULARY
// Reusable enums — change these once, used everywhere.
// -----------------------------------------------------------------------------

const Attribute = z.enum(['IRON', 'GRIT', 'QUICK', 'SAVVY', 'SWAY', 'ECHO']);

const Discipline = z.enum([
  'psy-slinger',
  'mindweaver',
  'seer',
  'flesh-shaper',
  'bastion-soul',
]);

const MundaneCalling = z.enum([
  'gunhand',
  'muck-raker',
  'high-roller',
  'shepherd',
  'rail-jack',
]);

const Faction = z.enum([
  'consortium',
  'dust-vultures',
  'redeemers',
  'circle-of-ash',
  'ironbrands',
]);

const Region = z.enum([
  'ash-belt',
  'scorchveil',
  'stormrise',
  'graven-plain',
  'the-fen',
]);

const Tier = z.enum(['minion', 'soldier', 'elite', 'boss']);

const SkillCategory = z.enum([
  'combat',
  'physical',
  'social',
  'knowledge',
  'survival',
  'technical',
  'psionic',
]);

// -----------------------------------------------------------------------------
// HELPERS
// -----------------------------------------------------------------------------

// Strips parent folders from an entry path so IDs stay flat regardless of
// how the content is organized in subfolders. Authoring uses nested folders
// (talents/psionic/bastion-soul/, callings/mundane/, references/economy/)
// for human convenience, but cross-references in frontmatter use just the
// kebab-case filename. This helper makes Astro agree.
//
// Example:
//   entry: "psionic/bastion-soul/kinetic-dampener.md"
//   returns: "kinetic-dampener"
const flatId = ({ entry }: { entry: string }): string =>
  entry.split('/').pop()!.replace(/\.md$/, '');

// -----------------------------------------------------------------------------
// SHARED OBJECTS
// -----------------------------------------------------------------------------

// Talent costs are flexible: a Talent might cost Strain, OR be passive,
// OR cost a few resources in combination (the Red Sacrament costs both
// Memory and Erosion; Consecrate Ground and Blood Rouse cost HP on top
// of Strain). This object captures every variant we use.
const TalentCost = z.object({
  strain: z.number().int().optional(),
  erosion: z.number().int().optional(),
  memory: z.number().int().optional(),
  mettle: z.number().int().optional(),
  hp: z.number().int().optional(),
  passive: z.boolean().optional(),
  uses_per_scene: z.number().int().optional(),
  uses_per_rest: z.number().int().optional(),
  uses_per_session: z.number().int().optional(),
});

// =============================================================================
// CHARACTER FOUNDATIONS
// =============================================================================

const attributes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/attributes' }),
  schema: z.object({
    name: z.string(),
    abbr: Attribute,
    tagline: z.string(),
    governs: z.array(z.string()),
    play_examples: z.array(z.object({
      description: z.string(),
      formula: z.string(),
    })),
    ranks: z.array(z.object({
      rank: z.number().int().min(1).max(5),
      label: z.string(),
      description: z.string(),
    })).length(5),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    primary_attribute: Attribute,
    secondary_attribute: Attribute.optional(),
    category: SkillCategory,
    summary: z.string(),
    example_uses: z.array(z.object({
      description: z.string(),
      formula: z.string(),
    })),
  }),
});

const origins = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/origins' }),
  schema: z.object({
    name: z.string(),
    letter: z.enum(['A', 'B', 'C', 'D']),
    tagline: z.string(),
    attribute_choice: z.array(Attribute).length(2),
    native_skill_choice: z.array(z.string()).length(2),
    root_memory_examples: z.array(z.string()),
  }),
});

const tragedies = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/tragedies' }),
  schema: z.object({
    name: z.string(),
    attribute_bonus: Attribute,
    summary: z.string(),
    scar_memory_examples: z.array(z.string()),
  }),
});

const callings = defineCollection({
  // Callings are authored in callings/mundane/ and callings/psionic/
  // subfolders; flatId keeps reference targets simple (just the filename).
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/callings',
    generateId: flatId,
  }),
  schema: z.object({
    name: z.string(),
    number: z.number().int().min(1).max(10),
    type: z.enum(['mundane', 'psionic']),
    archetype: z.string(),
    tagline: z.string(),
    prime_attributes: z.array(Attribute),
    career_skills: z.array(z.string()),
    starting_talents: z.object({
      fixed: z.array(z.string()).default([]),
      choose_one: z.array(z.string()).default([]),
    }),
    starting_erosion: z.number().int().default(0),
    starting_gear: z.array(z.string()),
    discipline: Discipline.optional(),
    drive_examples: z.array(z.string()).default([]),
  }),
});

const disciplines = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/disciplines' }),
  schema: z.object({
    name: z.string(),
    short_name: Discipline,
    sub_name: z.string(),
    tagline: z.string(),
    role: z.string(),
    secondary_role: z.string().optional(),
    focus: z.string(),
    key_attribute: Attribute,
    signature: z.string(),
    talent_count_by_rank: z.array(z.number().int()).length(5),
  }),
});

// =============================================================================
// TALENTS
// Discriminated union by `type`: 'psionic' (Cantrip -> Miracle, ranked by
// discipline) and 'mundane' (combat / non-combat / calling-specific).
// Authored in deeply nested folders; flatId keeps IDs at the filename level.
// =============================================================================

const talents = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/talents',
    generateId: flatId,
  }),
  schema: z.discriminatedUnion('type', [

    // --- PSIONIC TALENTS ---
    z.object({
      type: z.literal('psionic'),
      name: z.string(),
      discipline: Discipline,
      rank: z.number().int().min(1).max(5),
      rank_name: z.enum(['Cantrip', 'Tactic', 'Power', 'Devastation', 'Miracle']),
      cost: TalentCost,
      tn: z.number().int(),
      tempo: z.union([z.number().int(), z.string()]),
      flavor: z.string().optional(),
      tags: z.array(z.string()).default([]),
      has_steps: z.boolean().default(true),
      has_resist: z.boolean().default(false),
      requires: z.array(z.string()).optional(),
    }),

    // --- MUNDANE TALENTS ---
    z.object({
      type: z.literal('mundane'),
      name: z.string(),
      // 'combat' / 'non-combat' = general; 'calling' = Calling-specific
      category: z.enum(['combat', 'non-combat', 'calling']),
      calling: MundaneCalling.optional(), // required when category = 'calling'
      prerequisites: z.array(z.string()).default([]),
      cost: TalentCost,
      tempo: z.union([z.number().int(), z.literal('passive'), z.string()]).optional(),
      flavor: z.string().optional(),
      tags: z.array(z.string()).default([]),
      has_steps: z.boolean().default(false),
      has_resist: z.boolean().default(false),
    }),
  ]),
});

// =============================================================================
// EQUIPMENT
// =============================================================================

const weapons = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/weapons' }),
  schema: z.object({
    name: z.string(),
    weapon_type: z.enum([
      'handgun', 'long-gun', 'shotgun', 'heavy-iron',
      'melee', 'thrown', 'unarmed',
    ]),
    weapon_rating: z.number().int(),
    tempo: z.number().int(),
    capacity: z.number().int().optional(),
    optimal_range: z.enum([
      'point-blank', 'close', 'near', 'far', 'extreme',
    ]).optional(),
    price_scrip: z.number().int().optional(),
    cost_rating: z.number().int().min(1).max(5).optional(),
    qualities: z.array(z.string()).default([]),
    flavor: z.string().optional(),
  }),
});

const armor = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/armor' }),
  schema: z.object({
    name: z.string(),
    armor_type: z.enum(['light', 'medium', 'heavy', 'shield']),
    armor_rating: z.number().int().default(0),
    defense_bonus: z.number().int().optional(),
    price_scrip: z.number().int(),
    properties: z.array(z.string()).default([]),
    flavor: z.string().optional(),
  }),
});

const ammunition = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/ammunition' }),
  schema: z.object({
    name: z.string(),
    ammo_type: z.enum(['standard', 'special']),
    units_per_pack: z.number().int(),
    price_scrip: z.number().int(),
    tags: z.array(z.string()).default([]),
    flavor: z.string().optional(),
  }),
});

const gear = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/gear' }),
  schema: z.object({
    name: z.string(),
    gear_type: z.enum([
      'tool', 'consumable', 'survival', 'mount',
      'vehicle', 'focus', 'misc',
    ]),
    uses: z.number().int().optional(),
    price_scrip: z.number().int().optional(),
    cost_rating: z.number().int().min(1).max(5).optional(),
    bonus: z.string().optional(),
    tags: z.array(z.string()).default([]),
    flavor: z.string().optional(),
  }),
});

// =============================================================================
// THE WORLD
// =============================================================================

const factions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/factions' }),
  schema: z.object({
    name: z.string(),
    short_name: Faction,
    motto: z.string().optional(),
    type: z.enum(['corporate', 'tribal', 'religious', 'arcane', 'mercenary']),
    territory: z.array(Region).default([]),
    primary_methods: z.array(z.string()),
    notable_members: z.array(z.string()).default([]),
  }),
});

const regions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/regions' }),
  schema: z.object({
    name: z.string(),
    short_name: Region,
    tagline: z.string(),
    terrain: z.string(),
    hazards: z.array(z.object({
      name: z.string(),
      description: z.string(),
    })).default([]),
    controlling_faction: Faction.optional(),
    settlements: z.array(z.string()).default([]),
    landmarks: z.array(z.string()).default([]),
  }),
});

const settlements = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/settlements' }),
  schema: z.object({
    name: z.string(),
    sub_name: z.string().optional(),
    region: Region,
    population: z.number().int().optional(),
    faction_control: z.string(),
    atmosphere: z.string(),
    districts: z.array(z.object({
      name: z.string(),
      description: z.string(),
    })).default([]),
    key_npcs: z.array(z.string()).default([]),
    plot_hooks: z.array(z.object({
      name: z.string(),
      description: z.string(),
    })).default([]),
    environmental_mechanics: z.array(z.string()).default([]),
  }),
});

const landmarks = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/landmarks' }),
  schema: z.object({
    name: z.string(),
    region: Region,
    landmark_type: z.enum([
      'stable-breach', 'scar', 'ruin', 'natural', 'cursed',
    ]),
    danger_level: z.enum(['low', 'moderate', 'high', 'extreme']),
    flavor: z.string().optional(),
  }),
});

// =============================================================================
// THE BESTIARY
// =============================================================================

const creatures = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/creatures' }),
  schema: z.object({
    name: z.string(),
    creature_type: z.enum(['human', 'veil-born', 'beast', 'construct']),
    faction: Faction.optional(),
    tier: Tier,
    xp_value: z.number().int(),
    vitals: z.object({
      hp: z.number().int(),
      defense: z.number().int(),
      armor_rating: z.number().int().default(0),
      mettle: z.number().int().default(0),
      strain_cap: z.number().int().optional(),
    }),
    attributes: z.object({
      iron: z.number().int().optional(),
      grit: z.number().int().optional(),
      quick: z.number().int().optional(),
      savvy: z.number().int().optional(),
      sway: z.number().int().optional(),
      echo: z.number().int().optional(),
    }).optional(),
    attacks: z.array(z.object({
      name: z.string(),
      pool: z.number().int(),
      weapon_rating: z.number().int(),
      tempo: z.number().int(),
      qualities: z.array(z.string()).default([]),
      notes: z.string().optional(),
    })).default([]),
    traits: z.array(z.string()).default([]),
    abilities: z.array(z.string()).default([]),
    habitat: z.array(Region).default([]),
  }),
});

const npcs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/npcs' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    faction: Faction.optional(),
    location: z.string().optional(),
    is_combatant: z.boolean().default(true),
    stats: z.object({
      tier: Tier,
      hp: z.number().int(),
      defense: z.number().int(),
      pool: z.number().int(),
      mettle: z.number().int().default(0),
      armor_rating: z.number().int().default(0),
      notes: z.string().optional(),
    }).optional(),
  }),
});

// =============================================================================
// RULES (long-form chapters)
// =============================================================================

const rules = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/rules' }),
  schema: z.object({
    title: z.string(),
    book: z.enum([
      'introduction',
      'drifter', 'law-of-lead', 'current', 'marshals-almanac',
    ]),
    chapter: z.number().int().optional(),
    order: z.number().int(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// =============================================================================
// GLOSSARY COLLECTIONS
// Each entry is its own file, referenced by ID from other content. The site
// can auto-render tooltips, link inline mentions, and build glossary indexes.
// =============================================================================

const weaponQualities = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/weapon-qualities' }),
  schema: z.object({
    name: z.string(),
    short_effect: z.string(),
    applies_to: z.array(z.enum([
      'firearm', 'melee', 'thrown', 'all',
    ])).default(['all']),
    tags: z.array(z.string()).default([]),
  }),
});

const armorProperties = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/armor-properties' }),
  schema: z.object({
    name: z.string(),
    short_effect: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const conditions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/conditions' }),
  schema: z.object({
    name: z.string(),
    short_effect: z.string(),
    duration: z.string().optional(),
    inflicted_by: z.array(z.string()).default([]),
    cleared_by: z.array(z.string()).default([]),
    severity: z.enum(['minor', 'moderate', 'severe', 'critical']).optional(),
  }),
});

const keywords = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/keywords' }),
  schema: z.object({
    name: z.string(),
    aliases: z.array(z.string()).default([]),
    short_definition: z.string(),
    category: z.enum([
      'mechanic',
      'resource',
      'currency',
      'narrative',
      'state',
      'system',
    ]),
    tags: z.array(z.string()).default([]),
  }),
});

// =============================================================================
// REFERENCE TABLES
// Freestanding lookup data with no individual entities. Flexible columns/rows
// shape so any table fits — services prices, deprivation effects, range
// bands, camp security, etc. The site renders these as sortable HTML tables.
// =============================================================================

const references = defineCollection({
  // Reference tables are authored in category subfolders (economy/, combat/,
  // travel/, environment/, progression/, social/). flatId means the entry
  // ID is just the table's kebab-case name.
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/references',
    generateId: flatId,
  }),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      'economy',
      'equipment',
      'combat',
      'environment',
      'travel',
      'progression',
      'social',
    ]),
    description: z.string().optional(),
    columns: z.array(z.object({
      key: z.string(),
      label: z.string(),
      type: z.enum(['string', 'number', 'currency', 'modifier']).default('string'),
      align: z.enum(['left', 'center', 'right']).optional(),
    })),
    // Each row is a flexible object matching the column keys above.
    rows: z.array(z.record(z.string(), z.union([z.string(), z.number(), z.null()]))),
    notes: z.array(z.string()).default([]),
  }),
});

// =============================================================================
// EXPORT
// =============================================================================

export const collections = {
  // Character foundations
  attributes,
  skills,
  origins,
  tragedies,
  callings,
  disciplines,
  talents,
  // Equipment
  weapons,
  armor,
  ammunition,
  gear,
  // World
  factions,
  regions,
  settlements,
  landmarks,
  creatures,
  npcs,
  // Long-form
  rules,
  // Glossaries
  weaponQualities,
  armorProperties,
  conditions,
  keywords,
  // Reference tables
  references,
};
