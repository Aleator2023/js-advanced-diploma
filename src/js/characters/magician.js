import Character from '../Character'

class Magician extends Character {
  constructor(level) {
    super(level);
    this.attack = 10;
    this.defence = 40;
    this.type = 'magician';
  }
}

export { Magician };