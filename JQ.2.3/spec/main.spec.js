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

const storeItems = [
    {
      name: 'TV',
      price: 800.00,
      inStock: true
    },
    {
      name: 'Phone',
      price: 700.00,
      inStock: false
    },
    {
      name: 'Game Console',
      price: 300.00,
      inStock: true
    },
    {
      name: 'Laptop',
      price: 1200.00,
      inStock: true
    },
    {
      name: 'Smart Watch',
      price: 200.00,
      inStock: false
    },
    {
      name: 'Headphones',
      price: 100.00,
      inStock: true
    },
  ];

describe("Requirements", function() {
  it("Data_is_displayed_correctly", function() {
    // Failure message: 
    // Make sure you have paragraph tags with the correct data format -> 'name: $price' or 'name: $price Not in stock' when the item is not in stock.
    let div = document.getElementById('appendToMe');
    let didntWork = false;
    for(let i = 0; i < storeItems.length; i++) {
      if(storeItems[i].inStock && div.children[i].textContent.toUpperCase() !== `${storeItems[i].name}: $${storeItems[i].price}`.toUpperCase()) {
        didntWork = true;
      }

      else if(!storeItems[i].inStock && div.children[i].textContent.toUpperCase() !== `${storeItems[i].name}: $${storeItems[i].price} Not in stock`.toUpperCase()) {
        didntWork = true;
      }
    }

    expect(didntWork).toBe(false);
  });
  it("The correct classes should be on the correct paragraph tags", function() {
    // Failure message: 
    // Make sure you are putting the 'inStock' class on the elements that are in stock and the 'notInStock' class on the elements that are not in stock.
    let div = document.getElementById('appendToMe');
    let didntWork = false;

    for(let i = 0; i < storeItems.length; i++) {
      if(storeItems[i].inStock && div.children[i].className !== 'inStock') {
        didntWork = true;
      }
      else if(!storeItems[i].inStock && div.children[i].className !== 'notInStock') {
        didntWork = true;
      }
    }

    expect(didntWork).toBe(false);
  });
});