// Problem 1
// Below we have a currency object.
// Create a string in myCurrency using this object that says:
// 'I have (insert euro here)200 which is (insert yen here)23,718.09 and (insert usd here)218.84'

let currency = {
  usd: '$',
  euro: '€',
  yen: '¥'
};

let myCurrency;


// Problem 2
// We have a very successful company with the incomes of three months below.
// Our total income value is not right.
// Add all the months incomes together into the total variable
// Then reassign the totalIncome value in the companyIncome object with 
// the total variable.
// Note: Do not copy any paste the numbers. Access each number individually through
// the object.

let companyIncome = {
  january: 987423,
  february: 932482,
  march: 3249834,
  totalIncome: 4357346
};

let total;


// Problem 3
// Here we have a college object with some info about each graduating class
// in the next couple of years.
// Practice accessing an object within an object.
// Add the students in each class together into the students variable.

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

let students;


// Problem 4
// Here we have a mathEquations object
// in our 'first' variable use the pow4 function for the number 7
// in our 'second' variable use the addThree function for 3213,3543 and 12365

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

let first;
let second;


// Problem 5
// Use our positiveExponent function and assign the value to the answer variable
// Use the values 5 as the base and 3 as the power.

let mathInfo = {
  exponent: 'a quantity representing the power to which a given number or expression is to be raised, usually expressed as a raised symbol beside the number or expression',
  logarithm: 'a quantity representing the power to which a fixed number (the base) must be raised to produce a given number.',
  equation: {
    positiveExponent: function(base, power) {
      let total = base;
      for(let i = 1; i < power; i++) {
        total*=base;
      }
      return total;
    }
  }
};

let answer;