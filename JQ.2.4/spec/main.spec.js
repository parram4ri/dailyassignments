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
  it("Should_toggle_dark_mode", function() {
    // Failure message: 
    // Make sure that when the #clickMe element is clicked that you are toggling the darkMode class on the #contentContainer
    document.getElementById("clickMe").click();
    let div = document.getElementById("contentContainer");

    expect(div.classList.contains("darkMode")).toBe(true);
  });
    it("Should_toggle_dark_mode_off", function() {
    // Failure message: 
    // When the user clicks the button when dark mode is on dark mode should toggle off.
    let div = document.getElementById("contentContainer");

    if(div.classList.contains("darkMode")) {
      div.classList.remove("darkMode");
    }

    document.getElementById("clickMe").click();
    document.getElementById("clickMe").click();

    div = document.getElementById("contentContainer");
    expect(div.classList.contains("darkMode")).toBe(false);
  });
});