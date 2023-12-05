const playerNameInput = document.getElementById("playerName");



document.addEventListener('DOMContentLoaded', function() {
    const playerNameInput = document.getElementById("playerName");
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", function() {
        const playerName = playerNameInput.value.trim();

        if (playerName === "") {
            alert("Please enter your name before starting the game!");
            return;
        }

        localStorage.setItem("playerName", playerName);

        window.location.href = "index.html";
    });
});

playerNameInput.addEventListener("input", function() {
    let inputValue = playerNameInput.value;
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    playerNameInput.value = inputValue;
  });
  

 function submitForm(event){
  event.preventDefault();

  gameBtns.forEach(button => button.removeAttribute('disabled'));
} 

form.addEventListener('submit', submitForm);