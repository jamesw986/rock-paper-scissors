function computerPlay() {
    // Randomly returns "rock", "paper" or "scissors" to simulate a computer player
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}