
import { Undead } from '../js/characters/undead'; 

describe('Undead', () => {
  test('should create an Undead character with correct properties', () => {
    const level = 1;
    const undead = new Undead(level);

    // Проверяем, что уровень установлен корректно
    expect(undead.level).toBe(level);

    // Проверяем, что значения attack и defence установлены в соответствии с классом Undead
    expect(undead.attack).toBe(40);
    expect(undead.defence).toBe(10);

    // Проверяем, что тип установлен в 'undead'
    expect(undead.type).toBe('undead');

    // Проверяем, что начальное значение здоровья установлено правильно (наследуется от Character)
    expect(undead.health).toBe(50);
  });
});
