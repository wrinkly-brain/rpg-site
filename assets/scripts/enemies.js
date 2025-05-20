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
                new EnemyAttack(1, 'Pointify and Poke', 5, 4),
                new EnemyAid(1, 'Solidify', 2, 'Defense Up', 2, { isSelfTarget: true }),
                new EnemyAttack(2, 'Acidic Shot', 3, 3, 'Defense Down', 3),
                new EnemyAttack(3, 'Slimey Slam', 8, 1, null, 0, { isSingleTarget: false, isAOE: true })
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
                new EnemyAttack('Shank', 5, 2),
                new EnemyAttack('Scratch', 4, 4),
                new EnemyAttack('Throw Rock', 5, 3),
                new EnemyAttack('Feral Rage', 4, 1, 'Bleed', 2)
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


