let fs = require('fs');
let path = require('path');

//Student Code

describe("person", function() {
  it("name should be 'John'", function() {
    // Failure message: 
    // The persons name is not John
    expect(person.name).toBe('John');
  });
  it("age should be 23", function() {
    // Failure message: 
    // The persons age is not 23
    expect(person.age).toBe(23);
  });
  it("height should be '5 feet 11 inches'", function() {
    // Failure message: 
    // The persons height is not '5 feet 11 inches'
    expect(person.height).toBe('5 feet 11 inches');
  });
});

describe("themePark", function() {
  it("rollerCoasters should be 8", function() {
    // Failure message: 
    // The theme parks rollerCoasters is not 8
    expect(themePark.rollerCoasters).toBe(8);
  });
  it("kidFriendlyRides should be 11", function() {
    // Failure message: 
    // The theme parks kidFriendlyRides is not 11
    expect(themePark.kidFriendlyRides).toBe(11);
  });
    it("shows should be 3", function() {
    // Failure message: 
    // The theme parks shows is not 3
    expect(themePark.shows).toBe(3);
  });
    it("churroStands should be 40", function() {
    // Failure message: 
    // The theme parks churroStands are not set to 40
    expect(themePark.churroStands).toBe(40);
  });
});

describe("fastFood", function() {
  it("burgers should be true", function() {
    // Failure message: 
    // The fast food burgers are not set to true
    expect(fastFood.burgers).toBe(true);
  });
  it("fries should be true", function() {
    // Failure message: 
    // The fast food fries are not set to true
    expect(fastFood.fries).toBe(true);
  });
  it("iceCreamMachineBroken should be true", function() {
    // Failure message: 
    // The fast food iceCreamMachineBroken is not set to true
    expect(fastFood.iceCreamMachineBroken).toBe(true);
  });
  it("orangeSoda should be false", function() {
    // Failure message: 
    // The fast food orangeSoda is not set to false
    expect(fastFood.orangeSoda).toBe(false);
  });
});

describe("mathHelp", function() {
  it("Passed in 5 to the squared function. Should return 25", function() {
    // Failure message: 
    // Your squared function in the math help object does not seem to be working right. Take a look at it.
    expect(mathHelp.squared(5)).toBe(25);
  });
  it("Passed in 3 to the squared function. Should return 9", function() {
    // Failure message: 
    // Your squared function in the math help object does not seem to be working right. Take a look at it.
    expect(mathHelp.squared(3)).toBe(9);
  });
  it("Passed in 40 to the toCelsius function. Should return 4.4444", function() {
    // Failure message: 
    // Your toCelsius function in the math help object does not seem to be working right. Take a look at it.
    expect(mathHelp.toCelsius(40)).toBe((40 - 32) * (5/9));
  });
  it("Passed in 55 to the toCelsius function. Should return 12.7777", function() {
    // Failure message: 
    // Your toCelsius function in the math help object does not seem to be working right. Take a look at it.
    expect(mathHelp.toCelsius(55)).toBe((55-32) * (5/9));
  });
  it("Passed in 3,4,4,3 to the distanceBetweenTwoPoints function. Expected 1.41421356237 to be returned", function() {
    // Failure message: 
    // Your distanceBetweenTwoPoints function in the math help does not see to be working right. Take a look at it.
    expect(mathHelp.distanceBetweenTwoPoints(3,4,4,3)).toBe(Math.sqrt(2))
  });
  it("Passed in 7,2,8,9 to the distanceBetweenTwoPoints function. Expected 7.07106781187 to be returned", function() {
    // Failure message: 
    // Your distanceBetweenTwoPoints function in the math help does not see to be working right. Take a look at it.
    expect(mathHelp.distanceBetweenTwoPoints(7,2,8,9)).toBe(Math.sqrt(50));
  });
});