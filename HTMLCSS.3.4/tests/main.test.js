let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let document;

describe("Requirements", function() {
  beforeEach(() => {
    dom = new JSDOM(html, {runScripts: 'dangerously'});
    document = dom.window.document;
  });
  it("Make sure you create an input and label inside the div with class 'studentInputs'...If you have done that then make sure your label has a for attribute that is the same as an Id in your input", function() {
    // Failure message: 
    // Make sure you create an input and label inside the div with class 'studentInputs'
    // If you have done that then make sure your label has a for attribute that is the same as an Id in your input
    var element = document.getElementsByClassName('studentInputs');
    let hasInput = false;
    let hasLabel = false;
    let inputId = 'not';
    let labelFor = '';
    if(element[0].children) {
      for(var i = 0; i < element[0].children.length; i++) {
        if(element[0].children[i].localName === "input") {
          hasInput = true;
          inputId = element[0].children[i].id;
        }
        else if(element[0].children[i].localName === "label") {
          hasLabel = true;
          labelFor = element[0].children[i].htmlFor;
        }
      }
    }

    expect((hasInput && hasLabel) && (inputId === labelFor)).toBe(true);
  });
  it("Make sure you have a submit button at the end of the form", function() {
    // Failure message: 
    // Make sure you have a submit button at the end of the form.
    let inputs = document.getElementsByTagName('input');
    let hasSubmit = false;

    if(inputs) {
      for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].type === 'submit') {
          hasSubmit = true;
        }
      }
    }

    expect(hasSubmit).toBe(true);
  });
});