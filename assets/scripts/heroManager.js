import { Attack } from "./ability.js";
import { RestoreAP } from "./buffs.js";

export function displayHeroStats(hero) {
    // TODO: Turn this into a pop up
    const currentHero = document.getElementById("currentHero");

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

        // Start of btn creation loop
        for (const ability of hero.abilities) {
            const btn = document.createElement('button');

            btn.textContent = ability.name;

            if (hero.ap < ability.apCost) {
                btn.disabled = true;
                // TODO: Add css tooltip to say that the hero doesn't have enough ap
            }
            else {
                btn.addEventListener('click', async () => {
                    disableAbilityButtons();
                    // Checks for Attack else it assumes it's an Aid
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
            }

            btn.classList.add('ability-btn');
            heroAbilities.appendChild(btn);
        };

        const btn = document.createElement('button');
        btn.textContent = "Restore AP";

        if (hero.ap < hero.maxAp) {
            // Restore 40% of the hero's max ap
            const apRestoreAmount = Math.round(.4*hero.maxAp);

            btn.addEventListener('click', () => {
                RestoreAP(hero, apRestoreAmount);
                removeAbilityButtons();
                resolve();
            });
        } else {
            btn.disabled = true;
        };

        btn.classList.add('restoreAp-btn');
        heroAbilities.appendChild(btn);
    });
}

function disableAbilityButtons() {
    const abilityButtons = document.getElementsByClassName("ability-btn");
    const restoreApButton = document.querySelector('.restoreAp-btn');

    for (const btn of abilityButtons) {
        btn.disabled = true;
    }

    restoreApButton.disabled = true;
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

        const apElement = heroDiv.querySelector('.hero-ap');
        apElement.textContent = `AP: ${hero.ap}/${hero.maxAp}`
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
                              <h5 class="hero-hp">HP: ${hero.hp}/${hero.maxHp}</h5>
                              <h5 class="hero-ap">AP: ${hero.ap}/${hero.maxAp}</h5>`

        simpleHeroDisplay.appendChild(heroSpan);
    }
}