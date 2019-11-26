import * as types from './actionTypes';

const squareClickAction = (row, column) => ({
    type: types.SQUARE_CLICKED,
    row,
    column
});

export default squareClickAction;