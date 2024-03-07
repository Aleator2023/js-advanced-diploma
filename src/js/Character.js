
export default class Character {
  constructor(level, type = 'generic',position) {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;  
    this.position = position;   
  }
}
