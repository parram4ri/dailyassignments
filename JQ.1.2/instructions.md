# Selecting a collection of elements
When you select elements by tag name or by class name you are likely to get a collection of elements that you will need to loop through to apply the logic to each individual element. We can do this by using `$().each(function(){})`

The .each() function will loop through each element that is selected. The function takes a function as a parameter to be called. To apply styles or other attributes to the individual element we need to use `$(this)` inside the parameter function.

Go ahead and select all list item elements and apply the font 'Helvetica' to each element. _Helvetica must be capitalized._