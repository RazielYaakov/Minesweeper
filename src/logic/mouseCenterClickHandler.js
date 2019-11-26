const cloneDeep = require('clone-deep');

const handleMouseCenterClick = (squares, row, column) => {
    const newSquares = cloneDeep(squares);
    newSquares[row][column].markedAsFlag = !newSquares[row][column].markedAsFlag;

    return newSquares;
};

export default handleMouseCenterClick;