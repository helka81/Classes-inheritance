import { Character }  from '../index';

describe('Character class', () => {
    let character;

    beforeEach(() => {
        character = new Character('Тестовый', 'Bowman');
    });

    describe('levelUp method', () => {
        test('should increase level by 1', () => {
            character.levelUp();
            expect(character.level).toBe(2);
        });

        test('should increase attack and defence by 20%', () => {
            const originalAttack = character.attack;
            const originalDefence = character.defence;

            character.levelUp();
            
            expect(character.attack).toBe(originalAttack * 1.2);
            expect(character.defence).toBe(originalDefence * 1.2);
        });

        test('should set health to 100 if it was less', () => {
            character.damage(50);
            character.levelUp();

            expect(character.health).toBe(100);
        });

        test('should throw an error if health is 0', () => {
            character.health = 0;
            expect(() => {
                character.levelUp();
            }).toThrow("Нельзя повысить уровень умершего персонажа");
        });
    });

    describe('damage method', () => {
        test('should decrease health based on damage points and defence', () => {
            character.damage(20);
            expect(character.health).toBeCloseTo(85, 0); // Health: 100 - (20 * (1 - 0.25))
        });

        test('should not reduce health below 0', () => {
            character.damage(200);
            expect(character.health).toBe(0);
        });
    });
});
