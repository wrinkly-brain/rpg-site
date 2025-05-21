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

    applyAttack(hero, target, heroParty) {
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
                }
                chance *= 0.75;
            }
            console.log(`Miss: ${miss}, Chance: ${chance}`);
            console.log(`Hit Counter: ${hitCounter}`);
        }

        else if (this.flags.isAOE) {
            target.hp -= damage;

            if (target.id > 0) {
                // Handle hero to the left
                const leftIndex = target.id - 1
                const leftHero = heroParty[leftIndex]
                if (leftHero) {
                    leftHero.hp -= damage;
                }
            }

            // Handle enemy to the right
            const rightIndex = target.id + 1
            if (rightIndex < 5) {
                const rightHero = heroParty[rightIndex]
                if (rightHero) {
                    rightHero.hp -= damage;
                }
            }

            // Handle enemy to the right, ignore left since the enemy index is 0
            else {
                const rightIndex = target.id + 1
                const rightHero = heroParty[rightIndex]
                if (rightHero) {
                    rightHero.hp -= damage;
                }
            }
        }

        // Handle Single Hit
        else {
            target.hp -= damage;
            // Apply debuff
        }
    }
}

export function chooseRandEnemyAbility(enemyAbilities) {
    const randIndex = Math.floor(Math.random() * enemyAbilities.length);
    return enemyAbilities[randIndex];
}

export function chooseRandTarget(heroParty) {
    const randIndex = Math.floor(Math.random() * heroParty.length);
    return heroParty[randIndex];
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