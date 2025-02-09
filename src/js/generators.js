/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const typeIndex = Math.floor(Math.random() * allowedTypes.length); 
    const level = Math.floor(Math.random() * maxLevel) + 1; 
    yield new allowedTypes[typeIndex](level); 
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];
  const generator = characterGenerator(allowedTypes, maxLevel); // Используем ранее созданный генератор
  for (let i = 0; i < characterCount; i++) {
    team.push(generator.next().value); // Добавляем нового персонажа в команду
  }
  return team;
}
