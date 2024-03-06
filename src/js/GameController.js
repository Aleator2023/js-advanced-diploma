import  themes  from '../js/Themes.js';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    // TODO: load saved stated from stateService
  }

  //onCellClick(index) {
    // TODO: react to click
  //}

  //onCellEnter(index) {
    // TODO: react to mouse enter
 // }

  //onCellLeave(index) {
    // TODO: react to mouse leave
 // }
}