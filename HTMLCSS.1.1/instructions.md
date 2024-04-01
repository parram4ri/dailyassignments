# Introduction to HTML

## Intro
Welcome to the HTML portion of your repl.it assignments! To the right you will see two windows. The top one is the output window. When you start adding html code and you click the run button the results will show up here. The bottom one is the console(Again this is not the terminal).

## Tags
Lets start off by talking about tags. HTML is made up of many different types of tags with content inside of those tags. We can even have tags inside of tags! The basic syntax is as follows:

```html
<h1></h1>
```

Here you see we use the less than symbol < to tell the computer we are going to reference a tag type. This tag is an h1 tag. Once we declare its type we put a greater than symbol > to end the reference. We then have another less than symbol with a forward slash declaring we are going to declare a closing tag </ then the same h1 reference and a greater than symbol >. 

If it helps you can look at the first h1 tag as if it was an open parenthesis --> ( Now once we open a parenthesis we must eventually close it. So we have the second closing h1 tag which is declared with the forward slash in front of the h1 --> ) We can put content in between these tags that will display on the page like so:

```html
<h1>Content</h1>
```

## Headings
A very common tag that is used in HTML is the heading tag. There are 6 different heading tags:

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

The h1 tag is used to declare the biggest headings on a webpage and the headings get smaller all the way to the h6 tag.

Lets use each of these tags to see them in action. Type the following inside the body tag of index.html (line 9):

```html
<h1>This is the biggest heading!</h1>
<h2>This is a really big heading....but not the biggest</h2>
<h3>This is a medium sized heading.</h3>
```

These are the first 3 types of headings. After typing these in go ahead and type in the other 3 types of headings from h4 to h6 with content inside. Once you do that click the run button and see to the right all your headings come to life!

## Paragraph Tags
Another common tag to use is the paragraph tag. It is used for large amounts of content that you would like to display. It looks like so:

```html
<p>This is a paragraph tag</p>
```

Go ahead an add 3 paragraph tags to the HTML document inside the body tag(where we put all tags to display on the web page). Click run to see them in action!

## Submission
Have each header tag and 3 paragraph tags in your HTML code then run the tests in the terminal.

## Tests
Now that we are in html REPLS the tests will be slightly different. When you enter `npm test` into the terminal it will ask you what version of node to install. Just press enter as this will install the latest version. The tests should then run immediatly afterwards.