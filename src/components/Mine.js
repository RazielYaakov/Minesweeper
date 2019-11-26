import React from 'react';
import Flag from './Flag';

const EMPTY = '';

const Mine = ({ onMouseDown, rowNumber, colNumber, isOver, isFlag }) => {
    return (
        <button className={mineClassName(isOver)} disabled={isOver}
            onMouseDown={(event) => onMouseDown(rowNumber, colNumber, event)}>
            {getMineValue(isFlag, isOver)}
        </button>
    );
};

const getMineValue = (isFlag, isOver) => {
    if (isFlag && !isOver) {
        return (<Flag/>);
    }

    return EMPTY;
};

const mineClassName = (isOver) => {
    if (isOver) {
        return 'mine';
    } else {
        return 'square';
    }
}

export default Mine;