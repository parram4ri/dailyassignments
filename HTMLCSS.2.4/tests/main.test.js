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
  it("Should have a nav element wrapping the 3 'a' tags", function() {
    // Failure message: 
    // Make sure you have the nav element wrapping the 3 a tags
    let nav = document.getElementsByTagName("nav");
    let aTag = 0;
    if(nav.length > 0) {
      if(nav[0].children.length > 0) {
        for(let i = 0; i < nav[0].children.length; i++) {
          if(nav[0].children[i].localName === "a") {
            aTag++;
          }
        }
      }
    }

    expect(aTag).toBe(3);
  });
  it("Should have a large container that wraps 3 smaller containers. The 3 smaller containers should wrap an individual blog post.", function() {
    // Failure message: 
    // You need a large container that wraps the 3 smaller containers wrapping the blog posts. Make sure you also have those 3 smaller containers wrapping the blog posts.
    let div = document.getElementsByTagName("div");
    let divCount = 0;
    if(div.length > 0) {
      for(let i = 0; i < div.length; i++) {
        if(div[i].children.length > 0) {
          for(let j = 0; j < div[i].children.length; j++) {
            if(div[i].children[j].localName === "div") {
              divCount++;
            }
          }
          if(divCount < 3) {
            divCount = 0;
          }
        }
      }
    }

    expect(divCount).toBe(3);
  });
});