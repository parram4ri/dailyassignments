let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", function() {
  it("The first array should have been filtered", function() {
    // Failure message: 
    // Make sure you are using filter in the first problem and that you are filtering the array correctly
    filterMyArray();
    if(myArray[0] === 7 && myArray[1] === 8 && myArray[2] === 10 && myArray[3] === 6) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
  it("Should have used forEach and every item in the second array should have been multiplied by 5", function() {
    // Failure message: 
    // Make sure you are using forEach() and that you are changing each item to itself multiplied by 5.
    multiplyNumbers();
    spyOn(multiplyArray, 'forEach');
    multiplyNumbers();
    let testArray = [1,11,7,3,8,2,3,2,10,3,6,2,5];
    let madeIt = true;

    testArray.forEach(function(item, index) {
      if(item * 5 !== multiplyArray[index]) {
        madeIt = false;
      }
    });

    if(madeIt) {
      expect(multiplyArray.forEach).toHaveBeenCalled();
    } else {
      expect(madeIt).toBe(true);
    }
  });
});