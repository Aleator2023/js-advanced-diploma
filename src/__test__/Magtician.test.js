
import { Magician } from '../js/characters/magician'; 

describe('Magician', () => {
  test('should create a Magician character with correct properties', () => {
    const level = 1;
    const magician = new Magician(level);

    // Проверяем, что уровень установлен корректно
    expect(magician.level).toBe(level);

    // Проверяем, что значения attack и defence установлены в соответствии с классом Magician
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);

    // Проверяем, что тип установлен в 'magician'
    expect(magician.type).toBe('magician');

    // Проверяем, что начальное значение здоровья установлено правильно (наследуется от Character)
    expect(magician.health).toBe(50);
  });
});
