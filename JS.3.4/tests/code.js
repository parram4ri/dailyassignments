let fs = require('fs');
let path = require('path');

//Student Code

describe("circleArea", function() {
  it("2 was passed into the function", function() {
    // Failure message: 
    // circleArea did not return the right number. Make sure your math is right and that you have a return statement
    expect(circleArea(2)).toBe(3.14 * 2 * 2);
  });
  it("5 was passed into the function", function() {
    // Failure message: 
    // circleArea did not return the right number. Make sure your math is right and that you have a return statement
    expect(circleArea(5)).toBe(3.14 * 5 * 5);
  });
});

describe("circleCircumference", function() {
  it("2 was passed into the function", function() {
    // Failure message: 
    // circleCircumference did not return the right number. Make sure your math is right and that you have a return statement
    expect(circleCircumference(2)).toBe(2 * 3.14 * 2);
  });
  it("5 was passed into the function", function() {
    // Failure message: 
    // circleArea did not return the right number. Make sure your math is right and that you have a return statement
    expect(circleCircumference(5)).toBe(2 * 3.14 * 5);
  });
});

describe("average", function() {
  it("1,2,3 were passed into the function", function() {
    // Failure message: 
    // average did not return the right number. Make sure your math is right and that you have a return statement
    expect(average(1,2,3)).toBe((1 + 2 + 3) / 3);
  });
  it("4,7,2 were passed into the function", function() {
    // Failure message: 
    // average did not return the right number. Make sure your math is right and that you have a return statement
    expect(average(4,7,2)).toBe((4 + 7 + 2) / 3);
  });
});

describe("combineTwoStrings", function() {
  it("'Hello ' and 'Brayden' were passed into the function. Expecting 'Hello Brayden'", function() {
    // Failure message: 
    // combineTwoStrings did not return the right number. Make sure your math is right and that you have a return statement
    expect(combineTwoStrings("Hello ", "Brayden")).toBe("Hello Brayden");
  });
  it("'What ' and 'a good day' were passed into the function.", function() {
    // Failure message: 
    // combineTwoStrings did not return the right number. Make sure your math is right and that you have a return statement
    expect(combineTwoStrings("What ", "a good day")).toBe("What a good day");
  });
});

describe("cubed", function() {
  it("5 was passed into the function. Expected 125", function() {
    // Failure message: 
    // cubed did not return the right number. Make sure your math is right and that you have a return statement
    expect(cubed(5)).toBe(5 * 5 * 5);
  });
  it("9 was passed into the function", function() {
    // Failure message: 
    // cubed did not return the right number. Make sure your math is right and that you have a return statement
    expect(cubed(9)).toBe(9 * 9 * 9);
  });
});

describe("squared", function() {
  it("5 was passed into the function. Expected 25", function() {
    // Failure message: 
    // squared did not return the right number. Make sure your math is right and that you have a return statement
    expect(squared(5)).toBe(25);
  });
  it("9 was passed into the function. Expected 81", function() {
    // Failure message: 
    // squared did not return the right number. Make sure your math is right and that you have a return statement
    expect(squared(9)).toBe(81);
  });
});

describe("sphereArea", function() {
  it("5 was passed into the function", function() {
    // Failure message: 
    // sphereArea did not return the right number. Make sure your math is right and that you have a return statement
    expect(sphereArea(5)).toBe(4 * 3.14 * 5 * 5);
  });
  it("9 was passed into the function", function() {
    // Failure message: 
    // sphereArea did not return the right number. Make sure your math is right and that you have a return statement
    expect(sphereArea(9)).toBe(4 * 3.14 * 9 * 9);
  });
});