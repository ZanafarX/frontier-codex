---
name: "Bone Sentinel"
creature_type: "construct"
tier: "elite"
xp_value: 3
vitals:
  hp: 14
  defense: 8
  armor_rating: 3
  mettle: 1
attacks:
  - name: "Bone Club (arm)"
    pool: 6
    weapon_rating: 5
    tempo: 6
    qualities: ["breaker", "knockdown"]
  - name: "Bone Shard Burst"
    pool: 0
    weapon_rating: 3
    tempo: 5
    qualities: ["bleed"]
    notes: "All within Near range: 3 damage, QUICK TN 11 or Bleed."
  - name: "Trample"
    pool: 6
    weapon_rating: 4
    tempo: 5
    qualities: ["knockdown"]
    notes: "Must move at least 4m."
traits:
  - "**Construct:** Immune to Fear, Poison, Bleeding, Strain, Erosion, and all mental effects. Does not eat, sleep, or breathe."
  - "**Dormant:** Appears as a natural bone formation until activated. Awareness TN 15 to recognize a dormant Sentinel. Activation triggers: approaching within Close range of a burial mound, attempting to dig, or making loud noise near the mounds at dusk (when the Humming begins)."
  - "**Reassemble:** If reduced to 0 HP, the Sentinel collapses into a pile of bones. Unless the bones are scattered across a wide area (10+ minutes of work), salted, or burned, it reassembles in 1d6 hours."
  - "**Ancient:** The Sentinel does not register as Veil-Born to Psi-Sense or Smell the Witch. It predates both the Veil and the Current. It simply *is*."
abilities: []
habitat:
  - "graven-plain"
---

Ancient guardians of the Graven Plain — massive humanoid constructs
assembled from the colossal bones that litter the region, animated by
a Current so old it predates the Rupture. They stand twelve feet
tall, assembled from rib-cage armor, femur limbs, and skulls that
serve as sense organs. They do not move until disturbed — and
disturbance, to a Bone Sentinel, means approaching the burial mounds
they guard.

The Circle of Ash believes the Sentinels are the remains of a
**pre-human civilization's defense system**, still following orders
from masters who died millennia ago. Whatever they guard, it is
buried deep beneath the mounds and sealed behind doors that the
Circle has not yet learned to open.

Bone Sentinels stand motionless among the bone-hills, indistinguishable
from the landscape until they move. The first warning is a sound like
an avalanche of skulls.

Speed 5. Note: `creature_type` is "construct" rather than "veil-born"
per the Ancient trait — the Sentinels predate the Veil.

## Tactics

Bone Sentinels do not pursue. They activate when their threshold is
crossed, attack anything within their patrol radius (Far range from
the mound), and return to dormancy when the intruders leave or die.
They fight with brutal simplicity — Bone Club to smash, Bone Shard
Burst if surrounded, Trample if enemies try to flee through their
space.

## Encounter Design

Bone Sentinels are *guardian* encounters. The party needs something
from a burial mound — a relic, a Circle text, a sealed door that
might lead to answers about the pre-Rupture world. The Sentinel
stands between them and their objective. They can fight it (hard,
and it reassembles), sneak past it (very hard), or find a way to
deactivate it (the Circle might have theories).
