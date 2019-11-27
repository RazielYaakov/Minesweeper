import React from 'react';
import Square from './Square';
import Mine from './Mine';

const Row = ({ amountOfColumns, rowSquares, onMouseDown, isGameOver }) => (
    <div className="board-row">
        {generateRow(amountOfColumns, rowSquares, onMouseDown, isGameOver)}
    </div>);

const generateRow = (amountOfColumns, rowSquares, onMouseDown, isGameOver) => {
    const rowColumns = [];

    for (let colNumber = 0; colNumber < amountOfColumns; colNumber++) {
        if (rowSquares[colNumber].isMine) {
            rowColumns.push(generateMine(rowSquares[colNumber], onMouseDown, isGameOver));
        } else {
            rowColumns.push(generateSquare(rowSquares[colNumber], onMouseDown, isGameOver));
        }
    }

    return rowColumns;
};

const generateMine = (mine, onMouseDown, isGameOver) => (
    <Mine mine={mine}
        onMouseDown={onMouseDown} isGameOver={isGameOver} />
);

const generateSquare = (square, onMouseDown, isGameOver) => (
    <Square square={square}
        onMouseDown={onMouseDown} isGameOver={isGameOver} />);

export default Row;