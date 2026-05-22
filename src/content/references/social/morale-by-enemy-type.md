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
