import { Attack, Aid } from './abilities.js'
import { SingleHeal } from './buffs.js'

export const Knight = {
    id: 1,
    name: "Knight",
    hp: 100,
    maxHp: 100,
    ap: 10,
    defense: 7,
    power: 7,
    speed: 5,
    abilities: [
        new Attack('Stab', 'Plunges their blade into their foe.', 3, null, 0, 2),
        new Attack('Slash', 'Sweeps their blade across several enemies.', 2, null, 0, 2, { isSingleTarget: false, isAOE: true }),
        new Attack('Shield Bash', 'Bashes the enemy with their shield.', 1, 'Stun', 1, 3),
        new Aid('Guard', 'Raises their shield to block incoming attacks for the next turn.', 0, 'Defense', 1, 2)
    ]
};

export const Brawler = {
    id: 2,
    name: "Brawler",
    hp: 120,
    maxHp: 120,
    ap: 12,
    defense: 4,
    power: 8,
    speed: 7,
    abilities: [
        new Attack('Punch', 'Punches the enemy with precision.', 2, 'Critical Chance', 0, 1),
        new Attack('Flurry', 'Unleashes a flurry of punches on the enemy.', 2, null, 0, 3, { isMultihit: true }),
        new Attack('One-Inch Punch', 'They press their fingers into the enemy, and deliver a powerful blow.', 4, 'Defense Down', 2, 4),
        new Aid('Focus', 'Focuses their energy to increase their power.', 'Power', 1, 2)
    ]
}

export const Medic = {
    id: 3,
    name: "Medic",
    hp: 80,
    maxHp: 80,
    ap: 15,
    defense: 3,
    power: 3,
    speed: 4,
    abilities: [
        new Aid('Bandage', 'Heals a single ally.', 'SingleHeal', 0, 3),
        new Aid('Heal All', 'Heals all allies.', 'HealAll', 0, 5, { isAll: true }),
        new Aid('Revitalize', '"Get up, the fights not over yet!"', 'Revive', 0, 5),
        new Aid('Refresher', 'Restores AP to an ally.', 'AP Restore', 0, 3)
    ]
}

export const Performer = {
    id: 4,
    name: "Performer",
    hp: 70,
    maxHp: 70,
    ap: 15,
    defense: 3,
    power: 6,
    speed: 6,
    abilities: [
        new Attack('Guitar Bash', 'Plays a dissonant chord that damages the enemy.', 2, null, 1, 2),
        new Aid('Harmony', 'Plays a chord that raises the party\'s defense.', 'Defense', 1, 3, { isAll: true }),
        new Aid('Shred', '"You all wanna hear the Enter Sandman solo?" Raises party\'s attack power', 'Power', 1, 4, { isAll: true }),
        new Aid('Encore', 'Encourages an ally to attack again.', 'Extra Attack', 1, 3)
    ]
}

export const Rifleman = {
    id: 5,
    name: "Rifleman",
    hp: 90,
    maxHp: 90,
    ap: 1,
    defense: 5,
    power: 9,
    speed: 6,
    abilities: [
        new Attack('Musket Shot', 'Fires a shot from their musket. Has a chance to be a critical hit.', 4, 'Critical Chance', 0, 1),
        new Attack('Blunderbuss Blast', 'Fires a blast from their blunderbuss. Hits surrounding enemies.', 6, null, 0, 2, { isSingleTarget: false, isAOE: true }),
        new Attack('Multi-Shot', 'Fires multiple shots at the enemy from their flintlock.', 3, null, 0, 3, { isMultihit: true }),
        new Aid('Reload', 'Reloads their weaponry, restoring AP.', 'Reload', 0, 0)
    ]
}