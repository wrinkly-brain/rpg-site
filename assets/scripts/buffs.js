
export function SingleHeal() {
    let amount = this.target.maxHp * 0.25;
    if (this.target.hp + amount > this.target.maxHp) {
        this.target.hp = this.target.maxHp;
    }
    else {
        this.target.hp += amount;
    }
}

