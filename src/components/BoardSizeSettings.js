import React from 'react';
import updateSettingsAction from '../actions/updateGameSettings';
import { connect } from 'react-redux';

const boardSizes = [{ display: '6x6', value: 6 }, { display: '8x8', value: 8 }, 
        { display: '10x10', value: 10 }, { display: '12x12', value: 12 }];

const BoardSizeSettings = ({updateSettings}) => {
    return (
        <div className="board-size-settings">
            <label>Board size: </label>
            <select onChange={event => updateSettings(event.target.value, event.target.value)}>
                {boardSizes.map(boardSize => <option key={boardSize.display} value={boardSize.value}>{boardSize.display}</option>)}
            </select>
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        updateSettings: (newBoardLength, minesAmount) => dispatch(updateSettingsAction(newBoardLength, minesAmount))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardSizeSettings);