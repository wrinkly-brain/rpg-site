import { createEnemy, getRandomEnemyType } from "./enemies.js";

function genEnemyParty() {
    const enemyParty = [];

    for (let i = 0; i <= 3; i++) {
        const enemyType = getRandomEnemyType();
        const enemy = createEnemy(enemyType);
        enemyParty.push(enemy);
    }

    return enemyParty;
}

const enemyParty = genEnemyParty();
console.log(enemyParty);