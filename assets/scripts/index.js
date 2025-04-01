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
    // Display knight stats
    health.innerHTML = '<p>Hp: </p>' + Knight.hp
    ap.innerHTML = '<p>Ap: </p>' + Knight.ap
    defense.innerHTML = '<p>Defense: </p>' + Knight.defense
    speed.innerHTML = '<p>Speed: </p>' + Knight.speed

    const abilityContainer = document.getElementById('heroAbilities');
    abilityContainer.innerHTML = '';
    
    // Display all abilities
    for (let i = 0; i < enemy1.abilities.length; i++) {
        const ability = enemy1.abilities[i];

        // Create button
        const button = document.createElement('button')
        button.textContent = `${ability.name}`;
        button.addEventListener('click', () => {
            // Needs to be another function that prompts player to pick target
        })

        // Append the button to the ability container
        abilityContainer.appendChild(button);
    }
}

function genEnemy() {
    const enemy1 = createEnemy('slime');

    // Display enemy stats
    enemyName.innerHTML = '<p>Name: </p>' + enemy1.name
    enemyAttribute.innerHTML = '<p>Attribute: </p>' + enemy1.attribute
    enemyHealth.innerHTML = '<p>Hp: </p>' + enemy1.hp
    enemyDefense.innerHTML = '<p>Defense: </p>' + enemy1.defense
    enemySpeed.innerHTML = '<p>Speed: </p>' + enemy1.speed

    const abilityContainer = document.getElementById('enemyAbilities');
    abilityContainer.innerHTML = '';
    
    // Display all abilities
    for (let i = 0; i < enemy1.abilities.length; i++) {
        const ability = enemy1.abilities[i];

        // Create button
        const button = document.createElement('button')
        button.textContent = `${ability.name}`;
        button.addEventListener('click', () => {
            // Needs to be another function that prompts player to pick target
        })

        // Append the button to the ability container
        abilityContainer.appendChild(button);
    }
};
