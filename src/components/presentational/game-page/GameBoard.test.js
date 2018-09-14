import React from 'react';
import {shallow} from 'enzyme';
import GameBoard from './GameBoard';
import {BOARD_ROW_NAMES, BOARD_COLUMN_NAMES, DIRECTIONS} from 'utils/constants';

describe('GameBoard', () => {
  it('should render hidden when display prop is false', () => {
    const props = {
      display: false,
      board: [],
      onCellClick: () => {},
    };
    const wrapper = shallow(<GameBoard {...props} />);
    expect(wrapper.find('div.game-board--hidden').exists()).toBe(true);
  });

  it('should render visible when display prop is true', () => {
    const props = {
      display: true,
      board: [],
      onCellClick: () => {},
    };
    const wrapper = shallow(<GameBoard {...props} />);
    expect(wrapper.find('div.game-board--visible').exists()).toBe(true);
  });

  it('should render a two dimensional array', () => {
    const props = {
      display: true,
      board: [
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
        [{isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}, {isHidden: true}],
      ],
      onCellClick: () => {},
    };
    const wrapper = shallow(<GameBoard {...props} />);
    const rows = wrapper.find('div.game-board__row');
    expect(rows.exists()).toBe(true);
    expect(rows.length).toBe(BOARD_ROW_NAMES.length + 1);
    rows.forEach((node, index) => {
      const columns = node.find('span.game-board__cell');
      expect(columns.exists()).toBe(true);
      expect(columns.length).toBe(BOARD_COLUMN_NAMES.length + 1);
    });
  });

  it('should render an x icon on visible cells that are free', () => {
    const props = {
      display: true,
      board: [
        [{isHidden: false, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
        [{isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}, {isHidden: true, isFree: true}],
      ],
      onCellClick: () => {},
    };
    const wrapper = shallow(<GameBoard {...props} />);
    const cellsWithX = wrapper.find('span.game-board__cell').find('i.fas.fa-times');
    expect(cellsWithX.exists()).toBe(true);
    expect(cellsWithX.length).toBe(1);
    expect(wrapper.find('span.game-board__cell').find('i.fas.fa-ship').exists()).toBe(false);
  });

  it('should render a ship icon on visible cells that are not free', () => {
    const props = {
      display: true,
      board: [
        [{isHidden: false, isFree: false, shipCoordinate: {x: 0, y: 0}}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}, {isHidden: true, isFree: true, shipCoordinate: null}],
      ],
      onCellClick: () => {},
    };
    const wrapper = shallow(<GameBoard {...props} />);
    const cellsWithShip = wrapper.find('span.game-board__cell').find('i.fas.fa-ship');
    expect(cellsWithShip.exists()).toBe(true);
    expect(cellsWithShip.length).toBe(1);
    expect(wrapper.find('span.game-board__cell').find('i.fas.fa-times').exists()).toBe(false);
  });

  it('should render an indicator on sunk ships', () => {
    const props = {
      display: true,
      board: [
        [{isHidden: false, isFree: false, shipCoordinate: {x: 0, y: 0}, shipLength: 2, shipDirection: DIRECTIONS.HORIZONTAL}, {isHidden: false, isFree: false, shipCoordinate: {x: 0, y: 0}, shipLength: 2, shipDirection: DIRECTIONS.HORIZONTAL}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: false, shipCoordinate: {x: 0, y: 4}, shipLength: 1, shipDirection: DIRECTIONS.VERTICAL}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
        [{isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}, {isHidden: true, isFree: true, shipCoordinate: null, shipLength: null, shipDirection: null}],
      ],
      onCellClick: () => {},
    };
    const wrapper = shallow(<GameBoard {...props} />);
    const sunkCells = wrapper.find('span.game-board__cell.game-board__cell--sunk');
    expect(sunkCells.exists()).toBe(true);
    expect(sunkCells.length).toBe(2);
  });
});