
let theWord = "apple"; 
let gameBoard = [];
let tries = 5;
let wrongGuesses = [];
let gameIsRunning = true;

for (let i = 0; i < theWord.length; i++) {
  gameBoard.push('_');
}

function displayGameState() {
  alert(`Gameboard: ${gameBoard.join(' ')}\nTries left: ${tries}\nWrong letters guessed: ${wrongGuesses.join(', ')}`);
}

while (gameIsRunning) {
  displayGameState();
  let guess = prompt("Guess a letter or the whole word:");

  if (guess === theWord) {
    alert("Congratulations! You've guessed the word!");
    gameIsRunning = false;
    break;
  }

  if (guess.length === 1) {
    let isCorrect = false;

    for (let i = 0; i < theWord.length; i++) {
      if (theWord[i] === guess) {
        gameBoard[i] = guess;
        isCorrect = true;
      }
    }

    if (!isCorrect) {
      tries--;
      wrongGuesses.push(guess);
    }
    if (!gameBoard.includes('_')) {
      alert("Congratulations! You've guessed the word!");
      gameIsRunning = false;
    } else if (tries === 0) {
      alert(`You've run out of tries! The word was: ${theWord}`);
      gameIsRunning = false;
    }
  } else {
    alert("Please guess only a single letter or the whole word.");
  }
}
