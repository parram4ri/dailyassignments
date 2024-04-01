let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", function() {
  it("The first array should have the correct items.", function() {
    // Failure message: 
    // Make sure you are only removing the last item of array1
    removeLastItem();
    if(array1[0] === 1 && array1[1] === 2 && array1[2] === 3 && array1[3] === 4 && array1[4] === 5) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
  it("Pop should have been used on the first array", function() {
    // Failure message: 
    // Looks like you are not using pop in the first problem
    spyOn(array1, 'pop');
    removeLastItem();
    expect(array1.pop).toHaveBeenCalled();
  });
  it("The second array should have the correct items", function() {
    // Failure message: 
    // Make sure you are only removing the first item of the array
    removeFirstItem();
    if(array2[0] === "Hello" && array2[1] === "World") {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
  it("Shift should have been used on the second array", function() {
    // Failure message: 
    // Looks like you are not using shift in the second problem
    spyOn(array2, 'shift');
    removeFirstItem();
    expect(array2.shift).toHaveBeenCalled();
  });
  it("The third array should have the correct items and splice should have been used", function() {
    // Failure message: 
    // Make sure you remove the correct items and are using splice

    removeItems();
    spyOn(array3, 'splice');
    removeItems();
    if(array3[0] === "well" && array3[1] === "money" && array3[2] === "hello") {
      expect(array3.splice).toHaveBeenCalled();
    } else {
      expect(false).toBe(true)
    }
  });
  it("The fourth array has the correct items and unshift should have been used", function() {
    // Failure message: 
    // Make sure you are only adding "well" and that you use unshift to do so.
    addItem();
    spyOn(array4, 'unshift');
    addItem();

    if(array4[0] === "well" && array4[1] === "hello" && array4[2] === "people") {
      expect(array4.unshift).toHaveBeenCalled();
    } else {
      expect(false).toBe(true);
    }
  });
  it("The fifth array should have the correct items and splice should have been used", function() {
    // Failure message: 
    // Make sure you are adding "power" in the correct position and that you use splice to do so.
    addMoreItem();
    spyOn(array5, 'splice');
    addMoreItem();
    if(array5[0] === "with" && array5[1] === "great" && array5[2] === "power" && array5[3] === "comes" && array5[4] === "great" && array5[5] === "responsibility") {
      expect(array5.splice).toHaveBeenCalled();
    } else {
      expect(false).toBe(true);
    }
  });
  it("The sixth array should have the correct items and push should have been used", function() {
    // Failure message: 
    // Make sure you are adding 7 to the end of the array and that you use push to it.
    addLast();
    spyOn(array6, 'push');
    addLast();
    if(array6[0] === 1 && array6[1] === 2 && array6[2] === 3 && array6[3] === 4 && array6[4] === 5 && array6[5] === 6 && array6[6] === 7) {
      expect(array6.push).toHaveBeenCalled();
    } else {
      expect(false).toBe(true);
    }
  });
});