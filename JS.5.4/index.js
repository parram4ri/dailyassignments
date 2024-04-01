// Problem 1
// Below we have an array of objects.
// Loop through the array of objects and add up all the prices if the
// item is in stock.
// Must use forEach on shoppingCart
// Have the totalPrice function return the total price
// DO NOT modify the original shoppingCart array. The tests will not pass If
// you do so.

let shoppingCart = [
    {
      itemName: "TV",
      inStock: true,
      price: 799.99,
    },
    {
      itemName: "Controller",
      inStock: true,
      price: 49.99,
    },
    {
      itemName: "Phone case",
      inStock: false,
      price: 19.99,
    },
    {
      itemName: "Pencils",
      inStock: true,
      price: 5.99,
    }
  ];

function totalPrice() {
  //write code here
  
  
}


// Problem 2
// We have an array of items in a store.
// The manager needs to know which items are in stock.
// Use forEach to loop through our array of objects.
// Create a new array with ONLY the name of each item
// that is in stock. Hint: You are going to need to 
// create a new array and PUSH each item name to the 
// end of the array.
// Do not modify the original shopItems array.
// The tests will not pass if you do so.

const shopItems = [
    {
      itemName: "TV",
      inStock: true,
      price: 799.99,
    },
    {
      itemName: "Controller",
      inStock: true,
      price: 49.99,
    },
    {
      itemName: "Phone case",
      inStock: false,
      price: 19.99,
    },
    {
      itemName: "Pencils",
      inStock: true,
      price: 5.99,
    },
    {
      itemName: "Game Console",
      inStock: true,
      price: 250.00,
    },
    {
      itemName: "Laptop",
      inStock: false,
      price: 1000.00,
    },
    {
      itemName: "Movie",
      inStock: true,
      price: 20.00,
    },
  ];

function inStockItems() {
  //write code here
  
  //return the array of in stock items
  
}