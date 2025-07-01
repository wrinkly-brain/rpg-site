import { Enemy } from "./enemies";
import { displayHeroAbilities, displayHeroStats, updateHeroPartyDisplay } from "./heroManager";

export class BattleManager {
    constructor(heroParty, enemyParty) {
        this.heroParty = heroParty;
        this.enemyParty = enemyParty;
    }

    startBattle() {
        // Idk what I'm doing with this just yet
    }

    genTurnQueue() {
        // Add currentSpeed values for heroes and enemies and change this function later
        
        let tempArray = this.heroParty.concat(this.enemyParty);

        let turnQueue = new Queue();

        tempArray.sort((a, b) => b.speed - a.speed)

        for (const character of tempArray) {
            turnQueue.enqueue(character)
        }

        return turnQueue;
    }

    nextTurn(activeQueue) {
        const charUpNext = activeQueue.dequeue();

        if (charUpNext instanceof Enemy) {
            const ability = chooseRandEnemyAbility(charUpNext.abilities);
            const target = chooseRandTarget(this.heroParty);
            if (ability instanceof EnemyAttack) {
                ability.applyEnemyAttack(target, this.heroParty);
            }
            else {
                // Handle aid
                console.log("It chose an aid")
            }
            
            updateHeroPartyDisplay(this.heroParty);
        }
        else {
            // Put these functions in one function maybe
            displayHeroStats(charUpNext);
            displayHeroAbilities(charUpNext, this.enemyParty, this.heroParty);
        }
    }

    displayQueue(queue) {
        // Change later since activeQueue and futureQueue should be in the same div
        const activeQueue = document.getElementById("activeQueue");

        for (const char of queue) {
            const charSpan = document.createElement("span");

            // Set class name for styling
            if (char instanceof Enemy) {
                charSpan.className = 'queueEnemy'
            }
            else {
                charSpan.className = 'queueHero'
            }

            charSpan.innerHTML = `<h5>${char.name}</h5>`

            activeQueue.appendChild(charSpan);
        }
    }
}