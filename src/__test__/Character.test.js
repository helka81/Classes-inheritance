import Bowman from '../js/class/Bowman';
import Swordsman from '../js/class/Swordsman';
import Magician from '../js/class/Magician';
import Undead from '../js/class/Undead';
import Zombie from '../js/class/Zombie';
import Daemon from '../js/class/Daemon';


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
        // Создаем эталонный объект с ожидаемыми свойствами
        const expectedCharacter = {
            name: name,
            type: CharacterClass.name,
            health: expectedHealth,
            level: expectedLevel,
            attack: expectedAttack,
            defence: expectedDefence
        };

        // Создаем реальный объект при помощи класса
        let character = new CharacterClass(name);

        // Сравниваем эталонный объект с реальным объектом
        expect(character).toEqual(expectedCharacter);
    });
});