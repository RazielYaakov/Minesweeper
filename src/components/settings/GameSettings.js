import React from 'react';
import updateSettingsAction from '../../actions/updateGameSettings';
import { connect } from 'react-redux';
import BoardSizeSettings from './BoardSizeSettings';
import DifficultySettings from './DifficultySettings';

const GameSettings = ({ boardLength, minesLeft, updateSettings }) => {
    return (
        <div id="settingBox">
            <BoardSizeSettings boardLength={boardLength} updateSettings={updateSettings} />
            <DifficultySettings updateSettings={updateSettings} boardLength={boardLength}
                minesLeft={minesLeft} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        boardLength: state.updateSettings.boardLength,
        minesLeft: state.updateSettings.minesAmount - state.updateSquares.flags
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSettings: (boardLength, minesAmount) => dispatch(updateSettingsAction(boardLength, minesAmount))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);