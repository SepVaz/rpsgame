
const form = document.getElementById("playerForm")

function submitForm(event) {
    event.preventDefault();
}

form.addEventListener('submit', submitForm);

const playerNameInput = document.getElementById("playerName");

startBtn.addEventListener("click", function () {
    const playerName = playerNameInput.value.trim();

    if (playerName === "") {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("playerName", playerName);

    window.location.href = "index.html";
});


playerNameInput.addEventListener("input", function () {
    let inputValue = playerNameInput.value;
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    playerNameInput.value = inputValue;
});

