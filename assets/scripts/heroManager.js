// Gotta add functions to dynamically show and hide hero abilities and stats
// Add functions to manage hero selection?

import { Attack } from "./ability";

// const heroPartyContainer = document.getElementById('heroParty');
// for (let i = 0; i < heroParty.length; i++) {
//     const hero = heroParty[i];
//     const heroDiv = document.createElement('div');
//     heroDiv.className = 'hero';
//     heroDiv.dataset.index = i; // Store the index of the hero in the array
//     heroDiv.innerHTML = `
//         <h3>${hero.name}</h3>
//         <p>HP: ${hero.hp}/${hero.maxHp}</p>
//         <p>AP: ${hero.ap}/${hero.maxAp}</p>
//         <p>Speed: ${hero.speed}</p>
//         <p>Defense: ${hero.defense}</p>`;
// }
// Maybe I could make the function in the onclick something like: hero.abilities[i].onclick = function() { hero.abilities[i].enableEnemySelection() }

// for (let i = 0; i < Knight.abilities.length; i++) {
//     const ability = Knight.abilities[i];

//     // Create button
//     const button = document.createElement('button')
//     button.textContent = `${ability.name}`;
//     button.addEventListener('click', () => {
//         // Needs to be another function that prompts player to pick target
//     })

//     // Append the button to the ability container
//     abilityContainer.appendChild(button);
// }
export function displayHeroStats(hero) {
    const currentHero = document.getElementById("currentHero")

    currentHero.innerHTML = `<h3>${hero.name}</h3>
                             <h4 class="hero-hp">HP: ${hero.hp}/${hero.maxHp}</h4>
                             <h4 class="hero-ap">AP: ${hero.ap}/${hero.maxAp}</h4>
                             <h4>Defense: ${hero.defense}</h4>
                             <h4>Power: ${hero.power}</h4>
                             <h4>Speed: ${hero.speed}</h4>`
}

export function displayHeroAbilities(hero, enemyParty, heroParty) {
    const heroAbilities = document.getElementById("heroAbilities")

    for (const ability of hero.abilities) {
        const button = document.createElement('button')

        button.textContent = `${ability.name}`
        button.addEventListener ('click', () => {
            if (ability instanceof Attack) {
                ability.enableEnemySelection(hero, enemyParty);
            }
            else {
                // enableHeroSelection needs to be created
                ability.enableHeroSelection(hero, heroParty);
            }
        });

        heroAbilities.appendChild(button);
    }
}

export function updateHeroPartyDisplay(heroParty) {
    for (let i = 0; i < heroParty.length; i++) {
        const hero = heroParty[i]
        const heroDiv = document.querySelector(`[data-hero-index="${i}"]`)

        const hpElement = heroDiv.querySelector('.hero-hp');
        hpElement.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    }
}