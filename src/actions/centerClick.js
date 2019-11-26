import * as types from './actionTypes';

const mouseCenterClickAction = (row, column) => ({
    type: types.MOUSE_CENTER_CLICK,
    row,
    column
});

export default mouseCenterClickAction;