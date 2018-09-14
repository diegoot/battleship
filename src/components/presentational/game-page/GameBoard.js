import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {BOARD_ROW_NAMES, BOARD_COLUMN_NAMES} from 'utils/constants';
import './GameBoard.css';
import { DIRECTIONS } from 'utils/constants';

class GameBoard extends React.Component {
  isSunk(x, y) {
    const {board} = this.props;
    const originalCell = board[y][x];
    let targetX = originalCell.shipCoordinate.x;
    let targetY = originalCell.shipCoordinate.y;

    for(let i = 0; i < originalCell.shipLength; i++) {
      const targetCell = board[targetY][targetX];

      if (targetCell.isHidden) {
        return false;
      }

      if (originalCell.shipDirection === DIRECTIONS.HORIZONTAL) {
        targetX++;
      }
      else {
        targetY++;
      }
    }
    return true;
  };

  render() {
    const {display, board, onCellClick} = this.props;
    const gameBoardClassName = classnames('game-board', {
      'game-board--visible': display,
      'game-board--hidden': !display
    });
  
    return (
      <div className={gameBoardClassName}>
        <div className="game-board__row">
          <span className="game-board__cell game-board__cell--corner"></span>
          {BOARD_COLUMN_NAMES.map((name, index) => <span key={index} className="game-board__cell game-board__cell--top-title">{name}</span>)}
        </div>
        {
          board.map((row, y) => {
            return (
              <div key={y} className="game-board__row">
                <span className="game-board__cell game-board__cell--left-title">{BOARD_ROW_NAMES[y]}</span>
                {
                  row.map((cell, x) => {
                    let content = null;
                    let cellClassName = 'game-board__cell';
  
                    if (!cell.isHidden) {
                      if (cell.isFree) {
                        content = <i className="fas fa-times"></i>
                      }
                      else {
                        cellClassName = classnames('game-board__cell', {
                          'game-board__cell--sunk': this.isSunk(x, y)
                        });
                        content = <i className="fas fa-ship"></i>
                      }
                    }
                    return <span key={x} className={cellClassName} onClick={() => onCellClick(x, y)}>{content}</span>;
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
};

GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  display: PropTypes.bool.isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default GameBoard;