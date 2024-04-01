let fs = require('fs');
let path = require('path');

//Student Code

describe('Problem 1 and 2', function() {
  it("problem_1", function() {
    // Failure message: 
    // Looks like you need to make a while loop that tests for i < 5. Make sure to increment i every loop.
    expect(i).toBe(5);
  });
  it("problem_2", function() {
    // Failure message: 
    // Looks like you need to make a while loop that tests inside the code that j < 5. Make sure you are incrementing j every time.
    expect(j).toBe(5);
  });
})

describe('Problem 3', function() {
  beforeEach(function() {
    k = 0;
  });
  it("When 1 is passed in k should increment to 1", function() {
    // Failure message: 
    // The loop didn't work as expected. Make sure you loop till the user enters 'stop'. Increment 'k' every loop by one.
    keepLooping(1);
    expect(k).toBe(1);
  });
  it("When 10 is passed in k should increment to 10", function() {
    // Failure message: 
    // The loop didn't work as expected. Make sure you loop till the user enters 'stop'. Increment 'k' every loop by one.
    keepLooping(10);
    expect(k).toBe(10);
  });
})