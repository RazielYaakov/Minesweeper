const checkIfPlayerWin = (squares) => {
    for (let row = 0; row < squares.length; row++) {
        for (let column = 0; column < squares.length; column++) {
            if(!squares[row][column].isMine && !squares[row][column].isDisable) {
                return false;
            }
        }
    }

    return true;
};

export default checkIfPlayerWin;