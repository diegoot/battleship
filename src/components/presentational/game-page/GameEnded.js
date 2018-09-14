import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './GameEnded.css';

const GameEnded = ({display, onRetryClick, mainText, success}) => {
  const gameEndedClassName = classnames('game-ended', {
    'game-ended--visible': display,
    'game-ended--hidden': !display
  });

  const mainTextClassName = classnames('game-ended__main-text', {
    'game-ended__main-text--success': success
  });

  return (
    <div className={gameEndedClassName}>
      <h1 className={mainTextClassName}>{mainText}</h1>
      <h2 className="game-ended__secondary-text" onClick={onRetryClick}>Retry</h2>
    </div>
  );
};

GameEnded.defaultProps = {
  success: false,
};

GameEnded.propTypes = {
  display: PropTypes.bool.isRequired,
  onRetryClick: PropTypes.func.isRequired,
  mainText: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

export default GameEnded;