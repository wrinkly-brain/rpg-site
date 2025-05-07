// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Brawler } from './heroes.js';
import { genRandWave, eraseEnemyParty } from "./enemyManager.js";
import { Attack, Aid } from './abilities.js'; // For checking if the ability is an attack or aid

const enemyParty = [];
const heroParty = [];

const addBrawlerButton = document.getElementById("addBrawlerButton");

const enemyGenButton = document.getElementById("enemyGenButton");
const enemyEraseButton = document.getElementById("enemyEraseButton");


addBrawlerButton.addEventListener("click", () => {
    const brawler = Brawler;
    const brawlerDiv = document.getElementById("brawlerDiv");
    for (let i = 0; i < brawler.abilities.length; i++) {
        const ability = brawler.abilities[i];
        const button = document.createElement('button');
        button.textContent = `${ability.name}`;
        button.addEventListener('click', () => {
            if (ability instanceof Attack) {
                ability.enableEnemySelection(brawler, enemyParty);
            }
            if (ability instanceof Aid) {
                ability.enableAllySelection(brawler, heroParty);
            }
        });
        brawlerDiv.appendChild(button);
    }
});

enemyGenButton.addEventListener("click", () => {
    genRandWave(enemyParty);
});

enemyEraseButton.addEventListener("click", () => {
    eraseEnemyParty(enemyParty);
});

