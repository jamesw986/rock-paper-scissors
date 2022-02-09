// Initial declarations
let compScore = 0;
let playerScore = 0;
let winnerDiv = document.querySelector('.winner');
let container = document.querySelector('div[id=container');
let message = document.querySelector('div[id=game-message]');
updatePlayerScore();
updateCompScore();



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
    if (playerSelection === computerSelection) {
        message.innerText = `Draw, you both selected ${playerSelection}`;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            message.innerText = "You lose, paper covers rock!";
            compScore++;
            updateCompScore();

        } else if (computerSelection === "scissors") {
            message.innerText = "You win, rock crushes scissors!";
            playerScore++;
            updatePlayerScore();
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            message.innerText = "You win, paper covers rock!";
            playerScore++;
            updatePlayerScore();

        } else if (computerSelection === "scissors") {
            message.innerText = "You lose, scissors cuts paper!";
            compScore++;
            updateCompScore();
        }
    } else {
        if (computerSelection === "rock") {
            message.innerText = "You lose, rock crushes scissors!";
            compScore++;
            updateCompScore();

        } else if (computerSelection === "paper") {
            message.innerText = "You win, scissors cuts paper";
            playerScore++;
            updatePlayerScore();
        }
    }
}

function updatePlayerScore() {
    let playerScoreDiv = document.querySelector('div[id=player-score]');
    playerScoreDiv.innerText = `Player score: ${playerScore.toString()}`;
}

function updateCompScore() {
    let compScoreDiv = document.querySelector('div[id=comp-score]');
    compScoreDiv.innerText = `Computer score: ${compScore.toString()}`;
}

function getPlayerChoice(e) {
    let computerSelection = computerPlay();
    playRound(e.target.id, computerSelection);
    if (playerScore === 5 || compScore === 5) {
        declareWinner();
    }
}


// Click event runs game
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', getPlayerChoice)
});

// Reset scores and clear screen of any winner logs
function resetGame() {
    compScore = 0;
    playerScore = 0;
    updatePlayerScore();
    updateCompScore();
    winnerDiv.innerText = '';
    container.style.display = 'contents';
}

function addPlayAgainButton() {
    let playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Play Again';
    winnerDiv.appendChild(playAgainBtn);
    winnerDiv.style.display = 'flex';
    winnerDiv.style.flexDirection = 'column';
    winnerDiv.style.alignItems = 'center';
    winnerDiv.style.margin = '12px';
    playAgainBtn.style.width = 'auto';
    playAgainBtn.style.margin = '12px';
    playAgainBtn.addEventListener('click', function () {
        location.reload();
    });
}

// Print winner declaration to screen and prompt to play again
function declareWinner() {
    if (playerScore > compScore) {
        winnerDiv.innerText = `You win! You beat the computer 5 points to ${compScore}! Want to play again? `;

    } else {
        winnerDiv.innerText = `You lose...the computer beat you 5 points to ${playerScore}! Want to play again? `;
    }
    message.innerText = '';
    buttons.forEach(button => {button.removeEventListener('click', getPlayerChoice)});
    addPlayAgainButton();
}

resetGame();
