import React from 'react';
import Row from './Row';
import squareClickAction from '../../actions/squareClicked';
import mineClickAction from '../../actions/mineClicked';
import mouseCenterClickAction from '../../actions/centerClick';
import { connect } from 'react-redux';

const MOUSE_LEFT_CLICK = 0;
const MOUSE_CENTER_CLICK = 1;

const GameBoard = ({ boardLength, boardSquares, isGameOver, squareClick, mineClick, markSquareAsFlag }) => {
  debugger;
  const handleClick = (rowNumber, colNumber, event) => {
    if (event.button === MOUSE_LEFT_CLICK) {
      if (!boardSquares[rowNumber][colNumber].markedAsFlag) {
        boardSquares[rowNumber][colNumber].isMine
          ? mineClick()
          : squareClick(rowNumber, colNumber);
      }
    } else if (event.button === MOUSE_CENTER_CLICK) {
      markSquareAsFlag(rowNumber, colNumber);
    }
  };

  const generateGameBoard = () => {
    const gameBoardRows = [];

    for (let rowNumber = 0; rowNumber < boardLength; rowNumber++) {
      gameBoardRows.push(generateRow(rowNumber, isGameOver));
    }

    return gameBoardRows;
  };

  const generateRow = (rowNumber, isGameOver) => (
    <Row rowSquares={boardSquares[rowNumber]}
      key={rowNumber} amountOfColumns={boardLength}
      isGameOver={isGameOver} onMouseDown={handleClick}
    />
  );

  return <>{generateGameBoard()}</>;
};

const mapStateToProps = (state) => {
  return {
    boardSquares: state.updateSquares.squares
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    squareClick: (row, col) => dispatch(squareClickAction(row, col)),
    mineClick: () => dispatch(mineClickAction()),
    markSquareAsFlag: (row, col) => dispatch(mouseCenterClickAction(row, col))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);