let getRandomInt = (max) => Math.floor(Math.random() * max);


let getComputerChoice = () => {
    const shoot = ["rock", "paper", "scissors"]
    return shoot[getRandomInt(3)]
}

let playerSelection = (shoot) => shoot

let playRound = (pChoice, cChoice) => {
    if (pChoice.toLowerCase() == cChoice) {
        console.log("It's a Tie ! Rerolling now")
        let cChoice = getComputerChoice()
        return playRound(pChoice, cChoice)
    }
    if (pChoice.toLowerCase() === "scissors" && cChoice === "rock") {
        return "You Lose! Rock beats scissors!"
    }
    if (pChoice.toLowerCase() === "scissors" && cChoice === "paper") {
        return "You Win! Scissors beats paper!"
    }
    if (pChoice.toLowerCase() === "rock" && cChoice === "paper") {
        return "You Lose! Paper beats rock!"
    }
    if (pChoice.toLowerCase() === "rock" && cChoice === "scissors") {
        return "You Win! Rock beats scissors"
    }
    if (pChoice.toLowerCase() === "paper" && cChoice === "scissors") {
        return "You Lose! Scissors beats paper"
    }
    if (pChoice.toLowerCase() === "paper" && cChoice === "rock") {
        return "You Win! Paper beats rock"
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const display = document.querySelector('.display');
const body = document.querySelector('body');
let playerScore = document.createElement('div');
let computerScore = document.createElement('div');
let pScore = 0;
let cScore = 0; 
playerScore.textContent = `Player: ${pScore}`;
computerScore.textContent = `Computer: ${cScore}`;
body.appendChild(playerScore);
body.appendChild(computerScore);

rock.addEventListener('click', () => {
    const player = playerSelection('rock');
    const computer = getComputerChoice();
    const winner = playRound(player, computer)
    display.textContent = winner
    if (winner.substr(0, 8) === "You Win!") {
        pScore++;
    } else {
        cScore++;
    }
    playerScore.textContent = `Player: ${pScore}`;
    computerScore.textContent = `Computer: ${cScore}`;
    if (pScore === 5) {
        window.alert("Player wins with a score of 5 !")
    }
    if (cScore === 5) {
        window.alert("Computer wins with a score of 5 !")

    }
});

paper.addEventListener('click', () => {
    const player = playerSelection('paper')
    const computer = getComputerChoice();
    const winner = playRound(player, computer)
    display.textContent = winner
    if (winner.substr(0, 8) === "You Win!") {
        pScore++;
    } else {
        cScore++;
    }
    playerScore.textContent = `Player: ${pScore}`;
    computerScore.textContent = `Computer: ${cScore}`;
    if (pScore === 5) {
        window.alert("Player wins with a score of 5 !")
    }
    if (cScore === 5) {
        window.alert("Computer wins with a score of 5 !")
    }
});

scissors.addEventListener('click', () => {
    const player = playerSelection('scissors')
    const computer = getComputerChoice();
    const winner = playRound(player, computer)
    display.textContent = winner
    if (winner.substr(0, 8) === "You Win!") {
        pScore++;
    } else {
        cScore++;
    }
    playerScore.textContent = `Player: ${pScore}`;
    computerScore.textContent = `Computer: ${cScore}`;
    if (pScore === 5) {
        window.alert("Player wins with a score of 5 !")
    }
    if (cScore === 5) {
        window.alert("Computer wins with a score of 5 !")
    }
});













/*

let game = () => {
    let pScore = 0;
    let cScore = 0;

    for (let i = 0; i < 5; i++) {
        let pSelection = prompt();
        let cSelection = getComputerChoice();
        let winner = playRound(pSelection, cSelection);
        if (winner.substr(0, 8) === "You Win!") {
            pScore++;
        } else {
            cScore++;
        }
        let score = ` Player: ${pScore} Computer: ${cScore}`;
        console.log(winner + score)
    }
    let score = ` Player: ${pScore} Computer: ${cScore}`;
    if (pCore > cScore) {
        return `You win with a final score of ${score}`
    }
    else {
        return `You lose with a final score of ${score}`
    }
}
game()*/

