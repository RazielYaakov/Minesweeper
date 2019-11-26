import {combineReducers} from 'redux';
import updateSettings from './updateGameSettingsReducer';
import updateSquares from './updateBoardSquaresReducer';
import mineClick from './mineClickedReducer';

const rootReducer = combineReducers({
    updateSettings,
    updateSquares,
    mineClick,
});

export default rootReducer;


