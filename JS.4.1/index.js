// Problem 1
// We want to create an object about a person.
// Give this person a name of 'John'
// Give this person an age of 23
// Give this person a height of '5 feet 11 inches'

let person = {
  name: 'John',
  age: 23,
  height: '5 feet 11 inches'
};

// Problem 2
// Lets create a themePark object
// Our theme park has 8 rollerCoasters
// 11 kidFriendlyRides
// 3 shows
// 40 churroStands

let themePark = {
  rollerCoasters: 8,
  kidFriendlyRides: 11,
  shows: 3,
  churroStands: 40
};

// Problem 3
// Lets create a fastFood object
// This object will tell us what foods are in stock
// burgers is true
// fries is true
// iceCreamMachineBroken is true
// We just ran out of orangeSoda so make it false.

let fastFood = {
  burgers: true,
  fries: true,
  iceCreamMachineBroken: true,
  orangeSoda: false
};

// Problem 4
// Lets create a mathHelp object
// Give it a function called squared that will take one parameter
// and have it return the squared number from the parameter.
// Give it a function called toCelsius.
// This function takes one parameter which will be a number in fahrenheit
// to convert to celsius. Return this number.
// Give it a function called distanceBetweenTwoPoints
// This function will take 4 parameters in this order:
// x1, y1, x2, y2
// Find the distance between the two points given and return the value.

let mathHelp = {
  squared: function(num) {
    return num * num;
  },
  
  toCelsius: function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  },
  
  distanceBetweenTwoPoints: function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
};
