//--------------------------------------
// Click the file icon on the left and 
// go to the instructions first thing
//--------------------------------------

let myPerson = {
  firstname: "Jarreth",
  lastname: "Vazquez",
  age: 14,
  favfood: "pizza"
};



// ex.) Example problem
// 
// Below create a variable sum1 with the value 2 and a variable sum2 with the value 5.
// Add these two variables together and assign the value to a variable sum3

let sum1 = 2;
let sum2 = 5;
let sum3 = sum1 + sum2;
//not getting the 7 in sum3? Console it out!
console.log(`sum3 is ${sum3}`);


// 1) Demonstrate the 3 different types of variables that can be used.
// Hint: One of them is let name = 2;
// Make the name of the let variable aLet with any value
// Make the name of the const variable aConst with any value
// Make the name of the var variable aVar with any value

let aLet = 2;           
const aConst = "Hello";  
var aVar = true;        

console.log(aLet, aConst, aVar);


// Types
// 2) Assign the variable below aString to any string
// When someone says to assign they mean to put a value after the equals sign.

let aString;

let aString = "This is a string";
console.log(aString);

// 3) Assign the variable below aNumber to any number

let aNumber;
let aNumber = 25;
console.log(aNumber);


// 4) Assign the variable below aBool to any boolean value

let aBool;
let aBool = false;
console.log(aBool);


// Operations
// 5) Add two numbers together. Assign firstNumber 5 and secondNumber 30.
// Add those two variables together and assign it to addedNumbers
let firstNumber = 5;
let secondNumber = 30;
let addedNumbers = firstNumber + secondNumber;

console.log(addedNumbers); 


//6) Add two strings together. Assign firstString 'Hello ' and secondString 'World'
// Add those two variables together and assign it to addedStrings
let firstString = "Hello ";
let secondString = "World";
let addedStrings = firstString + secondString;

console.log(addedStrings);  

//7) Below is a variable that is set to true. Flip it to false using the not operator and assign
// it to lieDetector

let iHaveMillions = true;
let lieDetector = !iHaveMillions;

console.log(lieDetector);  
