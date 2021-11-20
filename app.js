const rock = document.querySelector('#rock-btn').addEventListener('click', function(e){
    return playRounds(e.currentTarget.value, computerPlay());
});
const paper = document.querySelector('#paper-btn').addEventListener('click', function(e){
    return playRounds(e.currentTarget.value, computerPlay());
});
const scissor = document.querySelector('#scissor-btn').addEventListener('click', function(e){
    return playRounds(e.currentTarget.value, computerPlay());
});


let playerScore = 0;
let computerScore = 0;
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
// computerPlay that randomly returns r-p-s & which corresponds to 0-2
function computerPlay(){
    randomNum = Math.floor(Math.random()*3); 
    // condition for RPS and returns the value
    return (randomNum === 0) ? 'rock'
         : (randomNum === 1) ? 'paper'
         : 'scissor';
};

// funtion which decide if player lose or win
function playRounds(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection)
        if((playerScore !== 5) || (computerScore !== 5) && !(confirm("You Won"))){
            if(playerSelection === 'rock' && computerSelection === 'paper') {
                return computer.textContent = ++computerScore; 
            }else if(playerSelection === 'paper' && computerSelection === 'scissor'){
                return computer.textContent = ++computerScore; 
            }else if(playerSelection === 'scissor' && computerSelection === 'rock') {
                return computer.textContent = ++computerScore; 
            }else if((playerSelection === 'paper' && computerSelection === 'rock') || 
                    (playerSelection === 'scissor' && computerSelection === 'paper') ||
                    (playerSelection === 'rock' && computerSelection === 'scissor')){
                return player.textContent = ++playerScore; 
            }else {
                console.log("It's a Draw");
            }
        }else{
            return reset();
        } 
}

// To reset after game is over
const reset = () =>{
    playerScore = 0;
    computerScore = 0;
    player.textContent = playerScore;
    computer.textContent = computerScore;
}
