import Daemon from '../js/class/Daemon';

describe('Daemon class', () => {
    let daemon;

    beforeEach(() => {
        daemon = new Daemon('Test');
    });

    describe('levelUp method', () => {
        test('should increase level by 1', () => {
            daemon.levelUp();
            expect(daemon.level).toBe(2);
        });

        test('should increase attack and defence by 20%', () => {
            const originalAttack = daemon.attack;
            const originalDefence = daemon.defence;

            daemon.levelUp();
            
            expect(daemon.attack).toBe(originalAttack * 1.2);
            expect(daemon.defence).toBe(originalDefence * 1.2);
        });

        test('should set health to 100 if it was less', () => {
            daemon.damage(50);
            daemon.levelUp();

            expect(daemon.health).toBe(100);
        });

        test('should throw an error if health is 0', () => {
            daemon.health = 0;
            expect(() => {
                daemon.levelUp();
            }).toThrow("Нельзя повысить уровень умершего персонажа");
        });
    });

    describe('damage method', () => {
        test('should decrease health based on damage points and defence', () => {
            daemon.damage(20);
            expect(daemon.health).toBeGreaterThanOrEqual(82, 0); // Health: 100 - (20 * (1 - 0.4))
        });

        test('should not reduce health below 0', () => {
            daemon.damage(200);
            expect(daemon.health).toBe(0);
        });
    });
});
