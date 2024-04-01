let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", function() {
  it("2) Make sure you are giving aString a value that is of type string", function() {
    // Failure message: 
    // Make sure you are giving aString a value that is of type string
    expect(typeof aString).toBe("string");
  });
  it("3) Make sure you are giving aNumber a value that is of type Number", function() {
    // Failure message: 
    // Make sure you are giving aNumber a value that is of type Number
    expect(typeof aNumber).toBe("number");
  });
  it("4) Make sure you are giving aBool a value that is of type boolean", function() {
    // Failure message: 
    // Make sure you are giving aBool a value that is of type boolean
    expect(typeof aBool).toBe("boolean");
  });
  it("5) Make sure you are assigning firstNumber 5 and secondNumber 30 and add the two variables to addedNumbers", function() {
    // Failure message: 
    // Make sure you are assigning firstNumber 5 and secondNumber 30 and add the two variables to addedNumbers
    if(firstNumber === 5) {
      if(secondNumber === 30) {
        expect(addedNumbers).toBe(35);
      } else {
        expect(secondNumber).toBe(30);
      }
    } else {
      expect(firstNumber).toBe(5);
    }
  });
  it("6) Make sure you are assigning firstString 'Hello ' (don't forget the space) and secondString 'World' and add them together into addedStrings", function() {
    // Failure message: 
    // make sure you are assigning firstString 'Hello ' (don't forget the space) and secondString 'World' and add them together into addedStrings
    if(firstString.toLowerCase() === 'hello ') {
      if(secondString.toLowerCase() === 'world') {
        expect(addedStrings.toLowerCase()).toBe('hello world');
      } else {
        expect(secondString).toBe('World');
      }
    } else {
      expect(firstString).toBe('Hello ');
    }
  });
  it("7) lieDetector_should_be_false", function() {
    // Failure message: 
    // This one is tricky. Here is an example:
    // let a = true;
    // let b = !a;
    // b is now false
    expect(lieDetector).toBe(false);
  });
});