import  themes  from '../js/Themes.js';
import { generateTeam } from './generators';
import { Bowman } from './characters/Bowman';
import { Swordsman } from './characters/swordsman.js';
import { Magician } from './characters/magician.js';
import { Vampire } from './characters/Vampire';
import { Undead } from './characters/undead.js';
import { Daemon } from './characters/daemon.js';
//import  GamePlay  from './GamePlay';
import PositionedCharacter from './PositionedCharacter';


export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  
  init() {
    this.gamePlay.drawUi(themes.prairie);

    const playerTypes = [Bowman, Swordsman, Magician];
    const playerTeam = generateTeam(playerTypes, 2, 2);

    const enemyTypes = [Vampire, Undead, Daemon];
    const enemyTeam = generateTeam(enemyTypes, 2, 2);

    function generatePositions(teamSize, boardSize, isPlayer) {
      let allowedPositions = [];
      const rows = boardSize / 8; // Предполагаем, что поле всегда 8x8
      
      // Генерация индексов столбцов в зависимости от того, для игрока это или для противника
      let columns = isPlayer ? [0, 1] : [6, 7];
    
      // Заполняем allowedPositions возможными позициями
      for (let row = 0; row < rows; row++) {
        for (let column of columns) {
          allowedPositions.push(row * 8 + column);
        }
      }
    
      // Случайным образом выбираем позиции из возможных, убеждаясь, что они не повторяются
      let positions = [];
      while (positions.length < teamSize) {
        let position = allowedPositions[Math.floor(Math.random() * allowedPositions.length)];
        if (!positions.includes(position)) {
          positions.push(position);
        }
      }
    
      return positions;
    }
    
    const playerPositions = generatePositions(2, 64, true); // для игрока
    const enemyPositions = generatePositions(2, 64, false); // для противника

    const positionedPlayerCharacters = playerTeam.map((character, index) => {
      return new PositionedCharacter(character, playerPositions[index]);
    });

    const positionedEnemyCharacters = enemyTeam.map((character, index) => {
      return new PositionedCharacter(character, enemyPositions[index]);
    });

    this.gamePlay.redrawPositions([...positionedPlayerCharacters, ...positionedEnemyCharacters]);
  }
}
    