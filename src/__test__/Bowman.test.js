import { Bowman } from '../js/characters/Bowman'; 

describe('Bowman', () => {
  test('should create a Bowman character with correct properties', () => {
    const level = 1;
    const bowman = new Bowman(level);

    // Проверяем, что уровень установлен корректно
    expect(bowman.level).toBe(level);

    // Проверяем, что значения attack и defence установлены в соответствии с классом Bowman
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);

    // Проверяем, что тип установлен в 'bowman'
    expect(bowman.type).toBe('bowman');

    // Проверяем, что начальное значение здоровья установлено правильно (наследуется от Character)
    expect(bowman.health).toBe(50);
  });
});
