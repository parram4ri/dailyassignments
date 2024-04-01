let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

const javascript = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');

//--------------------------------
//------Insert the scripts--------
//--------------------------------

let startingIndex = html.indexOf('<script src="script.js"></script>');

//Make the html text into an array
html = html.split('');

//insert the students script in a script tag
html.splice(startingIndex, 0, `<script>${javascript}</script>\n`);

html = html.join('');

let dom;
let document;

describe("UnitTests", function() {
  beforeEach(function() {
    dom = new JSDOM(html, {runScripts: 'dangerously'});
    document = dom.window.document;
    document.getElementById("counter").textContent = '0';
    document.getElementById("hiddenContent").style.display = "none";
  });
  
  it("counter_goes_up", function() {
    // Failure message: 
    // The counter is not going up by one every click of the #button
    let button = document.getElementById("button");
    document.getElementById("counter").textContent = '0';
    document.getElementById("hiddenContent").style.display = "none";

    document.getElementById("button").click();
    document.getElementById("button").click();
    document.getElementById("button").click();
    document.getElementById("button").click();

    expect(document.getElementById("counter").textContent).toBe('4');
  });
  it("counter_goes_up", function() {
    // Failure message: 
    // The counter is not going up by one every click of the #button
    document.getElementById("counter").textContent = '0';
    document.getElementById("hiddenContent").style.display = "none";
    document.getElementById("button").click();
    document.getElementById("button").click();
    document.getElementById("button").click();
    document.getElementById("button").click();
    document.getElementById("button").click();
    document.getElementById("button").click();

    expect(document.getElementById("counter").textContent).toBe('6');
  });
  it("click_to_show", function() {
    // Failure message: 
    // The content is not display block when you click on the #button
    document.getElementById("button").click();
    let element = document.querySelector("#hiddenContent");
    let style = dom.window.getComputedStyle(element);
    expect(style.display).toBe('block');
    });
    it("click_to_hide", function() {
    // Failure message: 
    // The content is not display none when there are two clicks on the button
    document.getElementById("counter").textContent = '0';
    document.getElementById("hiddenContent").style.display = "none";
    document.getElementById("button").click();
    document.getElementById("button").click();
    let element = document.querySelector("#hiddenContent");
    let style = dom.window.getComputedStyle(element);
    expect(style.display).toBe('none');
  });
});