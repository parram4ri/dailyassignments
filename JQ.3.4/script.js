//-------------------------------------------------
// The usual way to use the on click method
//-------------------------------------------------

$('#newButton').on('click', function() {
  
  // When the button is clicked add a whole new counter
  // to the DOM
  $('#container').append(`
    <div class="counterContainer">
      <div class="counterButton">Click me</div>
      <div>Counter: <span class="counterText">0</span></div>
    </div>
  `);
  
});

//-------------------------------------------------
// Using delegation when items are added to the DOM 
//-------------------------------------------------

$('#container').on('click', '.counterButton', function() {
  
  // This line grabs the sibling that is next to it. So in this
  // case it grabs the div with the counter
  let counter = $(this).next();
  
  // This line grabs the span that has the actual number part
  // of the text
  let counterText = $(counter).children()[0];
  
  // Add one to the counter
  $(counterText).text(Number($(counterText).text()) + 1);
  
});