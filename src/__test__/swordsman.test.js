
import { Swordsman } from '../js/characters/swordsman'; 

describe('Swordsman', () => {
  test('should create a Swordsman character with correct properties', () => {
    const level = 1;
    const swordsman = new Swordsman(level);

    // Проверяем, что уровень установлен корректно
    expect(swordsman.level).toBe(level);

    // Проверяем, что значения attack и defence установлены в соответствии с классом Swordsman
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);

    // Проверяем, что тип установлен в 'swordsman'
    expect(swordsman.type).toBe('swordsman');

    // Проверяем, что начальное значение здоровья установлено правильно (наследуется от Character)
    expect(swordsman.health).toBe(50);
  });
});
