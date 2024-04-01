# jQuery parents() selector
You just learned how to traverse down into the DOM tree to select child elements. Similarly we can travel up the DOM tree to select parent elements! parents() works a lot like children() does. You select an element and call parents() which will then give you an array of all its parents starting from the closest parent to the farthest ancestor.

Go ahead and test this out by selecting the #selectMe paragraph tag. Then grab its first parent which is the .card div. Remove the element by using the the remove() function in jQuery.

Remember you will need to rewrap your parent element in the jquery object $().remove() to be able to use remove().

Submit when this is done.