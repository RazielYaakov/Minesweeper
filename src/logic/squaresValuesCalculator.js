const cloneDeep = require('clone-deep');

const calculateSquaresValues = (mines) => {
    const squaresMatrix = cloneDeep(mines);

    for (let row = 0; row < squaresMatrix.length; row++) {
        for (let column = 0; column < squaresMatrix.length; column++) {
            if (!squaresMatrix[row][column].isMine) {
                squaresMatrix[row][column].value = numberOfMinesAround(mines, row, column);
            }
        }
    }

    return squaresMatrix;
};

const numberOfMinesAround = (mines, row, column) => {
    const rowsNumber = mines.length;
    const colsNumber = mines.length;
    const upperRowIndex = row - 1;
    const downerRowIndex = row + 1;
    const lefterColumnIndex = column - 1;
    const righterColumnIndex = column + 1;
    let minesAround = 0;

    for (let i = upperRowIndex; i <= downerRowIndex; i++) {
        for (let j = lefterColumnIndex; j <= righterColumnIndex; j++) {
            if (i >= 0 && i < rowsNumber && j >= 0 && j < colsNumber) {
                if (mines[i][j].isMine) {
                    minesAround++;
                }
            }
        }
    }

    return minesAround;
};

export default calculateSquaresValues;