let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let document;

describe("UnitTests", function() {
  beforeEach(() => {
    dom = new JSDOM(html, {runScripts: 'dangerously'});
    document = dom.window.document;
  });
  it("Should have an unordered list", function() {
    // Failure message: 
    // You need to add an unordered list
    var ul = document.getElementsByTagName("ul");
    expect(ul.length > 0).toBe(true);
  });
  it("Should have an ordered list", function() {
    // Failure message: 
    // You need an ordered list
    var ol = document.getElementsByTagName("ol");
    expect(ol.length > 0).toBe(true);
  });
  it("Should have at least three list items inside the unordered list", function() {
    // Failure message: 
    // You need at least 3 list items inside your unordered list
    var ul = document.getElementsByTagName("ul");
    var liNum = 0;
    if(ul.length) {
      for(var i = 0; i < ul[0].children.length; i++) {
        if(ul[0].children[i].localName === "li") {
          liNum++;
        }
      }
    }
    expect(liNum > 2).toBe(true)
  });
  it("Should have at least three list items inside the ordered list", function() {
    // Failure message: 
    // You need at least 3 list items inside your ordered list
    var ol = document.getElementsByTagName("ol");
    var liNum = 0;
    if(ol.length) {
      for(var i = 0; i < ol[0].children.length; i++) {
        if(ol[0].children[i].localName === "li") {
          liNum++;
        }
      }
    }
    expect(liNum > 2).toBe(true)
  });
});