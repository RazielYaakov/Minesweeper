/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Flag from './Flag';

const EMPTY = '';

const Square = ({ rowNumber, colNumber, onMouseDown, isFlag, isDisable, isOver, value }) => {
    return (
        <button className="square" disabled={isOver || isDisable}
            onMouseDown={(event) => onMouseDown(rowNumber, colNumber, event)}
        >
            {getSquareValue(isFlag, isDisable, isOver, value)}
        </button>
    );
};

const getSquareValue = (isFlag, isDisable, isOver, squareValue) => {
    if(isFlag){
        return (<Flag />);
    } else if ((isDisable || isOver) && squareValue !== 0) {
        return squareValue;
    }
    
    return EMPTY;
};

export default Square;