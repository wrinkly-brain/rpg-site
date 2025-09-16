// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Brawler, Knight } from './heroes.js';
import { BattleManager } from './battleManager.js';
import { genSimpleHeroDisplay } from './heroManager.js';

const enemyParty = [];
const heroParty = [];

const addBrawlerButton = document.getElementById("addBrawlerButton");
const startGameButton = document.getElementById("startGameButton");
const genHeroDisplayButton = document.getElementById("genHeroDisplayButton")


addBrawlerButton.addEventListener("click", () => {
    const brawler = Brawler;
    heroParty.push(brawler);
});

addKnightButton.addEventListener("click", () => {
    const knight = Knight;
    heroParty.push(knight);
});

startGameButton.addEventListener("click", () => {
    const battle = new BattleManager(heroParty, enemyParty);
    battle.startBattle();
});
