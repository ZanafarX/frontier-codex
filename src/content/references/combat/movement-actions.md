---
name: "Movement Actions"
category: "combat"
description: "The four ways a character moves in combat. Speed = QUICK + Athletics + 3."
columns:
  - key: "action"
    label: "Action"
  - key: "tempo"
    label: "Tempo"
    type: "number"
    align: "center"
  - key: "effect"
    label: "Effect"
rows:
  - action: "Shift"
    tempo: 0
    effect: "Move half your Speed (rounded down) as part of another action. You can Shift while attacking. Represents stepping aside, backing up, adjusting your angle."
  - action: "Scramble"
    tempo: 3
    effect: "Move Speed + 4m erratically; attackers suffer +1 TN against you until your next turn. Triggers Exposed."
  - action: "Rush / Charge"
    tempo: 4
    effect: "Move double your Speed. If you reach an enemy, make an immediate melee attack at +1 Tempo."
  - action: "Sprint"
    tempo: 4
    effect: "Move triple your Speed. Cannot attack this action. Triggers Exposed."
notes:
  - "Shift's Tempo 0 makes it a Free Action — the only way to reposition without burning Ticks."
  - "Mounted characters use the mount's Speed for all movement actions. See mounts-and-transport.md."
---

Position is leverage. Shift is the most underused action in combat: players
forget they get a free half-Speed move every turn.
