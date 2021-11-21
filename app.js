const computerHand = document.querySelector('#computer-sign');
const playerHand = document.querySelector('#player-sign');
const message = document.querySelector('#message');

function playerPicChange(sign){
    playerHand.src = `./images/${sign}.png`;
}
function computerPicChange(sign){
    computerHand.src = `./images/${sign}.png`
}

const rock = document.querySelector('#rock-btn').addEventListener('click', function(e){
    playerPicChange(e.currentTarget.value);
    return playRounds(e.currentTarget.value, computerPlay()); 
    // currentTarget to work the button where ever i click inside the button
});
const paper = document.querySelector('#paper-btn').addEventListener('click', function(e){
    playerPicChange(e.currentTarget.value);
    return playRounds(e.currentTarget.value, computerPlay());
});
const scissor = document.querySelector('#scissor-btn').addEventListener('click', function(e){
    playerPicChange(e.currentTarget.value);
    return playRounds(e.currentTarget.value, computerPlay());
});

let playerScore = 0;
let computerScore = 0;
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');

const gameOver = () => {
    if(playerScore === 5){
        reset();
        message.setAttribute('style','color: green')
        message.innerText = ' Winner !!!'
        return
    }else if(computerScore === 5){
        reset()
        message.setAttribute('style','color: red')
        message.innerText = 'You Lose!!!'
        return
    }
}
// To reset after game is over
const reset = () =>{
    computerScore = 0;
    playerScore = 0;
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

// computerPlay that randomly returns r-p-s & which corresponds to 0-2
function computerPlay(){
    randomNum = Math.floor(Math.random()*3); 
    computerPicChange(randomNum)
    // condition for RPS and returns the value
    return (randomNum === 0) ? 'rock' 
         : (randomNum === 1) ? 'paper'
         : 'scissor';
};
// funtion which decide if player lose or win
function playRounds(playerSelection, computerSelection){
    message.innerText =' ';
    gameOver()
    if(playerSelection === 'rock' && computerSelection === 'paper') {
        //   message.innerText = 'Paper beats Rock';
        return computer.textContent = ++computerScore; 
    }else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        // message.innerText = 'Sissor beats paper';
        return computer.textContent = ++computerScore; 
    }else if(playerSelection === 'scissor' && computerSelection === 'rock') {
        // message.innerText = 'Rock beats Sissor';
        return computer.textContent = ++computerScore; 
    }else if((playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissor' && computerSelection === 'paper') ||
            (playerSelection === 'rock' && computerSelection === 'scissor')){
            // message.innerText = 'You Got the point';
            return player.textContent = ++playerScore; 
    }

}

