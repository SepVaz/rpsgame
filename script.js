
const playerNameInput = document.getElementById("playerName");
const startBtn = document.getElementById("startBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const form =  document.getElementById("playerForm")
const gameBtns = document.querySelectorAll(".gameBtns")
const resetBtn = document.getElementById("resetBtn")


rockBtn.addEventListener("click", function() {
    playGame("Rock")
});

paperBtn.addEventListener("click", function() {
    playGame("Paper")
});

scissorsBtn.addEventListener("click", function() {
    playGame("Scissors")});




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
      return "Resultat: " + 'Oavgjort';
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      return "Resultat: " + playerName + ' vinner!';
    } else {
      return "Resultat: " + 'Datorn vinner!';
    }
  }


  function resetGame() {
    document.getElementById("playerChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("result").innerText = "";

}

resetBtn.addEventListener("click", function() {

    resetGame();
});


function backHome() {
  
  window.location.href = "start.html"
}

const backBtn = document.getElementById("backBtn")

backBtn.addEventListener("click", function() {
  backHome()
})

document.addEventListener('DOMContentLoaded', function() {
  const storedPlayerName = localStorage.getItem("playerName");

  if (storedPlayerName) {
   
      displayPlayerName(storedPlayerName);
  } else {
      console.error("PlayerName not found in localStorage");
  }
});


function displayPlayerName(playerName) {
  const playerNameElement = document.getElementById("playerNameDisplay");

  if (playerNameElement) {
      playerNameElement.innerText = "Welcome, " + playerName + "!";
  } else {
      console.error("PlayerNameDisplay element not found");
  }
}