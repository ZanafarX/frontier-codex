---
name: "Deprivation Effects"
category: "environment"
description: "Cumulative effects of going without water or food. Penalties stack; characters can die from thirst in days, from hunger in weeks."
columns:
  - key: "deprivation"
    label: "Deprivation"
  - key: "duration"
    label: "Duration"
  - key: "effect"
    label: "Effect"
rows:
  - deprivation: "Water"
    duration: "1 day"
    effect: "−1 die to all physical checks."
  - deprivation: "Water"
    duration: "2 days"
    effect: "1 Strain/hour; −2 dice."
  - deprivation: "Water"
    duration: "3+ days"
    effect: "1 HP/hour; hallucinations (1 Erosion)."
  - deprivation: "Food"
    duration: "3 days"
    effect: "−1 die to all checks."
  - deprivation: "Food"
    duration: "7 days"
    effect: "1 Strain/day; −2 dice."
  - deprivation: "Food"
    duration: "14+ days"
    effect: "1 HP/day; weakness."
notes:
  - "Penalties from water and food deprivation stack."
  - "Hallucinations at 3+ days without water inflict Erosion — the parched mind tears at the Veil."
  - "In the Scorchveil, day 1 effects begin at 12 hours instead of 24; the desert is twice as cruel."
---

Three days without water kills a man. Three weeks without food does the
same. The Frontier rewards the careful packer.
