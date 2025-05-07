import { checkEnemyDeath, checkEnemyPartyDeath, updateEnemyPartyDisplay } from "./enemyManager.js";

export class Ability {
    constructor(
        name,
        description,
        apCost
    ) {
        this.name = name;
        this.description = description;
        this.apCost = apCost;
    }
}

export class Attack extends Ability {
    constructor(
        name,
        description,
        damage,
        debuffEffect = null,
        bLength = 0,
        apCost,
        flags = { isSingleTarget: true, isAOE: false, isMultihit: false },
        isDebuff = debuffEffect !== null
    ) {
        super(name, description, apCost);
        this.damage = damage;
        this.isDebuff = isDebuff;
        this.debuffEffect = debuffEffect;
        this.bLength = bLength;
        this.flags = flags;
    }

    enableEnemySelection(hero, enemyParty) {
        // Logic to return target based on AOE or single target
        const enemyPartyContainer = document.getElementById('enemyParty');
        const enemies = enemyPartyContainer.getElementsByClassName('enemy');


        this.enemyClickHandler = (event) => {
            const index = event.currentTarget.dataset.index; // Get the index from the data attribute
            const target = enemyParty[index]; // Use the index to get the target from the enemyParty array
            this.disableEnemySelection(); // Disable further selection
            this.applyAttack(hero, target, enemyParty); // Call applyAttack with the selected target
        };

        Array.from(enemies).forEach(enemyDiv => {
            enemyDiv.addEventListener('click', this.enemyClickHandler);
        });
    }

    disableEnemySelection() {
        const enemyPartyContainer = document.getElementById('enemyParty');
        const enemies = enemyPartyContainer.getElementsByClassName('enemy');

        Array.from(enemies).forEach(enemyDiv => {
            enemyDiv.removeEventListener('click', this.enemyClickHandler);
        });
    }

    applyAttack(hero, target, enemyParty) {
        const damage = this.damage;
        // Handle Multihit
        if (this.flags.isMultihit) {
            // Create variables to track chance to hit and miss. Hit counter is for display purposes
            let chance = 100;
            let miss = 0;
            let hitCounter = 0;

            while (miss < chance) {
                miss = Math.floor(Math.random() * 100);
                if (miss < chance) {
                    target.hp -= damage;
                    // Apply debuff
                    hitCounter++; // For display purposes
                    console.log(`Hit. Miss: ${miss}. Chance: ${chance}`);
                }
                chance *= 0.75;
            }
            console.log(`Miss: ${miss}, Chance: ${chance}`);
            console.log(`Hit Counter: ${hitCounter}`);
        }

        else if (this.flags.isAOE) {
            target.hp -= damage;

            if (target.id > 0) {
                // Handle enemy to the left
                const leftIndex = target.id - 1
                const leftEnemy = enemyParty[leftIndex]
                if (leftEnemy) {
                    leftEnemy.hp -= damage;
                }
            }

            // Handle enemy to the right
            const rightIndex = target.id + 1
            if (rightIndex < 5) {
                const rightEnemy = enemyParty[rightIndex]
                if (rightEnemy) {
                    rightEnemy.hp -= damage;
                }
            }

            // Handle enemy to the right, ignore left since the enemy index is 0
            else {
                const rightIndex = target.id + 1
                const rightEnemy = enemyParty[rightIndex]
                if (rightEnemy) {
                    rightEnemy.hp -= damage;
                }
            }
        }

        // Handle Single Hit
        else {
            target.hp -= damage;
            // Apply debuff
        }

        // Dedeuct AP
        hero.ap -= this.apCost;

        checkEnemyDeath(enemyParty)
        updateEnemyPartyDisplay(enemyParty)
        checkEnemyPartyDeath(enemyParty)
    }
}

export class Aid extends Ability {
    constructor(
        name,
        description,
        buffEffect = null,
        bLength = 0,
        apCost,
        flags = { isSelfTarget: false, isSingleTarget: true, isAll: false },
        isBuff = buffEffect !== null
    ) {
        super(name, description, apCost);
        this.isBuff = isBuff;
        this.buffEffect = buffEffect;
        this.bLength = bLength;
        this.flags = flags
    }

    // applyAid(hero, target, buff) {
    //     buff = this.buffEffect;

    //     hero.ap -= this.apCost;
    // }
}

export class EnemyAbility {
    constructor(
        name,
        damage,
        chance
    ) {
        this.name = name;
        this.damage = damage;
        this.chance = chance;
    }
}

export class EnemyAttack extends EnemyAbility {
    constructor(
        name,
        damage,
        chance,
        debuffEffect = null,
        bLength = 0,
        flags = { isSingleTarget: true, isAOE: false, isMultihit: false },
        isDebuff = debuffEffect !== null
    ) {
        super(name, damage, chance);
        this.isDebuff = isDebuff;
        this.debuffEffect = debuffEffect;
        this.bLength = bLength;
        this.flags = flags;
    }
}

export class EnemyAid extends EnemyAbility {
    constructor(
        name,
        chance,
        buffEffect = null,
        bLength = 0,
        flags = { isSelfTarget: false, isSingleTarget: true, isAll: false },
        isBuff = buffEffect !== null
    ) {
        super(name, chance);
        this.isBuff = isBuff;
        this.buffEffect = buffEffect;
        this.bLength = bLength;
        this.flags = flags
    }
}