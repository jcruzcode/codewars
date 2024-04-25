/*
======== Rock Paper Scisscors! (8 kyu) ========
Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

1) Parameters - Two strings each either being "rock", "paper", "scisscors".
2) Return - A string indicating who won the game of rock paper scisscors or a 
            draw.
3) Examples - see tests
4) Pseudocode - see comments

*/
const rps = (p1, p2) => {
    // Player 1 and 2 use the same move gives a draw
    if (p1 === p2) return "Draw!"

    // Implement rock, paper, scissors rules where p1 !== p2
    if (p1 === "rock" && p2 === "paper") {
        return "Player 2 won!"
    } else if (p1 === "rock" && p2 === "scissors") {
        return "Player 1 won!";
    } else if (p1 === "scissors" && p2 === "rock") {
        return "Player 2 won!";
    } else if (p1 === "scissors" && p2 === "paper") {
        return "Player 1 won!";
    } else if (p1 === "paper" && p2 === "rock") {
        return "Player 1 won!";
    } else if (p1 === "paper" && p2 === "scissors") {
        return "Player 2 won!";
    }
};

// Tests
console.log(rps("rock", "rock"), "Draw!");
console.log(rps("paper", "paper"), "Draw!");
console.log(rps("scissors", "scissors"), "Draw!")
console.log(rps("rock", "paper"), "Player 2 won!");
console.log(rps("rock", "scissors"), "Player 1 won!");
console.log(rps("scissors", "paper"), "Player 1 won!");
console.log(rps("scissors", "rock"), "Player 2 won!");
console.log(rps("paper", "rock"), "Player 1 won!");
console.log(rps("paper", "scissors"), "Player 2 won!");