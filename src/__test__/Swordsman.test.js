import Swordsman from '../js/class/Swordsman';

describe('Swordsman class', () => {
    let swordsman;

    beforeEach(() => {
        swordsman = new Swordsman('Swordsman');
    });

    describe('levelUp method', () => {
        test('should increase level by 1', () => {
            swordsman.levelUp();
            expect(swordsman.level).toBe(2);
        });

        test('should increase attack and defence by 20%', () => {
            const originalAttack = swordsman.attack;
            const originalDefence = swordsman.defence;

            swordsman.levelUp();

            expect(swordsman.attack).toBe(originalAttack * 1.2);
            expect(swordsman.defence).toBe(originalDefence * 1.2);
        });

        test('should set health to 100 if it was less', () => {
            swordsman.damage(50);
            swordsman.levelUp();

            expect(swordsman.health).toBe(100);
        });

        test('should throw an error if health is 0', () => {
            swordsman.health = 0;
            expect(() => {
                swordsman.levelUp();
            }).toThrow("Нельзя повысить уровень умершего персонажа");
        });
    });

    describe('damage method', () => {
        test('should decrease health based on damage points and defence', () => {
            swordsman.damage(20);
            expect(swordsman.health).toBeGreaterThanOrEqual(68, 0); // Health: 100 - (20 * (1 - 0.1))
        });

        test('should not reduce health below 0', () => {
            swordsman.damage(200);
            expect(swordsman.health).toBe(0);
        });
    });
});