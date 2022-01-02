
//returns computers pick
function computerPlay (){
    const gameChoices = ["rock", "paper", "scissors"]
    return gameChoices[Math.floor(Math.random()*gameChoices.length)]
}

//this needs to return winner for use by a score keeping function
function playRound(playerSelection, computerSelection){
    console.log(score);
    console.log(playerSelection);
    console.log(computerSelection);
};


