let computerScore = 0;
let playerScore = 0;


function computerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return computerChoice = "rock";
  } 
  else if (computerChoice === 1) {
    return computerChoice = "paper";
  } 
  else if (computerChoice === 2) {
    return computerChoice = "scissors";
  }
}  

function playerChoice() {
  let playerChoice = prompt("Do you choose rock, paper, or scissors.");
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice === "rock" && playerChoice === "rock" || computerChoice === "paper" && playerChoice === "paper" || computerChoice === "scissors" && playerChoice === "scissors"){
    console.log(`Tie! You both chose ${computerChoice}.`);
  }

  else if (computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "rock"){
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    return computerScore += 1;
  }

  else if (computerChoice === "scissors" && playerChoice === "rock" || computerChoice === "paper" && playerChoice === "scissors" || computerChoice === "rock" && playerChoice === "paper"){
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    return playerScore += 1;
  }
}

function displayScore(computerScore, playerScore) {
  console.log(`Your score: ${playerScore}`)
  console.log(`Computer score: ${computerScore}`)
}

for (let i = 1; i < 6; i++) {
  console.log(`Round: ${i}`)
  playRound(computerChoice(), playerChoice());
  displayScore(computerScore, playerScore);
}
