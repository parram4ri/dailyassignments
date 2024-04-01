// Go to the instructions file first!!

//-----------------
// Problem 1
//-----------------

// I will give you a color through the 'color' parameter.
// We want to know if the color is either 'green' or 'yellow'.
// If its 'green' or 'yellow' have favGreenOrYellow be true.

let favGreenOrYellow = false;
function problem1(color) {
  //write code here
  if(color == "green" || color == "yellow") favGreenOrYellow = true;
  
  
}

//-----------------
// Problem 2
//-----------------

// We want to create a game where the user guesses what number
// the computer is thinking of between 1-100.
// I will give you a number through the 'guess' parameter.
// We need to first test to make sure the 'guess' is a valid number.
// If the guess is greater than 0 and less than 101 then our 
// validInput variable should be true.

let validInput = false;
function problem2(guess) {
  //write code here
  if(guess > 0 && guess <= 100) validInput = true;
  
}


//-----------------
// Problem 3
//-----------------

// Similar to problem 1 we are going to test if a user enters 'green' or 'yellow'
// as their favorite color. We also want to test if they enter the 
// hex code for green('#00ff00') or yellow('#ffff00'). If any of these 4 inputs
// are entered then we want our favGreenOrYellowWithHex variable to be true.
// The input will be given through the 'color' parameter.

let favGreenOrYellowWithHex = false;
function problem3(color) {
  //write code here
  if(color == "yellow" || color == "#ffff00" || color == "green" || color == "#00ff00"){
    favGreenOrYellowWithHex = true;
  }
}