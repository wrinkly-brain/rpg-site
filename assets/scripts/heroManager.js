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

export function checkHeroDown(heroParty) {
    for (const hero of heroParty) {
        if (hero.isDowned) {
            continue;
        }

        if (hero.hp <= 0) {
            hero.isDowned = true;
        }
    }
}