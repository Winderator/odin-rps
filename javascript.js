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

function playRound(){
    let human = getHumanChoice().toLowerCase()
    let computer = getComputerChoice()

    let winner = determineWinner(human,computer)
    if (winner == 'human') {humanScore++}
    if (winner == 'computer') {computerScore++}
    return winner
}

function determineWinner(a,b){
    if (a==b) {return "tie"}
    if (a=="rock" && b=="scissors" || a=="paper" && b=="rock" || a=="scissors" && b=="paper") {return "human"}
    return "computer"
}

function playGame(){
    for (let i=0; i<5; i++){
        playRound()
        console.log(`Human:${humanScore}, Computer:${computerScore}`)
    }
}

let humanScore = 0
let computerScore = 0

playGame()