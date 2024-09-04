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
    if (isGameOver) {return}

    let computerChoice = getComputerChoice()

    let winner = determineWinner(humanChoice,computerChoice)
    if (winner == 'human') {humanScore++}
    if (winner == 'computer') {computerScore++}

    updateResults()
    if (humanScore > 4 || computerScore > 4){
        isGameOver = true
        announceWinner(winner)
    }
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

function updateResults(){
    let humanResults = document.querySelector(".human-score")
    let computerResults = document.querySelector(".computer-score")

    humanResults.textContent = humanScore.toString()
    computerResults.textContent = computerScore.toString()
}

function announceWinner(winner){
    let results = document.querySelector(".results")
    let resultText = `The winner is: ${winner}`

    let resultElement = document.createElement("p")
    resultElement.innerText = resultText

    results.appendChild(resultElement)
}

let humanScore = 0
let computerScore = 0
let isGameOver = false

playGame()