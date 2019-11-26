import React from 'react';
import BoardSizeSettings from './BoardSizeSettings';
import DifficultySettings from './DifficultySettings';

const GameSettings = () => {
    return (
        <div id="settingBox">
            <BoardSizeSettings/>
            <DifficultySettings/>
        </div>
    );
}

export default GameSettings;