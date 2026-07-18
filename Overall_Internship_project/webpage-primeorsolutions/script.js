// Handles the internship application form: basic validation + confirmation message.

document.getElementById("applyForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const status = document.getElementById("formStatus");

    if(name === "" || email === ""){
        status.textContent = "Please fill in your name and email before submitting.";
        status.className = "form-status error";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        status.textContent = "Please enter a valid email address.";
        status.className = "form-status error";
        return;
    }

    status.textContent = "Thanks " + name + "! Your application has been received.";
    status.className = "form-status success";

    this.reset();
});
