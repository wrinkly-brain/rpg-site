import { Enemy } from "./enemies.js";
import { chooseRandEnemyAbility, chooseRandTarget, EnemyAttack } from "./enemyAbility.js";
import { checkEnemyDeath, genRandWave, updateEnemyPartyDisplay } from "./enemyManager.js";
import { checkHeroDown, displayHeroAbilities, genSimpleHeroDisplay, updateHeroPartyDisplay } from "./heroManager.js";
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
        genSimpleHeroDisplay(this.heroParty);

        while (!this.enemyParty.every(e => e === null) && !this.heroParty.every(h => h.isDowned === true)) {
            if (activeQueue.items.length === 0) {
                activeQueue = this.genTurnQueue();
                this.updateQueueDisplay(activeQueue);
            }
            else {
                // Call up next turn
                await this.nextTurn(activeQueue);

                // Check if any characters were defeated
                checkEnemyDeath(this.enemyParty);
                checkHeroDown(this.heroParty);

                updateEnemyPartyDisplay(this.enemyParty);

                // Update queue to account for deaths/speed changes
                activeQueue = this.updateQueue(activeQueue);
                this.updateQueueDisplay(activeQueue);
            }
        }

        if (!this.heroParty.every(h => h.isDowned === true)) {
            // Add loss screen or something
        }
    }

    genTurnQueue() {
        // Add currentSpeed values for heroes and enemies and change this function later
        const tempArray = this.heroParty.concat(this.enemyParty).filter(character => character);

        const turnQueue = new Queue();

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

                setTimeout(() => { resolve(); }, 2000); // Waits 2 seconds after enemy attack so it's not too abrupt
            }
            else {
                // Put these functions in one function maybe
                if (charUpNext.isDowned) {
                    console.log(`Ah, scoots. ${charUpNext.name} is downed.`)
                    setTimeout(() => { resolve(); }, 2000)
                }
                else {
                    // TODO: Make pop up display for hovering over characters
                    // displayHeroStats(charUpNext);
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

    updateQueueDisplay(queue) {
        const activeQueue = document.getElementById("activeQueue");

        activeQueue.innerHTML = ''

        this.displayQueue(queue);
    }

    updateQueue(queue) {
        // Store characters in an array for sorting and checking
        const tempArray = [];
        const queueLength = queue.size();

        for (let i = 0; i < queueLength; i++) {
            tempArray.push(queue.dequeue());
        }

        tempArray.forEach((c, index) => {
            // Optionally remove downed heroes
            if (c instanceof Enemy) {
                if (c.hp <= 0) {
                    tempArray.splice(index, 1);
                }
            }
        });

        // Queue to be returned
        const newQueue = new Queue();

        // Sort based on speed (will be helpful later for when speed buffs and debuffs need handled)
        tempArray.sort((a, b) => b.speed - a.speed)

        for (const c of tempArray) {
            newQueue.enqueue(c)
        }

        return newQueue;
    };
}