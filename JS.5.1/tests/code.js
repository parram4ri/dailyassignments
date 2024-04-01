let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", function() {
  it("myFirstArray", function() {
    // Failure message: 
    // Follow the steps closely to get the correct end result for the myFirstArray array
    expect(myFirstArray[0]).toBe(8);
  });
  it("addUp", function() {
    // Failure message: 
    // addUp did not sum up to the desired result
    if(addUp === 12) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
  it("addAgain", function() {
    // Failure message: 
    // addAgain did not sum up to the desired result
    if(addAgain === 20) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
  it("arrLength", function() {
    // Failure message: 
    // arrLength is not 10
    expect(arrLength).toBe(10)
  });
  it("length_of_newArray", function() {
    // Failure message: 
    // newArray does not have 10 items
    expect(newArray.length).toBe(10);
  });
  it("myFirstArray", function() {
    // Failure message: 
    // Follow the steps closely to get the correct end result for the myFirstArray array
    expect(myFirstArray[1]).toBe(12);
  });
});