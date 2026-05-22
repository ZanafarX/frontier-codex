---
name: "Cost Rating Scale"
category: "economy"
description: "A 1-5 abstraction of Scrip prices. The Frontier's primary shorthand for relative item value, used by merchants who don't carry coin and by GMs running barter-only regions."
columns:
  - key: "rating"
    label: "Rating"
    type: "number"
    align: "center"
  - key: "range"
    label: "Scrip Range"
    align: "right"
  - key: "examples"
    label: "Examples"
rows:
  - rating: 1
    range: "§1 – §10"
    examples: "Meal, drink, flophouse night, 10 rounds of ammo"
  - rating: 2
    range: "§11 – §50"
    examples: "Knife, decent room, salt pouch, basic tool"
  - rating: 3
    range: "§51 – §200"
    examples: "Revolver, poor horse, box of 50 rounds, medical kit"
  - rating: 4
    range: "§201 – §1,000"
    examples: "Rifle, Consortium Vest, wagon, trained horse"
  - rating: 5
    range: "§1,000+"
    examples: "Gatling gun, Ironbrand Hardsuit, war-horse, sand-skiff"
notes: []
---

Cost Rating is the universal value abstraction across all settlements and
factions. See the **barter-rates** table for Scrip-free equivalencies,
and the **Scrip** keyword for where paper money works and fails.
