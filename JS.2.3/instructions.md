# Logical Operators
What if we had a scenario where we wanted a variable to be true if a number was greater than 20 AND less than 30. We have an amazing tool called logical operators. You would use the double ampersand(&&) to accomplish this:

```javascript
let aNumber = 25;
let aBool = false;

if(aNumber > 20 && aNumber < 30) {
    aBool = true;
}
```

This code block will first evaluate:

`aNumber > 20`

Then evaluate:

`aNumber < 30`

Since they are both true aBool will be true. If one of those were to evaluate to false then aBool would stay false.

There is another operator which is the or(||) operator. This uses the double pipe(The pipe key is right above the enter key on your keyboard).

```javascript
let favColor = 'blue';
let favBlueOrRed = false;

if(favColor === 'blue' || favColor === 'red') {
   favBlueOrRed = true;
}
```

This will go into the if code block whether favColor is blue or red. Just one of those statements needs to be true not both.

## Important Note
It is very important that you understand that javascript looks at each side of the operator individually. Students tend to want to think information is carried over into the right side like so:

```javascript
let favColor = 'blue';
let favBlueOrRed = false;

if(favColor === 'blue' || 'red') {
   favBlueOrRed = true;
}
```

THIS WILL NOT WORK!!!

JavaScript will first evaluate `favColor === 'blue'` It will then evaluate `'red'`. It DOES NOT know that you want to compare it to favBlueOrRed. So you must compare the strings on both sides of the or.

```javascript
if(favColor === 'blue' || favColor === 'red') {
   favBlueOrRed = true;
}
```