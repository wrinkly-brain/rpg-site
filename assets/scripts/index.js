// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
import { Attack, Aid } from './abilities.js';
import { Knight } from './heroes.js';


const knightButton = document.getElementById("knightButton");
const knightDiv = document.getElementById("knightDiv");

knightButton.addEventListener("click", () => {
    health.innerHTML = '<p>Hp: <p/>' + Knight.hp 
    ap.innerHTML = '<p>Ap: <p/>' + Knight.ap
    defense.innerHTML = '<p>Defense: <p/>' + Knight.defense
    speed.innerHTML = '<p>Speed: <p/>' + Knight.speed
    for (let i = 0; i < Knight.abilities.length; i++) {
        switch (i) {
            case 0:
                ability1.innerHTML = '<p>Ability 1: <p/>' + Knight.abilities[i].name;
                break;

            case 1:
                ability2.innerHTML = '<p>Ability 2: <p/>' + Knight.abilities[i].name;
                break;

            case 2:
                ability3.innerHTML = '<p>Ability 3: <p/>' + Knight.abilities[i].name;
                break;

            case 3:
                ability4.innerHTML = '<p>Ability 4: <p/>' + Knight.abilities[i].name;
                break;
        }
    };
});
