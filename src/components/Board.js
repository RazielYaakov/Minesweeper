import React from 'react';
import Row from './Row';
import squareClickAction from '../actions/squareClicked';
import mineClickAction from '../actions/mineClicked';
import mouseCenterClickAction from '../actions/centerClick';
import { connect } from 'react-redux';

const MOUSE_LEFT_CLICK = 0;
const MOUSE_CENTER_CLICK = 1;

const Board = ({ boardLength, boardSquares, isMineClicked, isWin, squareClick, mineClick, markSquareAsFlag }) => {
  const boardRows = [];

  const handleClick = (rowNumber, colNumber, event) => {
    if (event.button === MOUSE_LEFT_CLICK) {
      if (!boardSquares[rowNumber][colNumber].markedAsFlag) {
        if (boardSquares[rowNumber][colNumber].isMine) {
          mineClick();
        } else {
          squareClick(rowNumber, colNumber);
        }
      }
    } else if (event.button === MOUSE_CENTER_CLICK) {
      markSquareAsFlag(rowNumber, colNumber);
    }
  };

  for (let rowNumber = 0; rowNumber < boardLength; rowNumber++) {
    boardRows.push(<Row rowSquares={boardSquares[rowNumber]}
      key={rowNumber} rowNumber={rowNumber} amountOfColumns={boardLength}
      isOver={isMineClicked || isWin} onMouseDown={handleClick}
    />);
  }

  return (
    <>
      {boardRows}
    </>
  );
};

function mapStateToProps(state) {
  return {
    boardLength: state.updateSettings.boardLength,
    boardSquares: state.updateSquares.squares,
    isMineClicked: state.mineClick.isMineClicked,
    isWin: state.updateSquares.isWinAlready,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    squareClick: (row, col) => dispatch(squareClickAction(row, col)),
    mineClick: () => dispatch(mineClickAction()),
    markSquareAsFlag: (row, col) => dispatch(mouseCenterClickAction(row, col))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);