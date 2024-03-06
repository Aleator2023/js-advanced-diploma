// src/js/Team.js
import characterGenerator from './generators';

function generateTeam(types, maxLevel, characterCount) {
  const team = [];
  const generator = characterGenerator(types, maxLevel);
  for (let i = 0; i < characterCount; i++) {
    team.push(generator.next().value);
  }
  return team;
}

/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
export default class Team {
  // TODO: write your logic here
}
