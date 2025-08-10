import { Attack } from "./ability.js";

export function displayHeroStats(hero) {
    const currentHero = document.getElementById("currentHero")

    currentHero.innerHTML = `<h3>${hero.name}</h3>
                             <h4>HP: ${hero.hp}/${hero.maxHp}</h4>
                             <h4>AP: ${hero.ap}/${hero.maxAp}</h4>
                             <h4>Defense: ${hero.defense}</h4>
                             <h4>Power: ${hero.power}</h4>
                             <h4>Speed: ${hero.speed}</h4>`
}

export async function displayHeroAbilities(hero, enemyParty, heroParty) {
    return new Promise(resolve => {
        const heroAbilities = document.getElementById("heroAbilities");

        for (const ability of hero.abilities) {
            const button = document.createElement('button');

            button.textContent = ability.name;
            button.addEventListener('click', async() => {
                disableAbilityButtons();
                if (ability instanceof Attack) {
                    await ability.enableEnemySelection(hero, enemyParty);
                    removeAbilityButtons();
                    resolve();
                }
                else {
                    // enableHeroSelection needs to be created
                    await ability.enableHeroSelection(hero, heroParty);
                    removeAbilityButtons();
                    resolve();
                }
            });

            button.classList.add('ability-btn');

            heroAbilities.appendChild(button);
        }
    })
}

function disableAbilityButtons() {
    const abilityButtons = document.getElementsByClassName("ability-btn");

    for (const btn of abilityButtons) {
        btn.disabled = true;
    }

}

function removeAbilityButtons() {
    const heroAbilities = document.getElementById("heroAbilities");

    heroAbilities.innerHTML = '';
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

export function genSimpleHeroDisplay(heroParty) {
    const simpleHeroDisplay = document.getElementById("simpleHeroDisplay");

    for (let i = 0; i < heroParty.length; i++) {
        const hero = heroParty[i];
        const heroSpan = document.createElement('span');

        heroSpan.dataset.heroIndex = i;

        heroSpan.innerHTML = `<h4>${hero.name}</h4>
                              <h5 class="hero-hp">${hero.hp}/${hero.maxHp}</h5>
                              <h5 class="hero-ap">${hero.ap}/${hero.maxAp}</h5>`

        simpleHeroDisplay.appendChild(heroSpan);
    }
}