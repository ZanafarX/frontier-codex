---
name: "Morale by Enemy Type"
category: "social"
description: "Baseline Morale trait for the main enemy categories. Apply this as a permanent TN modifier to all Morale checks for that enemy type."
columns:
  - key: "enemy_type"
    label: "Enemy Type"
  - key: "morale_trait"
    label: "Morale Trait"
    align: "center"
  - key: "notes"
    label: "Notes"
rows:
  - enemy_type: "Bandits / Raiders"
    morale_trait: "Normal"
    notes: "Fight for profit; flee when cost exceeds reward."
  - enemy_type: "Consortium Enforcers"
    morale_trait: "Disciplined (+2)"
    notes: "Trained soldiers; hold longer."
  - enemy_type: "Dust Vultures"
    morale_trait: "Aggressive (−1)"
    notes: "Attack-focused; may flee if overwhelmed."
  - enemy_type: "Redeemer Inquisitors"
    morale_trait: "Fanatic (−4)"
    notes: "Fight to the death against \"witches.\""
  - enemy_type: "Ironbrands"
    morale_trait: "Professional (+2)"
    notes: "Contract-bound; won't break unless contract released."
  - enemy_type: "Veil-Born"
    morale_trait: "Fearless"
    notes: "No morale checks; fight until destroyed."
  - enemy_type: "Hollow Men"
    morale_trait: "Mindless"
    notes: "No morale checks. The body continues until it can't."
  - enemy_type: "Townspeople"
    morale_trait: "Fragile (−2)"
    notes: "Break easily; not fighters."
notes:
  - "These traits modify the TN of every Morale check for that enemy type — they're not single-use modifiers but standing dispositions."
  - "Disciplined / Professional / Fanatic traits stack with situational modifiers. A Fanatic Redeemer defending home gets −4 (Fanatic) + −2 (defending home) = −6 to TN."
---

This table is the soul of faction tactics. A fight with Consortium
Enforcers ends differently than a fight with Dust Vultures, even at the
same XP budget. The Redeemers never break. The Veil-Born can't.

# =============================================================================
# END OF REFERENCES BATCH
# 42 reference table files total
#
# Distribution:
#   - Economy: 5 (cost rating, equipment quality, barter, services, availability)
#   - Combat: 17 (range, cover, movement, tiers, encounter budget, TN ladder,
#                 core modifiers, tempo, weapon tempos, called shots, margin,
#                 mettle, backlash, talent ranks, tension pool, rupture)
#   - Travel: 3 (pace, summary, mounts)
#   - Environment: 3 (resources, deprivation, camp security)
#   - Progression: 10 (Veil Bleed, Erosion sources, Strain stages, Strain
#                      sources, XP costs, XP awards, Legend ×3, downtime)
#   - Social: 4 (morale triggers, checks, results, by enemy type)
#
# Notes on what was consolidated vs. split:
#   - One unified core-roll-modifiers.md covers all Pool/Roll/TN modifiers
#     (~52 row entries) with Track + Direction + Category columns.
#   - settlement-services.md merges Lodging / Medical / Professional /
#     Information (20 rows).
#   - tempo-reference.md merges Instant / Fast / Standard / Slow / Channel /
#     Recover (25 rows).
#   - strain-sources.md and erosion-sources.md merge across all source
#     categories with a Category column.
#   - xp-progression-costs.md merges Attributes / Skills / Talents /
#     Specializations / Maintenance with a Category column.
#   - xp-awards.md merges Session + Milestone with a Type column.
#   - tension-pool-triggers.md merges Automatic / Situational / Heavy with
#     a Class column.
#
# Notes on what was split (columns don't unify):
#   - Morale split into four files (triggers, checks, results, by-enemy-type).
#   - Legend split into three files (effects, gaining, bounty-board).
#   - Backlash-effects standalone (the probability table is covered in the
#     Backlash keyword and noted here in body prose).
#   - Strain-stages separate from strain-sources (one is progression of
#     accumulating Strain; the other is what causes accumulation).
#
# Notes on what was omitted from this batch:
#   - Common opposed rolls (Grapple / Psionic Duel / etc.) — small enough
#     to live in Rules chapters.
#   - In-combat healing (First Aid / Knit Flesh / Laudanum) — partial
#     overlap with strain-sources/recovery; lives in Rules.
#   - Pacing by session length — GM advice, not lookup material.
#   - Erosion Recovery — fully covered in the Erosion keyword.
#   - Strain Recovery — fully covered in the Strain keyword.
#   - Erosion Capacity / Strain Cap quick-reference tables — covered in
#     keywords and in the strain-stages.md / erosion-sources.md notes.
#   - Visibility Penalties — folded into core-roll-modifiers.md.
#   - Night Travel Risks — folded into camp-security.md notes.
#   - Mounted Combat Quick Reference — folded into mounts-and-transport.md notes.
#   - Step Applications by Context — folded into margin-and-steps.md notes.
# =============================================================================
