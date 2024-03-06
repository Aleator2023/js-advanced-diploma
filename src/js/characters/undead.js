import Character from '../Character'

class Undead extends Character {
  constructor(level) {
    super(level);
    this.attack = 40;
    this.defence = 10;
    this.type = 'undead';
  }
}

export { Undead };