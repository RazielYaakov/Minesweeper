import * as types from '../actions/actionTypes';

const mineClickedReducer = (state = {isMineClicked: false}, action) => {
    switch (action.type) {
      case types.MINE_CLICKED:
        return {...state, isMineClicked: true};
      case types.UPDATE_GAME_SETTINGS:
          return {...state, isMineClicked: false};
      default:
        return state;
    }
};

export default mineClickedReducer;