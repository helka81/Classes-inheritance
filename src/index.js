export class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name should be a string with length between 2 and 10 characters');
        }

        if (!['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'].includes(type)) {
            throw new Error('Invalid type. Type should be one of the following: Bowman, Swordsman, Magician, Undead, Zombie, Daemon');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        switch(type) {
            case 'Bowman':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("Нельзя повысить уровень умершего персонажа");
        }

        this.level++;
        this.attack += Math.round(this.attack * 0.2);
        this.defence += Math.round(this.defence * 0.2);
        if (this.health < 100) {
            this.health = 100;
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

export class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
    }
}
