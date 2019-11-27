const createEmptyMatrix = (matrixLength) => {
    const matrix = [];

    for (let row = 0; row < matrixLength; row++) {
        matrix[row] = [];
        for (let column = 0; column < matrixLength; column++) {
            matrix[row][column] = {row, column};
        }
    }

    return matrix;
};

export default createEmptyMatrix;