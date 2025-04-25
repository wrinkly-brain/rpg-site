import { createEnemy, getRandomEnemyType } from "./enemies.js";

function fillEnemyPartyWithRand(enemyParty) {
    for (let i = 0; i <= 3; i++) {
        const enemyType = getRandomEnemyType();
        const enemy = createEnemy(enemyType, i);
        enemyParty.push(enemy);
        console.log(enemy)
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
            <p>ID: ${enemy.id}</p>
            <p class="enemy-hp">HP: ${enemy.hp}/${enemy.maxHp}</p>
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

// Call function after each turn
function checkEnemyDeath(enemyParty, target) {
    if (target.hp <= 0) {
        const index = target.id
        enemyParty.splice(index, 1, null) // Dead enemy is replaced with null to keep other enemies in the same positions in array
    }
}

function updateEnemyPartyDisplay(enemyParty) {
    const enemyPartyContainer = document.getElementById('enemyParty');

    // Probably gonna have to make an empty element so that enemy cards stay in position
    for (let i = 0; i < enemyParty.length; i++) {
        const enemy = enemyParty[i]
        const element = document.querySelector(`[data-index="${i}"]`)

        if (enemy == null && element) {
            element.innerHTML = '' // Clear card for dead enemy

            // element.innerHTML = '<p>Empty Slot</p>'; // Optional: Display "Empty Slot"
            // element.classList.add('empty'); // Optional: Add a class for styling
        }
    }
}
export { genRandWave, eraseEnemyParty, checkEnemyDeath, updateEnemyPartyDisplay };