// Problem 1
// Loop through the array of objects and add up all the prices if the item is in stock.
// Must use forEach on shoppingCart

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
  let total = 0;
  
  shoppingCart.forEach(item => {
    if (item.inStock) {
      total += item.price;
    }
  });
  
  return total; 
}


// Problem 2
// Create a new array with ONLY the name of each item that is in stock.

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
  let inStockNames = [];
  
  shopItems.forEach(item => {
    if (item.inStock) {
      inStockNames.push(item.itemName);
    }
  });
  
  return inStockNames; 
}
