---
name: "Weapon Base Tempos"
category: "combat"
description: "Base Tempo by weapon category. Used to determine Steady Shot / Strike timing and to calculate Quick Shot / Shiv / Called Shot variants."
columns:
  - key: "weapon_type"
    label: "Weapon Type"
  - key: "base_tempo"
    label: "Base Tempo"
    align: "center"
  - key: "examples"
    label: "Examples"
rows:
  - weapon_type: "Light Melee"
    base_tempo: "2–3"
    examples: "Brass Knuckles (2), Bowie Knife (3)"
  - weapon_type: "Medium Melee"
    base_tempo: "4–5"
    examples: "Hatchet (4), Saber (5)"
  - weapon_type: "Heavy Melee"
    base_tempo: "5–6"
    examples: "Sledgehammer (6), Cavalry Lance (5)"
  - weapon_type: "Light Pistol"
    base_tempo: "3"
    examples: "Derringer"
  - weapon_type: "Medium Pistol"
    base_tempo: "4"
    examples: "Peacemaker, Volcanic"
  - weapon_type: "Heavy Pistol"
    base_tempo: "5"
    examples: "Dragoon, LeMat"
  - weapon_type: "Shotgun"
    base_tempo: "3–5"
    examples: "Sawed-Off (3), Coach Gun (4), Pump-Action (5)"
  - weapon_type: "Rifle"
    base_tempo: "5–6"
    examples: "Carbine (5), Repeater (5), Buffalo Rifle (6)"
  - weapon_type: "Heavy Weapon"
    base_tempo: "7+"
    examples: "Gatling Gun (7)"
notes:
  - "Light melee weapons (Base Tempo 2-3) trigger Exposed even on standard Strikes — the cost of their speed."
  - "Slow Reload firearms (Buffalo Rifle) use Tempo 8 for reload, not the standard Tempo 6."
---

The fast pistol shooter (Tempo 4) fires three times in the same window
the heavy rifleman (Tempo 6) fires twice. Choosing a weapon is choosing
your rhythm.
