import Character from '../Character'

class Swordsman extends Character {
  constructor(level) {
    super(level);
    this.attack = 40;
    this.defence = 10;
    this.type = 'swordsman';
  }
}

export { Swordsman };