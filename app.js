

//***** computerPlay() returns random computer play *****//


function computerPlay () {
    
    function randomNumberGenerator (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }  

    const randomNumberGeneratorResult = randomNumberGenerator(1,3);
    
    if (randomNumberGeneratorResult === 1){
    return "rock";
    } else if (randomNumberGeneratorResult === 2){
        return "paper";}
            else if (randomNumberGeneratorResult === 3){
                return "scissors";
            }
};

const computerSelection = computerPlay();


//***** playerSelection() returns player chioce.. for now randomNumber is typed

const playerSelection = () => {
    //return prompt("enter choice");
    return "rock";
}


//***** playRound *****//

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection ==="scissors") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return "player wins";
    } 
    else if (playerSelection === "rock" && computerSelection ==="paper"){
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return "computer wins";
    }

    else if (playerSelection === "paper" && computerSelection ==="rock") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return "player wins";
    }

    else if (playerSelection === "paper" && computerSelection ==="scissors") {
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return "computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection ==="rock") {
        //console.log(playerSelection + " " + computerSelection + " " + "computer wins")
        return "computer wins";
    }

    else if (playerSelection === "scissors" && computerSelection ==="paper") {
        //console.log(playerSelection + " " + computerSelection + " " + "player wins")
        return "player wins";
    }

    else {
        return "tie";
        //console.log (playerSelection + " " + computerSelection + " " + "tie")}
        };
};

console.log(playRound(playerSelection(), computerSelection));



