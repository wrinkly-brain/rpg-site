// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { genRandWave, eraseEnemyParty } from "./enemyManager.js";

const enemyParty = [];

const enemyGenButton = document.getElementById("enemyGenButton");
const enemyEraseButton = document.getElementById("enemyEraseButton");

enemyGenButton.addEventListener("click", () => {
    genRandWave(enemyParty);
});

enemyEraseButton.addEventListener("click", () => {
    eraseEnemyParty(enemyParty);
});

