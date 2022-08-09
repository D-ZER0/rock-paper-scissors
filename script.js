function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const answers = [
        "rock",
        "paper",
        "scissors",
    ]
    let n = getRandomInt(3)
    let choice = answers[n]
    console.log(choice)

    return choice
}

function getPlayerChoice() {
    return prompt("Rock, Paper, or scissors?").toLowerCase()
}


function playRound(computerSelection, playerSelection) {
    let winner = undefined
    if (computerSelection == playerSelection) {
        winner = "draw"
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
             winner = "player"
        } else if (playerSelection == "scissors") {
             winner = "computer"
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "scissors") {
              winner = "player"
        } else if (playerSelection == "rock") {
             winner = "computer"
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
             winner = "player"
        } else if (playerSelection == "paper") {
             winner = "computer"
        }
    }
    return console.log(winner)
}





let computerChocie = getComputerChoice()
let playerChoice = getPlayerChoice()
console.log("computer " + typeof(computerChocie))
console.log("player: " + typeof(playerChoice))
playRound(computerChocie, playerChoice)

