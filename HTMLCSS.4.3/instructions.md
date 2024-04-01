# Position
We are not going to do a whole lot with position but it is good to know that it is there and its important to know how to use it when the use cases come up. If you are confused on the different use cases go back through the pluralsight videos and follow along with the examples.

__Fixed Positioning:__ This is a great way to create a nav bar that is fixed at the top of the page even when the user scrolls down. Demonstrate how to use fixed positioning by applying it to the `#nav` element.

__Absolute Positioning:__ When you need an element to be taken out of the flow of the web page use absolute positioning. You can then position that element using top right bottom or left which will position the element relative to the window. You can also wrap that absolutely positioned element in a container and make that container `position: relative;` and that child element that is absolutely positioned will be positioned relative to its parent container when you use top right bottom or left.

Demonstrate this by making the `#firstBox` absolutely positioned and add a `top: 0;` You will see that our box is no longer contained inside its container. It has moved to the very top of the page.

Now make `#secondBox` absolutely positioned  with a `top: 0;` as well. In addition make the `#relativeParent` element position relative. Notice the box didn't move at all! This is because top of 0 is the top of its parent div now.

__Z-Index:__ When you have elements that have one of the position attributes(relative, absolute, or fixed) you can decide which elements are displayed on top or below others using the z-index property. Its not good that we have a box that displays on top of our nav bar. Give our `#nav` a z-index of 2 to ensure the nav is always on top of all the other elements.