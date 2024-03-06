import {  calcTileType } from '../js/utils';

describe('calcTileType', () => {
    test('should correctly identify all types of tiles', () => {
      const boardSize = 8; // Для примера используем размер доски 8x8
      expect(calcTileType(0, boardSize)).toBe('top-left');
      expect(calcTileType(7, boardSize)).toBe('top-right');
      expect(calcTileType(56, boardSize)).toBe('bottom-left');
      expect(calcTileType(63, boardSize)).toBe('bottom-right');
      expect(calcTileType(3, boardSize)).toBe('top');
      expect(calcTileType(60, boardSize)).toBe('bottom');
      expect(calcTileType(8, boardSize)).toBe('left');
      expect(calcTileType(15, boardSize)).toBe('right');
      expect(calcTileType(10, boardSize)).toBe('center');
    });
  });
  