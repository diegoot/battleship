import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './GameLoader.css';

const GameLoader = ({display}) => {
  const loaderClassName = classnames('game-loader', {
    'game-loader--visible': display,
    'game-loader--hidden': !display
  });

  return (
    <div className={loaderClassName} />
  );
};

GameLoader.propTypes = {
  display: PropTypes.bool.isRequired,
};

export default GameLoader;