import React from 'react';
import { connect } from 'react-redux';
import Board from './board/GameBoard';
import GameStatus from './GameStatus';
import GameSettings from './settings/GameSettings';
import updateSettingsAction from '../actions/updateGameSettings';

const Game = ({ boardLength, minesAmount, flagsAmount, isMineClicked, isPlayerWin, updateSettings }) =>
  <div className="game">
    <GameSettings boardLength={boardLength} minesAmount={minesAmount}
      flagsAmount={flagsAmount} updateSettings={updateSettings} />
    <Board boardLength={boardLength} isGameOver={isMineClicked || isPlayerWin} />
    <GameStatus status={determineGameStatus(isMineClicked, isPlayerWin)} />
  </div>

const determineGameStatus = (isMineClicked, isPlayerWin) => {
  if (isMineClicked) {
    return 'Ilona ya mshakla!';
  } else if (isPlayerWin) {
    return 'You win ya badass minesweeper!';
  } else {
    return 'Still playing...';
  }
};

const mapStateToProps = (state) => {
  return {
    boardLength: state.updateSettings.boardLength,
    minesAmount: state.updateSettings.minesAmount,
    flagsAmount: state.updateSquares.flags,
    isMineClicked: state.mineClick.isMineClicked,
    isPlayerWin: state.updateSquares.isWinAlready,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSettings: (newBoardLength, minesAmount) => dispatch(updateSettingsAction(newBoardLength, minesAmount))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
