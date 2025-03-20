// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { Knight } from './heroes.js';


const knightButton = document.getElementById("knightButton");
const knightDiv = document.getElementById("knightDiv");

knightButton.addEventListener("click", () => {
    knightDiv.innerHTML = '<p>Hp: <p/>' + Knight.hp + '<p>Ap: <p/>' + Knight.ap + '<p>Defense: <p/>' + Knight.defense + '<p>Power: <p/>' + Knight.power + '<p>Speed: <p/>' + Knight.speed + '<p>Abilities: <p/>' + Knight.abilities;
});
