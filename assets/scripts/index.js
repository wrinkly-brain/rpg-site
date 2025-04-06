// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Knight } from './heroes.js';
import { genRandWave, eraseEnemyParty } from "./enemyManager.js";

const enemyParty = [];
const heroParty = [];

const addKnightButton = document.getElementById("addKnightButton");

const enemyGenButton = document.getElementById("enemyGenButton");
const enemyEraseButton = document.getElementById("enemyEraseButton");


addKnightButton.addEventListener("click", () => {
    const heroPartyContainer = document.getElementById('heroParty');
    const knight = Knight;
    heroParty.push(knight);

    for (let i = 0; i < heroParty.length; i++) {
        const hero = heroParty[i];
        const heroDiv = document.createElement('div');
        heroDiv.className = 'hero';
        heroDiv.dataset.index = i; // Store the index of the hero in the array
        heroDiv.innerHTML = `
            <h3>${hero.name}</h3>
            <p>HP: ${hero.hp}/${hero.maxHp}</p>
            <p>AP: ${hero.ap}/${hero.maxAp}</p>
            <p>Speed: ${hero.speed}</p>
            <p>Defense: ${hero.defense}</p>
        `;

        // Maybe I could make the function in the onclick something like: hero.abilities[i].onclick = function() { hero.abilities[i].enableEnemySelection() }

        // for (let i = 0; i < Knight.abilities.length; i++) {
        //     const ability = Knight.abilities[i];
    
        //     // Create button
        //     const button = document.createElement('button')
        //     button.textContent = `${ability.name}`;
        //     button.addEventListener('click', () => {
        //         // Needs to be another function that prompts player to pick target
        //     })
    
        //     // Append the button to the ability container
        //     abilityContainer.appendChild(button);
        // }

        heroPartyContainer.appendChild(heroDiv);
    }
});

enemyGenButton.addEventListener("click", () => {
    genRandWave(enemyParty);
});

enemyEraseButton.addEventListener("click", () => {
    eraseEnemyParty(enemyParty);
});

