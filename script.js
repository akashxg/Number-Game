// getting element info
const button = document.getElementById("buttonGuess");
var input = document.getElementById("guess");
const secretNumber = Math.floor(Math.random() * 100);
const resetButton = document.createElement("BUTTON");
let guessCount =  0;

// used when user enters more than 10 guesses
setGameOver = () => {
  input.disabled = true;
  button.disabled = true;
  resetButton.textContent = "Try Again";
  document.body.appendChild(resetButton);
  resetGame.addEventListener("click", resetGame());
}

// resets the game
resetGame = () => {
  guessCount = 0;
  var resetResult = document.querySelectorAll('resultField');
  for (var i=0, len=resetResult.length; i<len; i++) {
    resetResult[i].textContent = "";
  }  
  resetButton.parentNode.removeChild(resetButton);
  input.disabled = false;
  button.disabled = false;
  input.value = "";
  prevGuesses.textContent = "";
  input.focus();
  const secretNumber = Math.floor(Math.random() * 100);
}

button.addEventListener("click", function() {
guessCount++;
document.getElementById("numOfGuesses").textContent = guessCount;
var lowOrHi = document.querySelector("#lowOrHi");
var stringGuess = Number(input.value);
var prevGuesses = document.querySelector("#prevGuesses");
prevGuesses.textContent += stringGuess + "  ";

console.log(guessCount);

if (stringGuess === secretNumber) {
  alert("That is correct! You won :-)");
  setGameOver();
  resetGame();
} else if (stringGuess > secretNumber && guessCount < 11) {
  lowOrHi.textContent = "You are too high!";
} else if (stringGuess < secretNumber && guessCount < 11) {
  lowOrHi.textContent = "You are too low!";
} else {
  lowOrHi.textContent = "Game Over!";
  setGameOver();
}

});
