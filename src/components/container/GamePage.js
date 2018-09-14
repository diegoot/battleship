import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {initGame, cellClicked, retryClicked, flagGameOver, flagGameComplete} from 'redux/actions/game';
import GameBoard from 'components/presentational/game-page/GameBoard';
import GameLoader from 'components/presentational/game-page/GameLoader';
import GameHeader from 'components/presentational/game-page/GameHeader';
import GameFooter from 'components/presentational/game-page/GameFooter';
import GameEnded from 'components/presentational/game-page/GameEnded';

class GamePage extends React.Component {
  constructor(props) {
    super(props);

    const {dispatch, attempts} = props;

    dispatch(initGame(attempts));

    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleRetryClick = this.handleRetryClick.bind(this);
  }

  handleCellClick(x, y) {
    const {dispatch, game: {board}} = this.props;
    const cell = board[y][x];

    if (cell.isHidden) {
      dispatch(cellClicked(x, y));
    }
  }

  handleRetryClick() {
    const {dispatch, attempts} = this.props;

    dispatch(retryClicked(attempts));
  }

  componentDidUpdate() {
    const {dispatch, attempts, game: {attemptsLeft, board, isOver, isComplete}} = this.props;

    if (!isOver && !isComplete) {
      const isRowsWithActiveShips = board.some(row => row.filter(cell => !cell.isFree && cell.isHidden).length > 0);

      if (attemptsLeft === 0 && isRowsWithActiveShips) {
        dispatch(flagGameOver());
      }

      if (attemptsLeft !== attempts && !isRowsWithActiveShips) {
        dispatch(flagGameComplete());
      }
    }
  }

  render() {
    const {isInitializing, board, attemptsLeft, isOver, isComplete} = this.props.game;

    return (
      <React.Fragment>
        <GameLoader display={isInitializing} />
        <GameHeader display={!isInitializing} />
        <GameBoard board={board} display={!isInitializing} onCellClick={this.handleCellClick} />
        <GameFooter display={!isInitializing} attemptsLeft={attemptsLeft} />
        <GameEnded display={isOver} mainText="Game Over" onRetryClick={this.handleRetryClick} />
        <GameEnded display={isComplete} mainText="You Win" success onRetryClick={this.handleRetryClick} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
  attempts: state.setup.attempts,
});

GamePage.propTypes = {
  game: PropTypes.object.isRequired,
  attempts: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, null)(GamePage);