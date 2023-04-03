
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const restart = document.getElementById("restartGame");
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let playerImage = document.getElementById("playerImage");
let computerImage = document.getElementById("computerImage");

let playerPoints = 0;
let computerPoints = 0;

//Shouldnt need editing?
function GetComputerChoice(){

    const rndInt = Math.floor(Math.random() * 3) + 1
    let computerChoice = "";
    if(rndInt==1){
        computerChoice = "rock";
        computerImage.src = "rock.png";
    }
    if(rndInt==2){
        computerChoice = "paper";
        computerImage.src = "paper.png";
    }
    if(rndInt==3){
        computerChoice = "scissors";
        computerImage.src = "scissors.png";
    }
    return computerChoice;
}

function PlayRound(playerChoice){
const computerChoice = GetComputerChoice();

if(playerChoice===computerChoice){
  //needs rework, need to paint "draw" on screen
  console.log("draw!");
}
else if((playerChoice==="rock" && computerChoice==="scissors")||
      (playerChoice==="paper" && computerChoice==="rock")||
      (playerChoice==="scissors" && computerChoice==="paper")){
      playerPoints++;
      playerScore.textContent = "Player: " + playerPoints;
}
else{
  computerPoints++;
  computerScore.textContent = "Computer: " + computerPoints;
}

}

//needs building
function restartGame(){
  playerPoints=0;
  computerPoints=0;
  computerScore.textContent = "Computer: " + computerPoints;
  playerScore.textContent = "Player: " + playerPoints;
  playerImage.src="question.png";
  computerImage.src="question.png";
}


//causes playround to fire on click

  rock.addEventListener('click', () => {
    if(playerPoints === 5 || computerPoints === 5){
      return null;
    }
    PlayRound("rock");
    playerImage.src = "rock.png"
  });
  paper.addEventListener('click', () => {
    if(playerPoints === 5 || computerPoints === 5){
      return null;
    }
    PlayRound("paper");
    playerImage.src = "paper.png"
  });
  scissors.addEventListener('click', () => {
    if(playerPoints === 5 || computerPoints === 5){
      return null;
    }
    PlayRound("scissors");
    playerImage.src = "scissors.png"
  });



//restarts game on click
restart.addEventListener("click",() =>{
  restartGame()
});













/*
game
while no winner
listen for click
on click (rock, paper or buton)
get computerChoice
compare user choice to computer choice
decide round winner
when player or computer gets 5 wins
print winner
ask to restart
*/




/*


listen to rock, paper, scissors
if buttonpress on any of them
take the word rock, paper or scissors based on which button pressed

function PlayerSelection() {
    let playerChoice;
  
    
    rock.addEventListener('click', () => {
      playerChoice = 'rock';
      console.log(playerChoice);
      return playerChoice
    });
  
    
    paper.addEventListener('click', () => {
      playerChoice = 'paper';
      console.log(playerChoice);
      return playerChoice
    });
  
   
    scissors.addEventListener('click', () => {
      playerChoice = 'scissors';
      console.log(playerChoice);
      return playerChoice
    });
  
    return playerChoice
  }

function PlayRound(playerChoice, computerSelection) {
    console.log("Player chose " + playerChoice + " and the computer chose " + computerSelection)
    if(playerChoice===computerSelection){
        return "Even!";
    }
    else if((playerChoice==="rock" && computerSelection==="scissors")||
            (playerChoice==="paper" && computerSelection==="rock")||
            (playerChoice==="scissors" && computerSelection==="paper")){
                playerPoints++;
        return "Player won!"
    }
    else{
        computerPoints++;
        return "Computer won!"
    }
  }



  function Game(){
  
    while (true){
        if(playerPoints>4||computerPoints>4){
            break;
        }
        
        let playerChoice = PlayerSelection();
        if(playerChoice!=="rock" && playerChoice!=="paper" && playerChoice!=="scissors"){
            break;
            
        }
        else{
        let computerSelection = GetComputerChoice();
        console.log(PlayRound(playerChoice, computerSelection));
        console.log("The score is currently: " + playerPoints + " to " + computerPoints);
        }
        
        
    }
    return "Game ended with a score of " + playerPoints + " to " + computerPoints;
    }
  
 
console.log(Game());

*/
