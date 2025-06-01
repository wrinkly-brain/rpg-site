import { Enemy } from "./enemies";

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

function genTurnQueue(heroParty, enemyParty) {
    // Add currentSpeed values for heroes and enemies and change this function later
    
    let tempArray = heroParty.concat(enemyParty);

    let turnQueue = new Queue();

    tempArray.sort((a, b) => b.speed - a.speed)

    for (const character of tempArray) {
        turnQueue.enqueue(character)
    }
}

function nextTurn(activeQueue, heroParty) {
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
        // Enable hero's abilities
    }
}