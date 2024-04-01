let fs = require('fs');
let path = require('path');

//Student Code

describe('myCurrency', function() {
  it("Should have the correct string", function() {
    // Failure message: 
    // We did not get the desired output. Make sure you follow the instructions exactly
    if(myCurrency === 'I have €200 which is ¥23,718.09 and $218.84') {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
});

describe('companyIncome', function() {
  it("total should be january february and march all added up", function() {
    // Failure message: 
    // The total variable does not have the right number assigned to it
    if(total === companyIncome.january + companyIncome.february + companyIncome.march) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
  it("totalIncome should hold the value of january february and march all added up", function() {
    // Failure message: 
    // totalIncome in the companyIncome object is not correct
    if(companyIncome.totalIncome === companyIncome.january + companyIncome.february + companyIncome.march) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
});

describe('college', function() {
  it("The students variable does not have the correct number assigned to it.", function() {
    // Failure message: 
    // The students variable does not have the correct number assigned to it.
    if(students === college.classOf21.students + college.classOf22.students) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
});

describe('mathEquations', function() {
  it("The first variable should hold the correct value using the mathEquations object", function() {
    // Failure message: 
    // The first variable does not have the right value assigned to it
    if(first === mathEquations.pow4(7)) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
  it("The second variable should hold the correct value using the mathEquations object", function() {
    // Failure message: 
    // The second variable does not have the right value assigned to it
    if(second === mathEquations.addThree(3213,3543,12365)) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
});

describe('mathInfo', function() {
  it("The answer variable should hold the correct value using the mathInfo object", function() {
    // Failure message: 
    // The answer variable does not have the right value assigned to it.
    if(answer === mathInfo.equation.positiveExponent(5,3)) {
      expect(true).toBe(true);
    } else {
      expect(false).toBe(true);
    }
  });
});