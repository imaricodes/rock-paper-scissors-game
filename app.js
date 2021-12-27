let playerSelection = function () {
    let btns = document.querySelectorAll('#pickRock, #pickPaper, #pickScissors');

for (i of btns) {
    i.addEventListener('click', function(e) {
      // let humanTurnResult = {
      //   player: 'Human',
      //   choice: `${e.target.id}`,
      //   code: Number(i)}
      
    
      
      if  (e.target.id === "pickPaper"){
        document.getElementById("pickScissors").remove();
        document.getElementById("pickRock").remove();
        //document.getElementById("pickPaper").remove();
        console.log(btns);
        console.log("choice made");
        }
            }        
  );
  }  
}






//***** computerPlay() returns random computer play *****//

let computerSelection = function computerPlay(){
    const choicesArray = ["rock", "paper", "scissors"]
    return choicesArray[Math.floor(Math.random()*choicesArray.length)]

}

//***** playerSelection() returns player chioce.. for now player selection is typed

// let playerSelection = function () {
//     //return prompt("enter choice");
//     function check(){console.log("rock") }; 
//     document.getElementById("player-btn").addEventListener('click', check);
//     //return "rock";
// }


//***** playRound *****//

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection ==="scissors") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return "player";
    } 
    else if (playerSelection === "rock" && computerSelection ==="paper"){
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return "computer";
    }

    else if (playerSelection === "paper" && computerSelection ==="rock") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return "player";
    }

    else if (playerSelection === "paper" && computerSelection ==="scissors") {
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return "computer";
    }
    else if (playerSelection === "scissors" && computerSelection ==="rock") {
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return "computer";
    }

    else if (playerSelection === "scissors" && computerSelection ==="paper") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return "player";
    }

    else {
        //console.log (playerSelection + " " + computerSelection + " " + "tie")}
        return "tie";
        }
    }

function game () {
    
    let rounds = []; //temporary
    let playerScore = 0;
    let computerScore = 0;
    
    for (let index = 0; index < 5; index++) {
        let round = playRound(playerSelection(),computerSelection());

        if (round === "player") {
            playerScore += 1;
        } else if (round === "computer") {
            computerScore += 1;
        }
        
        console.log(`Player score is ${playerScore}`);
        console.log(`Computer score is ${computerScore}`);
        rounds.push(round); //temporary       
    }
    
    if (computerScore > playerScore) {
        console.log("Computer wins")
    } else if (computerScore < playerScore ){
        console.log("Player wins")
    } else {
            console.log("It's a tie")
        }

        console.log(rounds); //temporary
}


function startGame(){
    let start = document.getElementById("play").addEventListener('click', playerSelection);
}






startGame();





