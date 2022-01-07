//VARIABLES

let gameScore = {
    player: 0,
    computer: 0
};


// GAME PLAY FUNCTIONS

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


function updateGameScore (result){
    let playerScoreDisplay = document.getElementById('playerScore');
    let computerScoreDisplay = document.getElementById('computerScore');

    if (result === "player wins"){
        gameScore.player += 1;
        playerScoreDisplay.innerHTML = gameScore.player;
      
    }
    else if (result === "computer wins"){
        gameScore.computer += 1;
        computerScoreDisplay.innerHTML = gameScore.computer;
    };
    
};


let playerChoiceButtons = document.querySelectorAll(".player-choice-btn");
    
playerChoiceButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        
        updateGameScore(result);
        
        console.log(computerSelection);
        console.log(playerSelection);
        console.log(result);
        console.log (gameScore);     
    });
});


// DOM FUNCTIONS

const selectGamebuttons = document.querySelector('.game-buttons');
const gameInfo = document.querySelector('.game-info-container');

const playButton = document.getElementById('play');

const resetBtn = document.getElementById('reset');

const gameInstructions = document.querySelector('.instructions');

// Hide play button and show default game
playButton.addEventListener('click', function(event){
   //pass game buttons div to var
   //selectGamebuttons.classList.toggle('hidden');
   playButton.classList.toggle('hidden');
   gameInstructions.classList.toggle('hidden');
   selectGamebuttons.classList.toggle('hidden');
   gameInfo.classList.toggle('hidden');
   
   console.log(selectGamebuttons.classList);
    console.log('Button Clicked');
});


resetBtn.addEventListener('click', function(event){
   //pass game buttons div to var
   console.log(selectGamebuttons.classList);
   selectGamebuttons.classList.toggle('hidden');
   gameInstructions.classList.toggle('hidden');
   playButton.classList.toggle('hidden');
   gameInfo.classList.toggle('hidden');
   
});





