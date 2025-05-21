// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Brawler } from './heroes.js';
import { genRandWave, eraseEnemyParty } from "./enemyManager.js";
import { Attack, Aid } from './ability.js'; // For checking if the ability is an attack or aid
import { chooseRandEnemyAbility, chooseRandTarget } from './enemyAbility.js';
import { updateHeroPartyDisplay } from './heroManager.js';

const enemyParty = [];
const heroParty = [];

const addBrawlerButton = document.getElementById("addBrawlerButton");

const enemyGenButton = document.getElementById("enemyGenButton");
const enemyEraseButton = document.getElementById("enemyEraseButton");
const enemyAttackButton = document.getElementById("enemyAttackButton");


addBrawlerButton.addEventListener("click", () => {
    const brawler = Brawler;
    heroParty.push(brawler);
    const brawlerDiv = document.getElementById("brawlerDiv");
    brawlerDiv.innerHTML = '<h2 class="hero-hp">HP: ' + brawler.hp + '/' + brawler.maxHp + '</h2>';
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

enemyAttackButton.addEventListener("click", () => {
    const enemy = enemyParty[0];
    const ability = chooseRandEnemyAbility(enemy.abilities);
    console.log(ability);
    const target = chooseRandTarget(heroParty);
    console.log(target);
    ability.applyEnemyAttack(target, heroParty);
    updateHeroPartyDisplay(heroParty);
});
