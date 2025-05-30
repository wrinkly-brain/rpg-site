import { EnemyAttack, EnemyAid } from './enemyAbility.js'

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

function createEnemy(type, id) {
    const enemyTypes = {
        slime: {
            id: id,
            attribute: null,
            name: 'Slime',
            hp: 15,
            maxHp: 15,
            speed: 4,
            defense: 1,
            abilities: [
                new EnemyAttack('Pointify and Poke', 5, 3, null, 0),
                new EnemyAid('Solidify', 1, 'Defense Up', 2, { isSelfTarget: true }),
                new EnemyAttack('Acidic Shot', 2, 4, 'Defense Down', 3),
                new EnemyAttack('Slimey Slam', 1, 8, null, 0, { isSingleTarget: false, isAOE: true })
            ]
        },

        gremlin: {
            id: id,
            attribute: null,
            name: 'Gremlin',
            hp: 20,
            maxHp: 20,
            speed: 7,
            defense: 2,
            abilities: [
                new EnemyAttack('Shank', 2, 3, null, 0, { isMultihit: true }),
                new EnemyAttack('Scratch', 4, 4, null, 0),
                new EnemyAttack('Throw Rock', 3, 5, null, 0),
                new EnemyAttack('Feral Rage', 1, 4, 'Bleed', 2)
            ]
        }
    };

    const stats = enemyTypes[type];

    if (!stats) {
        throw new Error(`Unknown enemy tyoe: ${type}`);
    }

    return new Enemy(stats.id, stats.attribute, stats.name, stats.hp, stats.maxHp, stats.speed, stats.defense, stats.abilities);
}

function getRandomEnemyType() {
    const enemyTypes = ['slime', 'gremlin'];
    const randomIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randomIndex];
}

export { Enemy, createEnemy, getRandomEnemyType };


