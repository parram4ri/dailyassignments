// Problem 1
// Take the last item off of the array using .pop()

let array1 = [1, 2, 3, 4, 5, 6];
function removeLastItem() {
  array1.pop();
}


// Problem 2
// Take the first item off of the array using .shift()

let array2 = ["This", "Hello", "World"];
function removeFirstItem() {
  array2.shift(); 
}


// Problem 3
// Remove "stuff" and "ready" from the array using .splice()

let array3 = ["well", "stuff", "money", "ready", "hello"];
function removeItems() {
  array3.splice(1, 1); 
  array3.splice(2, 1); 
}


// Problem 4
// Add "well" to the beginning of the array using .unshift()

let array4 = ["hello", "people"];
function addItem() {
  array4.unshift("well"); 
}


// Problem 5
// Add "power" between "great" and "comes" using .splice()

let array5 = ["with", "great", "comes", "great", "responsibility"];
function addMoreItem() {
  array5.splice(2, 0, "power"); 
}


// Problem 6
// Add 7 to the end of the array using .push()

let array6 = [1, 2, 3, 4, 5, 6];
function addLast() {
  array6.push(7);
}
