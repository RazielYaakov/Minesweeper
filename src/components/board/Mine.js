import React from 'react';
import Flag from './Flag';

const EMPTY = '';

const Mine = ({ onMouseDown, mine, isGameOver }) => {
    return (
        <button className={mineClassName(isGameOver)} disabled={isGameOver}
            onMouseDown={(event) => onMouseDown(mine.row, mine.column, event)}>
            {getMineValue(mine.markedAsFlag && !isGameOver)}
        </button>
    );
};

const getMineValue = (markedAsFlag) => {
    if (markedAsFlag) {
        return (<Flag/>);
    }

    return EMPTY;
};

const mineClassName = (isGameOver) => {
    if (isGameOver) {
        return 'mine';
    } else {
        return 'square';
    }
}

export default Mine;