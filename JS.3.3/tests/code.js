let fs = require('fs');
let path = require('path');

//Student Code

describe("addTwoNumbers", function() {
  it("When 1 and 1 are passed into the function 2 should be the output", function() {
    // Failure message: 
    // The user didn't get the desired output. Make sure to add the two parameters together and return the sum of the two.
    expect(addTwoNumbers(1,1)).toBe(2);
  });
  it("When 3 and 4 are passed into the function 7 should be the output", function() {
    // Failure message: 
    // The user didn't get the desired output. Make sure to add the two parameters together and return the sum.
    expect(addTwoNumbers(3,4)).toBe(7);
  });
});

describe("Perimeter", function() {
  it("When 1 and 1 are passed in 4 should be the output", function() {
    // Failure message: 
    // The user didn't get the desired output. Make sure you are returning the perimeter.
    expect(perimeter(1,1)).toBe(4);
  });
  it("When 3 and 4 are passed in 14 should be the output", function() {
    // Failure message: 
    // The user didn't get the desired output. Make sure you are returning the perimeter
    expect(perimeter(3,4)).toBe(3 + 3 + 4 + 4);
  });
});

describe("Area", function() {
  it("When 1 and 1 are passed in 1 should be the output", function() {
    // Failure message: 
    // The user didn't get the desired output. Make sure you are returning the area
    expect(area(1,1)).toBe(1);
  });
  it("When 3 and 4 are passed in 12 should be the output", function() {
    // Failure message: 
    // The user didn't get the desired output. Make sure you are returning the area
    expect(area(3,4)).toBe(3*4);
  });
});

describe("helloMessage", function() {
  it("When 'Brayden' is passed in 'Hello Brayden' should be the output", function() {
    // Failure message: 
    // The user didn't get "Hello Brayden" Make sure you have the right capitalization for 'Hello' and that there is a space between the name and Hello
    expect(helloMessage('Brayden')).toBe('Hello Brayden');
  });
  it("When 'John' is passed in 'Hello John' should be the output", function() {
    // Failure message: 
    // The user didn't get "Hello John" Make sure you have the right capitalization for 'Hello' and that there is a space between the name and Hello
    expect(helloMessage('John')).toBe('Hello John');
  });
});

describe("favColor", function() {
  it("When 'blue' is passed in the output should be 'That is a great color!'", function() {
    // Failure message: 
    // The user entered blue and didn't get 'That is a great color!'
    expect(favColor('blue')).toBe('That is a great color!');
  });
  it("When 'red' is passed in the output should be 'That is a great color!'", function() {
    // Failure message: 
    // The user entered red and didn't get 'That is a great color!'
    expect(favColor('red')).toBe('That is a great color!');
  });
  it("When 'green' is passed in the output should be 'That is a great color!'", function() {
    // Failure message: 
    // The user entered green and didn't get 'That is a great color!'
    expect(favColor('green')).toBe('That is a great color!');
  });
  it("When 'yellow' is passed in the output should be 'Just like the sun!'", function() {
    // Failure message: 
    // The user entered yellow and didn't get 'Just like the sun!'
    expect(favColor('yellow')).toBe('Just like the sun!');
  });
  it("When anything else is passed in the output should be 'Great choice!'", function() {
    // Failure message: 
    // The user entered a color not mentioned and did not get 'Great choice!'
    expect(favColor('orange')).toBe('Great choice!');
  });
})