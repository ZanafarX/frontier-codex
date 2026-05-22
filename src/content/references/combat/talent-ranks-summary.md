---
name: "Talent Ranks Summary"
category: "combat"
description: "The five Psionic Talent Ranks at a glance — cost, TN, Tempo, and risk class. Full per-Talent listings live in the talents collection."
columns:
  - key: "rank"
    label: "Rank"
    type: "number"
    align: "center"
  - key: "name"
    label: "Name"
  - key: "cost"
    label: "Cost"
  - key: "tn"
    label: "TN"
    type: "number"
    align: "center"
  - key: "tempo"
    label: "Tempo"
    type: "number"
    align: "center"
  - key: "description"
    label: "Description"
  - key: "risk"
    label: "Risk"
rows:
  - rank: 1
    name: "Cantrip"
    cost: "1 Strain"
    tn: 9
    tempo: 4
    description: "Minor manipulations; parlor tricks with teeth."
    risk: "Low. Failure: nosebleed and headache."
  - rank: 2
    name: "Tactic"
    cost: "2 Strain"
    tn: 11
    tempo: 5
    description: "Combat-ready applications; real power, real risk."
    risk: "Moderate. Repeated use exhausts the body quickly."
  - rank: 3
    name: "Power"
    cost: "1 Erosion"
    tn: 13
    tempo: 6
    description: "Significant reality alterations; soul-deep cost."
    risk: "High. Every use leaves a mark."
  - rank: 4
    name: "Devastation"
    cost: "2 Erosion"
    tn: 15
    tempo: 7
    description: "Awe-inspiring feats; the Veil notices."
    risk: "Severe. Triggers environmental effects; GM adds dice to Tension Pool."
  - rank: 5
    name: "Miracle"
    cost: "1 Memory"
    tn: 16
    tempo: 9
    description: "The impossible; you will never be the same."
    risk: "Catastrophic. A piece of your identity is gone forever."
notes:
  - "Cost is paid when you start Channeling, not when you finish. Disruption forfeits the effect but not the cost."
  - "ECHO must be ≥ Talent Rank to attempt that Rank."
  - "Excess Strain (over Cap) converts to Vitality damage 1-for-1. Erosion overflow burns a Memory and resets to 0."
  - "Rank 3+ Talents normally require a Mentor or a Grimoire to learn (see xp-progression-costs.md)."
---

Memorize this table or print it. The cost-vs-TN gradient is the entire
shape of Psionic risk-management: a Cantrip is cheap and trivial to land;
a Miracle is irreversible and only barely possible.
