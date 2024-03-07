export default class GameStateService {
  constructor(storage) {
    this.storage = storage;
    this.state = this.load(); // Загрузка состояния игры при инициализации
  }

  save(state) {
    this.storage.setItem('state', JSON.stringify(state));
  }

  load() {
    const savedState = this.storage.getItem('state');
    return savedState ? JSON.parse(savedState) : {};
  }

  findCharacterByPosition(position) {
    const { characters } = this.state || {}; // Получение списка персонажей из загруженного состояния игры
    return characters?.find(character => character.position === position); // Поиск персонажа по позиции
  }
}
