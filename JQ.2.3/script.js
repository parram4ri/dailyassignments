storeItems.forEach(item => {
  let itemText = `${item.name}: $${item.price}`;
  let itemClass = item.inStock ? "inStock" : "notInStock";
 
  if (!item.inStock) {
      itemText += " Not in stock";
  }


  $("#appendToMe").append(`<p class="${itemClass}">${itemText}</p>`);
});


  
