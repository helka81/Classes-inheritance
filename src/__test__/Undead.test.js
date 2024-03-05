import Undead from '../js/class/Undead'

describe('Undead class', () => {
    let undead;

    beforeEach(() => {
        undead = new Undead('Undead');
    });

    describe('levelUp method', () => {
        test('should increase level by 1', () => {
            undead.levelUp();
            expect(undead.level).toBe(2);
        });

        test('should increase attack and defence by 20%', () => {
            const originalAttack = undead.attack;
            const originalDefence = undead.defence;

            undead.levelUp();

            expect(undead.attack).toBe(originalAttack * 1.2);
            expect(undead.defence).toBe(originalDefence * 1.2);
        });

        test('should set health to 100 if it was less', () => {
            undead.damage(50);
            undead.levelUp();

            expect(undead.health).toBe(100);
        });

        test('should throw an error if health is 0', () => {
            undead.health = 0;
            expect(() => {
                undead.levelUp();
            }).toThrow("Нельзя повысить уровень умершего персонажа");
        });
    });

    describe('damage method', () => {
        test('should decrease health based on damage points and defence', () => {
            undead.damage(20);
            expect(undead.health).toBeGreaterThanOrEqual(75, 0); // Health: 100 - (20 * (1 - 0.25))
        });

        test('should not reduce health below 0', () => {
            undead.damage(200);
            expect(undead.health).toBe(0);
        });
    });
});