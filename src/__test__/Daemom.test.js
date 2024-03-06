import { Daemon } from '../js/characters/daemon.js'; 

describe('Daemon', () => {
  test('should create a Daemon character with correct properties', () => {
    const level = 1;
    const daemon = new Daemon(level);

    // Проверяем, что уровень установлен корректно
    expect(daemon.level).toBe(level);

    // Проверяем, что значения attack и defence установлены в соответствии с классом Daemon
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(10);

    // Проверяем, что тип установлен в 'daemon'
    expect(daemon.type).toBe('daemon');

    // Проверяем, что начальное значение здоровья установлено правильно (наследуется от Character)
    expect(daemon.health).toBe(50);
  });
});
