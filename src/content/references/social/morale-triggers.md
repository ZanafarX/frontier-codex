---
name: "Morale Triggers"
category: "social"
description: "Conditions that prompt an NPC to make a Morale check. Morale is optional but useful when fights should end through something other than total annihilation."
columns:
  - key: "trigger"
    label: "Trigger"
  - key: "when_it_happens"
    label: "When It Happens"
rows:
  - trigger: "Bloodied"
    when_it_happens: "NPC drops to 25% HP or below."
  - trigger: "Leader Falls"
    when_it_happens: "The group's leader is killed or incapacitated."
  - trigger: "Outnumbered"
    when_it_happens: "50% or more of the NPC group is down."
  - trigger: "Overwhelming Display"
    when_it_happens: "Witness something terrifying (Psionic Devastation, monster manifestation, ally exploding)."
  - trigger: "Cornered"
    when_it_happens: "Escape route cut off while losing."
notes:
  - "Skip Morale entirely for mindless enemies (Hollow Men, Walking Dead, most Veil-Born) and for cornered enemies with nothing to lose."
  - "Skip Morale for boss fights where the enemy should fight to the death."
  - "See morale-checks.md for the TN calculation and morale-results.md for what happens on success/failure."
---

Morale is the tool that turns a slaughter into a surrender. Use it when
you want your villains to feel human, and skip it when you want your
monsters to feel like monsters.
