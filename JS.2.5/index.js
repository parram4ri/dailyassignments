// Task 1: Iterate from 0 to 19, adding the iterator to addTo each loop.
let addTo;
function adding(num) {
  addTo = num;
  for (let i = 0; i < 20; i++) {
    addTo += i; 
  }
  console.log(addTo); 
}


// Task 2: Iterate from 20 to 29, adding the iterator to anotherAdd each loop.
let anotherAdd;
function adding1(num) {
  anotherAdd = num;
  for (let i = 20; i < 30; i++) { 
    anotherAdd += i;
  }
  console.log(anotherAdd); 
}


// Task 3: Add every 5th number from 0 to 100 to moreAdding.
let moreAdding;
function adding2(num) {
  moreAdding = num;
  for (let i = 0; i <= 100; i += 5) {
    moreAdding += i; 
  }
  console.log(moreAdding); 
}

