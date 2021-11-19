
// this function have 2 variable each adds points if it wins
player = 0;
computer = 0;
// if any of the point become 5 while loop become false and it breaks the loop
// while(player != 5 && computer != 5){

    // funtion which decide if player lose or win
    function playRounds(playerSelection, computerSelection){

        console.log(playerSelection, computerSelection)
        if(playerSelection === 'rock' && computerSelection === 'paper') {
            console.log('You Lose! Paper beats Rock'); 
            return computer += 1; 
        }else if(playerSelection === 'paper' && computerSelection === 'sissor'){
            console.log('You Lose! Sissor beats paper');
                return computer +=1;
        }else if(playerSelection === 'sissor' && computerSelection === 'rock') {
            console.log('You Lose! Rock beats Sissor');
            return computer +=1;    
        }else if((playerSelection === 'paper' && computerSelection === 'rock') || 
                (playerSelection === 'sissor' && computerSelection === 'paper') ||
                (playerSelection === 'rock' && computerSelection === 'sissor')){
                    console.log('You Win');
                    return player += 1;
        }else if(playerSelection === false) {
            console.error('please enter correct value!!!') 
        }else {
            console.log("It's a Draw");
        }    
    
    }
    // playerOption = String(prompt("Rock, Paper or Sissor???")).toLowerCase();



    // create function computerPlay that randomly returns r-p-s & which corresponds to 0-2
    function computerPlay (){
    randomNum = Math.floor(Math.random()*3); 
    // condition for RPS and returns the value
    return (randomNum === 0) ? 'rock'
        : (randomNum === 1) ? 'paper'
        : 'sissor';
};
let playerSelected = document.addEventListener('',function(e) {
    return e.target.value
    // console.log(e.this.value)
    // return (e.target.value === 'rock' || e.target.value === 'paper' || e.target.value === 'sissor') ? 
    // e.target.value : false;
});


    console.log(`Player point is: ${player} & computers point is: ${computer}`)

    let rock = document.querySelector('#rock-btn').
    addEventListener('click', playRounds(playerSelected(),computerPlay()));
    
    let paper = document.querySelector('#paper-btn').addEventListener('click', playRounds);
    let sissor = document.querySelector('#sissor-btn').addEventListener('click', playRounds);
    
        
    // playRounds(playerSelected(),computerPlay());
// }          


