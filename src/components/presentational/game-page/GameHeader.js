import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import './GameHeader.css';

const GameHeader = ({display}) => {
  const gameHeaderClassName = classnames('game-header', {
    'game-header--visible': display,
    'game-header--hidden': !display
  });

  return (
    <div className={gameHeaderClassName}>
      <h1 className="game-header__title">Battleship</h1>
      <div className="game-header__nav"><Link to="/setup">Change Settings</Link></div>
    </div>
  );
};

GameHeader.propTypes = {
  display: PropTypes.bool.isRequired,
};

export default GameHeader;