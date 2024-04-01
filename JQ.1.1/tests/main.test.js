let fs = require('fs');
let path = require('path');

// Cheerio allows for the manipulation of a DOM using 'jquery like' code in javascript.
const cheerio = require('cherio')

//Load in the HTML
let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

//Load in the javascript
const javascript = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');

//Create the instance of cheerio
const $ = cheerio.load(html);

//Execute students code
eval(javascript);



describe("UnitTests", function() {
  it("color_is_blue", function() {
    // Failure message: 
    // Make sure you are changing the #test id to have a color of blue through jQuery
    let style = $('#test').css('color');

    expect(style).toBe('blue');
  });
});