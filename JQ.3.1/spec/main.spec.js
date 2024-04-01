let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

//read in the html file
let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let javascript = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');

let dom = new JSDOM(html);

// Set window and document from jsdom
let { window } = dom;
let { document } = window;
// Also set global window and document before requiring jQuery
global.window = window;
global.document = document;

$ = global.jQuery = require( 'jquery' )

eval(javascript);

describe("Requirements", function() {
  it("Dark_mode_should_be_on_when_the_button_is_clicked", function() {
    // Failure message: 
    // The user clicked the #button but dark mode was not turned on
    let button = document.getElementById("button");
    let body = document.getElementsByTagName("body")[0];
    if(body.classList.contains('darkMode')) {
      body.classList.remove('darkMode');
    }
    button.click();
    expect(body.classList.contains('darkMode')).toBe(true);
  });
  it("Dark_mode_should_be_off", function() {
    // Failure message: 
    // The user clicked the #button a couple times and dark mode didn't turn off.
    let button = document.getElementById("button");
    let body = document.getElementsByTagName("body")[0];
    if(body.classList.contains('darkMode')) {
      body.classList.remove('darkMode');
    }
    button.click();
    button.click();
    expect(body.classList.contains('darkMode')).toBe(false);
  });
});