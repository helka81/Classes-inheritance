import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../index';

describe('Character class', () => {
    const testData = [
        ['Test1', Bowman, 100, 1, 25, 25],
        ['Test2', Swordsman, 100, 1, 40, 10],
        ['Test3', Magician, 100, 1, 10, 40],
        ['Test4', Undead, 100, 1, 25, 25],
        ['Test5', Zombie, 100, 1, 40, 10],
        ['Test6', Daemon, 100, 1, 10, 40]
    ];

    test.each(testData)('%s should have correct properties', (name, CharacterClass, expectedHealth, expectedLevel, expectedAttack, expectedDefence) => {
        let character = new CharacterClass(name);

        expect(character.name).toBe(name);
        expect(character.type).toBe(CharacterClass.name);
        expect(character.health).toBe(expectedHealth);
        expect(character.level).toBe(expectedLevel);
        expect(character.attack).toBe(expectedAttack);
        expect(character.defence).toBe(expectedDefence);
    });
});