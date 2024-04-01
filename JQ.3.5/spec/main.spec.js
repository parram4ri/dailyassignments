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
  it("text_should_show", function() {
    // Failure message: 
    // Make sure that when you click the new button then click the toggle text button that the text shows.
    $('#container').empty();
    document.getElementById('createButton').click();
    let firstElement = $('#container').children()[0];
    $(firstElement).children()[0].click();
    let p = $(firstElement).children()[1];

    expect($(p).hasClass('noDisplay')).toBe(false);
  });
  it("Text should hide when toggle text is clicked", function() {
    // Failure message: 
    // Make sure that you are toggling the 'noDisplay' class every time the toggle text button is clicked.
    $('#container').empty();
    document.getElementById('createButton').click();
    let firstElement = $('#container').children()[0];
    $(firstElement).children()[0].click();
    $(firstElement).children()[0].click();
    let p = $(firstElement).children()[1];

    expect($(p).hasClass('noDisplay')).toBe(true);
  });
  it("When toggle text is clicked only the text next to it should be toggling", function() {
    // Failure message: 
    // Make sure that you are only toggling the individual text to display that is next to the toggle text button and not all the text on the page.
    $('#container').empty();
    document.getElementById('createButton').click();
    document.getElementById('createButton').click();
    let firstElement = $('#container').children()[0];
    let secondElement = $('#container').children()[1];
    $(firstElement).children()[0].click();
    $(secondElement).children()[0].click();
    $(secondElement).children()[0].click();
    let p1 = $(firstElement).children()[1];
    let p2 = $(secondElement).children()[1];

    expect($(p1).hasClass('noDisplay') === false && $(p2).hasClass('noDisplay') === true).toBe(true);
  });
});