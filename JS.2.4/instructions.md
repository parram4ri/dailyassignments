# For Loops
For loops are a great resource for when you want to do an operation multiple times. Instead of copying and pasting your code many times we can loop through the code to repeat itself. Here is an example of a for loop:
```javascript
let aNumber = 23;

for(let i = 0; i < 10; i++) {
   aNumber+=5
}
```

Step by step this is what is happening in the for loop:
- First we use the keyword for with parenthesis: `for()` which tells the computer we are starting a for loop
- `let i = 0;` Starts an incrementing variable called `i` starting at 0
- `i < 10;` Tells the for loop to keep looping as long as `i` is less than 10
- `i++` Tells the for loop that once it completes a loop to increment `i` by 1
- First time the loop runs it sees that 0 is less than 10 so it runs the code inside the loop (adds 5 to aNumber variable).
- Now `i` is 1 and 1 is less than 10 so it runs the code inside the loop
- It will keep doing this till `i` is 10. Then it will exit the for loop and continue on if there is any code after the for loop.

## Infinite Loops
Beware of infinite loops. Whenever you make a loop make sure that eventually the ending condition will be met. If not an infinite loop will happen and may produce undesired results. Luckily repl.it creates a safe environment and will detect if the program is stuck in an infinite loop and end the program for you. If repl.it didn't have this feature your computer would slow down significantly and the browser would possibly crash.