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
  it("The #nav element should have a fixed position", function() {
    // Failure message: 
    // Make sure the #nav element is position fixed in the CSS
    const nav = document.querySelector('#nav');
    const style = dom.window.getComputedStyle(nav);

    expect(style.position).toBe('fixed');
  });
  it("#firstBox should have a position of absolute and a top of 0", function() {
    // Failure message: 
    // Make sure you have the #firstBox with a position absolute and a top of 0
    const firstBox = document.querySelector('#firstBox');
    const style = dom.window.getComputedStyle(firstBox);

    expect(style.position).toBe('absolute');
  });
  it("#secondBox should be positioned absolute and #relativeParent should be positioned relative", function() {
    // Failure message: 
    // Make sure you have the #secondBox positioned absolute with a top of 0 and that the #relativeParent is position relative
    const secondBox = document.querySelector('#secondBox');
    const styleChild = dom.window.getComputedStyle(secondBox);

    expect(styleChild.position).toBe('absolute');
  });
  it("The #nav element should have a z-index of 2", function() {
    // Failure message: 
    // Make sure you have a z-index of 2 on the #nav element
    const nav = document.querySelector('#nav');
    const style = dom.window.getComputedStyle(nav);

    expect(style.zIndex).toBe('2');
  });
  it("The top of #firstBox should be 0", function() {
    // Failure message: 
    // Make sure the top of #firstBox is set to 0
    const firstBox = document.querySelector('#firstBox');
    const style = dom.window.getComputedStyle(firstBox);

    expect(style.top).toBe('0px');
  });
  it("The top of #secondBox should be 0", function() {
    // Failure message: 
    // Make sure the top of #secondBox is set to 0
    const secondBox = document.querySelector('#secondBox');
    const styleChild = dom.window.getComputedStyle(secondBox);

    expect(styleChild.top).toBe('0px');
  });
  it("The #relativeParent should be relatively positioned", function() {
    // Failure message: 
    // Make Sure the #relativeParent is relatively positioned
    const relativeParent = document.querySelector('#relativeParent');
    const styleParent = dom.window.getComputedStyle(relativeParent);

    expect(styleParent.position).toBe('relative');
  });
});