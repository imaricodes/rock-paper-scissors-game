


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


// HTML functions

const selectGamebuttons = document.querySelector('.game-buttons');

const playButton = document.getElementById('play');

const resetBtn = document.getElementById('reset');

playButton.addEventListener('click', function(event){
   //pass game buttons div to var
   //selectGamebuttons.classList.toggle('hidden');
   playButton.classList.toggle('hidden');
   selectGamebuttons.classList.toggle('hidden');
   
   console.log(selectGamebuttons.classList);
    console.log('Button Clicked');
});


resetBtn.addEventListener('click', function(event){
   //pass game buttons div to var
   console.log(selectGamebuttons.classList);
   selectGamebuttons.classList.toggle('hidden');
   playButton.classList.toggle('hidden');
    console.log('reset Button Clicked');
});





