import { Enemy } from "./enemies";
import { displayHeroAbilities, displayHeroStats, updateHeroPartyDisplay } from "./heroManager";

/* 
    The idea is to generate an active queue (based on speed values and in descending order) when a new wave starts. 
    When a turn is completed, the character is placed into an upcoming queue (for display). 
    If a character is sped up, if they're in the active queue, both the active queue and the upcomoing queue will be resorted.
    If the character isn't in the active queue, it will check if the new speed is as fast or faster than the characters already in the active queue.
    If they're faster, they will be placed back in the active queue. 
    No matter if they are able to be placed into the active queue or not, the upcoming queue gets resorted. 
*/

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.isEmpty() ? "Queue is empty" : this.items.shift();
    }

    peek() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(" -> "));
    }
}

export function genTurnQueue(heroParty, enemyParty) {
    // Add currentSpeed values for heroes and enemies and change this function later
    
    let tempArray = heroParty.concat(enemyParty);

    let turnQueue = new Queue();

    tempArray.sort((a, b) => b.speed - a.speed)

    for (const character of tempArray) {
        turnQueue.enqueue(character)
    }
}

export function nextTurn(activeQueue, heroParty, enemyParty) {
    const charUpNext = activeQueue.dequeue();

    if (charUpNext instanceof Enemy) {
        const ability = chooseRandEnemyAbility(charUpNext.abilities);
        const target = chooseRandTarget(heroParty);
        if (ability instanceof EnemyAttack) {
            ability.applyEnemyAttack(target, heroParty);
        }
        else {
            console.log("It chose an ability")
        }
        
        updateHeroPartyDisplay(heroParty);
    }
    else {
        // Put these functions in one function maybe
        displayHeroStats(charUpNext)
        displayHeroAbilities(charUpNext, enemyParty, heroParty)
    }
}

export function displayQueue(queue) {
    //change later since activeQueue and futureQueue should be in the same div
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