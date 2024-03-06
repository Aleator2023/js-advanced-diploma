/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  const totalCells = boardSize * boardSize;
  // Верхний левый угол
  if (index === 0) return 'top-left';
  // Верхний правый угол
  if (index === boardSize - 1) return 'top-right';
  // Нижний левый угол
  if (index === totalCells - boardSize) return 'bottom-left';
  // Нижний правый угол
  if (index === totalCells - 1) return 'bottom-right';
  // Верхняя граница
  if (index < boardSize) return 'top';
  // Нижняя граница
  if (index >= totalCells - boardSize) return 'bottom';
  // Левая граница
  if (index % boardSize === 0) return 'left';
  // Правая граница
  if ((index + 1) % boardSize === 0) return 'right';
  // Центр
  return 'center';
}


export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}