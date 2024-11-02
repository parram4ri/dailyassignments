// Random word selection
function randomWords() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money', 'cat', 'make'];
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}
let theWord = randomWords();

let wordDisplay = Array(theWord.length).fill('_').join(' '); 
let wrongGuesses = [];
let maxTries = 6; 
let remainingTries = maxTries;
let guessedLetters = [];
let gameWon = false;

while (remainingTries > 0 && !gameWon) {
    let userDisplay = `Gameboard: ${wordDisplay}\nTries left: ${remainingTries}\nWrong letters guessed: ${wrongGuesses.join(', ')}\n`;
    let userGuess = prompt(userDisplay + "Guess a letter or the whole word:");

    if (userGuess === theWord) {
        alert("Congratulations! You've guessed the word correctly.");
        gameWon = true;
        break;
    }

    if (userGuess.length === 1) {
        if (guessedLetters.includes(userGuess) || wrongGuesses.includes(userGuess)) {
            alert("You've already guessed that letter. Try again.");
            continue;
        }
        
        guessedLetters.push(userGuess);

        if (theWord.includes(userGuess)) {
            let updatedDisplay = "";
            for (let i = 0; i < theWord.length; i++) {
                updatedDisplay += (theWord[i] === userGuess || guessedLetters.includes(theWord[i])) ? theWord[i] : '_';
            }
            wordDisplay = updatedDisplay.split('').join(' ');

            if (!wordDisplay.includes('_')) {
                alert("Congratulations! You've won the game.");
                gameWon = true;
                break;
            }
        } else {
            wrongGuesses.push(userGuess);
            remainingTries--;
        }
    } else {
        alert("Please guess a single letter or the entire word.");
    }
}

if (!gameWon) {
    alert(`Game over! You've run out of tries. The correct word was: "${theWord}".`);
}
