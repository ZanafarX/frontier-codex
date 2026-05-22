---
name: "Tempo"
aliases:
  - "Action Tempo"
  - "Tick Cost"
short_definition: "The time cost of an action, measured in Ticks. After acting, you advance your token on The Count by your action's Tempo. Fast actions (Tempo 2-3) let you act again sooner; slow actions (Tempo 6+) create gaps where enemies respond."
category: "mechanic"
tags: ["combat", "the-count", "core-mechanic"]
---

Tempo is the tactical currency of *The Veil & Lead* combat. Every
action — drawing a weapon, firing a shot, casting a Talent, taking
cover — has a Tempo value that determines how far it pushes you down
the timeline.

**After acting: Current Tick + Tempo = Your new position on The Count.**

Common Tempo values:

| Action | Tempo |
| :---- | :---: |
| Speak / Drop / Free Reaction | 0 |
| Draw Weapon / Aim | 2 |
| Scramble / Take Cover / Stand Up | 3 |
| Steady Shot (Pistol) / Strike (Medium Melee) / Speed Reload | 4 |
| Steady Shot (Rifle) / Grapple | 5 |
| Recover / Manual Reload | 6 |
| Channel Rank 1 (Cantrip) | 4 |
| Channel Rank 2 (Tactic) | 5 |
| Channel Rank 3 (Power) | 6 |
| Channel Rank 4 (Devastation) | 7 |
| Channel Rank 5 (Miracle) | 9 |

The Tempo tradeoff is the heart of combat design: a fast revolver
shooter can fire three times in the same window a heavy-weapons
specialist needs to fire once. Most **Fast Actions** (Tempo 2-3) also
trigger the **Exposed** condition — speed has a defensive cost.

Tempo can be a number or a string in stat blocks: numbers for fixed
Tempos, strings for special cases like `"1 minute (ritual)"`,
`"passive"`, or `"Free Action"`. Reactions are Tempo 0.
