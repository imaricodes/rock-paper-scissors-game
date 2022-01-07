//GLOBAL VARIABLES

let gameScore = {
    player: 0,
    computer: 0,
    round: 0
};


//******* GAME PLAY FUNCTIONS *******//

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

function checkIfGameOver() {
    if (gameScore.player + gameScore.computer === 3){
        console.log("Round ___ over!");
    }
    
};


//game played here
let playerChoiceButtons = document.querySelectorAll(".player-choice-btn");
    
playerChoiceButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        
        //this updates and reports score
        updateGameScore(result);

        // report winner if (there is a winner){exit} if not, contiue
        checkIfGameOver(result);
        
        console.log(computerSelection);
        console.log(playerSelection);
        console.log(result);
        console.log (gameScore);     
    });
});


//******* DOM FUNCTIONS *******//

const selectGamebuttons = document.querySelector('.game-buttons');
const gameInfo = document.querySelector('.game-info-container');

const playButton = document.getElementById('play-btn');

const resetBtn = document.getElementById('reset');

const gameInstructions = document.querySelector('.instructions');

// Hide play button and show default game (this happens when player clicks play button)
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


//this function hides the rock/paper/scissors buttons that were NOT selected and needs to be called in the gameplay callback after choice is made...then the stage nees to be reset for round 2.






resetBtn.addEventListener('click', function(event){
   //pass game buttons div to var
   console.log(selectGamebuttons.classList);
   selectGamebuttons.classList.toggle('hidden');
   gameInstructions.classList.toggle('hidden');
   playButton.classList.toggle('hidden');
   gameInfo.classList.toggle('hidden');
   
});





