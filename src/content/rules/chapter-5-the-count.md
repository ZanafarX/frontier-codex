---
title: "Chapter 5: The Count"
book: "law-of-lead"
chapter: 5
order: 6
summary: "Combat. The Cylinder, the Tick system, Tempo, actions, damage, conditions, and death."
tags: ["combat", "core-mechanic", "the-count", "tempo"]
---

> *"In a duel, time doesn't move like it does in a church service. It stretches. You see the sweat on the other man's brow, you hear the hammer click back, and you realize you have a lifetime to decide whether you're going to live or die. Then the gun goes off, and that lifetime is over in a heartbeat."*
> — Duncan Maddox, The First Psy-Slinger

Combat in *The Veil & Lead* is not a polite exchange of blows. It is a chaotic, desperate scramble for survival. It does not use "Rounds" where everyone politely waits their turn. Instead, it uses a continuous timeline called **The Count**.

## The Timeline

### The Cylinder

Combat is tracked on **The Cylinder** which is a circular track numbered **0 to 19**, representing the spinning chamber of a revolver. Twenty segments. Two **Red Lines** at segments 0 and 10 (the **Tension Lines** — significant for GM pacing tools). One marker — **The Hammer** — that advances clockwise as time passes.

Each character has a token on the track showing when they next act.

### The Flow of Combat

1. **Roll Initiative.** Each character rolls QUICK + Awareness vs. TN 11. The Margin determines their starting Tick (see Initiative below).
2. **The Hammer advances.** The GM moves The Hammer clockwise: 0, 1, 2, 3...
3. **Action trigger.** When The Hammer reaches a Tick containing a character's token, that character acts.
4. **Resolve and advance.** The character resolves their Action, then advances their token clockwise by the Action's **Tempo** value.
5. **The Wrap.** If movement takes a token past 19, continue counting from 0. (A character at Tick 18 performing a Tempo 6 Reload lands on Tick 4.)
6. **Continue.** The GM keeps counting until the next token is reached. Repeat until combat ends.

### Player Tracking (The d20 Method)

To speed play, each player tracks their own position with a d20.

- Place a d20 in front of you. The face-up number is your **Current Tick**.
- When you act, calculate Current + Tempo and turn the die to the new number.
- *GM:* "Hammer is at 12. Who is at 12?" *Player:* (glances at d20) "I am."

This decentralizes the bookkeeping. The GM tracks The Hammer; players track themselves.

## Initiative

When violence erupts, everyone rolls to determine where they enter the timeline.

**Pool:** QUICK + Awareness. **TN:** 11. Apply relevant modifiers: ambush prepared +2, caught completely off-guard −2, supernatural senses as specified, Fatigued −1 die.

| Result | Starting Tick | State |
| :-- | :-: | :-- |
| Failure (Sum < 11) | Tick 6 | Surprised |
| Margin 0–3 | Tick 4 | Slow |
| Margin 4–6 | Tick 3 | Ready |
| Margin 7–9 | Tick 2 | Fast |
| Margin 10+ | Tick 0 | Instant |

### The Surprised State

Characters who fail Initiative are **Surprised** until their first turn:

- Cannot spend Mettle on Reactions (Dive, Dodge, Parry, Intercept).
- Cannot use Held actions.
- **Flat-footed:** Attackers gain −2 TN against you.

The Surprised state ends the moment you take your first action.

### Initiative Ceiling

Achieving Tick 0 is exceptionally difficult. The maximum natural roll for a starting character is QUICK 5 + Awareness 4 = Pool 9, max Sum 16, Margin 5 → Tick 3 (Ready). **Tick 0 requires Margin 10+**, which demands Roll Modifiers or extraordinary luck. This ceiling is intentional: no one should consistently act before everyone else without significant investment or narrative setup.

### Handling Ties

When multiple characters share the same Tick, resolve in order: PCs before NPCs → higher Initiative Margin → higher QUICK → simultaneous. Simultaneous resolution can result in mutual kills. The Frontier is not fair.

## Tempo and Actions

Every action has a **Tempo** — the time it takes to execute, in Ticks. **After acting: Current Tick + Tempo = New position.**

Fast actions let you act again sooner. Slow actions create gaps where enemies respond. This trade-off is the tactical heart of combat. Weapon-specific Tempos live in the **weapon-base-tempos** reference table.

### Instant Actions (Tempo 0)

- **Speak** — a phrase, warning, or command, not a speech.
- **Drop** — release a held item.
- **Free Reaction** — spend Mettle for Dive, Dodge, Parry, Intercept, Steel, or Push outside your turn. (One Reaction between your turns.)

### Fast Actions (Tempo 2–3)

Sacrifice thoroughness for speed. Most trigger the **Exposed** condition (attackers gain −1 TN against you until your next turn).

- **Draw Weapon** (2): ready a holstered or stowed weapon.
- **Aim** (2, banked): +2 / +3 / +4 Roll Bonus to your next attack against the same target for 1 / 2 / 3+ Aim actions. Lost if you move more than a Shift, take damage, or switch targets.
- **Scramble** (3): move up to Speed + 4m erratically; attackers suffer +1 TN against you until your next turn.
- **Quick Shot** (Base − 1, min 3): ranged attack with −2 dice Pool Penalty. Fire from the hip.
- **Shiv** (Base − 1, min 2): light-melee attack with −1 Step to damage. Fast, but without full force.
- **Take Cover** (3): move up to 2m to adjacent cover and gain its TN bonus immediately. *Exempt from Exposed* — its sole purpose is defense.
- **Stand Up** (3): leave the Prone condition.

### Standard Actions (Tempo varies by weapon)

- **Steady Shot**: full-pool ranged attack at the weapon's Base Tempo.
- **Strike**: full-pool melee attack at the weapon's Base Tempo. *Note:* Light melee weapons (Brass Knuckles at Tempo 2, knives at Tempo 3) trigger **Exposed** even on a standard Strike (it's the cost of their speed).
- **Reload (Speed Loader)** (4): for revolvers, moon clips, or break-top mechanisms.
- **Grapple** (5): IRON + Brawl vs. Defense; both become Grappled on success. The target may Escape on their turn (Opposed IRON + Brawl).
- **Interact** (4): flip a table, pick up an item, kick a door, pull a lever.

### Slow Actions (Tempo 6+)

- **Called Shot** (Base + 2): target a specific location; −2 dice. On hit, in addition to damage:

  | Location | Effect on Hit |
  | :-- | :-- |
  | Head | Target is Stunned |
  | Arm / Hand | Target drops held item; −2 dice with that limb |
  | Leg | Speed halved; −2 dice to movement checks |
  | Torso | No special effect (use Steady Shot instead) |

- **Heavy Cleave** (Base + 2): two-handed melee attack. On hit, the target makes a GRIT + Resilience check (TN 11) or is knocked **Prone**. Requires a two-handed weapon (Sledgehammer, Cavalry Lance).
- **Reload (Manual)** (6): tube-fed rifles and single-shot weapons, or any firearm without a speed-loader.
- **Channel**: manifest a Psionic Talent (see Chapter 6). Tempo scales with Rank:

  | Talent Rank | Typical Tempo |
  | :-- | :-: |
  | Rank 1 (Cantrip) | 4 |
  | Rank 2 (Tactic) | 5 |
  | Rank 3 (Power) | 6 |
  | Rank 4 (Devastation) | 7 |
  | Rank 5 (Miracle) | 9 |

- **Recover** (6): make a check to clear a Condition: Suppressed (ECHO + Resilience, TN 11), temporary Blinded (GRIT + Resilience, TN 13), On Fire (QUICK + Athletics, TN 11). Spending 1 Mettle instead clears Suppressed instantly, without an action.

## Damage and Vitality

### Vitality

Your maximum **Vitality** (HP) is **IRON + 8**. An IRON 3 character has 11 HP; an IRON 1 character has 9 HP. The combat-effective threshold is the **Wounded** line at half Vitality.

### Calculating Damage

Successful attack damage:

**Damage = Weapon Rating (WR) + Steps − Target's AR**

The Weapon Rating is the weapon's base damage. Steps come from Margin (one per 3 Margin). Armor Rating (AR) subtracts directly.

*Caleb shoots his Peacemaker (WR 3) and scores Margin 6 (+2 Steps). The target has AR 1 (Duster). Damage: 3 + 2 − 1 = 4 HP.*

**Damage cannot be reduced below 0.** If a target's Armor meets or exceeds WR + Steps, the hit lands but doesn't penetrate. It simply doesn't hurt.

### Wound Thresholds

| State | Threshold | Effect |
| :-- | :-- | :-- |
| Healthy | Above half Vitality | None |
| Wounded | At or below half Vitality | −1 die to physical actions (Pool Penalty) |
| Downed | 0 Vitality | Collapse; begin Bleeding Out |
| Dead | Vitality ≤ −(IRON + 2) | Gone |

The Wounded penalty is a Pool Penalty and stacks with other Pool Penalties up to the cap (−4).

### Grievous Wounds

When a single attack deals **5 or more damage after Armor**, the target suffers a **Grievous Wound** on top of the HP loss. Roll 1d8:

| Roll | Wound | Effect | Treatment |
| :-: | :-- | :-- | :-- |
| 1–2 | Flesh Wound | −1 die to physical actions until treated | 1 hour rest OR Medicine TN 9 |
| 3–4 | Broken Bone | Affected limb is unusable | Medicine TN 13, then 1 day recovery |
| 5–6 | Internal Bleeding | Lose 1 HP per hour until treated | Surgery: Medicine TN 15 |
| 7 | Concussion | −2 dice to all mental actions | 24 hours rest |
| 8 | Arterial Hit | Begin Bleeding Out immediately | Stabilization required |

Multiple Grievous Wounds stack. A Called Shot to a specific limb means that limb takes the Broken Bone effect automatically. An Arterial Hit causes Bleeding Out even if you still have HP. Armor with the **Hardened** property (Boiler Plate, Ironbrand Hardsuit) negates the first Grievous Wound of the scene. The damage still lands, only the Grievous Wound is prevented.

## Death and Dying

### Bleeding Out

At 0 Vitality you are **Downed**:

- You collapse.
- You cannot take Actions except **Crawl** (2m, Tempo 6) or **Speak** (Tempo 0).
- At the start of each of your turns, you lose 1 Vitality.
- You can be **Stabilized** by an ally with medical training.

A Downed character is not out of the fight. They can call out warnings, share information, even crawl toward cover. But they are dying.

### Death Threshold

You die when your Vitality reaches **−(IRON + 2)**.

| IRON | Death At |
| :-: | :-: |
| 1 | −3 |
| 2 | −4 |
| 3 | −5 |
| 4 | −6 |
| 5 | −7 |

Higher IRON gives you more time, but not much. An IRON 1 character has three turns between Downed and Dead.

### Stabilization

An ally can stabilize a Bleeding Out character with a **Medicine check** (Tempo 6, TN 11 + how far below 0 the patient is). Success stops the bleeding; the patient stays Downed at current Vitality but loses no more HP. Failure means they keep bleeding. Try again. A Fumble inflicts an additional 1 Vitality loss. A **Medical Kit** grants +2 Roll Bonus to this check.

| Patient Vitality | Stabilization TN |
| :-: | :-: |
| 0 | 11 |
| −1 | 12 |
| −2 | 13 |
| −3 | 14 |

## Range Bands

Distance is abstracted into five **Range Bands**. The full table is in **range-bands**; the short version:

- **Engaged / Point-Blank** (0–2m): melee range. Ranged attacks penalized; melee at advantage.
- **Close** (2–10m): a pistol's sweet spot.
- **Near** (10–30m): standard combat distance.
- **Far** (30–100m): rifle territory; pistols penalized (+2 TN).
- **Extreme** (100m+): rifle range; even rifles lose accuracy.

Weapon-specific range modifiers are in **range-weapon-modifiers**. Pistols are penalized beyond Near; rifles are penalized at Point-Blank (+2 TN).

## Cover

Cover increases TN against you. Three tiers:

- **Light Cover** (+2 TN): furniture, foliage, thin wood, smoke.
- **Hard Cover** (+4 TN): stone wall, iron plate, overturned wagon.
- **Fortified** (+6 TN): bunker slit, murder-hole, arrow loop.

Take Cover (Tempo 3) is the only Fast Action exempt from Exposed. Its sole purpose is defense.

## Combat Conditions

Conditions are mechanical states inflicted by attacks, abilities, or environmental factors. Each has a trigger, an effect, and a clearance method. The canonical list lives in the **conditions** collection: Stunned, Suppressed, Exposed, Wounded, Bleeding Out, Frightened, Open State, Prone, Grappled, Disrupted, Encumbered, and Hollow.

The conditions you'll see most in any given fight: **Suppressed** (−2 dice from near misses and Fear) and **Exposed** (−1 TN against you after Fast Actions). The ones you'll fear most: **Stunned** (you lose ground on the Count) and **Bleeding Out** (you are dying).

Most conditions clear with the **Recover** action (Tempo 6, appropriate check vs. TN 11) or with specific Talents. Spending 1 Mettle clears **Suppressed** without using an action.

## A Worked Combat Example

*Caleb (Tick 2), a Consortium Enforcer (Tick 4), and Maeve (Tick 6) are in a gunfight.*

*Tick 2: Caleb acts. He fires his Peacemaker (Tempo 4) at the Enforcer. Pool: QUICK 3 + Ballistics 3 = 6 dice. TN: Enforcer's Defense 10 + Light Cover (overturned wagon) +2 = TN 12. He rolls [3, 4, 5, 6, 7, 8]. Two highest: 7 + 8 = 15. No Roll Modifiers. Final Sum 15 vs. TN 12 → Success, Margin 3, +1 Step. Damage: WR 3 + 1 Step − Enforcer's AR 1 = 3 HP. Caleb advances to Tick 6.*

*Tick 4: The Enforcer acts. He takes a Steady Shot (Tempo 5) at Maeve, hits, and deals 4 damage. He advances to Tick 9.*

*Tick 6: Caleb and Maeve are both due to act — a tie. Both are PCs, so the tie breaks on Initiative Margin; Maeve rolled higher, so she resolves first. She takes a Quick Shot (Tempo 3, −2 dice) at the Enforcer and gains the Exposed condition, advancing to Tick 9. Caleb takes Aim (Tempo 2) for a banked +2, advancing to Tick 8.*

*The Hammer keeps advancing. At Tick 8, Caleb fires again. This time with his Aim bonus. The clock ticks on, inexorable.*

The Count creates a continuous, fluid combat where every weapon choice and every action has rhythmic consequence.
