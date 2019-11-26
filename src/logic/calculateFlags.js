const calculateFlags = (squares) => {
    let flagsCounter = 0;

    for (let row = 0; row < squares.length; row++) {
        for (let column = 0; column < squares.length; column++) {
            if(squares[row][column].markedAsFlag) {
                flagsCounter++;
            }
        }
    }

    return flagsCounter;
};

export default calculateFlags;