let fs = require('fs');
let path = require('path');

//Student Code



describe("Problem 1", function() {
  beforeEach(function() {
    favGreenOrYellow = false;
  });
  it("When the color is 'green' the variable should be true.", function() {
    // Failure message: 
    // The user entered green and the variable returned false
    problem1('green');
    expect(favGreenOrYellow).toBe(true);
  });
  it("When the color is 'yellow' the variable should be true", function() {
    // Failure message: 
    // The user entered yellow and the variable returned false
    problem1('yellow');
    expect(favGreenOrYellow).toBe(true);
  });
  it('When a different color is given the variable should be false', function() {
    problem1('blue');
    expect(favGreenOrYellow).toBe(false);
  });
  
  
});

describe("Problem 2", function() {
  beforeEach(function() {
    validInput = false;
  })
  it("When the guess is 1 validInput should be true.", function() {
    // Failure message: 
    // the user entered 1 and got false for validInput when it should have been true
    problem2(1);
    expect(validInput).toBe(true);
  });
  it("When the guess is between 1-100 the validInput should be true", function() {
    // Failure message: 
    // The user entered a number between 1-100 and got false as a validInput
    problem2(83);
    expect(validInput).toBe(true);
  });
  it("When the guess is 100 validInput should be true", function() {
    // Failure message: 
    // The user entered 100 and got false as a validInput
    problem2(100);
    expect(validInput).toBe(true);
  });
  it("When the guess is 101 validInput should be false", function() {
    // Failure message: 
    // The user entered 101 and got true as a valid Input
    problem2(101);
    expect(validInput).toBe(false);
  });
  it("When the guess is 0 validInput should be false", function() {
    // Failure message: 
    // The user entered 0 and got true as a valid input
    problem2(0);
    expect(validInput).toBe(false);
  });
});

describe('Problem 3', function() {
  beforeEach(function() {
    favGreenOrYellowWithHex = false;
  })
  it("When the color is 'green' the variable should be true", function() {
    // Failure message: 
    // The user entered green and got false for favGreenOrYellowWithHex when it should have been true
    problem3('green');
    expect(favGreenOrYellowWithHex).toBe(true);
  });
  it("When the color is 'yellow' the variable should be true", function() {
    // Failure message: 
    // The user entered yellow and got false for favGreenOrYellowWithHex when it should have been true
    problem3('yellow');
    expect(favGreenOrYellowWithHex).toBe(true);
  });
  it("When the color is '#00ff00' the variable should be true", function() {
    // Failure message: 
    // The user entered #00ff00 and got false for favGreenOrYellowWithHex when it should have  been true
    problem3('#00ff00');
    expect(favGreenOrYellowWithHex).toBe(true);
  });
  it("When the color is '#ffff00 the variable should be true'", function() {
    // Failure message: 
    // The user entered #ffff00 and got false for favGreenOrYellowWithHex when it should have been true
    problem3('#ffff00');
    expect(favGreenOrYellowWithHex).toBe(true);
  });
  it("When the color is a different color the variable should be false", function() {
    // Failure message: 
    // The user entered a different color and favGreenOrYellowWithHex returned true when it should have been false.
    problem3('blue');
    expect(favGreenOrYellowWithHex).toBe(false);
  });
})