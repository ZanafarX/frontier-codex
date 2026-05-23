---
title: "Chapter 4: The Duelist's Sum"
book: "law-of-lead"
chapter: 4
order: 5
summary: "The Core Resolution Mechanic. Pool, TN, roll, modifiers, comparison. The skeleton on which the entire game hangs."
tags: ["core-mechanic", "dice", "core-resolution"]
---

> *"It's a game of choices. The dice tell you what fate handed you. Everything else — the aim you took, the iron you carry, the ground you're standing on — that's what you bring to the table."*
> — Sheriff Crowe of Rustwater

Every meaningful action — pulling a trigger, picking a lock, convincing a stranger, channeling the Current — is resolved through the same fundamental process. Master this chapter, and you understand the skeleton on which the entire game hangs.

## The Core Mechanic

Resolution follows five steps:

1. **Build the Pool** — Determine how many dice you roll.
2. **Determine the Target Number** — Establish what you need to achieve.
3. **Roll and Sum** — Roll your dice and add the two highest.
4. **Apply Roll Modifiers** — Add your bonuses, subtract your penalties.
5. **Compare to TN** — Determine success, failure, Critical, or Fumble.

The whole game runs on this loop. Combat, social, exploration, psionic — same five steps every time.

## Step 1: Build the Pool

Your dice pool is your raw capability — natural talent plus trained skill. It is measured in **d8s** (eight-sided dice).

**Base Pool = Attribute Rank + Skill Rank.**

| Pool Size | Character Level | Example |
| :-: | :-- | :-- |
| 2–3 dice | Novice | Attribute 1–2, Skill 0–1 |
| 4–5 dice | Competent | Attribute 2–3, Skill 2 |
| 6–7 dice | Professional | Attribute 3–4, Skill 3 |
| 8–9 dice | Expert | Attribute 4–5, Skill 4 |

*Caleb has QUICK 3 and Ballistics 3. When he fires his revolver, his Base Pool is 6 dice.*

### Unskilled Checks (Rank 0)

If your Skill Rank is 0, you roll with **Disadvantage**:

1. Roll your Attribute in dice, plus one extra die.
2. Discard the single highest die.
3. Sum the two highest of the remaining (minimum 2 dice).

If discarding would leave fewer than 2 dice, keep 2 instead. Even the least capable character has a chance — however slim — at success.

*Caleb has SAVVY 2 but no Medicine skill. He rolls 3 dice, discards the highest, sums the best two. If he rolls [3, 5, 7], he discards the 7 and sums 3 + 5 = 8.*

### Pool Modifiers

Certain conditions add or subtract dice from your pool. **Pool Penalties are capped at −4** (excess is ignored); the minimum pool is always **1 die**. Pool Bonuses are rare outside of Bleed Dice and Assistance.

The full list lives in the **core-roll-modifiers** reference table. The most common penalties are **Wounded** (−1 die per threshold), **Suppressed** (−2 dice), **Blinded** (−4 dice), **Off-hand** (−2 dice), and **firing while Engaged** (−2 dice). The most common bonuses are **Assistance** (+1 per helper, max +2) and **Bleed Dice** (+1 to +3, see below).

Psionic Talents can grant Pool Bonuses that exceed normal training — a Seer's *Probability Spike*, a Mindweaver's *Veil of Silence*. This is part of the cost/power exchange: Psionics pay in Strain and soul to grant capability mundane characters can't match.

## Step 2: Determine the Target Number

The **Target Number (TN)** represents the difficulty of what you're attempting. **Base TN = Difficulty Rating or Defense Value.**

For tasks without active opposition, the GM sets a Difficulty Rating from the ladder. For attacks and contested actions, the TN is typically the target's Defense Value plus situational modifiers.

| TN | Difficulty | When to use |
| :-: | :-- | :-- |
| 5 | Trivial | Don't bother rolling |
| 7 | Easy | Routine work, ample time |
| 9 | Routine | Mild stress |
| 11 | Moderate | Trained characters succeed more often than not |
| 13 | Standard | The default for combat and dramatic action |
| 15 | Hard | Even skilled characters may fail |
| 17+ | Legendary | Impossible without significant Roll Bonuses |

Set TN 13 by default. Players who consistently see TN 11 get bored; players who consistently see TN 15 get tired.

### TN Modifiers

External circumstances adjust TN — cover, range, target state, positioning. Full table in **core-roll-modifiers**. Key examples: **Light Cover** +2, **Hard Cover** +4, **Flanking** −2, **Higher Ground** −1, **Far Range** +2 (pistol), **Point-Blank** −2 (pistol/shotgun).

**TN floor:** 5. **TN ceiling:** uncapped — but at TN 17+, raw dice cannot succeed (the max sum of two d8s is 16). Roll Modifiers, Bleed Dice, or Specializations become mandatory.

## Step 3: Roll and Sum

Roll all your pool dice simultaneously. Select the **two highest**. Add them. This is your **Base Sum**.

With d8s, the Base Sum ranges from 2 (snake eyes) to 16 (double eights). The two-highest system creates a bell curve that rewards larger pools while maintaining meaningful variance.

| Pool Size | Average Sum | P(Sum ≥ 11) | P(Sum ≥ 13) |
| :-: | :-: | :-: | :-: |
| 3 dice | ~11.0 | 58% | 34% |
| 4 dice | ~12.2 | 75% | 50% |
| 5 dice | ~12.8 | 85% | 63% |
| 6 dice | ~13.2 | 91% | 73% |
| 8 dice | ~13.8 | 97% | 86% |

This is the math behind the feel: a 6-dice pool succeeds against Standard difficulty (TN 13) about 73% of the time. Add a +2 Roll Bonus from preparation and that jumps to roughly 90%. The system rewards investment and preparation; it does not let you trivially overcome difficulty without them.

## Step 4: Apply Roll Modifiers

After rolling, apply Roll Modifiers to your Base Sum. **Final Sum = Base Sum + Roll Bonuses − Roll Penalties.**

Roll Modifiers represent factors *you* brought to the moment — preparation, equipment quality, expertise. They are capped at ±10 each direction.

The most common Roll Bonuses:
- **Aim** (banked): +2 / +3 / +4 for 1 / 2 / 3+ actions of aiming. Lost if you move or take damage before firing.
- **Equipment Quality:** Superior +1, Masterwork +2 (Masterwork replaces Superior; does not stack).
- **Specialization:** +1 when your declared Specialization applies.
- **Signature Weapon:** +1 (via the Signature Weapon talent).

The most common Roll Penalties:
- **Visibility:** Dim Light −1, Darkness −2, Pitch Black −4, Obscured −2.
- **Rushed:** −2.
- **Difficult Terrain (melee):** −1.

Like modifiers don't stack (two Superior weapons don't give +2). Unlike modifiers stack (Aim +2 + Masterwork +2 + Specialization +1 = +5).

## Step 5: Compare and Resolve

Compare your Final Sum to the TN.

| Outcome | Condition |
| :-- | :-- |
| **Success** | Final Sum ≥ TN — scaled by Margin Steps |
| **Critical Success** | Both kept dice are natural 8s **and** the roll succeeds — choose one Critical benefit |
| **Failure** | Final Sum < TN |
| **Fumble** | The roll fails, Margin is −6 or worse, **and** more than half your dice show 1s or 2s |

### Margin and Steps

How well you succeeded matters. For every full **3 points of positive Margin** (Final Sum − TN), you gain **+1 Step**.

| Margin | Steps | Combat Effect |
| :-: | :-: | :-- |
| 0–2 | +0 | Base damage only |
| 3–5 | +1 | +1 damage |
| 6–8 | +2 | +2 damage |
| 9–11 | +3 | +3 damage |
| 12+ | +4 | +4 damage |

Steps apply differently in different contexts: +1 damage in combat, +1 to leverage / duration / information depth in social and exploration, +1 to duration / area / intensity for Psionic Talents (each Talent specifies how). A Margin-12 hit is the kind of thing they tell stories about.

### Degrees of Failure

Failure has texture too:

- **Margin −1 to −2 (Near Miss):** Almost. The GM may offer Success-at-Cost (below).
- **Margin −3 to −5 (Clear Failure):** The task simply isn't accomplished.
- **Margin −6 or worse (Severe Failure):** Something went wrong — check for a Fumble.

### Success-at-Cost

On a Near Miss (Margin −1 or −2), the GM may offer you success with a complication: you achieve your goal, but you spend extra ammunition or break a tool, the action takes longer, you end up exposed or out of position, a new problem surfaces, or you take 1 Strain from the exertion. You choose — accept the cost and succeed, or take the clean failure. The choice is always yours.

### Critical Success

A Critical occurs when **both kept dice are natural 8s** and the roll succeeds. Choose one of:

- **Vital Strike:** the attack deals +1 damage.
- **Adrenaline Surge:** regain 1 Mettle.
- **Trigger a Weapon Quality** (Bleed, Stun, Knockdown, etc.) that's normally optional.
- **Narrative advantage** at the GM's discretion — information revealed, a tactical opening created, enemy morale broken.

*(For psionic Channeling, a Critical instead manifests the Talent with +1 Step to its effect.)*

### Fumble

A Fumble requires **all three** conditions: the roll fails, your Margin is −6 or worse, and more than half your dice show 1s or 2s. This keeps Fumbles rare even on bad failures — you must roll badly *and* roll low. When one occurs, the action fails and the GM describes an additional setback:

- Weapon jams; clear it with an action.
- An ally is endangered, or you leave yourself exposed.
- Equipment is damaged; needs Downtime repair.
- For Psionic Channeling: **Fumble Backlash** — a discipline-flavored catastrophe (see the **Backlash** keyword).

Every Fumble also adds **+1 die to the Tension Pool**. The Frontier notices your mistakes.

## Bleed Dice: The Chamber

Sometimes the dice aren't enough. The shot has to land. The lock has to open. The lie has to convince. **Bleed Dice** are how you reach beyond your training and pull more from the Current — and they come with a price.

### Adding Bleed Dice

Before you roll, you may add **1, 2, or 3 Bleed Dice** to your pool. They are added to your normal pool dice; you still select the two highest of all dice rolled. Bleed Dice are physically distinct (different color or size) because **only Bleed Dice can cause Backlash**.

### Backlash

Count the **1s rolled on Bleed Dice only**:

| Bleed 1s | Effect | Severity |
| :-: | :-- | :-: |
| One 1 | **The Flicker:** 1 Strain. +1 die to the Tension Pool. Reality shudders. | Minor |
| Two 1s | **The Tear:** 1 Erosion. The Current has reached deeper than you intended. | Moderate |
| Three 1s | **The Breach:** Burn 1 Memory immediately. The action succeeds at maximum effect (treat Margin as 12+ regardless). | Severe |

The probabilities are real but manageable: with 3 Bleed Dice, the chance of at least one 1 is **~33%**, two 1s is **~4.4%**, and three 1s is under **0.2%**. You will trigger The Flicker. You will rarely trigger The Tear. You will almost never trigger The Breach — but "almost never" includes the night you needed it most.

### When to Use Bleed Dice

Add Bleed Dice when the cost of failure outweighs the cost of Backlash. A point of Strain is cheap when the alternative is dying. Don't add them when the math can't help (if you need Sum 22 and your max is 16, dice won't get you there — you need Roll Modifiers or another approach) or when the stakes are low. Never risk your soul for routine work.

## Mettle: The Reaction Currency

Mettle represents your reserves of focus, grit, and desperate will — the energy you call upon in crisis to push beyond normal limits or react to sudden threats.

**Mettle Pool = (SAVVY + GRIT) ÷ 2, rounded up.**

SAVVY contributes situational awareness; GRIT contributes stubborn endurance. Together they determine how many times per scene you can dig deep.

### Mettle Refresh

- **Start of Session:** Full refresh.
- **The Ember:** +2 Mettle when you Spark a Memory this way.
- **Camp (Long Rest):** +1 Mettle if you eat and sleep.
- **Critical Success:** may regain 1 Mettle.
- **No refresh** while **Fatigued or Depleted** (Strain at half Cap or higher).

### Spending Mettle

| Action | Cost | Effect | Timing |
| :-- | :-: | :-- | :-- |
| **Dive** | 1 | Use Take Cover outside your turn | vs. one ranged attack, before rolling |
| **Dodge** | 1 | Add your QUICK rank to Defense | vs. one melee attack, before rolling |
| **Parry** | 1 | Add your Melee Skill rank to Defense | vs. one melee attack, before rolling |
| **Intercept** | 1 | Take a hit meant for an adjacent ally | when the ally is hit, before damage |
| **Steel** | 1 | Reroll a failed Willpower or Fear check | immediately after failing |
| **Push** | 1 | Reroll one die in your pool (must keep the new result) | after rolling |
| **Desperation** | 2 | Enable exploding 8s for this roll | before rolling |

**Reaction Limit:** only one Reaction (Dive, Dodge, Parry, Intercept) between your turns. Steel, Push, and Desperation are not Reactions and can be used freely within your Mettle budget.

### The Desperation Die

When you activate Desperation, any die that rolls its maximum (8) **explodes** — roll it again, add the new result, and chain on further 8s. A single die could theoretically produce 8 + 8 + 8 + 5 = 29.

But if an exploding die's reroll shows a 1, it becomes a **Cursed Die**, treated as a Bleed Die for Backlash. Count Cursed Die 1s together with any Bleed Die 1s. Desperation can therefore cause Backlash even without Bleed Dice — the Current responds to anyone reaching beyond their limits, and larger pools create more chances for catastrophe. With a 6-dice pool, at least one explosion occurs ~53% of the time, and at least one Cursed Die ~6.6% of the time. Manageable — until you get greedy.

## Opposed Rolls

When two characters directly contest each other — grappling, racing, debating, staring down — both roll their relevant pools (typically against TN 11, modified by circumstance), apply Roll Modifiers, and the higher Final Sum wins. Compute the Margin of Victory (winner's Sum − loser's) where the degree of success matters. This is the resolution loop for Grapples, Psionic Duels, persuasion contests, and any situation where two living wills pull against each other.

## When NOT to Roll

Don't call for rolls when success is trivial and failure is boring, when the character has ample time and no pressure, or when the outcome doesn't matter to the story. The dice exist to introduce uncertainty into meaningful moments. If a moment isn't meaningful, narrate the outcome and move on.
