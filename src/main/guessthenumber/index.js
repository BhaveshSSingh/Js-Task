const submit = document.getElementById("submit-btn");
const restart = document.getElementById("start-btn");
const input = document.getElementById("input");
const hint = document.getElementById("hint");
const guesses = document.getElementById("guesses");
const form = document.getElementById("form");

let guessesArr = [];
let randomNum;

// The things that should happen on page load
function onStartGame() {
  hint.textContent = "";
  guesses.textContent = "";
  guessesArr = [];
  randomNum = Math.round(Math.random() * 100);

  input.disabled = false;
  submit.disabled = false;
  restart.disabled = true;
  submit.focus();
}
// On finish of the game the other button should be focused
function onFinishGame(message) {
  hint.textContent = message;
  input.disabled = true;
  submit.disabled = true;
  restart.disabled = false;
  input.focus();
}

// For checking if input is over or under or just right
function checking(e) {
  e.preventdefault();
  const guess = +input.value;
  input.value = "";
  guessesArr.push(guess);
  guesses.textContent = `Your guesses : ${guessesArr.join(", ")}`;
  if (guess > randomNum) {
    hint.textContent = "Too High!";
  }
  if (guess < randomNum) {
    hint.textContent = "Too Low";
  } else {
    onFinishGame("You Got it! Congrats");
    return;
  }
  input.focus();
  if (guessesArr.length >= 10) {
    onFinishGame(`You lost! The number was ${randomNum}`);
  }
}

form.onAddEventListener("click", checking);
restart.addEventListener("click", onStartGame);
onStartGame();
console.log(randomNum);
