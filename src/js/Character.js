export default class Character {
    static characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name should be a string with length between 2 and 10 characters');
        }

        if (!Character.characterTypes.includes(type)) {
            throw new Error(`Invalid type. Type should be one of the following: ${Character.characterTypes.join(', ')}`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
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
