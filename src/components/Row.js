import React from 'react';
import Square from './Square';
import Mine from './Mine';

const Row = ({ amountOfColumns, rowNumber, rowSquares, onMouseDown, isOver }) => {
    const columns = [];

    for (let colNumber = 0; colNumber < amountOfColumns; colNumber++) {
        if (rowSquares[colNumber].isMine) {
            columns.push(<Mine rowNumber={rowNumber} colNumber={colNumber} key={colNumber}
                isFlag={rowSquares[colNumber].markedAsFlag} onMouseDown={onMouseDown} isOver={isOver} />);
        } else {
            columns.push(<Square value={rowSquares[colNumber].value} rowNumber={rowNumber} colNumber={colNumber} key={colNumber}
                onMouseDown={onMouseDown} isDisable={rowSquares[colNumber].isDisable} isOver={isOver}
                isFlag={rowSquares[colNumber].markedAsFlag}
            />);
        }
    }

    return (
        <div className="board-row">
            {columns}
        </div>
    );
};

export default Row;