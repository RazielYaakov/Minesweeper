import React from 'react';
import { connect } from 'react-redux';

const GameStatus = ({ isMineClicked, isWin }) => {
    return (<label>{getGameStatus(isMineClicked, isWin)}</label>
    );
};

const getGameStatus = (isMineClicked, isWin) => {
    if (isMineClicked) {
        return 'You lose, Game over!';
    } else if (isWin) {
        return 'You win ya badass minesweeper!';
    } else {
        return 'Still playing...';
    }
};


function mapStateToProps(state) {
    return {
        isMineClicked: state.mineClick.isMineClicked,
        isWin: state.updateSquares.isWinAlready
    };
}

export default connect(mapStateToProps)(GameStatus);