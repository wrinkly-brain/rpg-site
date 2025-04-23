// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Knight } from './heroes.js';
import { genRandWave, eraseEnemyParty } from "./enemyManager.js";
import { Attack, Aid } from './abilities.js'; // For checking if the ability is an attack or aid

const enemyParty = [];
const heroParty = [];

const addKnightButton = document.getElementById("addKnightButton");

const enemyGenButton = document.getElementById("enemyGenButton");
const enemyEraseButton = document.getElementById("enemyEraseButton");


addKnightButton.addEventListener("click", () => {
    const knight = Knight;
    const knightDiv = document.getElementById("knightDiv");
    for (let i = 0; i < knight.abilities.length; i++) {
        const ability = knight.abilities[i];
        const button = document.createElement('button');
        button.textContent = `${ability.name}`;
        button.addEventListener('click', () => {
            if (ability instanceof Attack) {
                ability.enableEnemySelection(knight, enemyParty);
            }
            if (ability instanceof Aid) {
                ability.enableAllySelection(knight, heroParty);
            }
        });
        knightDiv.appendChild(button);
    }
});

enemyGenButton.addEventListener("click", () => {
    genRandWave(enemyParty);
});

enemyEraseButton.addEventListener("click", () => {
    eraseEnemyParty(enemyParty);
});

