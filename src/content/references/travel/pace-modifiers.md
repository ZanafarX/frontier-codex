---
name: "Pace Modifiers"
category: "travel"
description: "Three travel paces — Cautious, Normal, Fast. Each adjusts speed, the Journey Check TN, and the dice to avoid encounters."
columns:
  - key: "pace"
    label: "Pace"
  - key: "speed"
    label: "Speed"
    align: "center"
  - key: "journey_tn"
    label: "Journey TN"
    align: "center"
  - key: "effect"
    label: "Encounter Effect"
rows:
  - pace: "Cautious"
    speed: "×0.75"
    journey_tn: "TN 9"
    effect: "+2 dice to avoid encounters."
  - pace: "Normal"
    speed: "×1"
    journey_tn: "TN 11"
    effect: "Standard."
  - pace: "Fast"
    speed: "×1.5"
    journey_tn: "TN 13"
    effect: "−2 dice to avoid encounters."
notes:
  - "The Guide rolls SAVVY + Frontier against the listed TN. The party can declare pace each day."
  - "Speed multipliers apply to the base mi/day of the chosen route — see travel-summary.md."
---

Cautious doubles your time but halves your danger. Fast does the opposite.
Most cross-country travel uses Normal; the choice to deviate is itself a
narrative beat.
