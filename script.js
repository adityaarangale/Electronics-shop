var form = document.getElementById("contactForm");

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var messageInput = document.getElementById("messageInput");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill in all fields before submitting the form.");
        return;
    } else {

    alert(
        "Form Submitted Successfully!\n\n" +
        "Name: " + nameInput.value + "\n" +
        "Email: " + emailInput.value + "\n" +
        "Message: " + messageInput.value
    );
    }

    form.reset();

});