


//returns computers pick
function computerPlay (){
    const gameChoices = ["rock", "paper", "scissors"]
    return gameChoices[Math.floor(Math.random()*gameChoices.length)]
}

//this needs to return winner for use by a score keeping function
function playRound(playerSelection, computerSelection){
    if (computerSelection == playerSelection){
        return 'tie'
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock"))
            {
                //console.log('player wins');
                return 'computer wins'
            } else {
                //console.log("inconclusive")
                return 'player wins'
                };

    //console.log(score);
    
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