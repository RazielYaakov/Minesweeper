const cloneDeep = require('clone-deep');

const handleSquareClick = (squares, row, column) => {
    const newSquares = cloneDeep(squares);
    newSquares[row][column].isDisable = true;
    
    if (newSquares[row][column].value === 0) {
        disableZeroNeighbors(newSquares, row, column);
    }

    return newSquares;
};

const disableZeroNeighbors = (squares, row, column) => {
    const rowsNumber = squares.length;
    const colsNumber = squares.length;
    const upperRowIndex = row - 1;
    const downerRowIndex = row + 1;
    const lefterColumnIndex = column - 1;
    const righterColumnIndex = column + 1;

    for (let i = upperRowIndex; i <= downerRowIndex; i++) {
        for (let j = lefterColumnIndex; j <= righterColumnIndex; j++) {
            if (i >= 0 && i < rowsNumber && j >= 0 && j < colsNumber) {
                if (squares[i][j].value === 0) {
                    if(!squares[i][j].isDisable && !squares[i][j].markedAsFlag){
                        squares[i][j].isDisable = true;
                        disableZeroNeighbors(squares, i, j);
                    }
                } else {
                    squares[i][j].isDisable = true;
                }
            }
        }
    }
};


export default handleSquareClick;