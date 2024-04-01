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
  it("correct_use_of_selector", function() {
    // Failure message: 
    // Make sure you are selecting the right paragraph tag using the children() selector

    // If you are a STUDENT trying to understand this line of code, I made it difficult to read cause I do not want you to do it this way. Please do not use this line in your code or else I will be sending the assignment back to you.
    let cards = $($($('#mainCardsContainer').children()[1]).children()[1]).text();

    expect(cards.toUpperCase()).toBe("Wonderful for small businesses. Scales easy! See if it's right for you!".toUpperCase());
  });
});