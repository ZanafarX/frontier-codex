---
name: "The Red Mother's Maw"
creature_type: "veil-born"
tier: "boss"
xp_value: 5
vitals:
  hp: 0
  defense: 8
  armor_rating: 5
  mettle: 0
attacks:
  - name: "Pseudopod"
    pool: 8
    weapon_rating: 4
    tempo: 5
    qualities: ["reach"]
    notes: "Reach 10m; initiates Grapple on hit."
  - name: "Swallow"
    pool: 0
    weapon_rating: 8
    tempo: 0
    qualities: []
    notes: "Grappled targets are pulled into the Maw; 8 damage/turn, ignores AR."
  - name: "Reality Warp"
    pool: 0
    weapon_rating: 0
    tempo: 0
    qualities: []
    notes: "See body prose. 1/turn automatic effect."
traits:
  - "**Immobile:** Cannot move. Controls the area within 20m of its edge. Everything within this radius is its territory."
  - "**Massive:** Cannot be Grappled, Knocked Down, Stunned, or affected by any single-target Psionic that targets 'a creature.' It is terrain with intent."
  - "**Indestructible:** The Red Mother's Maw cannot be killed. It is not a creature — it is a wound in reality. Damage dealt to the Maw is absorbed harmlessly (the flesh ripples, the teeth regrow, the chasm yawns wider). HP is recorded as 0 in frontmatter as a schema placeholder — the Maw has no functional HP track. The only way to close the Maw is the **Sealing Ritual** (see body prose)."
  - "**The Pull:** Any creature that starts its action within 20m of the Maw's edge must spend 2 extra Tempo on any action that moves them *away* from the Maw. The gravity isn't strong enough to drag you in, but leaving is harder than arriving."
abilities:
  - "**Reality Warp (1/turn, automatic):** The Maw distorts local reality. At the start of its turn, one of the following occurs (GM chooses or rolls 1d6):"
  - "1. *Memory Bleed:* All creatures within 20m experience a vivid, involuntary flash of one of their Core Memories — but *wrong.* Each PC must roll ECHO + Resilience TN 13 or take 1 Erosion as the Maw's version of the memory tries to overwrite theirs."
  - "2. *Time Hiccup:* One randomly determined PC loses their next turn entirely — time skips them. 4 Ticks pass."
  - "3. *Spatial Fold:* Two PCs within 20m swap positions instantly. Both are Disoriented (−2 dice to next action)."
  - "4. *Hunger Pulse:* All creatures within 20m take 1 Strain as the Maw pulls at their Current. Psionics take 2 Strain."
  - "5. *Echo:* The Maw produces a perfect copy of one PC's voice, screaming for help from inside. ECHO TN 13 or 1 Strain from the horror."
  - "6. *Silence:* All sound ceases within 20m for 2d6 Ticks. No verbal communication. No war cries. No screams."
  - "**Vulnerability:** A Bastion Soul's Null Zone suppresses Reality Warp for as long as the zone is maintained."
habitat: []
---

Not a creature — a *wound.* The Red Mother's Maw is a Thin Place
given form: a pulsating chasm in the earth, roughly thirty meters
across, ringed with teeth of crystallized Current and lined with
flesh that shouldn't exist. The ground around it is warm and wet. The
air smells of copper and ozone. **It breathes.**

The Circle of Ash believes the Maw is a digestive organ — part of
something so vast it extends through the Veil into whatever lies
beyond. The Consortium believes it is a geological anomaly worth
mining (they sent an expedition; it did not return). The Dust
Vultures believe it is the mouth of the Red Mother, a deity of hunger
and patience who will one day swallow the Frontier whole.

The Maw does not move. It does not need to. It warps gravity, folds
space, and hiccups time until everything within its reach slides
slowly, inevitably, into its gullet.

Tier classified as Boss (Environmental). The HP field is recorded as
**0** in frontmatter because the Maw has no functional HP track — it
is indestructible. Sealing is the only resolution.

## The Sealing Ritual

Closing the Maw requires an **Extended Check**:

| Component | Detail |
| :-------- | :----- |
| Success Threshold | 5 successes |
| TN | 15 (Hard) |
| Pool | ECHO + Channel (or ECHO + Lore for non-Psionics with Circle of Ash texts) |
| Interval | Each roll takes 1 minute of sustained concentration at the Maw's edge |
| Salt Cost | Each roll consumes 5 pounds of salt (thrown into the Maw) |
| Fumble | The Maw retaliates — Pseudopod attack on the ritualist, automatic hit |
| Temporary Seal | Success closes the Maw for 1d6 weeks per surplus success beyond the threshold |

## Tactics

Exist. Warp reality. Pull everything toward itself. The Maw is not
*fought* — it is survived and sealed. Combat against the Maw should
be an escape sequence or a ritual-closing with the Maw's pseudopods
and Reality Warps as interruptions.

## Encounter Design

The Maw is a set-piece, not a monster. The party needs to get
something near it (a lost artifact, a trapped NPC), survive its
influence, and get out — or perform a sealing ritual that requires
multiple Extended Checks while the Maw tries to eat the ritualist.
