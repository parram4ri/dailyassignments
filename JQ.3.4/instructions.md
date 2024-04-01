# A different kind of on click
There are circumstances where the usual way to use on click will not work. When I say the normal way I mean like how it is demonstrated on line 5 of the javascript file:

```javascript
$('#newButton').on('click', function() {});
```

Here we simply select our button and have a click event for anytime a user clicks on that button. Easy enough. The trick is the click event only will work IF that button is there when the page loads. After the page loads it will run through the javascript file. In the javascript file we say we want to place a click event listener on the #newButton. jQuery then goes and looks for that #newButton element and places a listener on it for click events.

In our example to the left we want to be able to add different counters when our button is clicked. In our counters we have a button for the user to click when they want the counter to go up. Your first reaction may be to write some code like so:

```javascript
$('.counterContainer').on('click', function() {
 //do something
});
```

Now this would totally work If our .counterContainer was there when the page loaded. Its not though. What would happen is our page would load and then our javascript will run. Our javascript code will see that we want a click event on all the elements that have 'counterContainer' class. It will then search the HTML to add the appropriate listeners. In this case it will not find any elements with that class so our function will never be called! Even after we click the new counter button! Once we click the new counter button we will now have the '.counterContainer' class but the javascript will not rerun to add the click event to it.

Instead what we need to do is add the listener to a parent element that IS on the page when the page first loads. Then specify that we only want to run some code when a specific element is clicked inside the parent container. This will solve our problem and is called __delegation__. You can see how we implement this on line 22 in the javascript file.

```javascript
$('#container').on('click', '.counterButton', function() {});
```

Here you can see we select the '#container' element which IS on the page when the page first loads. We then give the ON function an extra parameter which is the specific element that we are ACTUALLY interested in when it is clicked(".counterButton").

Go ahead and run the code and make sure you understand what is going on. If you have any questions ask your instructor. Click submit when you feel like you got it down. The next assignment we will give you a task that will require the same concepts to be implemented.