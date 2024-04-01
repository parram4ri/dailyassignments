let fs = require('fs');
let path = require('path');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
let dom;
let document;
describe('Requirements', () => {
  beforeEach(() => {
    // Will run the html file like it is in a browser
    dom = new JSDOM(html, {runScripts: 'dangerously'});
    document = dom.window.document;
  });
  it("Should have an h1 tag", function() {
// Failure message: 
// Your page doesn't seem to have an h1 tag
var h1 = document.getElementsByTagName("h1");

expect(h1.length > 0).toBe(true);
});
it("should_have_an_h2_tag", function() {
// Failure message: 
// Your page doesn't seem to have an h2 tag
var h2 = document.getElementsByTagName("h2");

expect(h2.length > 0).toBe(true);
});
it("should_have_an_h3_tag", function() {
// Failure message: 
// Your page doesn't seem to have an h3 tag
var h3 = document.getElementsByTagName("h3");

expect(h3.length > 0).toBe(true);
});
it("should_have_an_h4_tag", function() {
// Failure message: 
// Your page doesn't seem to have an h4 tag
var h4 = document.getElementsByTagName("h4");

expect(h4.length > 0).toBe(true);
});
it("should_have_an_h5_tag", function() {
// Failure message: 
// Your page doesn't seem to have an h5 tag
var h5 = document.getElementsByTagName("h5");

expect(h5.length > 0).toBe(true);
});
it("should_have_an_h6_tag", function() {
// Failure message: 
// Your page doesn't seem to have an h6 tag
var h6 = document.getElementsByTagName("h6");

expect(h6.length > 0).toBe(true);
});
it("should_have_3_paragraph_tags", function() {
// Failure message: 
// Your page doesn't seem to have 3 separate paragraph tags displayed
var p = document.getElementsByTagName("p");

expect(p.length > 2).toBe(true);
});
});