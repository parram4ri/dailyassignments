// Problem 1
// Create a while loop that loops five times and increments 'i' each time.
let i = 0;
while (i < 5) { 
  i++; 
}
console.log(i); // i will be 5 after the loop

// Problem 2
// Create a loop that tests if 'j' is less than 5 and increments it.
// If 'j' is not less than 5, set lessThan5 to false.
let lessThan5 = true;
let j = 0;

while (lessThan5) {
  if (j < 5) {
    j++; 
  } else {
    lessThan5 = false; 
  }
}
console.log(j); 

// Problem 3
// Create a while loop that loops 'num' times, incrementing 'k' each time.
let k = 0;
function keepLooping(num) {
  let count = 0;
  while (count < num) {
    k++; 
    count++; 
  }
  console.log(k); 
}
