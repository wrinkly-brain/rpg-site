export class Ability {
    constructor(
        name, 
        description, 
        apCost
    )
    {
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
    )
    {
        super(name, description, apCost);
        this.damage = damage;
        this.isDebuff = isDebuff;
        this.debuffEffect = debuffEffect;
        this.bLength = bLength;
        this.flags = flags;
    }

    chooseTarget() {
        // Logic to return target based on AOE or single target
        const enemyPartyContainer = document.getElementById('enemyParty');


    }

    applyAttack(hero, target) {
        let damage = this.damage;
        // Handle Multihit
        if (this.flags.isMultihit) {
            // Create variables to track chance to hit and miss. Hit counter is for display purposes
            let chance = 100;
            let miss = 0;
            let hitCounter = 0;

            while (chance > miss) {
                miss = Math.floor(Math.random() * 100);
                if (miss < chance) {
                    target.hp -= damage;
                    // Apply debuff
                }
                chance *= 0.75; 

                hitCounter++; // For display purposes
            }
        }

        // Handle Single Hit
        else {
            target.hp -= damage;
            // Apply debuff
        }

        // Dedeuct AP
        hero.ap -= this.apCost;
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
    )
    {
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
    )
    {
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
    )
    {
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
    )
    {
        super(name, chance);
        this.isBuff = isBuff;
        this.buffEffect = buffEffect;
        this.bLength = bLength;
        this.flags = flags
    }
}