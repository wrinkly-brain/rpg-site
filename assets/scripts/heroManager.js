// Gotta add functions to dynamically show and hide hero abilities and stats
// Add functions to manage hero selection?

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

function updateHeroPartyDisplay(heroParty) {
    for (let i = 0; i < heroParty.length; i++) {
        const hero = heroParty[i]
        const heroDiv = document.querySelector(`[data-index="${i}"]`)

        const hpElement = enemyDiv.querySelector('.hero-hp');
        hpElement.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    }
}