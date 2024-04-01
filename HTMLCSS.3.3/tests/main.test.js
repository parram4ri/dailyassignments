let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

//--------------------------------
//------Insert the styles--------
//--------------------------------

//read in the html file
let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
//read in the css file
let css = fs.readFileSync(path.resolve(__dirname, '../style.css'), 'utf8');
//get the index where we want to insert the style //tag
let startingIndex = html.indexOf('<link href="style.css" rel="stylesheet" type="text/css" />');
//Make the html text into an array
html = html.split('');
//insert the students styles in a style tag
html.splice(startingIndex, 0, `<style>${css}</style>\n`);
//Make the html array into a string.
html = html.join('');


let dom;
let document;

describe("Requirements", function() {
  beforeEach(() => {
    dom = new JSDOM(html, {runScripts: 'dangerously'});
    document = dom.window.document;
  });

  it("You need to implement a font from google", function() {
    // Failure message: 
    // You need to implement a font from google
    var element = document.querySelector(".myFont");
    var style = dom.window.getComputedStyle(element);

    expect(style.fontFamily != "").toBe(true);
  });
});