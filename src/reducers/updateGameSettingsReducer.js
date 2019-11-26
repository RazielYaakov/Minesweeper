import * as types from '../actions/actionTypes';

const defaultLength = 6; 
const defaultMinesAmount = 6;

const updateGameSettingsReducer = (state = {boardLength: defaultLength, minesAmount: defaultMinesAmount}, action) => {
    switch (action.type) {
      case types.UPDATE_GAME_SETTINGS:
        return {...state, boardLength: Number(action.boardLength), minesAmount: Number(action.minesAmount)};
      default:
        return state;
    }
};

export default updateGameSettingsReducer;