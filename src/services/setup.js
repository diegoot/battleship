import {BOARD_SIZE, DIRECTIONS, SHIPS} from 'utils/constants';

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomDirection = () => {
  const random = getRandomInteger(0, 1);

  if (random === 0) return DIRECTIONS.HORIZONTAL;
  return DIRECTIONS.VERTICAL;
}

const getRandomCell = (maxCell) => {
  const x = getRandomInteger(0, maxCell);
  const y = getRandomInteger(0, maxCell);

  return {x, y};
}

const validatePosition = (board, cell, shipLength, shipDirection) => {
  let index = 0;
  let valid = true;

  while (valid && index < shipLength) {
    let targetX = cell.x;
    let targetY = cell.y;

    if(shipDirection === DIRECTIONS.HORIZONTAL) {
      targetX += index;
    }
    else {
      targetY += index;
    }

    valid = board[targetY][targetX].isFree;

    index++;
  }

  return valid;
}

const initializeBoard = () => {
  const board = [];

  for(let i = 0; i < BOARD_SIZE; i++) {
    board.push([]);

    for(let j = 0; j < BOARD_SIZE; j++) {
      const row = board[i];

      row.push({
        //user did not hit it
        isHidden: true,
        //true there is no ship on it, false there is a ship (or a part) on it
        isFree: true,
        //first cell of the ship (if any)
        shipCoordinate: null,
        //length of th ship (if any)
        shipLength: null,
        //direction of the ship (if any)
        shipDirection: null,
      });
    }
  }

  return board;
};

const distributeShipsOnBoard = (board) => {
  const resultBoard = board.map(row => row.slice());

  for(let i = 0; i < SHIPS.total; i++) {
    const shipLength = SHIPS.lengths[i];
    let validPosition = false;

    while (!validPosition) {
      const cell = getRandomCell(BOARD_SIZE - shipLength);
      const shipDirection = getRandomDirection();
      validPosition = validatePosition(resultBoard, cell, shipLength, shipDirection);
      if (validPosition) {
        let index = 0;

        while(index < shipLength) {
          let targetX = cell.x;
          let targetY = cell.y;
      
          if(shipDirection === DIRECTIONS.HORIZONTAL) {
            targetX += index;
          }
          else {
            targetY += index;
          }

          const boardCell = Object.assign(
            {},
            resultBoard[targetY][targetX],
            {isFree: false, shipLength, shipDirection, shipCoordinate: cell}
          );
          resultBoard[targetY][targetX] = boardCell;
          index++;
        }
      }
    }
  }

  return resultBoard;
};

export const initBoard = () => {
  return new Promise(resolve => {
    const board = initializeBoard();
    const newBoard = distributeShipsOnBoard(board);

    resolve(newBoard);
  });
}