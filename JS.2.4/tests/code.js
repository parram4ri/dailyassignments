let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", function() {
  beforeEach(function() {
    addTo = undefined;
  })
  it("When 1 is given to the 'myNum' parameter 46 is expected to be in the addTo variable after the for loop", function() {
    // Failure message: 
    // The user entered 1. The desired output was 46
    adding(1);

    expect(addTo).toBe(46);
  });
    it("Make sure you are adding the iterator to the addTo variable every loop", function() {
    // Failure message: 
    // The user entered a number and didn't get the desired output. Make sure the first test works then this test will pass.
    adding(54);
    let myVar = 54;
    for(let i = 0; i < 10; i++) {
      myVar+=i;
    }

    expect(addTo).toBe(myVar)
  });
});