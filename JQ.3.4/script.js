$('#newButton').on('click', function() {
 
  $('#container').append(`
    <div class="counterContainer">
      <div class="counterButton">Click me</div>
      <div>Counter: <span class="counterText">0</span></div>
    </div>
  `);
 
});
$('#container').on('click', '.counterButton', function() {
 
  let counter = $(this).next();
 
  let counterText = $(counter).children()[0];
 
 
  $(counterText).text(Number($(counterText).text()) + 1);
 
});
