---
name: "Range Bands"
category: "combat"
description: "Abstract tactical zones used in place of precise measurement. Every weapon and Talent specifies a band, not a meter count."
columns:
  - key: "band"
    label: "Band"
  - key: "distance"
    label: "Distance"
    align: "center"
  - key: "tactical_meaning"
    label: "Tactical Meaning"
rows:
  - band: "Point-Blank"
    distance: "0–2m"
    tactical_meaning: "Melee range. Impossible to miss a stationary target. Rifles are awkward."
  - band: "Close"
    distance: "3–5m"
    tactical_meaning: "A few steps away. Conversation distance."
  - band: "Near"
    distance: "6–20m"
    tactical_meaning: "Across a room or street. Standard combat range."
  - band: "Far"
    distance: "21–100m"
    tactical_meaning: "Across a plaza. Handguns struggle; rifles excel."
  - band: "Extreme"
    distance: "101m+"
    tactical_meaning: "Rooftop to rooftop. Only scoped rifles are effective."
notes:
  - "Pistol-specific TN modifiers tighten this scale: pistol-Far runs 21-50m and pistol-Extreme runs 51m+. See range-weapon-modifiers.md for the per-weapon breakdown."
---

Range determines weapon effectiveness, line-of-sight rules, and which
Talents can target what. Most Psionic Talents use **Near** as their
default reach.
