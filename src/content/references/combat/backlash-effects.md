---
name: "Backlash Effects"
category: "combat"
description: "The cost of rolling 1s on Bleed Dice or Cursed Dice (Desperation explosions that reroll to 1). Each 1 contributes to Backlash severity."
columns:
  - key: "bleed_ones"
    label: "Bleed 1s"
    align: "center"
  - key: "name"
    label: "Effect Name"
  - key: "effect"
    label: "Effect"
  - key: "severity"
    label: "Severity"
    align: "center"
rows:
  - bleed_ones: "1"
    name: "The Flicker"
    effect: "Take 1 Strain. The GM gains +1 die to the Tension Pool. Reality shudders — lights flicker, temperatures shift, the air tastes wrong."
    severity: "Minor"
  - bleed_ones: "2"
    name: "The Tear"
    effect: "Take 1 Erosion. The Current has reached deeper than you intended. Something tears inside — not physical, but real."
    severity: "Moderate"
  - bleed_ones: "3"
    name: "The Breach"
    effect: "Burn 1 Memory immediately. The Talent succeeds with maximum effect (treat Margin as 12+ regardless of roll). The power works perfectly; you'll just never remember why you used it."
    severity: "Severe"
notes:
  - "Only Bleed Dice and Cursed Dice cause Backlash. 1s on regular pool dice are simply low rolls."
  - "Desperation + Bleed Dice combine: count all 1s together across Bleed and Cursed dice."
  - "Probability with 3 Bleed Dice: ~33% at least one 1, ~4.4% two 1s, <0.2% three 1s. Risk is real but manageable until you get greedy."
  - "Fumble Backlash is separate: a Channeling Fumble (Margin −6 or worse, majority low dice) triggers a discipline-flavored catastrophe in addition to standard Fumble effects."
---

Backlash is the immediate spike where Veil Bleed is the slow poison. A
Psionic who triggers Backlash repeatedly isn't just hurting themselves —
they're pulling the Veil thinner for everyone in the scene.
