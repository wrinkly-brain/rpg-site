import { createEnemy, getRandomEnemyType } from "./enemies.js";

function fillEnemyPartyWithRand(enemyParty) {
    for (let i = 0; i <= 3; i++) {
        const enemyType = getRandomEnemyType();
        const enemy = createEnemy(enemyType);
        enemyParty.push(enemy);
    }

    console.log('Enemy party filled with random enemies:', enemyParty);

    return enemyParty;
}

function displayEnemyParty(enemyParty) {
    const enemyPartyContainer = document.getElementById('enemyParty');
    enemyPartyContainer.innerHTML = ''; // Clear previous enemies

    for (let i = 0; i < enemyParty.length; i++) {
        const enemy = enemyParty[i];
        const enemyDiv = document.createElement('div');
        enemyDiv.className = 'enemy';
        enemyDiv.dataset.index = i; // Store the index of the enemy in the array
        enemyDiv.innerHTML = `
            <h3>${enemy.name}</h3>
            <p>HP: ${enemy.hp}/${enemy.maxHp}</p>
            <p>Speed: ${enemy.speed}</p>
            <p>Defense: ${enemy.defense}</p>
        `;
        enemyPartyContainer.appendChild(enemyDiv);
    }
}

function genRandWave(enemyParty) {
    fillEnemyPartyWithRand(enemyParty);
    displayEnemyParty(enemyParty);
}

function eraseEnemyParty(enemyParty) {
    enemyParty.length = 0; // Clear the array
    const enemyPartyContainer = document.getElementById('enemyParty');
    enemyPartyContainer.innerHTML = ''; // Clear previous enemies
}

export { genRandWave, eraseEnemyParty };