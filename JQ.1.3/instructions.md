# jQuery children() selector
IT IS RECOMMENDED YOU WATCH THE FOLLOWING VIDEO BEFORE DOING THIS ASSIGNMENT
This is the same video that is in canvas right before this assignment
https://drive.google.com/file/d/16UpfSOqCObZg9DzYxKTND4tBYcq6xQ6i/view?usp=sharing

If the link does not work try signing into your mtech email first (login to gmail using your canvas credentials).

There are scenarios where it won't be as easy as selecting an ID or a class to grab an element. It will be important to know how to traverse through the DOM to get to the element that you want to select.

We are going to use the HTML code in the editor as an example to help us understand how the children() selector works. As it says in its name it selects all the children of an element that you give it. For example we could get all the children of the #mainCardsContainer like so:

```javascript
let containerChildren = $('#mainCardsContainer').children();
```

This will return an array of all the __direct__ children. Meaning it will give us all the divs inside the #mainCardsContainer not the elements inside those divs (h1, p, a) because those other elements are not __direct__ children. They are grandchildren to the #mainCardsContainer.

What if instead of an array we want the last element? We can add the square brackets after calling children() and specify the index of the array we want like so:

```javascript
let containerChildren = $('#mainCardsContainer').children()[2];
```

This will return our last card element. Now what is stored in the conatinerChildren is not what you would expect. It doesn't store all the jQuery functions we know and love. If we want to do anything to that element we have to re-wrap it in the jQuery object:

```javascript
let containerChildren = $('#mainCardsContainer').children()[2];
$(containerChildren).somejQueryFunction();
```

We could even keep nesting farther into the DOM:

```javascript
let containerChildren = $('#mainCardsContainer').children()[2];
let h1 = $(containerChildren).children()[0];
$(h1).text('Pro - $1000');
```

This will go into the third card and select the h1 element and change the text to 'Pro - $1000'

## Try it yourself
The goal is to change the paragraph tag in the second .card element using the children() selector to "Wonderful for small businesses. Scales easy! See if it's right for you!" We started it for you in the javascript file.