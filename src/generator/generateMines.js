import createEmptyMatrix from './matrixGenerator';

export const generateMines = (boardLength, minesAmount) => {
    let mines = createEmptyMatrix(boardLength);
    let minesCounter = 0;

    while(minesCounter < minesAmount){
        let randomRow = Math.floor(Math.random() * boardLength);
        let randomColumn = Math.floor(Math.random() * boardLength);
        
        if(!mines[randomRow][randomColumn].isMine){
            mines[randomRow][randomColumn].isMine = true;
            minesCounter++;
        }
    }
    
    return mines;
};