# HTML Forms
Forms are a great way to get user input on a webpage! Here we are going to see how we can get the visual part of the form set up.

It all starts with the form tag. `<form></form>` This tag will wrap all of our form content.

## Inputs and labels
Inputs are a key part to the form. There are many different types of inputs. Because of this there is a type attribute in the input tag to declare which input you want. Here are some examples:

```html
<input type="text">
<input type="email">
<input type="radio">
<input type="checkbox">
```

In the text and email types you can add a placeholder of initial text that you want inside the text box like so:

```html
<input type="text" placeholder="Enter Name">
```

You can also have text right by your text box that when clicked on will make the assigned input selected. Add the for attribute with the same name as the ID of the input like so:

```html
<label for="firstName">First Name: </label>
<input type="text" id="firstName" placeholder="First Name">
```

Try this out yourself on line 18 by making an input that is asking for a users last name. Add a label as well that is pointing to the input.

## Submit button
Every good form has a submit button. This can be easily accomplished by having a input with type submit. Go ahead and create the submit button on line 21(or right after where it says to create the submit button).

Note: We have wrapped the labels and inputs in div tags. This is because labels and inputs are inline elements and to make it so each form item is on a separate line we wrap the elements in divs.
