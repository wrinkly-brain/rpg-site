// Current problems:
// Downed heroes and dead enemies aren't removed from the queue if they die before the queue is generated.
// To add to the last one, I don't think there's logic that is supposed to remove downed heroes

import { Enemy } from "./enemies.js";
import { chooseRandEnemyAbility, chooseRandTarget, EnemyAttack } from "./enemyAbility.js";
import { checkEnemyDeath, genRandWave, updateEnemyPartyDisplay } from "./enemyManager.js";
import { checkHeroDown, displayHeroAbilities, displayHeroStats, updateHeroPartyDisplay } from "./heroManager.js";
import { Queue } from "./turnQueue.js";

export class BattleManager {
    constructor(heroParty, enemyParty) {
        this.heroParty = heroParty;
        this.enemyParty = enemyParty;
    }

    async startBattle() {
        genRandWave(this.enemyParty);
        let activeQueue = this.genTurnQueue();
        this.displayQueue(activeQueue);

        while (!this.enemyParty.every(e => e === null) && !this.heroParty.every(h => h.isDowned === true)) {
            
            if (activeQueue.items.length === 0) {
                activeQueue = this.genTurnQueue();
            }
            else {
                await this.nextTurn(activeQueue);
                checkEnemyDeath(this.enemyParty);
                checkHeroDown(this.heroParty);
                updateEnemyPartyDisplay(this.enemyParty)
                this.updateQueue(activeQueue);
            }
        }

        if (!this.heroParty.every(h => h.isDowned === true)) {

        }
    }

    genTurnQueue() {
        // Add currentSpeed values for heroes and enemies and change this function later

        let tempArray = this.heroParty.concat(this.enemyParty).filter(character => character);

        let turnQueue = new Queue();

        tempArray.sort((a, b) => b.speed - a.speed)

        for (const character of tempArray) {
            turnQueue.enqueue(character)
        }

        return turnQueue;
    }

    nextTurn(activeQueue) {
        return new Promise(async resolve => {
            const charUpNext = activeQueue.dequeue();
            
            if (charUpNext instanceof Enemy) {
                const ability = chooseRandEnemyAbility(charUpNext.abilities);
                const target = chooseRandTarget(this.heroParty);
                if (ability instanceof EnemyAttack) {
                    ability.applyEnemyAttack(target, this.heroParty);
                }
                else {
                    // Handle aid
                    console.log("It chose an aid");
                }

                updateHeroPartyDisplay(this.heroParty);

                setTimeout(() => { resolve(); }, 3000); // Waits 3 seconds after enemy attack so it's not too abrupt
            }
            else {
                // Put these functions in one function maybe
                if (charUpNext.isDowned) {
                    console.log(`Ah, scoots. ${charUpNext.name} is downed.`)
                    setTimeout(() => { resolve(); }, 3000)
                }
                else {
                    displayHeroStats(charUpNext);
                    await displayHeroAbilities(charUpNext, this.enemyParty, this.heroParty);
                    resolve();
                }
            }
        })
    }

    displayQueue(queue) {
        // Change later since activeQueue and futureQueue should be in the same div
        const activeQueue = document.getElementById("activeQueue");

        for (const char of queue.items) {
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

    updateQueue(queue) {
        const activeQueue = document.getElementById("activeQueue");

        activeQueue.innerHTML = ''

        this.displayQueue(queue);
    }
}