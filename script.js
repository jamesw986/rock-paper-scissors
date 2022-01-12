function computerPlay() {
    // Randomly returns "rock", "paper" or "scissors" to simulate a computer player
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionL = playerSelection.toLowerCase();
    if (playerSelectionL === computerSelection) {
        return `Draw, you both selected ${playerSelectionL}`
    }
    if (playerSelectionL === "rock") {
        if (computerSelection === "paper") {
            return "You lose, paper covers rock!";
        } else if (computerSelection === "scissors") {
            return "You win, rock crushes scissors!";
        }
    } else if (playerSelectionL === "paper") {
        if (computerSelection === "rock") {
            return "You win, paper covers rock!";
        } else if (computerSelection === "scissors") {
            return "You lose, scissors cuts paper!";
        }
    } else {
        if (computerSelection === "rock") {
            return "You lose, rock crushes scissors!";
        } else if (computerSelection === "paper") {
            return "You win, scissors cuts paper";
        }
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));