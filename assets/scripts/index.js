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
    const knight = Knight;
    heroParty.push(knight);






        heroPartyContainer.appendChild(heroDiv);
});

enemyGenButton.addEventListener("click", () => {
    genRandWave(enemyParty);
});

enemyEraseButton.addEventListener("click", () => {
    eraseEnemyParty(enemyParty);
});

