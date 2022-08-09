function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function computerChoice() {
    let answers = [
        "rock",
        "paper",
        "scissors",
    ]
    let n = getRandomInt(3)
    let choice = answers[n]

    return console.log(choice)
}

computerChoice()