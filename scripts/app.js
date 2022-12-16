let editedPlayer = 0;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const player1Button = document.getElementById("player-1-btn");
const player2Button = document.getElementById("player-2-btn");
const startButtonElement = document.getElementById("start-game");

const configOverlayElement = document.getElementById("player-details");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errrorOutputElement = document.getElementById("error-output");

const cancelButtonElement = document.getElementById("cancel-btn");

player1Button.addEventListener("click", openPlayerConfig);
player2Button.addEventListener("click", openPlayerConfig);
cancelButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startButtonElement.addEventListener("click", startGame);
