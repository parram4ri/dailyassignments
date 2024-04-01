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
  it("Counter_should_go_up", function() {
    // Failure message: 
    // When a user hovers over #hover make sure the counter is going up by one
    let counter = document.getElementById("counter");
    let hover = document.getElementById("hover");

    $('#hover').mouseenter();

    expect(counter.textContent).toBe("1");
  });
  it("Counter_should_keep_going_up", function() {
    // Failure message: 
    // When the user hovers over #hover multiple time the counter should keep going up
    let counter = document.getElementById("counter");
    let hover = document.getElementById("hover");

    counter.textContent = "0";
    $("#hover").mouseenter().mouseleave().mouseenter().mouseleave().mouseenter().mouseleave().mouseenter().mouseleave();

    expect(counter.textContent).toBe("8");
  });
});