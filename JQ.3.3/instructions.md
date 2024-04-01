# Use jQuery for form validation
Here we have a 'contact us' form. Once a user clicks a submit button on a form it is common to do some form validation to make sure the user is entering valid information. In this assignment we are going to do some simple form validation and give the user some output based on what information is given through the form.

Your tasks:

- When the submit button is clicked test to see if all the input fields have something in them. If one is blank output in the #output div "(form field) is required" Example: "First Name is required" if nothing is in the first name input "Last Name is required" if nothing is in the last name input and "Phone Number is required" if nothing is in the phone number input. __Should only show one error at a time in that order.__
- If all the input fields have content in them then output the following message: "Thank you (first name) (last name). We will contact you soon at (phone number)"