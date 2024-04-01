let fs = require('fs');

//Student Code

describe("Problem 1", function() {
  beforeEach(function() {
    redIsFavorite = undefined;
  })
  it("When 'red' is entered redIsFavorite should be true", function() {
    // Failure message: 
    // the user entered 'red' and redIsFavorite returned false...
    problem1("red");
    expect(redIsFavorite).toBe(true);
  });
  it("When any color besides 'red' is given redIsFavorite should be false", function() {
    // Failure message: 
    // The user entered 'blue' and redIsFavorite returned true...
    problem1('blue');
    expect(redIsFavorite).toBe(false);
  });
});

describe("Problem 2", function() {
  beforeEach(function() {
    typeNumber = undefined;
  });
  it("When a positive number is given typeNumber should hold the value of 'positive'", function() {
    // Failure message: 
    // The user entered a positive number and didn't get 'positive' in typeNumber
    problem2(100);
    expect(typeNumber).toBe('positive');
  });
  it("When a zero is given typeNumber should hold the value of 'zero'", function() {
    // Failure message: 
    // The user entered 0 and didn't get 'zero' in typeNumber
    problem2(0);
    expect(typeNumber).toBe('zero');
  });
  it("When a negative number is given typeNumber should hold the value of 'negative'", function() {
    // Failure message: 
    // The user entered a negative number and didn't get 'negative' in typeNumber
    problem2(-2);
    expect(typeNumber).toBe('negative');
  });
});

describe("Problem 3", function() {
  beforeEach(function() {
    percentGrade = undefined;
  });
  it("When 'a' is given percentGrade should hold the value of '100%'", function() {
    // Failure message: 
    // user entered 'a' and didn't get 100% in percentGrade
    problem3('a');
    expect(percentGrade).toBe('100%');
  });
  it("When 'b' is given percentGrade should hold the value of '80%'", function() {
    // Failure message: 
    // user entered 'b' and didn't get 80% in percentGrade
    problem3('b');
    expect(percentGrade).toBe('80%');
  });
  it("When 'c' is given percentGrade should hold the value of '70%'", function() {
    // Failure message: 
    // user entered 'c' and didn't get 70% in percentGrade
    problem3('c');
    expect(percentGrade).toBe('70%');
  });
  it("When 'd' is given percentGrade should hold the value of '60%'", function() {
    // Failure message: 
    // user entered 'd' and didn't get 60% in percentGrade
    problem3('d');
    expect(percentGrade).toBe('60%');
  });
  it("When 'f' is given percentGrade should hold the value of '0%'", function() {
    // Failure message: 
    // user entered 'f' and didn't get 0% in percentGrade
    problem3('f');
    expect(percentGrade).toBe('0%');
  });
});