// create function computerPlay that randomly returns r-p-s
function computerPlay(){
    // this returns 0-2
    randomNum = Math.floor(Math.random()*3) 
    // condition for RPS and returns the value
    return (randomNum === 0) ? 'rock'
        : (randomNum === 1) ? 'paper'
        : 'sissor';
}
function playerSelected(value){
    return (value === 'rock' || value === 'paper' || value === 'sissor') ? value
            // : undefined;
            : false
            
}
// funtion which decide if player lose or win
function playRounds(playerSelection, computerSelection){
    // some condition with some logical operators
    return (playerSelection === 'rock' && computerSelection === 'paper') ?
            console.log('You Lose! Paper beats Rock')
            :(playerSelection === 'paper' && computerSelection === 'sissor') ?
            console.log('You Lose! Sissor beats paper')
            :(playerSelection === 'sissor' && computerSelection === 'rock') ?
            console.log('You Lose! Rock beats Sissor')
            :(playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'sissor' && computerSelection === 'paper') ||
            (playerSelection === 'rock' && computerSelection === 'sissor')  ?
            console.log('You Win')
            :(playerSelection === false) ?
            console.error('please enter correct value!!!') 
            : console.log("It's a Draw")
}

// prompt() for player option which receives string only
playerOption = String(prompt("Rock, Paper or Sissor???")).toLowerCase()

playRounds(playerSelected(playerOption),computerPlay())
// Make your function’s playerSelection parameter case-insensitive
// you want to return the results of this function call, not console.log() them. 
// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game 
// that keeps score and reports a winner or loser at the end. 

