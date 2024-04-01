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
  it("prepended_element_is_a_p_tag", function() {
    // Failure message: 
    // Make sure you are not just prepending text but that you are adding "Hello world" in a paragraph tag.
    let element = $("#prependHere").children()[0];
    expect(element.tagName).toBe("P");
  });
  it("prepended_element_has_correct_text", function() {
    // Failure message: 
    // make sure you are adding "Hello world" as the text inside your prepended paragraph tag
    let element = $("#prependHere").children()[0];

    expect(element.textContent.toUpperCase()).toBe("HELLO WORLD");
  });
});