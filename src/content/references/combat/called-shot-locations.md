---
name: "Called Shot Locations"
category: "combat"
description: "Tactical effects when targeting a specific body part. Called Shot costs Tempo Base + 2 and inflicts −2 dice (Pool Penalty) to the attack."
columns:
  - key: "location"
    label: "Location"
  - key: "effect"
    label: "Effect on Hit"
rows:
  - location: "Head"
    effect: "Target is Stunned (in addition to normal damage)."
  - location: "Arm / Hand"
    effect: "Target drops held item; −2 dice to actions using that limb."
  - location: "Leg"
    effect: "Target's Speed halved; −2 dice to movement-based checks."
  - location: "Torso"
    effect: "No special effect, but no penalty either. Use Steady Shot instead."
notes:
  - "GM may rule that certain targets lack vulnerable locations (armored joints, no visible head, etc.) or assign different effects to non-humanoid creatures."
  - "Called Shot damage applies normally on top of the tactical effect — head shots are both Stunning and lethal."
---

Called Shot trades accuracy for tactical control. Use it to disable
specific threats: strip the leader of his weapon, cripple the runner
before he escapes, head-shot the Psionic to break his Channel.
