
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let playerPoints = 0;
let computerPoints = 0;

//Shouldnt need editing?
function GetComputerChoice(){

    const rndInt = Math.floor(Math.random() * 3) + 1
    let computerChoice = "";
    if(rndInt==1){
        computerChoice = "rock";
    }
    if(rndInt==2){
        computerChoice = "paper";
    }
    if(rndInt==3){
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

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

function runGame(){
    while(true){
        if(playerPoints === 5 || computerPoints === 5){
            console.log("someone won!");
            break;
        }


    }
}



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
