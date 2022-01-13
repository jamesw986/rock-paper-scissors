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
    // Plays one round
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

function game() {
    // Runs game on a loop until told to quit
    while (true) {
        let playerSelection = window.prompt("Rock, paper or scissors?");
        let playerSelectionL = playerSelection.toLowerCase();

        if (playerSelectionL === "quit") {
            console.log("Thanks for playing!");
            break;
        }

        if (playerSelectionL !== "rock" && playerSelectionL !== "paper" && playerSelectionL !== "scissors") {
            console.log("Please enter rock, paper or scissors only.");
            continue;
        }

        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

        const playChoice = window.prompt("Would you like to play again? yes/no");
        if (playChoice !== "yes" && playChoice !== "no") {
            console.log("Please answer yes or no only.");
            continue;
        } else if (playChoice === "no") {
            console.log("Ok, goodbye!");
            break;
        } else {
            continue;
        }
    }
}

while (true) {
    const playChoice = window.prompt("Would you like to play? yes/no");
    if (playChoice !== "yes" && playChoice !== "no") {
        console.log("Please answer yes or no only.");
        continue;
    } else if (playChoice === "no") {
        console.log("Ok, goodbye!");
        break;
    } else {
        game();
    }
}