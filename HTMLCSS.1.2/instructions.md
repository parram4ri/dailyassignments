# Block Elements VS. Inline Elements

The two different tags we used in the last assignment(headers and paragraphs) are known as block elements. What this means is that on a page each of these elements are going to get their own space. Other content that comes before or after these tags will be on separate lines.

Inline elements do not stay on its own line all by itself. They will use the least amount of space possible to be lined up right next to the element right beside it.

Lets see this is action. Go ahead an make 3 paragraph tags like so:

```html 
<p>This</p>
<p>is</p>
<p>block</p>
```

Click the run button. Each element gets its own line. Now we are going to use a tag called span. This will be how you put in text on the same line with multiple tags. Try this:

```html
<span>This</span>
<span>is</span>
<span>inline</span>
```

After you click the run button notice how the words are all on the same line now! This is how inline elements work!

## Nested Elements
Is it possible to have a tag inside of a tag?? It sure is! Its even possible to have a tag inside of a tag inside of a tag! Tagception! This is what it would look like:

```html
<p>This is <span>nesting</span> a span tag <span>inside of</span> a paragraph tag</p>
```

Something to note here are some naming conventions used when nesting tags. In this example the paragraph tag is considered the parent tag of the span tag since it is one layer backwards from the span tag. The span tag is considered the child element of the paragraph tag since it is nested inside of the paragraph.

Now the two span tags inside the paragraph tags are considered siblings since they both are on the same layer or level of nesting.

Confused on this naming convention? Check out this video for an explanation: https://www.lynda.com/CSS-tutorials/HTML-family-tree-Parents-children-ancestor-descendant-siblings/800217/2811138-4.html

Try it out yourself! In the editor create an h1 tag with a nested span tag in it!

Submission
Once you have followed this example run the tests. If the tests pass then submit the assignment.