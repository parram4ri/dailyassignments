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
  it("List items should have changed to Helvetica through jquery", function() {
    expect($('li').css('font-family')).toBe('Helvetica');
  });
});