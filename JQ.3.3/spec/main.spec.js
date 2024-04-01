let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

//read in the html file
let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let javascript = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');

let dom = new JSDOM(html);

// Set window and document from jsdom
let { window } = dom;
let { document } = window;
// Also set global window and document before requiring jQuery
global.window = window;
global.document = document;

$ = global.jQuery = require( 'jquery' )

eval(javascript);

describe("Requirements", function() {
  it("First name error should be displayed if there is no first name entered", function() {
    // Failure message: 
    // The user didn't enter any info in the text fields. Expected output -> "First name is required"
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phone").val("");

    $("#submitButton").click();

    expect($("#output").text().toUpperCase()).toBe("First name is required".toUpperCase());
  });
  it("Last name error should be displayed if there is no last name entered", function() {
    // Failure message: 
    // The user entered info in the first name text field but not the last name text field. Expected output -> "Last name is required"
    $("#firstName").val("John");
    $("#lastName").val("");
    $("#phone").val("");

    $("#submitButton").click();

    expect($("#output").text().toUpperCase()).toBe("Last name is required".toUpperCase());
  });
  it("Phone number error should be displayed if there is no phone number entered", function() {
    // Failure message: 
    // The user entered info in the first name and last name text fields but not the phone number text field. Expected output -> "Phone number is required"
    $("#firstName").val("John");
    $("#lastName").val("Doe");
    $("#phone").val("");

    $("#submitButton").click();

    expect($("#output").text().toUpperCase()).toBe("Phone number is required".toUpperCase());
  });
  it("Success_message should display correctly", function() {
    // Failure message: 
    // The user entered all the valid information and didn't get the desired output. Expected output -> "Thank you John Doe. We will contact you soon at 1234567890"
    $("#firstName").val("John");
    $("#lastName").val("Doe");
    $("#phone").val("1234567890");

    $("#submitButton").click();

    expect($("#output").text().toUpperCase()).toBe("Thank you John Doe. We will contact you soon at 1234567890".toUpperCase());
  });
  it("Success_message_2 should display correctly", function() {
    // Failure message: 
    // The user entered all the valid information and didn't get the desired output. Expected output -> "Thank you Adam Stevenson. We will contact you soon at 0987654321"
    $("#firstName").val("Adam");
    $("#lastName").val("Stevenson");
    $("#phone").val("0987654321");

    $("#submitButton").click();

    expect($("#output").text().toUpperCase()).toBe("Thank you Adam Stevenson. We will contact you soon at 0987654321".toUpperCase());
  });
});