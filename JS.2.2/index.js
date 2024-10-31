//Go to the instructions file first thing!

//--------------------
// Example Problem
//--------------------

// I will be giving you a color. You can access the color from the 'color' parameter
// If the color is 'blue' have the variable 'blueIsFavorite' be true.
// If any other color is entered have the variable 'blueIsFavorite' be false.


let blueIsFavorite = false;
function example(color) {
  //write code here
  
  if(color === "blue") {
    blueIsFavorite = true;
  } else {
    blueIsFavorite = false;
  }
  
  
  
  console.log(`blue is favorite: ${blueIsFavorite}`);
}

// Here we are running the function with "blue" being stored into the color parameter variable
example("blue");

// Here we are running the function with "yellow" being stored into the color parameter
example("yellow");



//--------------------
// Problem 1
//--------------------

// Lets do a similar problem as the example problem. 
// I will be giving you a color through the 'color' parameter. 
// If the color is 'red' have the variable 'redIsFavorite' be true.
// If any other color is entered have the variable 'redIsFavorite' be false.


let redIsFavorite = false;
function problem1(color) {
    if(color === "red") {
        redIsFavorite = true;
    } else {
        redIsFavorite = false;
    }
    console.log(`Red is favorite: ${redIsFavorite}`);
}

  




//--------------------
// Problem 2
//--------------------

// I will give you a number through the 'someNumber' parameter.
// If the number is greater than 0 assign typeNumber the string 'positive'
// If the number is 0 assign typeNumber the string 'zero'
// If the number is less than 0 assign typeNumber the string 'negative'


let typeNumber = false;
function problem2(someNumber) {

    if(someNumber > 0) {
        typeNumber = "positive";
    } else if(someNumber === 0) {
        typeNumber = "zero";
    } else {
        typeNumber = "negative";
    }
    console.log(`bigNumber: ${typeNumber}`);
}

  
//--------------------
// Problem 3
//--------------------

// I will give you a letter as a string. Either 'a', 'b', 'c', 'd', or 'f'. 
// You can access the letter through the 'grade' parameter.
// You then need to assign the correct percent respectivly to the percentGrade variable.
// '100%', '80%', '70%', '60%', '0%'.


let percentGrade;
function problem3(grade) {
  //write code here
  
    if (grade === "a") {
        percentGrade = "100%";
    } else if (grade === "b") {
        percentGrade = "80%";
    } else if (grade === "c") {
        percentGrade = "70%";
    } else if (grade === "d") {
        percentGrade = "60%";
    } else if (grade === "f") {
        percentGrade = "0%";
    } else {
        percentGrade = "Invalid grade";
    }
    console.log(`Percent Grade: ${percentGrade}`);
}
  
}
