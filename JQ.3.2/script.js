let counter = 0;


$("#hover").hover(
    function() {
        $("#counter").text(counter);
    },
    function() {
        $("#counter").text(counter);
    }
);
