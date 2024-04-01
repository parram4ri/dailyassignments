let fs = require('fs');
let path = require('path');

//------------------------------------------
// In order to see the students variables
// we need to add the students code to the 
// testing file.
//------------------------------------------


//Read in students js code
let studentCode;

if(fs.existsSync(path.resolve(__dirname, '../index.js'))) {
  studentCode = fs.readFileSync(path.resolve(__dirname, '../index.js'), 'utf8');
} else {
  studentCode = fs.readFileSync(path.resolve(__dirname, '../main.js'), 'utf8');
}

//Read in testing code
let testCode = fs.readFileSync(path.resolve(__dirname, 'code.js'), 'utf8');

//Get the index we want to put the students code at
let startingIndex = testCode.indexOf('//Student Code');

//Make the testCode an array to give us access to array functions
testCode = testCode.split('');

//Insert the students code into the test code
testCode.splice(startingIndex,0,`\n${studentCode}\n`);

//Make the testCode become a normal string again
testCode = testCode.join('');

//Run the tests
eval(testCode);
