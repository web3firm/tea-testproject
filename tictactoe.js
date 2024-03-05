const readline = require('readline-sync');

let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
    console.log(board.map(row => row.join(' | ')).join('\n---------\n'));
}

function checkWin() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === currentPlayer &&
            board[row][1] === currentPlayer &&
            board[row][2] === currentPlayer) {
            return true;
        }
    }
    // Check columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === currentPlayer &&
            board[1][col] === currentPlayer &&
            board[2][col] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if ((board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer)) {
        return true;
    }
    return false;
}

function play() {
    while (true) {
        printBoard();
        const row = parseInt(readline.question('Enter row number (0, 1, 2): '));
        const col = parseInt(readline.question('Enter column number (0, 1, 2): '));

        if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
            board[row][col] = currentPlayer;
            if (checkWin()) {
                console.log(`Player ${currentPlayer} wins!`);
                printBoard();
                break;
            } else if (board.flat().every(cell => cell !== ' ')) {
                console.log("It's a draw!");
                printBoard();
                break;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        } else {
            console.log('Invalid move! Try again.');
        }
    }
}

play();
