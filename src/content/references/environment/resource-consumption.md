---
name: "Resource Consumption"
category: "environment"
description: "Daily water and ration requirements by environment. Exceeding these triggers deprivation effects (see deprivation-effects.md)."
columns:
  - key: "environment"
    label: "Environment"
  - key: "water"
    label: "Water/Day"
    align: "center"
  - key: "rations"
    label: "Rations/Day"
    align: "center"
rows:
  - environment: "Civilized"
    water: "1"
    rations: "1"
  - environment: "Wilderness"
    water: "1"
    rations: "1"
  - environment: "Desert (Scorchveil)"
    water: "2"
    rations: "1"
  - environment: "Swamp (Fen)"
    water: "1 (must purify)"
    rations: "1 (spoils fast)"
notes:
  - "Water units are gallons or waterskins (1 waterskin = 1 day's supply for one person at standard climate)."
  - "Scorchveil heat doubles water needs; an unprepared party can die of dehydration in 3 days even with daily supply."
  - "Fen water is technically drinkable but must be boiled / Salt-treated or it inflicts Strain from waterborne corruption."
---

The Scorchveil is the only region where water consumption scales — the
Ash Belt and Stormrise are dry but not actively trying to kill you. The
Fen tries to kill you with what looks like water.
