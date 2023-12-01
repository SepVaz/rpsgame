
const playerNameInput = document.getElementById("playerName");
const startBtn = document.getElementById("startBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");


startBtn.addEventListener("click", startGame);

rockBtn.addEventListener("click", function() {
    playGame("Rock")
});

paperBtn.addEventListener("click", function() {
    playGame("Paper")
});

scissorsBtn.addEventListener("click", function() {
    playGame("Scissors")});

function startGame() {
    const playerName = playerNameInput.value.trim();
    if (playerName === "") {
        alert("Fyll i ditt namn!");
        return;
    }
}

function playGame(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerChoice').innerText = playerChoice;
    document.getElementById('computerChoice').innerText = computerChoice;

    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('result').innerText = result;
  }


  function determineWinner(playerChoice, computerChoice) {
    const playerName = playerNameInput.value;
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      return playerName + ' vinner!';
    } else {
      return 'Datorn vinner!';
    }
  }

  const resetBtn = document.getElementById("resetBtn");

  resetBtn.addEventListener("click", function() {
    document.getElementById("playerChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("result").innerText = "";

    playerNameInput.value = "";
  });
