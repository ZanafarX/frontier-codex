---
name: "Equipment Quality"
category: "economy"
description: "The four-tier quality scale that determines Roll Modifiers on item use and Price Multipliers on purchase."
columns:
  - key: "quality"
    label: "Quality"
  - key: "roll_modifier"
    label: "Roll Modifier"
    type: "modifier"
    align: "center"
  - key: "price_multiplier"
    label: "Price Multiplier"
    align: "center"
  - key: "description"
    label: "Description"
rows:
  - quality: "Poor"
    roll_modifier: "−1"
    price_multiplier: "×0.5"
    description: "Damaged, improvised, or badly maintained. Firearms jam on any Fumble; armor degrades on Grievous Wounds."
  - quality: "Standard"
    roll_modifier: "—"
    price_multiplier: "×1"
    description: "Functional, mass-produced, adequate. The baseline against which others are measured."
  - quality: "Superior"
    roll_modifier: "+1"
    price_multiplier: "×2"
    description: "Well-crafted by a skilled artisan."
  - quality: "Masterwork"
    roll_modifier: "+2"
    price_multiplier: "×5"
    description: "Exceptional; the finest available. Often named, often inherited."
notes:
  - "Quality bonuses are Roll Modifiers (added to your Final Sum after rolling), not Pool Modifiers."
  - "Two Superior weapons wielded together do not stack — same-source bonuses (equipment quality) don't combine."
---

Quality is the most common Roll Bonus a mundane character will encounter.
A Masterwork firearm in the hands of an Expert (Specialization +1) gives
+3 to every shot: enough to make impossible TNs achievable.
