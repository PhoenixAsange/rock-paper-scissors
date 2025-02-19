let computerScore = 0;
let playerScore = 0;

const btn = document.querySelector(".choices").addEventListener("click", (event) => {
  let playerChoice;
  if (event.target.classList.contains("rock")) {
    playerChoice = "rock"; 
  }
  else if (event.target.classList.contains("paper")) {
    playerChoice = "paper"; 
  }
  else if (event.target.classList.contains("scissors")) {
    playerChoice = "scissors"; 
  }

  displayChoice("Player", playerChoice, "choice")
  playRound(computerChoice(), playerChoice);
  displayScore(computerScore, playerScore);
});


function computerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerChoice = "rock";
  } 
  else if (computerChoice === 1) {
    computerChoice = "paper";
  } 
  else if (computerChoice === 2) {
    computerChoice = "scissors";
  }

  displayChoice("Computer", computerChoice, "choice")
  return computerChoice;
}  

function playRound(computerChoice, playerChoice) {
  if (computerChoice === "rock" && playerChoice === "rock" || computerChoice === "paper" && playerChoice === "paper" || computerChoice === "scissors" && playerChoice === "scissors"){
    displayChoice(" ", playerChoice, "tie");
  }

  else if (computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "rock"){
    displayChoice(" ", playerChoice, "lose");
    return computerScore += 1;
  }

  else if (computerChoice === "scissors" && playerChoice === "rock" || computerChoice === "paper" && playerChoice === "scissors" || computerChoice === "rock" && playerChoice === "paper"){
    displayChoice(" ", playerChoice, "win");
    return playerScore += 1;
  }
}

function displayScore(computerScore, playerScore) {
  const player = document.querySelector(".player")
  player.innerHTML = " ";
  player.append(`${playerScore}`)

  const computer = document.querySelector(".computer")
  computer.innerHTML = " ";
  computer.append(`${computerScore}`)
}

function displayChoice(player, choice, state) {
  const feedElement = document.createElement("div");
  feedElement.classList.add("feed");
  if (state === "choice")
    feedElement.textContent = `${player} chose ${choice}!`
  else if (state === "win") {
    feedElement.style.color = 'green'
    feedElement.style.fontWeight = 'bold' 
    feedElement.textContent = `You Win!`
  }
  else if (state === "lose") {
    feedElement.style.color = 'red'
    feedElement.style.fontWeight = 'bold' 
    feedElement.textContent = `You Lose!`
  }
  else
    feedElement.textContent = `Tie!`
  
  const runningElement = document.querySelector('.running');
  runningElement.appendChild(feedElement);
}


