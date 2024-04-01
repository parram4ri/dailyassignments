let fs = require('fs');
let path = require('path');

// Cheerio allows for the manipulation of a DOM using 'jquery like' code in javascript.
const cheerio = require('cheerio')

//Load in the HTML
let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

//Load in the javascript
const javascript = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');

//Create the instance of cheerio
const $ = cheerio.load(html);

//Execute students code
eval(javascript);


describe("Requirements", function() {
  it("correct_element_changed", function() {
    // Failure message: 
    // Make sure you are changing the correct element with the correct text
    // STUDENTS do not try to understand the following line. It is written in a difficult to read format because I do not want you to use this line. If this line is used in your code you will need to redo the assignment.
    let p = $($("#mainCardsContainer").children()[2]).children()[1];

    expect($(p).text().toUpperCase()).toBe("Meant for large enterprises looking for an edge.".toUpperCase());
  });
});