export class Ability {
    constructor(
        id,
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
        id,
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
        super(id, name, description, apCost);
        this.damage = damage;
        this.isDebuff = isDebuff;
        this.debuffEffect = debuffEffect;
        this.bLength = bLength;
        this.flags = flags;
    }

    applyAttack(hero, target) {
        let damage = this.damage;
        // Handle Multihit
        if (this.flags.isMultihit) {
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
        }

        // Dedeuct AP
        hero.ap -= this.apCost;
    }
}

export class Aid extends Ability {
    constructor(
        id,
        name,
        description,
        buffEffect = null,
        bLength = 0,
        apCost,
        flags = { isSelfTarget: false, isSingleTarget: true, isAll: false },
        isBuff = buffEffect !== null
    )
    {
        super(id, name, description, apCost);
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
        id,
        name,
        damage,
        chance
    )
    {
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.chance = chance;
    }
}

export class EnemyAttack extends EnemyAbility {
    constructor(
        id,
        name,
        damage,
        chance,
        debuffEffect = null,
        bLength = 0,
        flags = { isSingleTarget: true, isAOE: false, isMultihit: false },
        isDebuff = debuffEffect !== null
    )
    {
        super(id, name, damage, chance);
        this.isDebuff = isDebuff;
        this.debuffEffect = debuffEffect;
        this.bLength = bLength;
        this.flags = flags;
    }
}

export class EnemyAid extends EnemyAbility {
    constructor(
        id,
        name,
        chance,
        buffEffect = null,
        bLength = 0,
        flags = { isSelfTarget: false, isSingleTarget: true, isAll: false },
        isBuff = buffEffect !== null
    )
    {
        super(id, name, chance);
        this.isBuff = isBuff;
        this.buffEffect = buffEffect;
        this.bLength = bLength;
        this.flags = flags
    }
}