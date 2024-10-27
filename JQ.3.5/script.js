$('#createButton').on('click', function() {
  $('#container').append(`
    <div class="textContainer">
      <div class="toggleText">Toggle Text</div>
      <p class="noDisplay">Suprise! Here is some text.</p>
    </div>
  `);
});


// Write your code here
$("#createButton").on("click", function() {
    $("#container").append(`
        <div class="textContainer">
            <div class="toggleText">Toggle Text</div>
            <p class="noDisplay">Surprise! Here is some text.</p>
        </div>
    `);
});


$("#container").on("click", ".toggleText", function() {
    $(this).next("p").toggleClass("noDisplay");
});
