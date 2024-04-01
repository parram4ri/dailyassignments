let fs = require('fs');
let path = require('path');

//Student Code

describe("Requirements", () => {
  it("Only prices that are in stock should be added and forEach should have been used in the first problem", function() {
    // Failure message: 
    // Make sure you are using forEach and that you are only adding prices that are in stock
    let price = totalPrice();
    spyOn(shoppingCart, 'forEach').and.callThrough();
    totalPrice();

    if(price === (799.99 + 49.99 + 5.99)) {
      expect(shoppingCart.forEach).toHaveBeenCalled();
    } else {
      expect(false).toBe(true);
    }
  });
  it("Only itemNames that are in stock should be added to the array and forEach should have been used in the second problem", function() {
    // Failure message: 
    // Make sure you are using forEach and that you are creating a new array with the item names that are in stock. Make sure you PUSH to the end of the array for this test to pass.
    let inStock = inStockItems();
    spyOn(shopItems, 'forEach');
    inStockItems();

    if(inStock[0] === 'TV' && inStock[1] === 'Controller' && inStock[2] === 'Pencils' && inStock[3] === 'Game Console' && inStock[4] === 'Movie') {
      expect(shopItems.forEach).toHaveBeenCalled();
    } else {
      expect(false).toBe(true);
    }
  });
});