let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let document;

describe("Requirements", function() {
  beforeEach(() => {
    dom = new JSDOM(html, {runScripts: 'dangerously'});
    document = dom.window.document;
  });
  it("Should have at least 3 paragraph tags", function() {
    // Failure message: 
    // You do not have at least 3 paragraph tags
    var p = document.getElementsByTagName("p");
    expect(p.length > 2).toBe(true);
  });
  it("Should have a heading tag", function() {
    // Failure message: 
    // You do not have a heading tag
    var heading = document.getElementsByTagName("h1");
    expect(heading.length > 0).toBe(true);
  });
  it("Should have at least 3 span tags", function() {
    // Failure message: 
    // You do not have at least 3 span tags
    var span = document.getElementsByTagName("span");
    expect(span.length > 2).toBe(true);
  });
  it("Should have a horizontal line tag", function() {
    // Failure message: 
    // Must have a horizontal line on the page
    var hr = document.getElementsByTagName("hr");
    expect(hr.length > 0).toBe(true);
  });
});