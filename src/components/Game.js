import React from 'react';
import Board from './Board';
import GameStatus from './GameStatus';
import GameSettings from './GameSettings';

const Game = () => {
  return (
    <div className="game">
      <GameSettings />
      <Board />
      <GameStatus/>
    </div>
  );
}

export default Game;