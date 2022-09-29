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
    console.log("computer chose " + choice)

    return choice
}

// function getPlayerChoice() {
//     return prompt("Rock, Paper, or scissors?").toLowerCase()
// }

 // select buttons with class type "choice"
 const options = document.querySelectorAll('.option');
 const results = document.querySelector('#results');

 console.log(options)


// returns the id of the button which is clicked as a string


 options.forEach(option => option.addEventListener("click", playRound)) 

function getPlayerChoice(e) {
    return e.target.id
 }


function playRound(e) {
    let playerSelection = getPlayerChoice(e);
    let computerSelection = getComputerChoice();
    let winner = undefined;
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
    if (winner == "draw") {
        // console.log("It's a draw!")
        // results.innerHTML += "\n" + "It's a draw!";
        let msg = document.createElement("p")
        let text = document.createTextNode("It's a draw!")
        msg.appendChild(text)
        results.append(msg)
    } else if (winner == "player") {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".")
    } else {
        console.log("You lose. " + computerSelection + " beats " + playerSelection + ".")
    }

}






// console.log("computer " + typeof(computerChocie))
// console.log("player: " + typeof(playerChoice))


// for (let i = 0; i < 5; i++) {
//     console.log(i)
//     let computerChocie = getComputerChoice()
//     let playerChoice = getPlayerChoice()
//     playRound(computerChocie, playerChoice)
//  }





// choices.forEach(button => button.addEventListener("click", console.log("test")))