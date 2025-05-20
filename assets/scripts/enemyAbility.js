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

    applyAttack(enemy, target, heroParty) {
        const damage = this.damage;

        // Handle Multihit
        if (this.flags.isMultihit) {
            // Variables to track hit chance and number of hits
            let chance = 100;
            let miss = 0;
            let hitCounter = 0;

            
        }
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