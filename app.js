

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
        return playerSelection + " " + computerSelection + " " + "player wins";
    } 
    else if (playerSelection === "rock" && computerSelection ==="paper"){
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return playerSelection + " " + computerSelection + " " + "computer wins";
    }

    else if (playerSelection === "paper" && computerSelection ==="rock") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return playerSelection + " " + computerSelection + " " + "player wins";
    }

    else if (playerSelection === "paper" && computerSelection ==="scissors") {
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return playerSelection + " " + computerSelection + " " + "computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection ==="rock") {
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return playerSelection + " " + computerSelection + " " + "computer wins";
    }

    else if (playerSelection === "scissors" && computerSelection ==="paper") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return playerSelection + " " + computerSelection + " " + "player wins";
    }

    else {
        //console.log (playerSelection + " " + computerSelection + " " + "tie")}
        return playerSelection + " " + computerSelection + " " + "tie";
        };
}

function game (){
    let rounds = [];
    for (let index = 0; index < 5; index++) {
        let round = playRound(playerSelection(),computerSelection());
        rounds.push(round);       
    }
    console.log(rounds); 
}

game();





