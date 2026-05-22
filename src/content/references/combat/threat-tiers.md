---
name: "Threat Tiers"
category: "combat"
description: "Baseline stats for the four NPC threat tiers. Use these to read encounter weight at a glance and to scratch-build NPCs in seconds."
columns:
  - key: "tier"
    label: "Tier"
  - key: "hp"
    label: "HP"
    align: "center"
  - key: "pool"
    label: "Pool"
    align: "center"
  - key: "defense"
    label: "Defense"
    align: "center"
  - key: "mettle"
    label: "Mettle"
    align: "center"
  - key: "ar"
    label: "AR"
    align: "center"
  - key: "xp"
    label: "XP Value"
    type: "number"
    align: "center"
  - key: "role"
    label: "Encounter Role"
rows:
  - tier: "Minion"
    hp: "6–8"
    pool: "3–4"
    defense: "7–9"
    mettle: "0"
    ar: "0–1"
    xp: 1
    role: "Fodder. Two Minions per PC is a fair fight; three is dangerous."
  - tier: "Soldier"
    hp: "8–10"
    pool: "5"
    defense: "8–10"
    mettle: "0–1"
    ar: "1"
    xp: 2
    role: "Backbone. One Soldier per PC is standard. They use tactics."
  - tier: "Elite"
    hp: "10–14"
    pool: "6–7"
    defense: "9–11"
    mettle: "1–2"
    ar: "1–2"
    xp: 3
    role: "Threats. One Elite can anchor a Minion squad. Two Elites stress a party."
  - tier: "Boss"
    hp: "18–24"
    pool: "8–10"
    defense: "10–12"
    mettle: "3–5"
    ar: "2–3"
    xp: 5
    role: "Climax. One Boss is a session-defining encounter. Add Minions for drama."
notes:
  - "Calibrated for starting PCs (HP 9-13, Defense 9-12, Pool 4-7). For PCs at session 9+, increase enemy Pools by +1 and HP by +2-3 per tier to maintain tension."
  - "See encounter-budget.md for combining tiers into balanced encounters."
---

Tiers are shorthand for combat weight — they tell you how many of something
it takes to threaten a party. Don't mix the tier baseline with creature
quirks; a Stormcaller is technically a Boss, but it's also a localized
extinction event.
