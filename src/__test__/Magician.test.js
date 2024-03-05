import Magician from '../js/class/Magician';

describe('Magician class', () => {
    let magician;

    beforeEach(() => {
        magician = new Magician('Magician');
    });

    describe('levelUp method', () => {
        test('should increase level by 1', () => {
            magician.levelUp();
            expect(magician.level).toBe(2);
        });

        test('should increase attack and defence by 20%', () => {
            const originalAttack = magician.attack;
            const originalDefence = magician.defence;

            magician.levelUp();

            expect(magician.attack).toBe(originalAttack * 1.2);
            expect(magician.defence).toBe(originalDefence * 1.2);
        });

        test('should set health to 100 if it was less', () => {
            magician.damage(50);
            magician.levelUp();

            expect(magician.health).toBe(100);
        });

        test('should throw an error if health is 0', () => {
            magician.health = 0;
            expect(() => {
                magician.levelUp();
            }).toThrow("Нельзя повысить уровень умершего персонажа");
        });
    });

    describe('damage method', () => {
        test('should decrease health based on damage points and defence', () => {
            magician.damage(20);
            expect(magician.health).toBeGreaterThanOrEqual(85, 0); // Health: 100 - (20 * (1 - 0.4))
        });

        test('should not reduce health below 0', () => {
            magician.damage(200);
            expect(magician.health).toBe(0);
        });
    });
});
