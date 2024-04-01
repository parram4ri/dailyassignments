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
  it("Should have a link to google right below the header tag", function() {
    // Failure message: 
    // You did not create a link that takes us to google right below the header tag.
    let a = document.getElementsByTagName("a");
    let worked = false;
    if(a.length > 0) {
      if(a[0].origin === "https://google.com") {
        worked = true;
      }
    }

    expect(worked).toBe(true);
  });
  it("Should have a link to gmail around the word link", function() {
    // Failure message: 
    // Must create a link to gmail on the word link
    let p = document.getElementsByTagName("p");
    let worked = false;
    if(p.length > 0) {
      for(let i = 0; i < p.length; i++) {
        if(p[i].children.length > 0) {
          for(let j = 0; j < p[i].children.length; j++) {
            if(p[i].children[j].origin === "https://gmail.com" && p[i].children[j].text === "link") {
              worked = true;
            }
          }
        }
      }
    }

    expect(worked).toBe(true);
  });
  it("Should have a link to the about page", function() {
    // Failure message: 
    // Need a link to the about page
    let a = document.getElementsByTagName("a");
    let worked = false;
    if(a.length > 0) {
      for(let i = 0; i < a.length; i++) {
        if(/about\.html$/.test(a[i].href)) {
          worked = true;
        }
      }
    }

    expect(worked).toBe(true);
  });
});