import { createEnemy, getRandomEnemyType } from "./enemies.js";

function fillEnemyPartyWithRand(enemyParty) {
    for (let i = 0; i <= 3; i++) {
        const enemyType = getRandomEnemyType();
        const enemy = createEnemy(enemyType, i);
        enemyParty.push(enemy);
    }
    return enemyParty;
}

function displayEnemyParty(enemyParty) {
    const enemyPartyContainer = document.getElementById('enemyParty');
    enemyPartyContainer.innerHTML = ''; // Clear previous enemies

    for (let i = 0; i < enemyParty.length; i++) {
        const enemy = enemyParty[i];
        const enemySpan = document.createElement('span');
        enemySpan.className = 'enemy';
        enemySpan.dataset.enemyIndex = i; // Store the index of the enemy in the array
        enemySpan.innerHTML = `
            <h3>${enemy.name}</h3>
            <p>ID: ${enemy.id}</p>
            <p class="enemy-hp">HP: ${enemy.hp}/${enemy.maxHp}</p>
            <p>Speed: ${enemy.speed}</p>
            <p>Defense: ${enemy.defense}</p>
        `;
        enemyPartyContainer.appendChild(enemySpan);
    }
}

function genRandWave(enemyParty) {
    fillEnemyPartyWithRand(enemyParty);
    displayEnemyParty(enemyParty);
}

function eraseEnemyParty(enemyParty) {
    enemyParty.length = 0; // Clear the array
    
    // ONLY NECESSARY IF YOU MANUALLY ERASE PARTY
    // SHOULD DELETE LATER
    const enemyPartyContainer = document.getElementById('enemyParty');
    enemyPartyContainer.innerHTML = ''; // Clear previous enemies
}

// Call function after each turn
function checkEnemyDeath(enemyParty) {
    for (let i = 0; i < enemyParty.length; i++) {
        const currentEnemy = enemyParty[i]

        if (currentEnemy) {
            if (currentEnemy.hp <= 0) {
                enemyParty.splice(i, 1, null) // Dead enemy is replaced with null to keep other enemies in the same positions in array
            }
        }
    }
}

function updateEnemyPartyDisplay(enemyParty) {
    for (let i = 0; i < enemyParty.length; i++) {
        const enemy = enemyParty[i]
        const enemyDiv = document.querySelector(`[data-enemy-index="${i}"]`)

        if (!enemy) {
            enemyDiv.innerHTML = '' // Clear card for dead enemy

            // enemyDiv.innerHTML = '<p>Empty Slot</p>'; // Optional: Display "Empty Slot"
            // enemyDiv.classList.add('empty'); // Optional: Add a class for styling
        }
        else {
            const hpElement = enemyDiv.querySelector('.enemy-hp');
            hpElement.textContent = `HP: ${enemy.hp}/${enemy.maxHp}`;
        }
    }
}

export { genRandWave, eraseEnemyParty, checkEnemyDeath, updateEnemyPartyDisplay };