import * as types from '../actions/actionTypes';
import { generateMines } from '../generator/generateMines';
import calculateSquaresValues from '../logic/squaresValuesCalculator';
import handleSquareClick from '../logic/squareClicksHandler';
import handleMouseCenterClick from '../logic/mouseCenterClickHandler';
import checkIfPlayerWin from '../logic/checkIfPlayerWin';
import calculateFlags from '../logic/calculateFlags';

const defaultLength = 6;
const defaultMinesAmount = 6;
const firstMines = generateMines(defaultLength, defaultMinesAmount);

const updateBoardSquaresReducer = (state = { squares: calculateSquaresValues(firstMines), isWinAlready: false, flags: 0 }, action) => {
  let newSquares;

  switch (action.type) {
    case types.UPDATE_GAME_SETTINGS:
      const mines = generateMines(action.boardLength, action.minesAmount);
      return { ...state, squares: calculateSquaresValues(mines), flags: 0, isWinAlready: false };
    case types.SQUARE_CLICKED:
      newSquares = handleSquareClick(state.squares, action.row, action.column);
      return { ...state, squares: newSquares, isWinAlready: checkIfPlayerWin(newSquares) };
    case types.MOUSE_CENTER_CLICK:
      newSquares = handleMouseCenterClick(state.squares, action.row, action.column);
      return { ...state, squares: newSquares, isWinAlready: checkIfPlayerWin(newSquares), flags: calculateFlags(newSquares) };
    default:
      return state;
  }
};

export default updateBoardSquaresReducer;