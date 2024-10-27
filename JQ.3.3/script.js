$("#submitButton").click(function() {


    $("#output").text("");


    let firstName = $("#firstName").val().trim();
    let lastName = $("#lastName").val().trim();
    let phone = $("#phone").val().trim();


    if (!firstName) {
        $("#output").text("First Name is required");
    } else if (!lastName) {
        $("#output").text("Last Name is required");
    } else if (!phone) {
        $("#output").text("Phone Number is required");
    } else {
        $("#output").text(`Thank you ${firstName} ${lastName}. We will contact you soon at ${phone}`);
    }
});
