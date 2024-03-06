import { Vampire } from '../js/characters/Vampire'; 

describe('Vampire', () => {
  test('should create a Vampire character with correct properties', () => {
    const level = 1;
    const vampire = new Vampire(level);

    // Проверяем, что уровень установлен корректно
    expect(vampire.level).toBe(level);

    // Проверяем, что значения attack и defence установлены в соответствии с классом Vampire
    expect(vampire.attack).toBe(25);
    expect(vampire.defence).toBe(25);

    // Проверяем, что тип установлен в 'vampire'
    expect(vampire.type).toBe('vampire');

    // Проверяем, что начальное значение здоровья установлено правильно (наследуется от Character)
    expect(vampire.health).toBe(50);
  });
});
