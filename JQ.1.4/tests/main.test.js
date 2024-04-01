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
  it("The correct div should have been removed", function() {
    // Failure message: 
    // Make sure you are removing the correct div
    let noPass = false;
    $('.card').each(function(){
      if($($(this).children()[0]).text() === 'Mid - $200') {
        noPass = true;
      }
    });

    expect(noPass).toBe(false);
  });
});