import { EnemyAttack, EnemyAid } from './abilities.js'

class Enemy {
    constructor(id, attribute, name, hp, maxHp, speed, defense, abilities) {
        this.id = id;
        this.attribute = attribute;
        this.name = name;
        this.hp = hp;
        this.maxHp = maxHp;
        this.speed = speed;
        this.defense = defense;
        this.abilities = abilities;
    }
}

function createEnemy(type) {
    const enemyTypes = {
        slime: {
            id: 1,
            attribute: null,
            name: 'Slime',
            hp: 15,
            maxHp: 15,
            speed: 5,
            defense: 1,
            abilities: [
                new EnemyAttack(1, 'Pointify and Poke', 5, 4),
                new EnemyAid(1, 'Solidify', 2, 'Defense Up', 2),
                new EnemyAttack(2, 'Acidic Shot', 3, 3, 'Defense Down', 3),
                new EnemyAttack(3, 'Slimey Slam', 8, 1, null, 0, { isSingleTarget: false, isAOE: true })
            ]
        }
    };

    const stats = enemyTypes[type];

    if (!stats) {
        throw new Error(`Unknown enemy tyoe: ${type}`);
    }

    return new Enemy(stats.id, stats.attribute, stats.name, stats.hp, stats.maxHp, stats.speed, stats.defense, stats.abilities);
}

export { Enemy, createEnemy };


