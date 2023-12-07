
const playerNameInput = document.getElementById("playerName");
const startBtn = document.getElementById("startBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn")
const storedPlayerName = localStorage.getItem("playerName");

if (storedPlayerName) {
  displayPlayerName(storedPlayerName);
}

function displayPlayerName(playerName) {
  const playerNameElement = document.getElementById("playerNameDisplay");

  if (playerNameElement) {
    playerNameElement.innerText = "Welcome, " + playerName + "!";
  }
}


rockBtn.addEventListener("click", function () {
  playGame("Rock")
});

paperBtn.addEventListener("click", function () {
  playGame("Paper")
});

scissorsBtn.addEventListener("click", function () {
  playGame("Scissors")
});



function playGame(playerChoice) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('playerChoice').innerText = ' ' + playerChoice;
  document.getElementById('computerChoice').innerText = computerChoice;

  const result = determineWinner(playerChoice, computerChoice);

  document.getElementById('result').innerText = result;

  if (result === "It's a tie!" || result === ' You win!' || result === 'Computer wins!') {
    let resultElement = document.getElementById("result")
    resultElement.classList.remove("winner-animation");
    resultElement.classList.add('winner-animation');
    setTimeout(() => {
      resultElement.classList.remove('winner-animation');
    }, 1000);
  }
}


function determineWinner(playerChoice, computerChoice) {
  const playerName = playerNameInput.value;
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return ' You win!';
  } else {
    return 'Computer wins!';
  }
}


function resetGame() {
  document.getElementById("playerChoice").innerText = "";
  document.getElementById("computerChoice").innerText = "";
  document.getElementById("result").innerText = "";
}

resetBtn.addEventListener("click", function () {
  resetGame();
});



function backHome() {
  window.location.href = "start.html"
}

const backBtn = document.getElementById("backBtn")

backBtn.addEventListener("click", function () {
  backHome()
})


