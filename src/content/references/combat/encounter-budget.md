---
name: "Encounter Budget"
category: "combat"
description: "Total enemy XP-value budget for a party of 4 PCs across four difficulty bands. Sum the XP values of all enemies and check against this table."
columns:
  - key: "difficulty"
    label: "Difficulty"
  - key: "xp_budget"
    label: "Total XP Budget"
    align: "center"
  - key: "example"
    label: "Example"
rows:
  - difficulty: "Easy"
    xp_budget: "4–6"
    example: "4 Minions or 2 Soldiers"
  - difficulty: "Standard"
    xp_budget: "8–10"
    example: "1 Elite + 4 Minions, or 2 Elites"
  - difficulty: "Hard"
    xp_budget: "12–16"
    example: "1 Boss + 4 Minions, or 3 Elites + 2 Soldiers"
  - difficulty: "Deadly"
    xp_budget: "18+"
    example: "1 Boss + 1 Elite + Soldiers, or 2 Bosses (if you hate your players)"
notes:
  - "Tier XP values: Minion 1, Soldier 2, Elite 3, Boss 5. See threat-tiers.md."
  - "Adjust the budget proportionally for non-standard party sizes (×0.75 for 3 PCs, ×1.25 for 5)."
  - "Action Economy Wins: a Boss alone gets overwhelmed by four PCs' worth of actions. Always give a Boss 2-4 Minion/Soldier escorts."
---

Encounter math is necessary but insufficient. Terrain, cover, and tension
shift the felt difficulty more than raw XP. A Minion behind Hard Cover is
worth more than its XP suggests.
