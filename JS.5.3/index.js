// Problem 1
// Use the filter function to create an array with numbers greater than 5 and less than 11

let myArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];
function filterMyArray() {
  myArray = myArray.filter(num => num > 5 && num < 11); 

}


// Problem 2
// Use the forEach function to multiply each item in the array by 5

let multiplyArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];

function multiplyNumbers() {
  multiplyArray.forEach((num, index, arr) => {
    arr[index] = num * 5;
  });
}
