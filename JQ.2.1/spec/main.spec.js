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

describe('Requirements', () => {
  it("has_p_tag", function() {
    // Failure message: 
    // Make sure you are appending a paragraph tag to the #appendToMe element
    let div = document.getElementById('appendToMe');
    expect(div.children[0].tagName === "P").toBeTruthy();
  });
});