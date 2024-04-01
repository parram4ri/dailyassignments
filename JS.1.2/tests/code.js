let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", function() {
  it("1) Should subtract the two variables to get the total distance traveled.", function() {
    // Failure message: 
    // Make sure you do the first problem so you take the two variables and subtract them from each other to get the total distance traveled
    expect(distanceTraveled).toBe(19);
  });
  it("2) Should have create values in yardWidth and yardLength. Should also have multiplied both variables to get the area.", function() {
    // Failure message: 
    // Make sure you are creating the variables and assign the area result to the yardArea variable.
    if(yardWidth === 100) {
      if(yardLength === 15) {
        expect(yardArea).toBe(100 * 15);
      } else {
        expect("yardLength").toBe(15);
      }
    } else {
      expect("yardWidth").toBe(100);
    }
  });
  it("3) Should have correct values in each heart rate variable.", function() {
    // Failure message: 
    // Make sure you are assigning the variables each the right numbers and find the average heart rate and assign the averageHeartRate that number.
    if(firstHeartRate === 60) {
      if(secondHeartRate === 63) {
        if(thirdHeartRate === 59) {
          expect(averageHeartRate).toBe((60 + 63 + 59) / 3)
        } else {
          expect("thirdHeartRate").toBe(59);
        }
      } else {
        expect("secondHeartRate").toBe(63)
      }
    } else {
      expect("firstHeartRate").toBe(60);
    }
  });
  it("4) The end result should be 20", function() {
    // Failure message: 
    // Make sure you add parenthesis to the expression so the end result will be 20
    expect(result).toBe(20);
  });
  it("4) The end result should be 60", function() {
    // Failure message: 
    // Make sure you add parenthesis to the expression so the end result will be 60
    expect(result2).toBe(60);
  });
});