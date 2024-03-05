import Bowman from '../js/class/Bowman'; 

describe('Bowman class', () => {
    let bowman;

    beforeEach(() => {
        bowman = new Bowman('Test');
    });

    describe('levelUp method', () => {
        test('should increase level by 1', () => {
            bowman.levelUp();
            expect(bowman.level).toBe(2);
        });

        test('should increase attack and defence by 20%', () => {
            const originalAttack = bowman.attack;
            const originalDefence = bowman.defence;

            bowman.levelUp();
            
            expect(bowman.attack).toBe(originalAttack * 1.2);
            expect(bowman.defence).toBe(originalDefence * 1.2);
        });

        test('should set health to 100 if it was less', () => {
            bowman.damage(50);
            bowman.levelUp();

            expect(bowman.health).toBe(100);
        });

        test('should throw an error if health is 0', () => {
            bowman.health = 0;
            expect(() => {
                bowman.levelUp();
            }).toThrow("Нельзя повысить уровень умершего персонажа");
        });
    });

    describe('damage method', () => {
        test('should decrease health based on damage points and defence', () => {
            bowman.damage(20);
            expect(bowman.health).toBeGreaterThanOrEqual(85, 0); // Health: 100 - (20 * (1 - 0.25))
        });

        test('should not reduce health below 0', () => {
            bowman.damage(200);
            expect(bowman.health).toBe(0);
        });
    });
});