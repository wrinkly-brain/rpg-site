// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Brawler, Knight } from './heroes.js';
import { BattleManager } from './battleManager.js';
import { genSimpleHeroDisplay } from './heroManager.js';

const enemyParty = [];
const heroParty = [];

const addBrawlerButton = document.getElementById("addBrawlerButton");
const startGameButton = document.getElementById("startGameButton");
startGameButton.disabled = true;

addBrawlerButton.addEventListener("click", () => {
    const brawler = Brawler;
    heroParty.push(brawler);
    addBrawlerButton.disabled = true;
    if (startGameButton.disabled && heroParty.length > 0) {
        startGameButton.disabled = false;
    }
});

addKnightButton.addEventListener("click", () => {
    const knight = Knight;
    heroParty.push(knight);
    addKnightButton.disabled = true;
    if (startGameButton.disabled && heroParty.length > 0) {
        startGameButton.disabled = false;
    }
});

startGameButton.addEventListener("click", () => {
    const battle = new BattleManager(heroParty, enemyParty);
    battle.startBattle();
    startGameButton.disabled = true;
});
