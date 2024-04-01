# Self Closing Tags
Some tags we use do not need both an opening and a closing tag. They just need one tag that is self closing. An example of one of these tags would be the `<hr/>` tag. This tag creates a horizontal line across the page. Go ahead and try it out to see what it looks like by typing in this code in between the body tags:

```html
<h1>News Today</h1>
<hr/>
<p>Cold Stone just made 20 new must try ice cream flavors.</p>
```

Another self closing tag we have at our disposal is the break tag <br/>. This is a tag that will create a new line for us on the web page. This is not a very common tag that is used. The more common method to make a new line would be creating separate block level elements.

Example using the break tag:

```html
<p>This will be line 1<br/>This will be line 2</p>
```

Example using multiple block level elements:

```html
<p>This will be line 1</p>
<p>This will be line 2</p>
```

Either way it is good to know how to do both. Go ahead and create a paragraph tag with a break tag inside of it to see how this works.

## Displaying Less than and Greater than symbols
We want to display on our webpage some cool looking html code to help others learn how to code. To do this we have to use whats called a character entity reference to display the less than and greater than symbols(Less than: `&lt;` Greater than: `&gt;`). If we don't use this reference then our code will be used like normal HTML code. If we wanted to show someone how to use the header tag this is how we would do it.

```html
<pre>&lt;h1&gt;Here is an h1 tag&lt;/h1&gt;</pre>
```

Try it out yourself! Create 3 different times you use BOTH the `&lt;` and `&gt;` symbols in 3 different tags on your web page. Show off your newly found HTML skills on this page! Click the run button to see your progress.

After you have followed along this assignment run the tests and submit the assignment.