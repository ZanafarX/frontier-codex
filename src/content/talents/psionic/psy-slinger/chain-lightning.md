---
type: "psionic"
name: "Chain Lightning"
discipline: "psy-slinger"
rank: 2
rank_name: "Tactic"
cost:
  strain: 2
tn: 11
tempo: "Weapon Base + 1"
flavor: "The Current arcs from the barrel like a bolt of tamed lightning."
tags: ["attack-replacing", "multi-target", "arc"]
has_steps: true
has_resist: false
---

## Effect

Your shot, if it hits, arcs to a second target within Close range of the
first. The second target takes damage equal to half the original damage
(round down, before AR). The original Channeling Sum is compared to the
second target's Defense.

## Steps

+1 additional arc per Step (each dealing half of the previous hit's
damage, minimum 1).

## Special

Cannot arc back to a target already hit. Cannot arc to allies.
**AR is applied separately to each arc target.**
