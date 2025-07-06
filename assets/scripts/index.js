// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Brawler } from './heroes.js';
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

startGameButton.addEventListener("click", () => {
    const battle = new BattleManager(heroParty, enemyParty);
    battle.startBattle();
});

genHeroDisplayButton.addEventListener("click", () => {
    genSimpleHeroDisplay(heroParty);
})