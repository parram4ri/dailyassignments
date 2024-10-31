// Problem 1
// Create a string in myCurrency using the currency object.

let currency = {
  usd: '$',
  euro: '€',
  yen: '¥'
};

let myCurrency = `I have ${currency.euro}200 which is ${currency.yen}23,718.09 and ${currency.usd}218.84`;


// Problem 2
// Calculate the total income and update the totalIncome property in the companyIncome object.

let companyIncome = {
  january: 987423,
  february: 932482,
  march: 3249834,
  totalIncome: 4357346
};

let total = companyIncome.january + companyIncome.february + companyIncome.march;
companyIncome.totalIncome = total;


// Problem 3
// Sum up the students in each class and assign it to the students variable.

let college = {
  students: 23432,
  classOf21: {
    students: 8134,
    averageTuition: 28563
  },
  classOf22: {
    students: 10238,
    averageTuition: 22759
  },
  graduationRatePercent: 70 
};

let students = college.classOf21.students + college.classOf22.students;


// Problem 4
// Use mathEquations object functions to assign values to first and second variables.

let mathEquations = {
  addTwo: function(a,b) {
    return a + b;
  },
  addThree: function(a,b,c) {
    return a + b + c;
  },
  pow4: function(num) {
    return num * num * num * num;
  }
};

let first = mathEquations.pow4(7);
let second = mathEquations.addThree(3213, 3543, 12365);


// Problem 5
// Use positiveExponent function from mathInfo to calculate 5^3 and assign it to answer.

let mathInfo = {
  exponent: 'a quantity representing the power to which a given number or expression is to be raised, usually expressed as a raised symbol beside the number or expression',
  logarithm: 'a quantity representing the power to which a fixed number (the base) must be raised to produce a given number.',
  equation: {
    positiveExponent: function(base, power) {
      let total = base;
      for(let i = 1; i < power; i++) {
        total *= base;
      }
      return total;
    }
  }
};

let answer = mathInfo.equation.positiveExponent(5, 3);
