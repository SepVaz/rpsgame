let playerName = document.getElementById("playerName").value;

const startBtn = document.getElementById("startBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");


startBtn.addEventListener("click", () {
    if (playerName.trim() === '') {
        alert('Please enter your name.');
        return;
    }
})