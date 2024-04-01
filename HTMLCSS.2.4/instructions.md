# Containers
There are a number of tags that are used as containers. Tag examples: 

```html
<div></div>
<header></header>
<nav></nav>
<section></section>
<article></article>
```

Every single one of these tags do the exact same thing. They are a block level element that is meant to hold other children elements.

Right now these tags may seem useless but when we get into CSS these container tags are going to be very useful.

Lets put these best practices into practice! If you take a look at the code in the editor you will notice we have created some links that we want to go to different pages. Lets put all these links inside one `<nav></nav>` container.

An example of wrapping code in a wrapper looks like so:

```html
<nav>
  <p>Hello!</p>
</nav>
```

Once you have done that for the nav we are going to create containers inside containers! One of the most common containers to use is the div element.

Look to our page we have right now. We have ourself a blog with three blog posts. Its smart to wrap all content in a div so go ahead and put a starting div tag on line 18 and an ending div tag right before the closing body tag.

Perfect! Now lets put divs around each of the blog posts so we can style each post!

An example of putting divs in divs would look like so:

```html
<div>
  <div>
    <p>content</p>
  </div>
  <div>
    <p>more content</p>
  </div>
</div>
```

Once you have added the nav tag and the nested divs go ahead and run the tests then submit the assignment.