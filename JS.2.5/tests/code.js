let fs = require('fs');
let path = require('path');

//Student Code

describe("Problem 1", function() {
  beforeEach(function() {
    addTo = undefined;
  });
  it("Be sure the loop iterates from 0 to 19.", function() {
    // Failure message: 
    // The user entered 5 and after the loop the addTo variable should be 195
    adding(5);
    expect(addTo).toBe(195);
  });
  it("Make sure you are adding the iterator(i) to addTo each loop.", function() {
    // Failure message: 
    // The user entered a number and didn't get the desire output. Make sure the previous test works then this test should pass as well.
    adding(30);
    expect(addTo).toBe(220);
  });
});

describe("Problem 2", function() {
  beforeEach(function() {
    anotherAdd = undefined;
  });
  it("Be sure the loop is starting at 20 and loops through 29", function() {
    // Failure message: 
    // The user entered 5 and after the loop the anotherAdd variable should be 250
    adding1(5);
    expect(anotherAdd).toBe(250);
  });
  it("Make sure you are adding the iterator(i) to anotherAdd each loop.", function() {
    // Failure message: 
    // The user entered a number and didn't get the desire output. Make sure the previous test works then this test should pass as well.
    adding1(25);
    expect(anotherAdd).toBe(270);
  });
});

describe("Problem 3", function() {
  beforeEach(function() {
    moreAdding = undefined;
  });
  it("Make sure you are looping from 0 to 100", function() {
    // Failure message: 
    // The user entered 5 and after the loop the moreAdding variable should be 1055
    adding2(5);
    expect(moreAdding).toBe(1055);
  });
  it("Make sure you are adding the iterator(i) to moreAdding whenever i is divisible by 5.", function() {
    // Failure message: 
    // The user entered a number and didn't get the desire output. Make sure the previous test works then this test should pass as well.
    adding2(50);
    expect(moreAdding).toBe(1100);
  });
}) 