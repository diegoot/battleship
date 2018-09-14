export const LEVELS = [
  {name: 'Easy', attempts: Number.MAX_SAFE_INTEGER},
  {name: 'Medium', attempts: 100},
  {name: 'Hard', attempts: 50},
];

export const BOARD_SIZE = 10;

export const BOARD_COLUMN_NAMES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const BOARD_ROW_NAMES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const DIRECTIONS = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
};

export const SHIPS = {
  total: 10,
  lengths: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1],
};