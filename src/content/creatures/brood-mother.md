---
name: "The Brood Mother"
creature_type: "veil-born"
tier: "boss"
xp_value: 5
vitals:
  hp: 100
  defense: 7
  armor_rating: 3
  mettle: 0
attacks:
  - name: "Tendril Lash"
    pool: 7
    weapon_rating: 3
    tempo: 5
    qualities: ["reach"]
    notes: "Reach 8m; Grapple on hit."
  - name: "Engulf"
    pool: 0
    weapon_rating: 4
    tempo: 0
    qualities: []
    notes: "Grappled target pulled into body; 4 damage/turn, AR ignored; IRON TN 15 to break free."
  - name: "Broodling Swarm"
    pool: 0
    weapon_rating: 0
    tempo: 0
    qualities: []
    notes: "See body prose — spawns 1d3 Broodlings per turn from sac-organs."
traits:
  - "**Immobile:** The Brood Mother cannot move. It *is* the island."
  - "**Camouflage:** Awareness TN 15 (or Frontier TN 13) to identify the 'island' as a living creature before landing. Once on the surface, Awareness TN 11 as the vegetation pulses and the ground squelches."
  - "**Regeneration:** Heals 10 HP per turn. Fire damage prevents regeneration for 1 turn per instance."
  - "**Vulnerability:** Fire is devastating — the Brood Mother is essentially a plant. Fire damage ignores its AR and prevents regeneration. Ghost-Rock rounds and oil are the recommended tools. Salt disrupts its Current-sustaining biology — 10 pounds of salt poured on the body deals 2d6 damage and prevents regeneration for 1 hour."
abilities: []
habitat:
  - "the-fen"
---

A massive Veil-corrupted organism that has taken root in the deep
Fen — a sessile predator disguised as a small island of dense
vegetation in the swamp. The "island" is the creature's body: a mound
of interwoven tendrils, root-like appendages, and sac-like organs
that produce a steady stream of smaller creatures — **Broodlings** —
that hunt on the Brood Mother's behalf and return with food.

From above, a Brood Mother island looks inviting — dry ground in an
endless swamp, covered in lush (if unusual) vegetation. Exhausted
travelers who land their boats and make camp on a Brood Mother rarely
realize their mistake until *the ground moves.*

The Brood Mother is patient in the way that landscapes are patient.
It has been growing for decades. It will continue to grow. The Fen
feeds it. The dead feed it. Eventually, if nothing stops it, it will
swallow Bellhaven.

Tier classified as Boss (Environmental).

## Broodlings

Spawned 1d3 per turn from the Mother's sac-organs:

| Stat | Value |
| :--- | :---- |
| HP | 3 |
| Defense | 8 |
| Pool | 3 |
| WR | 2 |
| Tempo | 3 |
| Speed | 9 |

Broodlings are Small, fast, and attack in packs. They Grapple and
drag prey toward the Mother. Destroying a sac-organ (HP 16, AR 2;
there are **4**) prevents further spawning from that organ.

## Tactics

The Brood Mother plays dead until prey is on its surface, then
activates — tendrils erupt from the "ground," broodlings emerge from
vegetation, and the island itself begins to contract. Its goal is to
Engulf as many targets as possible. **It prioritizes the heaviest
(most nutritious) targets.**

## Encounter Design

The party needs to cross the deep Fen. They spot dry land — an
island. They land. They rest. And then the ground moves. This is an
*escape* encounter: get off the island before it closes around you.
Burn it if you can. Salt it if you can spare the salt. But mostly,
run.

## Veil-Born traits
Universal Veil-Born traits (unless noted otherwise per entry):
- Salt Vulnerability: Salt Rounds, rock salt, and salt barriers deal
  ×2 damage or impose additional effects.
- Iron Sensitivity: Iron weapons deal +1 WR (applied automatically).
- No Morale: Veil-Born do not make Morale checks.
These universal traits are referenced in body prose where relevant
but not repeated in every `traits[]` array unless the entry has a
specific qualifier (e.g. enhanced or modified vulnerability).
