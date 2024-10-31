//-----------------
// Problem 1
//-----------------

// I will give you a color through the 'color' parameter.
// We want to know if the color is either 'green' or 'yellow'.
// If it's 'green' or 'yellow', set favGreenOrYellow to true.

let favGreenOrYellow = false;
function problem1(color) {
  if (color === "green" || color === "yellow") {
    favGreenOrYellow = true;
  } else {
    favGreenOrYellow = false; // Reset to false if any other color is passed
  }
  console.log(`Favorite Green or Yellow: ${favGreenOrYellow}`);
}

//-----------------
// Problem 2
//-----------------

// We want to create a game where the user guesses what number
// the computer is thinking of between 1-100.
// I will give you a number through the 'guess' parameter.
// If the guess is greater than 0 and less than 101, validInput should be true.

let validInput = false;
function problem2(guess) {
  if (guess > 0 && guess <= 100) {
    validInput = true;
  } else {
    validInput = false; // Reset to false if guess is out of range
  }
  console.log(`Valid Input: ${validInput}`);
}


//-----------------
// Problem 3
//-----------------

// We want to test if a user enters 'green', 'yellow', '#00ff00', or '#ffff00'.
// If any of these 4 inputs are entered, set favGreenOrYellowWithHex to true.

let favGreenOrYellowWithHex = false;
function problem3(color) {
  if (color === "green" || color === "yellow" || color === "#00ff00" || color === "#ffff00") {
    favGreenOrYellowWithHex = true;
  } else {
    favGreenOrYellowWithHex = false; // Reset to false for any other input
  }
  console.log(`Favorite Green or Yellow with Hex: ${favGreenOrYellowWithHex}`);
}
