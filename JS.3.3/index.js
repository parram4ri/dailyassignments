// Problem 1
// Function that adds two numbers and returns the sum
function addTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}

console.log(addTwoNumbers(1, 1)); 


// Problem 2
// Function that calculates the perimeter of a rectangle and returns it
function perimeter(width, height) {
  let answer = width + width + height + height;
  return answer;
}

console.log(perimeter(5, 10)); 


// Problem 3
// Function that calculates the area of a rectangle and returns it
function area(width, height) {
  let answer = width * height;
  return answer;
}

console.log(area(5, 10)); 


// Problem 4
// Function that returns a greeting message with the person's name
function helloMessage(name) {
  return `Hello ${name}`;
}

console.log(helloMessage("Alice")); // 


// Problem 5
// Function that returns a response based on the color provided
function favColor(color) {
  if (color === "blue" || color === "red" || color === "green") {
    return "That is a great color!";
  } else if (color === "yellow") {
    return "Just like the sun!";
  } else {
    return "Great choice!";
  }
}

console.log(favColor("blue"));    
console.log(favColor("yellow"));  
console.log(favColor("purple"));  
