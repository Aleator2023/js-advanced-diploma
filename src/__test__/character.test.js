
import Character from '../js/Character'; 

describe('Character', () => {
  test('should create a character with correct parameters', () => {
    const level = 1;
    const type = 'magician';
    const character = new Character(level, type);

    expect(character.level).toBe(level);
    expect(character.attack).toBe(0); // Исходя из вашего класса, attack по умолчанию 0
    expect(character.defence).toBe(0); // Аналогично, defence по умолчанию 0
    expect(character.health).toBe(50); // По умолчанию health равно 50
    expect(character.type).toBe(type);
  });

  test('should create a generic character if type is not provided', () => {
    const character = new Character(1);
    expect(character.type).toBe('generic'); // Проверяем, что тип по умолчанию - 'generic'
  });
});
