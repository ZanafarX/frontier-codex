---
title: "Chapter 3: The Armory & Economy"
book: "drifter"
chapter: 3
order: 4
summary: "The currencies of the Frontier, the cost rating system, and a guide to choosing your starting iron and protection."
tags: ["economy", "equipment", "world"]
---

> *"Lead to stop what's coming, Salt to keep it down, and Water to live long enough to regret the first two."*
> (Dust Vulture proverb)

The Frontier runs on three currencies: the paper promises of the **Consortium** (Scrip), the universal necessity of **salt**, and the brutal finality of **lead**. This chapter covers the economic systems that keep civilization limping along and orients you to the tools of violence that keep individuals breathing.

The detailed equipment stats (weapons, armor, ammunition, gear) live in the equipment files. This chapter is the *economic framing* and a guide to choosing what to carry.

## The Salt Economy

The Frontier operates on overlapping economies. What has value depends entirely on where you are and who you're dealing with.

### Scrip

**Consortium Scrip** (§) is paper currency backed by the Consortium's control of the rails. It works in Consortium-controlled towns, rail stations, and most rim settlements that trade with the East. It is **worthless** in the deep wastes, in Dust Vulture territory, and in any settlement that has rejected Consortium authority.

For scale: a common meal runs §1–2 and a flophouse bed §2 a night, while a day of honest labor earns roughly 1d10 Scrip. A standard revolver (the Peacemaker) is §120, and a horse runs anywhere from Cost 3 (a poor mount) to Cost 4 (a trained one). The full rates live in the **settlement-services** reference file.

### Barter

Outside Consortium reach, trade happens in goods. The canonical barter table (in the **barter-rates** reference file) lists rough exchange rates for ammunition, salt, water, food, and labor. A pouch of ammunition can be worth a day's water in the deep Scorchveil, and a day's water is worth your life there.

Salt holds value everywhere. A pouch of purified rock salt costs §40 in town and can be traded for almost anything in the wastes. Smart travelers carry more salt than they think they need.

### The Cost Rating

To avoid micromanaging every transaction, *The Veil & Lead* uses a **Cost Rating** abstraction. Every item maps to a rating from 1 to 5:

| Rating | Scrip Range | Examples |
| :-: | :-- | :-- |
| 1 | §1–10 | Meal, drink, flophouse bed, 10 rounds of ammo |
| 2 | §11–50 | Knife, decent room, salt pouch, basic tool |
| 3 | §51–200 | Revolver, poor horse, box of 50 ammo, medical kit |
| 4 | §201–1,000 | Rifle, Consortium Vest, wagon, trained horse |
| 5 | §1,000+ | Gatling gun, Ironbrand Hardsuit, war-horse, sand-skiff |

Most starting characters can afford Cost 1–2 items casually; Cost 3 requires saving or a good week's work; Cost 4 is a major investment; Cost 5 is the work of a season or a windfall. Use the rating for quick-resolution shopping; use exact Scrip prices for important purchases.

## Choosing Your Iron

Your weapon is your rhythm. A pistol with a Base Tempo of 4 acts three times for every two shots from a rifle at Base Tempo 6, but the rifle hits harder and reaches farther. The trade-off between speed and stopping power is one of the core tactical choices of *The Veil & Lead* combat.

### Firearm Categories

The major firearm categories, by Base Tempo:

- **Light Pistols** (Tempo 3): the Derringer. Concealable, fast, weak. The High-Roller's friend.
- **Medium Pistols** (Tempo 4): Peacemaker, Volcanic. The Gunhand's standard. Versatile.
- **Heavy Pistols** (Tempo 5): Dragoon, LeMat. Hit harder than a medium; slower to bring to bear. (The LeMat adds an underslung shotgun barrel.)
- **Shotguns** (Tempo 3–5): Sawed-Off (3), Coach Gun (4), Pump-Action (5). Scatter damage, devastating at Close range.
- **Rifles** (Tempo 5–6): Carbine (5), Repeater (5), Buffalo Rifle (6), Sniper Rifle (6, Scope). The long-range answer.
- **Heavy Weapons** (Tempo 7+): the Gatling Gun (7). Crew-served and mounted; Area Attack and Volatile. The Rail-Jack's and Ironbrand's signature.

A starting character typically begins with one primary firearm (matched to their Calling) and possibly a backup. The full stat blocks live in the **weapons** files; quick reference: Derringer (WR 2, §45), Peacemaker (WR 3, §120), Volcanic (WR 3, §150), LeMat (WR 3/4, §250), Dragoon (WR 4, §180), Carbine (WR 3, §200), Repeater (WR 4, §300), Coach Gun (WR 4, §150), Pump-Action (WR 4, §280), Buffalo Rifle (WR 5, §450), Sniper Rifle (WR 5, §550), Gatling Gun (WR 5, §2,000).

### Special Ammunition

Most fights are won with ordinary lead. But some enemies require specialty rounds. All special ammunition grants a **+1 Roll Bonus** against appropriate targets, on top of its listed effect:

| Round | Price/10 | Effect |
| :-- | :-: | :-- |
| **Salt Rounds** | §60 | WR −1 vs. living; **WR ×2 vs. spirits/Veil-Born**; disrupts psionic concentration on hit |
| **Iron-Core** | §60 | **Breaker** (armor-piercing); +1 Tempo (recoil); bonus vs. fae and iron-vulnerable creatures |
| **Ghost-Rock** | §200 | **+2 WR**; **Volatile** (on a Fumble, explodes for 1d6 on the shooter and jams the gun) |
| **Hollow-Point** | §40 | +1 WR vs. unarmored; −1 WR vs. AR 2+ targets |
| **Tracer** | §30 | Marks the target: follow-up attacks gain +1 Roll Bonus; reveals your position |

Special ammunition is expensive and limited. Carry six rounds, not sixty. Note that Salt Rounds are the standard anti-supernatural load and the auto-disrupt makes them the bane of any Psionic; Ghost-Rock is as dangerous to the shooter as the target.

### Melee Weapons

The Frontier is not primarily a melee setting, but blades and bludgeons still see use. **Light Melee** (Tempo 2–3), Brass Knuckles (WR 1, Stun) and the Bowie Knife (WR 2, Bleed), is fast but weak. **Medium Melee** (Tempo 4–5), the Hatchet (WR 2) and the Saber (WR 3, Parry), is balanced. **Heavy Melee** (Tempo 5–6), the Sledgehammer (WR 4; Breaker, Two-Handed, Stun) and the Cavalry Lance (WR 4; Reach, Mounted Only), trades speed for impact. Note that **light melee weapons trigger Exposed even on a standard Strike**: the cost of their speed. Full melee stats live in the **weapons** files.

## Choosing Your Protection

Armor is a trade. Every point of **Armor Rating (AR)** subtracts directly from damage taken, but heavier armor restricts speed and marks you as someone expecting trouble. Armor does **not stack**: if you wear multiple pieces, use only the highest AR. A shield's bonus is separate, since it raises Defense rather than AR.

The standard armor ladder:

| Armor | AR | Price | Properties |
| :-- | :-: | :-: | :-- |
| **Duster** | 1 | §50 | Concealment (+1 to hide weapons) |
| **Boiler Plate** | 1 | §80 | Hardened (negates the first Grievous Wound of the scene) |
| **Consortium Vest** | 2 | §400 | Lightweight (no penalties) |
| **Ironbrand Hardsuit** | 3 | §1,500 | Bulky (−1 Defense, −1 QUICK for Tempo); Hardened |
| **Shield** | +1 Defense | §30 | Can be sacrificed to negate one hit entirely (shield is destroyed) |

The **Hardened** property (on Boiler Plate and the Hardsuit) negates the first Grievous Wound you'd take in a scene, the damage still lands, but the crippling effect doesn't. Only the Hardsuit carries a movement penalty; Boiler Plate is crude and conspicuous but doesn't slow you down. Veil-touched armor exists but is rare and usually cursed: treat any unusual piece with caution. Full properties live in the **armor** and **armor-properties** files.

## Essential Gear

Beyond weapons and armor, a Frontier character carries:

- **Waterskin** (§5): holds one day's water for one person.
- **Rations** (§10): one week's preserved food.
- **Bedroll** (§8): without it, a Long Rest recovers only half your normal HP.
- **Salt Pouch** (§40): 10 uses; ward spirits with a salt line, purify water, preserve food, or "salt the dead" to keep them down.
- **Lantern and Oil** (§15): 6 hours of light per fill; negates Darkness penalties.
- **Medical Kit** (§50): +2 Roll Bonus to Medicine; 5 uses.
- **Filter Mask** (§80): protection against Ash Belt toxicity; filters last about a week.
- **Lockpicks**: +1 Finesse, if you do that kind of work.
- **Dynamite** (§30/stick): WR 6 in a 3m radius; bundle for more.

The full gear list, with prices and effects, lives in the **gear** files. Don't underbuy salt. Veterans never run out of salt.

## Practical Advice

Three habits keep Frontier characters breathing:

1. **Carry more salt than you think you need.** It is consumable, light, and the difference between safe sleep and being dragged off by something that used to be a person.
2. **Specialty ammunition is for specialty problems.** A pouch of Salt Rounds is wasted on Consortium Enforcers. Save them for the Psionic ambush you didn't see coming.
3. **Maintenance is non-negotiable.** A jammed revolver in a gunfight is a dead character. Use Downtime to clean weapons, restock kits, and patch armor (tracked in **downtime-actions**).
