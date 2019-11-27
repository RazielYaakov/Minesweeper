/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Flag from './Flag';

const EMPTY = '';

const Square = ({ onMouseDown, square, isGameOver }) => {
    return (
        <button className="square" disabled={isGameOver || square.isDisable}
            onMouseDown={(event) => onMouseDown(square.row, square.column, event)}>
            {getSquareValue(square, isGameOver)}
        </button>
    );
};

const getSquareValue = (square, isGameOver) => {
    if (square.markedAsFlag) {
        return (<Flag />);
    } else if ((square.isDisable || isGameOver) && square.value !== 0) {
        return square.value;
    }

    return EMPTY;
};

export default Square;