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


describe('Requirements', () => {
  beforeEach(() => {
    dom = new JSDOM(html, {runScripts: 'dangerously'});
    document = dom.window.document;
  });
  it("The red box should have 20px of padding on all sides using 'padding: ....;'", function() {
      // Failure message: 
      // The red box should have 20px of padding on all sides using padding: ....;
      const redBox = document.querySelector('.redBox');
      const style = dom.window.getComputedStyle(redBox);

      expect(style.padding).toBe('20px');
  });
  it("The yellow box should have 10px of padding on top and bottom and 30px on the left and right using padding: ....;", function() {
      // Failure message: 
      // The yellow box should have 10px of padding on top and bottom and 30px on the left and right using padding: ....;
      const yellowBox = document.querySelector('.yellowBox');
      const style = dom.window.getComputedStyle(yellowBox);

      expect(style.padding).toBe('10px 30px');
    
  });
  it("The green box should have 20px of padding on the top 10px to the right 5px on the bottom and 20px to the left.", function() {
      // Failure message: 
      // The green box should have 20px of padding on the top 10px to the right 5px on the bottom and 20px to the left
      const greenBox = document.querySelector('.greenBox');
      const style = dom.window.getComputedStyle(greenBox);

      expect(style.padding).toBe('20px 10px 5px 20px');
  });
  it("Parent divs should have 20px of margin on the top and bottom with no margin to the left and right.", function() {
      // Failure message: 
      // Parent divs should have 20px of margin on the top and bottom with no margin to the left and right.
      const parent = document.querySelector('.parent');
      const style = dom.window.getComputedStyle(parent);

      expect(style.margin).toBe('20px 0px');
    
  });
  it("Yellow box should have a 1px solid black border.", function() {
      // Failure message: 
    // Yellow box needs a 1px solid black border
    const yellowBox = document.querySelector('.yellowBox');
    const style = dom.window.getComputedStyle(yellowBox);

    expect(style.border).toBe('1px solid black');
    
  });
  it("Boxes should be centered using text-align center.", function() {
    const parent = document.querySelector('.parent');
    const style = dom.window.getComputedStyle(parent);

    expect(style.textAlign).toBe('center');
    
  });
});