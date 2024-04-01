let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", function() {
  it("1) Perimeter should be added up to the yardPerimeter variable", function() {
    // Failure message: 
    // Make sure you are adding width + width + length + length to the yardPerimeter variable.
    expect(yardPerimeter).toBe(230);
  });
  it("2) messagePerimeter variable should have the correct message.", function() {
    // Failure message: 
    // Make sure the message says exactly 'You are going to need (insert perimeter here)ft of fence' in the messagePerimeter variable
    expect(messagePerimeter.toLowerCase()).toBe('you are going to need 230ft of fence');
  });
  it("3) totalPrice variable should have the total price stored in it.", function() {
    // Failure message: 
    // Make sure you multiply the price per foot by the perimeter of the yard and set it to the totalPrice variable
    expect(totalPrice).toBe(230 * 15);
  });
});