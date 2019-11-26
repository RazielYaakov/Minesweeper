import * as types from './actionTypes';

const updateGameSettings = (boardLength, minesAmount) => ({
    type: types.UPDATE_GAME_SETTINGS,
    boardLength,
    minesAmount
});

export default updateGameSettings;