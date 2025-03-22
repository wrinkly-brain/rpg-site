// import { Knight, Medic, Performer, Rifleman, Brawler } from './heroes.js';
// import { Attack, Aid } from './abilities.js';
import { createEnemy } from './enemies.js';
import { Knight } from './heroes.js';


const knightButton = document.getElementById("knightButton");
const slimeButton = document.getElementById("slimeButton");

knightButton.addEventListener("click", () => {
    displayKnight();
});

slimeButton.addEventListener("click", () => {
    genEnemy();
});

function displayKnight() {
    health.innerHTML = '<p>Hp: </p>' + Knight.hp
    ap.innerHTML = '<p>Ap: </p>' + Knight.ap
    defense.innerHTML = '<p>Defense: </p>' + Knight.defense
    speed.innerHTML = '<p>Speed: </p>' + Knight.speed
    for (let i = 0; i < Knight.abilities.length; i++) {
        switch (i) {
            case 0:
                ability1.innerHTML = '<p>Ability 1: </p>' + Knight.abilities[i].name;
                break;

            case 1:
                ability2.innerHTML = '<p>Ability 2: </p>' + Knight.abilities[i].name;
                break;

            case 2:
                ability3.innerHTML = '<p>Ability 3: </p>' + Knight.abilities[i].name;
                break;

            case 3:
                ability4.innerHTML = '<p>Ability 4: </p>' + Knight.abilities[i].name;
                break;
        }
    };
}

function genEnemy() {
    const enemy1 = createEnemy('slime');

    enemyName.innerHTML = '<p>Name: </p>' + enemy1.name
    enemyAttribute.innerHTML = '<p>Attribute: </p>' + enemy1.attribute
    enemyHealth.innerHTML = '<p>Hp: </p>' + enemy1.hp
    enemyDefense.innerHTML = '<p>Defense: </p>' + enemy1.defense
    enemySpeed.innerHTML = '<p>Speed: </p>' + enemy1.speed
    for (let i = 0; i < enemy1.abilities.length; i++) {
        switch (i) {
            case 0:
                enemyAbility1.innerHTML = '<p>Ability 1: </p>' + enemy1.abilities[i].name;
                break;

            case 1:
                enemyAbility2.innerHTML = '<p>Ability 2: </p>' + enemy1.abilities[i].name;
                break;

            case 2:
                enemyAbility3.innerHTML = '<p>Ability 3: </p>' + enemy1.abilities[i].name;
                break;

            case 3:
                enemyAbility4.innerHTML = '<p>Ability 4: </p>' + enemy1.abilities[i].name;
                break;
        }
    }
};
