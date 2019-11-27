import React from 'react';

const MinesSettings = ({boardLength, updateSettings, minesLeft}) => {
    const minesOptions = generateOptions(boardLength);

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

const generateOptions = (boardLength) => {
    return [
        { display: ('Beginner - ' + boardLength), value: boardLength},
        { display: ('Semi-Pro - ' + boardLength * 1.5), value: boardLength * 1.5 },
        { display: ('Professional - ' + boardLength * 2), value: boardLength * 2 }, 
        { display: ('Legendary - ' + boardLength * 2.5), value: boardLength * 2.5 }
    ];
};

export default MinesSettings;