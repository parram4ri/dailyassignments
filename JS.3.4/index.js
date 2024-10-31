// Problem 1
// Function to calculate the area of a circle based on the radius
function circleArea(radius) {
  return 3.14 * radius * radius; // area = π * r^2
}

console.log(circleArea(5));


// Problem 2
// Function to calculate the circumference of a circle based on the radius
function circleCircumference(radius) {
  return 2 * 3.14 * radius; 
}

console.log(circleCircumference(5)); 


// Problem 3
// Function to calculate the average of three numbers
function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3; // average = (sum of numbers) / 3
}

console.log(average(10, 20, 30)); 


// Problem 4
// Function to combine two strings and return the result
function combineTwoStrings(str1, str2) {
  return str1 + str2; // Concatenates str1 and str2
}

console.log(combineTwoStrings("Hello, ", "world!")); 


// Problem 5
// Function to return the cube of a given number
function cubed(num) {
  return num * num * num; 
}

console.log(cubed(3)); 


// Problem 6
// Function to return the square of a given number
function squared(num) {
  return num * num;
}

console.log(squared(4));


// Problem 7
// Function to calculate the surface area of a sphere
function sphereArea(radius) {
  return 4 * 3.14 * squared(radius); 
}

console.log(sphereArea(5));

