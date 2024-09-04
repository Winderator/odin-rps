function getComputerChoice(){
    let selection = Math.random()*3
    if (selection >= 2){return 'rock'}
    if (selection >= 1){return 'paper'}
    return 'scissors'
}

function getHumanChoice(){
    let choice = prompt()
    return choice
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice()

    let winner = determineWinner(humanChoice,computerChoice)
    if (winner == 'human') {humanScore++}
    if (winner == 'computer') {computerScore++}
    console.log(winner)
}

function determineWinner(a,b){
    if (a==b) {return "tie"}

    // Checks all 3 scenarios where the human wins
    if (a=="rock" && b=="scissors" || a=="paper" && b=="rock" || a=="scissors" && b=="paper") {return "human"}

    return "computer"
}

function playGame(){
    let buttons = document.querySelectorAll(".choice")

    buttons.forEach(button => {
        button.addEventListener('click',() => playRound(button.id))
    }
    )
}

let humanScore = 0
let computerScore = 0

playGame()