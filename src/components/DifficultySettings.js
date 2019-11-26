import React from 'react';
import updateSettingsAction from '../actions/updateGameSettings';
import { connect } from 'react-redux';

const MinesSettings = ({boardLength, updateSettings, minesLeft}) => {
    const minesOptions = [
        { display: ('Beginner - ' + boardLength), value: boardLength},
        { display: ('Semi-Pro - ' + boardLength * 1.5), value: boardLength * 1.5 },
        { display: ('Professional - ' + boardLength * 2), value: boardLength * 2 }, 
        { display: ('Legendary - ' + boardLength * 2.5), value: boardLength * 2.5 }];

    return (
        <div className="mines-amount-settings">
            <label>Difficulty levels: </label>
            <select onChange={event => updateSettings(boardLength, event.target.value)}>
                {minesOptions.map(mineOption => <option key={mineOption.display} value={mineOption.value}>{mineOption.display}</option>)}
            </select>
            <br/>
            <label>Mines left: {minesLeft}</label>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        boardLength: state.updateSettings.boardLength,
        minesLeft: state.updateSettings.minesAmount - state.updateSquares.flags
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateSettings: (boardLength, minesAmount) => dispatch(updateSettingsAction(boardLength, minesAmount))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MinesSettings);