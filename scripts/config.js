function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  configOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  configOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  errrorOutputElement.textContent = "";
  formElement.firstElementChild.classList.remove("error");

  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errrorOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
