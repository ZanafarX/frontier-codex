---
title: "Chapter 3: The Armory & Economy"
book: "drifter"
chapter: 3
order: 4
summary: "The currencies of the Frontier, the cost rating system, and a guide to choosing your starting iron and protection."
tags: ["economy", "equipment", "world"]
---

> *"Lead to stop what's coming, Salt to keep it down, and Water to live long enough to regret the first two."*
> — Dust Vulture proverb

The Frontier runs on three currencies: the paper promises of the **Consortium** (Scrip), the universal necessity of **salt**, and the brutal finality of **lead**. This chapter covers the economic systems that keep civilization limping along and orients you to the tools of violence that keep individuals breathing.

The detailed equipment stats — weapons, armor, ammunition, gear — live in the equipment files. This chapter is the *economic framing* and a guide to choosing what to carry.

## The Salt Economy

The Frontier operates on overlapping economies. What has value depends entirely on where you are and who you're dealing with.

### Scrip

**Consortium Scrip** (§) is paper currency backed by the Consortium's control of the rails. It works in Consortium-controlled towns, rail stations, and most rim settlements that trade with the East. It is **worthless** in the deep wastes, in Dust Vulture territory, and in any settlement that has rejected Consortium authority.

A laborer's daily wage in Rustwater is roughly §3. A revolver costs §50–80. A meal at an inn costs §1–2. A horse costs §250. The price tables in the **settlement-services** reference file list the canonical rates.

### Barter

Outside Consortium reach, trade happens in goods. The canonical barter table (in the **barter-rates** reference file) lists rough exchange rates for ammunition, salt, water, food, tobacco, and ghost-rock. A box of pistol ammunition is worth roughly a day's water in the deep Scorchveil — and a day's water is worth your life there.

Salt holds value everywhere. A pouch of consecrated rock salt costs §20 in town and can be traded for almost anything in the wastes. Smart travelers carry more salt than they think they need.

### The Cost Rating

To avoid the table micromanagement of tracking every transaction, *The Veil & Lead* uses a **Cost Rating** abstraction. Every item has a Cost Rating from 1 (trivial — a sandwich, a single bullet) to 5 (legendary — a Masterwork firearm, a war-horse, a building). Most starting characters can afford Cost 1–2 items casually; Cost 3 requires saving or a good week's work; Cost 4 is a major investment; Cost 5 is the work of a season or a major windfall.

The full ladder lives in the **cost-rating-scale** reference file. Use it for quick-resolution shopping; use Scrip prices for important purchases.

## Choosing Your Iron

Your weapon is your rhythm. A pistol with a Base Tempo of 4 fires nearly twice in the same window as a rifle with Base Tempo 6 — but the rifle hits harder and reaches farther. The trade-off between speed and stopping power is one of the core tactical choices of *The Veil & Lead* combat.

### Firearm Categories

The five major firearm categories, by Base Tempo:

- **Light Pistols** (Tempo 3) — Derringer-style. Concealable, fast, weak. The High-Roller's friend.
- **Medium Pistols** (Tempo 4) — Peacemaker, Volcanic. The Gunhand's standard. Versatile.
- **Heavy Pistols** (Tempo 5) — Dragoon, LeMat. Hits harder than a medium. Slower draw.
- **Shotguns** (Tempo 3–5) — Sawed-Off (3), Coach Gun (4), Pump-Action (5). Scatter damage, devastating at Close range.
- **Rifles** (Tempo 5–6) — Carbines, Repeaters (5), Buffalo Rifle (6). The long-range answer.
- **Heavy Weapons** (Tempo 7+) — Gatling Guns. Crew-served. The Rail-Jack's signature.

A starting character typically begins with one primary firearm (matched to their Calling) and possibly a backup. The full stat blocks live in the **weapons** files; the Tempo-vs-Damage curve lives in the **weapon-base-tempos** reference table.

### Special Ammunition

Most fights are won with ordinary lead. But some enemies require specialty rounds:

- **Salt Rounds** disrupt Psionics on hit (automatic Disruption, no Focus check). The Redeemer's signature.
- **Iron-Core Rounds** ignore the regenerative properties of Veil-Born flesh.
- **Ghost-Rock Dust** ammunition deals additional damage to entities tethered to the Current.
- **Silver Bullets** apply to lycanthropic creatures (specific Veil-Born variants).

Special ammunition is expensive and limited. Carry six rounds, not sixty. The **ammunition** files have the full list.

### Melee Weapons

The Frontier is not primarily a melee setting, but knives, hatchets, sabers, and sledgehammers all see use. **Light Melee** weapons (Tempo 2–3) like Brass Knuckles and Bowie Knives are fast but weak; **Medium** (Tempo 4–5) like Hatchets and Sabers are balanced; **Heavy** (Tempo 5–6) like Sledgehammers and Cavalry Lances trade speed for impact.

Note that Light Melee triggers **Exposed** even on standard Strikes — the cost of their speed.

## Choosing Your Protection

Armor is a trade. Every point of **Armor Rating (AR)** subtracts directly from damage taken — but heavier armor restricts speed, attracts attention, and (in Stormrise) attracts lightning.

The standard armor tiers:

- **Duster / Reinforced Coat** (AR 1, Concealment) — the working person's protection. No restrictions.
- **Boiler Plate** (AR 2, Hardened) — heavy industrial plating. Negates one Grievous Wound per scene; slows you down.
- **Ironbrand Hardsuit** (AR 3, Bulky) — military-grade plate. The Ironbrand's signature. Major Defense penalty for the protection.

Veil-touched armor exists but is rare and usually cursed. Treat any unusual piece with caution.

The full stat blocks and properties live in the **armor** and **armor-properties** files.

## Essential Gear

Beyond weapons and armor, a Frontier character carries:

- **Waterskin** (1 day's supply at standard climate; 2 in Scorchveil).
- **Rations** (1 week's worth as a starting load).
- **Bedroll** (Long Rest requires it for full recovery).
- **Salt Pouch** (10 uses; mandatory for camping in supernatural territory).
- **Lantern and Oil** (6 hours of light per fill).
- **Medical Kit** (5 uses, +2 to Medicine checks).
- **Lockpicks** (if you do that kind of work).
- **Dynamite** (for the work that doesn't ask).

The full gear list, with prices and effects, lives in the **gear** files. Don't underbuy salt. Veterans never run out of salt.

## The Three Rules of Frontier Economics

1. **Carry more salt than you think you need.** It is consumable, it is light, and it is the difference between safe sleep and being eaten alive by Walking Dead.
2. **Specialty ammunition is for specialty problems.** A box of Salt Rounds is useless against Consortium Enforcers. Save them for the Psionic ambush you didn't see coming.
3. **Maintenance is non-negotiable.** A jammed revolver in a gunfight is a dead character. Use Downtime to clean weapons, restock kits, and patch armor. Tracked in **downtime-actions**.
