---
name: "Margin and Steps"
category: "combat"
description: "How well you succeeded. For every full 3 points of positive Margin (Final Sum − TN), you gain +1 Step. Steps scale the effect of your success."
columns:
  - key: "margin"
    label: "Margin"
    align: "center"
  - key: "steps"
    label: "Steps"
    align: "center"
  - key: "description"
    label: "Description"
  - key: "combat_effect"
    label: "Combat Effect"
rows:
  - margin: "0–2"
    steps: "+0"
    description: "Bare success. You just made it. The bullet grazes; the lock clicks on your last pick."
    combat_effect: "Base damage only."
  - margin: "3–5"
    steps: "+1"
    description: "Solid success. Clear competence. The shot lands true."
    combat_effect: "+1 damage."
  - margin: "6–8"
    steps: "+2"
    description: "Strong success. The shot hits a vital area; you pick the lock and notice it was trapped."
    combat_effect: "+2 damage."
  - margin: "9–11"
    steps: "+3"
    description: "Exceptional success. The shot drops the target instantly."
    combat_effect: "+3 damage."
  - margin: "12+"
    steps: "+4"
    description: "Legendary success. The stuff of stories. This is how reputations are made."
    combat_effect: "+4 damage."
notes:
  - "Step Applications by Context — Combat: +1 damage per Step. Social: +1 to leverage / duration / depth of information. Exploration: +1 to quality / bonus information / time saved. Psionics: +1 to duration / area / intensity per the Talent's spec. Crafting: +1 quality tier or reduced resource cost."
  - "Critical Success (both kept dice naturally 8) grants +1 Step on top of normal Margin Steps, or alternatively one of: Vital Strike (+1 damage), Adrenaline Surge (+1 Mettle), trigger Weapon Quality, or narrative advantage."
---

Steps are why high rolls feel good. The difference between a 3-Margin
hit and a 12-Margin hit isn't just "you succeeded twice as much"; it's
the difference between wounding and dropping.
