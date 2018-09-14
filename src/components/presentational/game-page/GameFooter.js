import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './GameFooter.css';

const GameHeader = ({display, attemptsLeft}) => {
  const gameHeaderClassName = classnames('game-footer', {
    'game-footer--visible': display,
    'game-footer--hidden': !display
  });

  return (
    <div className={gameHeaderClassName}>
      <h4 className="game-footer__title">Attempts left: {attemptsLeft}</h4>
    </div>
  );
};

GameHeader.propTypes = {
  display: PropTypes.bool.isRequired,
  attemptsLeft: PropTypes.number.isRequired,
};

export default GameHeader;