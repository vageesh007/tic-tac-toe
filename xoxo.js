let currentPlayer = "X";
let gameBoard = Array(9).fill("");

function placeMark(index) {
    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        document.getElementById("board").children[index].innerText = currentPlayer;
        if (checkWinner()) {
            alert("Player " + currentPlayer + " wins!");
            resetGame();
        } else if (!gameBoard.includes("")) {
            alert("It's a tie!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombos.some(combo => {
        return gameBoard[combo[0]] !== "" &&
               gameBoard[combo[0]] === gameBoard[combo[1]] &&
               gameBoard[combo[1]] === gameBoard[combo[2]];
    });
}

function resetGame() {
    gameBoard = Array(9).fill("");
    currentPlayer = "X";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}
