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
  it("#leftSide should be floated left", function() {
    // Failure message: 
    // #leftSide is not floated left
    let element = document.querySelector('#leftSide');
    let style = dom.window.getComputedStyle(element);

    expect(style.float).toBe('left');
  });
  it("#rightSide should be floated right", function() {
    // Failure message: 
    // #rightSide is not floated right
    let element = document.querySelector('#rightSide');
    let style = dom.window.getComputedStyle(element);

    expect(style.float).toBe('right');
  });
  it("Clear should be used on #problem2", function() {
    // Failure message: 
    // Problem 2 failed: Make sure you using clear on #problem2
    let element = document.querySelector('#problem2');
    let style = dom.window.getComputedStyle(element);

    expect(style.clear).toBe('both');
  });
  it("The card class should be floated", function() {
    // Failure message: 
    // The cards are not floated. Make sure you are selecting the card class.
    let element = document.querySelector('.card');
    let style = dom.window.getComputedStyle(element);

    expect(style.float === 'left' || style.float === 'right').toBe(true);
  });
  it("The cards should be centered on the page", function() {
    // Failure message: 
    // The cards are not centered on the page. Make sure you followed the instructions exactly on the final problem.
    let element = document.querySelector('#cardsContainer');
    let elementParent = document.querySelector('#problem2');
    let style = dom.window.getComputedStyle(element);
    let styleParent = dom.window.getComputedStyle(elementParent);


    expect(style.display === 'inline-block' && styleParent.textAlign === 'center').toBe(true);
  });
});