//GLOBAL VARIABLES

let gameStats = {
    player: 0,
    computer: 0,
    round: 1
};

const playButton = document.getElementById('play-btn');

const gameButtonsContainer = document.querySelector('.game-buttons-container');

const rockPaperScissorsButtons = document.querySelectorAll(".rockPaperScissors-btn");

const gameInstructions = document.querySelector('.instructions');

const playerVsComputer = document.querySelector('.playerVsComputer-display');

const winnerDisplay = document.querySelector('.winner-display');

const nextRound = document.querySelector('.next-round-message');

const gameInfo = document.querySelector('.game-info-container');

const resetBtn = document.getElementById('reset');

//SHOW HIDE TOGGLE FUNCTIONS
function toggleGameButtons (){
    gameButtonsContainer.classList.toggle('hidden');
}

function togglePlayerVsComputerDisplay() {
    playerVsComputer.classList.toggle('hidden');
}

function toggleDisplayWinner (){
    winnerDisplay.classList.toggle('hidden');
    
}

function toggleNextRoundMessage() {
    nextRound.classList.toggle('hidden');
}


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


function updateGameStats (result){
    let playerScoreDisplay = document.querySelector('.player-score-display');
    let computerScoreDisplay = document.querySelector('.computer-score-display');

    if (result === "player wins"){
        gameStats.player += 1;
        
        playerScoreDisplay.innerHTML = gameStats.player;
      
    }
    else if (result === "computer wins"){
        gameStats.computer += 1;
       
        computerScoreDisplay.innerHTML = gameStats.computer;
    };
    
};

//should i keep these functions separate?
function advanceRoundCounter() {
    gameStats.round += 1;
    updateRoundCounterDisplay();
}

function updateRoundCounterDisplay (){
    let roundCounter = document.querySelector('.round-indicator');
    roundCounter.innerHTML =`Round: ${gameStats.round}`;
}

function checkIfGameOver() {
    if (gameStats.player || gameStats.computer === 2){
        console.log("Round ___ over!");
    }
    
};



//game played here

//all of this will be wrapped in a loop


    rockPaperScissorsButtons.forEach((button) => {
        button.addEventListener('click', (e)=> {
            let playerSelection = e.target.id;
            let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);

            console.log(gameStats.round);
            //this updates and reports score
            updateGameStats(result);
            //advanceRoundCounter();
            //updateRoundCounterDisplay();
            
            //hide game buttons
            toggleGameButtons();

            //show player and computer choices
            togglePlayerVsComputerDisplay();
            setTimeout(togglePlayerVsComputerDisplay, 2000);
            setTimeout(toggleDisplayWinner,2000);
            setTimeout(toggleDisplayWinner,4000);
            if(gameStats.round === 3) {console.log("ok here's the interruption")};
            setTimeout(toggleNextRoundMessage,4000);
            setTimeout(toggleNextRoundMessage,6000);
            setTimeout(toggleGameButtons,6000);
            setTimeout(advanceRoundCounter,6000);
            
            //check to see if play continues
            checkIfGameOver(result);
            console.log(computerSelection);
            console.log(playerSelection);
            console.log(result);
            console.log (gameStats);
                
        });
    }); 



//******* DOM FUNCTIONS *******//



// Hide play button and show default game (this happens when player clicks play button)
playButton.addEventListener('click', function(event){
    console.log('play button clicked');
    
   //hide 'play' button
   playButton.classList.toggle('hidden');
   toggleGameButtons();
   gameInfo.classList.toggle('hidden');

});


// resetBtn.addEventListener('click', function(event){
//    //pass game buttons div to var
//    console.log(gameButtonsContainer.classList);
//    gameButtonsContainer.classList.toggle('hidden');
//    gameInstructions.classList.toggle('hidden');
//    playButton.classList.toggle('hidden');
//    gameInfo.classList.toggle('hidden');
   
// });





