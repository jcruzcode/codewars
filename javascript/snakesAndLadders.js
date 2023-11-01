// 6 kyu - Snakes and Ladders
var snakesAndLadders = function (board, dice) {
    const finalIndex = board.length - 1;
    let boardIndex = 0;

    for (let i = 0; i < dice.length; i++) {
        if (dice[i] + boardIndex > finalIndex) {
            continue;
        } else if (boardIndex === finalIndex) {
            return boardIndex;
        }

        boardIndex += dice[i];

        if (board[boardIndex] !== 0) {
            boardIndex += board[boardIndex];
        }

    }

    return boardIndex;
}