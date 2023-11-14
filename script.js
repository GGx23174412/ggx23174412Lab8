var cpuChoice;
var playerChoice;
var result;
var playerScore = 0;
var cpuScore = 0;
var gameCount = 0;

function getCpuChoice(){
    //get random number between 0 and 2 - 0 is rock, 1 is papper, 3 is scissors
    randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        cpuChoice = "rock";
    }else if(randomNumber == 1){
        cpuChoice = "papper";
    }else if(randomNumber == 2){
        cpuChoice = "scissors";
    }else{
        console.log("error obtaining random number");
    }      
}

function getPlayerChoice(){
    playerChoice = document.getElementById("formPlayer").value;
}


function computeResult(){
    if(playerChoice == cpuChoice){
        result = "Draw.";
    }else{
        if(playerChoice == "rock"){
            if(cpuChoice == "scissors"){
                result = "You win!"
            }else{
                result = "You lose!"
            }
        }else if(playerChoice == "papper"){
            if(cpuChoice == "rock"){
                result = "You win!"
            }else{
                result = "You lose!"
            }
        }else if(playerChoice == "scissors"){
            if(cpuChoice == "papper"){
                result = "You win!"
            }else{
                result = "You lose!"
            }
        }else{
            console.log("error computing result");
        }              
    }
}

function updateScore(){
    if(result == "You win!"){
        playerScore++;
    }else if(result == "You lose!"){
        cpuScore++;
    }
}

function updateElements(){
    document.getElementById("cpuChoice").innerHTML = cpuChoice;
    document.getElementById("playerChoice").innerHTML = playerChoice;
    document.getElementById("result").innerHTML = result;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("cpuScore").innerHTML = cpuScore;
    document.getElementById("gameCounter").innerHTML = gameCount;  
}

function playGame(){
    gameCount++;
    getCpuChoice();
    getPlayerChoice();
    computeResult();
    updateScore()
    updateElements();  
}

function resetScore(){
    gameCount = 0;
    playerChoice = "";
    cpuChoice = "";
    playerScore = 0;
    cpuScore = 0;
    result = "Press 'Shoot!' to play";
    updateElements();
}