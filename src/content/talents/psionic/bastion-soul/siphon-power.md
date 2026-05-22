---
type: "psionic"
name: "Siphon Power"
discipline: "bastion-soul"
rank: 3
rank_name: "Power"
cost:
  erosion: 1
tn: 13
tempo: 0
flavor: "Your strength becomes my shield."
tags: ["reaction", "anti-psionic", "self-heal"]
has_steps: true
has_resist: false
---

## Effect

**Trigger:** A creature within Near range successfully casts a psionic Talent.

You absorb some of the Current they channeled. The caster takes **3 Strain**.
You heal Strain equal to half the amount inflicted (round up — so 2 Strain
healed at base).

## Steps

+1 Strain inflicted per Step (you heal half rounded up).

## Special

If this causes the caster to exceed their Strain cap, the excess becomes
damage to them as normal (Strain → Vitality, 1-for-1). Subject to the
Bastion Soul Reaction Convention.
