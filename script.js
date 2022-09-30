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
 const playerScore = document.querySelector('#playerScore')
 const  computerScore = document.querySelector('#computerScore')



// playerPoints and ComputerPoints will be updated after each round.
 let playerPoints = 0;
 let computerPoints = 0;

//  DOM handling to add scores in the appropriate scoreboard locations

let pscore = document.createElement("p");
let ptext = document.createTextNode(playerPoints);
pscore.appendChild(ptext);
playerScore.appendChild(pscore);

let cscore = document.createElement("p");
let ctext = document.createTextNode(computerPoints);
cscore.appendChild(ctext);
computerScore.appendChild(cscore);


// update score function will use DOM manipulation to add the current score to the 
// scoreboard container in the appropriate locations for each score after each round
// (in other words, at the end of the the playRound function)


function updateScore() {
    computerScore.removeChild(computerScore.lastChild)
    playerScore.removeChild(playerScore.lastChild)

    let pscore = document.createElement("p");
    let ptext = document.createTextNode(playerPoints);
    pscore.appendChild(ptext);
    playerScore.appendChild(pscore);


    let cscore = document.createElement("p");
    let ctext = document.createTextNode(computerPoints);
    cscore.appendChild(ctext);
    computerScore.appendChild(cscore);

}





// DOM handling for messaging.  This allows text to be displayed at the 
// end of each round annoucning the winner

 let msg = document.createElement("p");
 let text = document.createTextNode("Results go here");
 msg.appendChild(text);
 results.append(msg);

// getPlayChoice returns the html id of the button which is clicked as a string.  
// this id is used later in the playRound function in order provide a string representing the players choice for that round


function getPlayerChoice(e) {
    // results.append(msg)
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    
    return e.target.id;
 }

 // play round takes an event (a button click in this case), which is passed to player selection.
 //computer selection is generated randomly from a list of strings
 // player and computer choices are compared using if statements to determine the winner
 // the 'winner' variable is updated to player, computer, or draw depending on the comparison of choices
 //

function playRound(e) {
    let playerSelection = getPlayerChoice(e);
    let computerSelection = getComputerChoice();
    let winner = undefined;
    if (computerSelection == playerSelection) {
        winner = "draw"
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
             winner = "player";
        } else if (playerSelection == "scissors") {
             winner = "computer";
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "scissors") {
              winner = "player";
        } else if (playerSelection == "rock") {
             winner = "computer";
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
             winner = "player";
        } else if (playerSelection == "paper") {
             winner = "computer";
        }
    }
    if (winner == "draw") {
        let msg = document.createElement("p");
        let text = document.createTextNode("It's a draw!");
        msg.appendChild(text);
        results.append(msg);
    } else if (winner == "player") {
        playerPoints += 1;
        let msg = document.createElement("p");
        let text = document.createTextNode("You win! " + playerSelection + " beats " + computerSelection + ".");
        msg.appendChild(text);
        results.append(msg);
    } else {
        computerPoints +=1;
        let msg = document.createElement("p");
        let text = document.createTextNode("You lose. " + computerSelection + " beats " + playerSelection + ".");
        msg.appendChild(text);
        results.append(msg);     
   
    }
    updateScore()
    console.log(playerPoints)
    console.log(computerPoints) 
}



options.forEach(option => option.addEventListener("click", playRound)) 





// console.log("computer " + typeof(computerChocie))
// console.log("player: " + typeof(playerChoice))


// for (let i = 0; i < 5; i++) {
//     console.log(i)
//     let computerChocie = getComputerChoice()
//     let playerChoice = getPlayerChoice()
//     playRound(computerChocie, playerChoice)
//  }





// choices.forEach(button => button.addEventListener("click", console.log("test")))