---
name: "TN Difficulty Ladder"
category: "combat"
description: "The seven steps of task difficulty. Set the TN based on the inherent challenge of the task; apply modifiers separately."
columns:
  - key: "tn"
    label: "TN"
    type: "number"
    align: "center"
  - key: "difficulty"
    label: "Difficulty"
  - key: "description"
    label: "Description"
  - key: "when_to_use"
    label: "When to Use"
rows:
  - tn: 5
    difficulty: "Trivial"
    description: "Almost automatic; rolling is a formality."
    when_to_use: "Tasks where failure is boring and success is assumed. Consider not rolling at all."
  - tn: 7
    difficulty: "Easy"
    description: "A trained professional under mild pressure."
    when_to_use: "Routine work with ample time. The locksmith picking a simple lock in her workshop."
  - tn: 9
    difficulty: "Routine"
    description: "Competent work under mild stress."
    when_to_use: "Some pressure exists, but the task itself isn't demanding. Tracking a trail on dry ground."
  - tn: 11
    difficulty: "Moderate"
    description: "A real challenge requiring focus."
    when_to_use: "Trained characters succeed more often than not, but failure is plausible. Treating a wound in a moving wagon."
  - tn: 13
    difficulty: "Standard"
    description: "The baseline for dramatic action."
    when_to_use: "Default for acting under active conflict or time pressure. Combat, tense negotiations, dangerous exploration."
  - tn: 15
    difficulty: "Hard"
    description: "Expert-level difficulty."
    when_to_use: "Even skilled characters may fail. Requires preparation, good equipment, or luck. Surgery in a firefight."
  - tn: 17
    difficulty: "Legendary"
    description: "Beyond normal human limits."
    when_to_use: "Impossible without significant Roll Bonuses. Shooting a coin from a man's fingers at a hundred paces."
notes:
  - "TN floor is 5 (no task is easier than Trivial). TN ceiling is uncapped."
  - "At TN 17 or higher, raw dice cannot succeed (max sum of two d8s is 16). Roll Modifiers, Bleed Dice, or Specializations become mandatory."
  - "Approximate success rates (6-dice pool): TN 11 = 91%, TN 13 = 65%, TN 15 = 36%, TN 17 effectively 0% without bonuses."
---

The most common GM-set difficulty is TN 13 — Standard. Set it there
unless you have a reason to deviate. Players who consistently see TN 11
get bored; players who consistently see TN 15 get tired.
