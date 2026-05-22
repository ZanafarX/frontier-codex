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

Combat is tracked on **The Cylinder** — a circular track numbered **0 to 19**, representing the spinning chamber of a revolver. Twenty segments. Two **Red Lines** at segments 0 and 10 (the **Tension Lines** — significant for GM pacing tools). One marker — **The Hammer** — that advances clockwise as time passes.

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

When violence erupts, everyone rolls to determine where they enter the timeline. This is not about who is "fastest" — it's about who was ready when the hammer dropped.

**Pool:** QUICK + Awareness. **TN:** 11. Apply relevant modifiers: ambush prepared +2, caught completely off-guard −2, supernatural senses as specified, Fatigued −1 die.

| Result | Starting Tick | State |
| :---- | :---: | :---- |
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

Achieving Tick 0 is exceptionally difficult. The maximum natural roll for a starting character is QUICK 5 + Awareness 4 = Pool 9, Max Sum 16, Margin 5 → Tick 3 (Ready). **Tick 0 requires Margin 10+**, which demands Roll Modifiers or extraordinary luck.

This ceiling is intentional. No one should consistently act before everyone else without significant investment or narrative setup.

### Handling Ties

When multiple characters share the same Tick, resolve in order: PCs before NPCs → higher Initiative Margin → higher QUICK → simultaneous. Simultaneous resolution can result in mutual kills. The Frontier is not fair.

## Tempo and Actions

Every action has a **Tempo** — the time it takes to execute, in Ticks. **After acting: Current Tick + Tempo = New position.**

Fast actions let you act again sooner. Slow actions create gaps where enemies respond. This trade-off is the tactical heart of combat. The full action list with Tempos is in the **tempo-reference** table; weapon-specific Tempos are in **weapon-base-tempos**. A summary by speed class:

### Instant Actions (Tempo 0)

- **Speak** — a phrase, warning, or command, not a speech.
- **Drop** — release a held item.
- **Free Reaction** — spend Mettle for Dive, Dodge, Parry, Intercept, Steel, or Push outside your turn.

### Fast Actions (Tempo 2–3)

Sacrifice thoroughness for speed. Most trigger the **Exposed** condition (attackers gain −1 TN against you until your next turn).

- **Draw Weapon** (2): ready a weapon.
- **Aim** (2): bank +2/+3/+4 Roll Bonus to next attack against same target.
- **Scramble** (3): Speed + 4m of erratic movement; attackers suffer +1 TN.
- **Quick Shot** (Base − 1, min 3): ranged attack with −2 dice Pool Penalty.
- **Take Cover** (3): inherently defensive, exempt from Exposure.
- **Stand Up** (3): leave Prone condition.
- **Shiv** (Base − 1, min 2): light-melee attack with −1 Step to damage.

### Standard Actions (Tempo varies by weapon)

- **Steady Shot** — full-pool ranged attack at weapon's Base Tempo.
- **Strike** — full-pool melee attack at weapon's Base Tempo.
- **Reload (Speed Loader)** (4): if you have a speed-loader, moon clip, or break-top mechanism.
- **Grapple** (5): IRON + Brawl vs. Defense; both become Grappled on success.
- **Interact** (4): flip a table, pick up an item, kick a door.
- **Channel** (4–9 depending on Talent Rank): manifest a Psionic Talent.

### Slow Actions (Tempo 6+)

- **Reload (Manual)** (6): tube-fed rifles, single-shot weapons.
- **Recover** (6): make a check to clear a Condition (see below).
- **Called Shot** (Base + 2): target a specific location for tactical effect (head Stuns, arm disarms, leg slows).
- **Heavy Cleave** (Base + 2): two-handed weapon attack; target must save vs. Prone.

## Damage and Vitality

### Vitality

Your maximum **Vitality** (HP) is **IRON × 3 + 5**. An IRON 3 character has 14 HP; an IRON 1 character has 8 HP. Healthy combatants stay above half HP; combat-effective threshold is the **Wounded** line.

### Calculating Damage

Successful attack damage:

**Damage = Weapon Rating (WR) + Steps − Target's AR**

The Weapon Rating is the weapon's base damage. Steps come from Margin (one per 3 Margin). Armor Rating (AR) subtracts directly.

*Caleb shoots his Peacemaker (WR 3) and scores Margin 6 (+2 Steps). The target has AR 1 (Duster). Damage: 3 + 2 − 1 = 4 HP.*

Damage cannot reduce below 0 — a hit always deals at least 1 damage if it lands, regardless of armor (the **glancing minimum**), unless a weapon specifically says otherwise.

### Wound Thresholds

| State | Threshold | Effect |
| :---- | :---- | :---- |
| Healthy | Above half Vitality | None |
| Wounded | At or below half Vitality | −1 die to physical actions (Pool Penalty) |
| Downed | 0 Vitality | Collapse; begin Bleeding Out |
| Dead | Vitality ≤ −(IRON + 2) | Gone |

The Wounded penalty is a Pool Penalty and stacks with other Pool Penalties to the −5 cap.

### Grievous Wounds

When a single attack deals **5 or more damage after Armor**, the target suffers a **Grievous Wound** on top of the HP loss. Roll 1d8:

| Roll | Wound | Effect | Treatment |
| :---: | :---- | :---- | :---- |
| 1–2 | Flesh Wound | −1 die to physical actions until treated | 1 hour rest OR Medicine TN 9 |
| 3–4 | Broken Bone | Affected limb is unusable | Medicine TN 13, then 1 day recovery |
| 5–6 | Internal Bleeding | Lose 1 HP per hour until treated | Surgery: Medicine TN 15 |
| 7 | Concussion | −2 dice to all mental actions | 24 hours rest |
| 8 | Arterial Hit | Begin Bleeding Out immediately | Stabilization required |

Multiple Grievous Wounds stack. Called Shots that hit a specific limb mean that limb takes the Broken Bone effect automatically. Armor with the **Hardened** property (Boiler Plate) negates the first Grievous Wound of the scene.

## Death and Dying

### Bleeding Out

At 0 Vitality you are **Downed**:

- You collapse.
- You cannot take Actions except **Crawl** (2m, Tempo 6) or **Speak** (Tempo 0).
- At the start of each of your turns, you lose 1 Vitality.
- You can be **Stabilized** by an ally with medical training.

A Downed character is not out of the fight — they can call out warnings, share information, even crawl toward cover — but they are dying.

### Death Threshold

You die when your Vitality reaches **−(IRON + 2)**.

| IRON | Death At |
| :---: | :---: |
| 1 | −3 |
| 2 | −4 |
| 3 | −5 |
| 4 | −6 |
| 5 | −7 |

Higher IRON gives you more time — but not much. An IRON 1 character has three rounds between Downed and Dead.

### Stabilization

An ally can attempt to stabilize a Bleeding Out character with a **Medicine check** (Tempo 6, TN 11 + how far below 0 the patient is). Success stops the bleeding; the patient stays Downed at current Vitality but loses no more HP. Failure means they continue to bleed; try again. Fumble inflicts an additional 1 Vitality loss. A **Medical Kit** grants +2 Roll Bonus to this check.

| Patient Vitality | Stabilization TN |
| :---: | :---: |
| 0 | 11 |
| −1 | 12 |
| −2 | 13 |
| −3 | 14 |

## Range Bands

Distance is abstracted into five **Range Bands**. The full table is in **range-bands**; the short version:

- **Engaged / Point-Blank** (0–2m): melee range. Ranged attacks penalized; melee attacks at advantage.
- **Close** (2–10m): pistol's sweet spot.
- **Near** (10–30m): standard combat distance.
- **Far** (30–100m): rifle territory; pistol penalized.
- **Extreme** (100m+): rifle range; even rifles lose accuracy.

Weapon-specific range modifiers are in **range-weapon-modifiers**. Pistols are penalized beyond Near; rifles are penalized at Point-Blank.

## Cover

Cover increases TN against you. Three tiers:

- **Light Cover** (+2 TN): furniture, foliage, thin wood, smoke.
- **Hard Cover** (+4 TN): stone wall, iron plate, overturned wagon.
- **Fortified** (+6 TN): bunker slit, murder-hole, arrow loop.

Take Cover (Tempo 3) is the only Fast Action exempt from Exposed — its sole purpose is defense.

## Combat Conditions

Conditions are mechanical states inflicted by attacks, abilities, or environmental factors. Each has a trigger, an effect, and a clearance method. The canonical list lives in the **conditions** collection — Stunned, Suppressed, Exposed, Wounded, Bleeding Out, Frightened, Open State, Prone, Grappled, Disrupted, Encumbered, and Hollow.

The condition you will see most in any given fight: **Suppressed** (−2 dice from near misses and Fear) and **Exposed** (−1 TN against you after Fast Actions). The condition you will fear most: **Stunned** (you miss a turn worth of Ticks) and **Bleeding Out** (you are dying).

Most conditions clear with the **Recover** action (Tempo 6, appropriate check vs. TN 11) or with specific Talents. Spending 1 Mettle clears **Suppressed** without using an action.

## A Worked Combat Example

*Caleb (Tick 2), a Consortium Enforcer (Tick 4), and Maeve (Tick 6) are in a gunfight.*

*Tick 2: Caleb acts. He fires his Peacemaker (Tempo 4) at the Enforcer. Pool: QUICK 3 + Ballistics 3 = 6 dice. TN: Enforcer's Defense 10 + Light Cover (overturned wagon) +2 = TN 12. He rolls [3, 4, 5, 6, 7, 8]. Two highest: 7 + 8 = 15. No Roll Modifiers. Final Sum 15 vs. TN 12. Success, Margin 3, +1 Step. Damage: WR 3 + 1 Step − Enforcer's AR 1 = 3 HP. Enforcer takes 3 damage. Caleb advances to Tick 6.*

*Tick 4: Enforcer acts. He takes a Steady Shot (Tempo 5) at Maeve. Pool: 5 dice. He rolls. He hits, deals 4 damage to Maeve. He advances to Tick 9.*

*Tick 6: Both Caleb and Maeve act (tie). PCs go first; both happen to be PCs, so they resolve by Initiative Margin. Maeve had Margin 5 (Ready), Caleb had Margin 3 (Slow). Maeve goes first.*

*Maeve Quick Shots (Tempo 3, −2 dice) the Enforcer and takes the Exposed condition. She advances to Tick 9. Caleb takes Aim (Tempo 2) for +2 banked. He advances to Tick 8.*

*The Hammer keeps advancing. At Tick 8, Caleb fires again — this time with his Aim bonus. At Tick 9, both the Enforcer and Maeve act (tie); they resolve in order. The clock ticks on.*

The Count creates a continuous, fluid combat where every weapon choice and every action has rhythmic consequence. There are no "rounds" — only the slow, inexorable advance of The Hammer.
