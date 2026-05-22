---
name: "Cover Types"
category: "combat"
description: "Physical cover between attacker and target. Modifies the TN to hit. Cover stacks with range but not with itself."
columns:
  - key: "cover_type"
    label: "Cover Type"
  - key: "tn_modifier"
    label: "TN Modifier"
    type: "modifier"
    align: "center"
  - key: "examples"
    label: "Examples"
rows:
  - cover_type: "Exposed"
    tn_modifier: "−1"
    examples: "Caught in the open; no cover whatsoever (also the Exposed condition)"
  - cover_type: "No Cover"
    tn_modifier: "—"
    examples: "Standard; nothing special between you and the attacker"
  - cover_type: "Light Cover"
    tn_modifier: "+2"
    examples: "Furniture, foliage, thin wood, curtains, smoke"
  - cover_type: "Hard Cover"
    tn_modifier: "+4"
    examples: "Stone wall, iron plate, overturned wagon, thick timber"
  - cover_type: "Fortified"
    tn_modifier: "+6"
    examples: "Bunker slit, murder-hole, arrow loop — minimal exposure"
  - cover_type: "Total Cover"
    tn_modifier: "Cannot be targeted"
    examples: "Fully hidden; attacker must reposition to gain line of sight"
notes:
  - "Take Cover (Tempo 3, Exposed-exempt) moves you to adjacent cover. Interact (Tempo 4) creates cover by flipping tables, kicking over barrels, etc."
  - "Cover bonuses do not stack with themselves — two pieces of Light Cover are still +2, not +4."
---

Cover is the single largest TN swing a defender can claim. A Minion behind
Hard Cover is as hard to hit as an Elite in the open. Fights in featureless
rooms are forgettable; environment is half the encounter.
