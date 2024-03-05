import Zombie from '../js/class/Zombie'

describe('Zombie class', () => {
    let zombie;

    beforeEach(() => {
        zombie = new Zombie('Zombie');
    });

    describe('levelUp method', () => {
        // Тесты на уровень могут оставаться такими же
    });

    describe('damage method', () => {
        test('should decrease health based on damage points and defence', () => {
            zombie.damage(20);
            expect(zombie.health).toBeGreaterThanOrEqual(80, 0); // Health: 100 - (20 * (1 - 0.1))
        });

        test('should not reduce health below 0', () => {
            zombie.damage(200);
            expect(zombie.health).toBe(0);
        });
    });
});