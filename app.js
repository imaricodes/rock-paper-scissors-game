

//***** computerPlay() returns random computer play *****//


let computerSelection = function computerPlay () {
    
    function randomNumberGenerator (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }  

    let randomNumberGeneratorResult = randomNumberGenerator(1,3);
    
    if (randomNumberGeneratorResult === 1){
    return "rock";
    } else if (randomNumberGeneratorResult === 2){
        return "paper";}
            else if (randomNumberGeneratorResult === 3){
                return "scissors";
            }
};

//***** playerSelection() returns player chioce.. for now randomNumber is typed

let playerSelection = function () {
    //return prompt("enter choice");
    return "rock";
}


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

game();





