


//returns computers pick
function computerPlay (){
    const gameChoices = ["rock", "paper", "scissors"]
    return gameChoices[Math.floor(Math.random()*gameChoices.length)]
}

//returns a winner
function playRound(playerSelection, computerSelection){
    if (computerSelection == playerSelection){
        return 'tie'
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock"))
            {
                return 'computer wins'
            } else {
                return 'player wins'
                };
};


let playerChoiceButtons = document.querySelectorAll(".player-choice-btn");
    
playerChoiceButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(computerSelection);
        console.log(playerSelection);
        console.log(result);     
    });
});