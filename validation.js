function validateEmail(email) {
    var a = email.indexOf("@");
    if (a < 1) {
        return false;
    }
    var d = email.indexOf(".");
    if (d <= a + 2) {
        return false;
    }
    if (d === email.length - 1) {
        return false;
    }
    return true;
}

function submitTrigger() {
    let error = 0;
    // get input value
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let gender = document.getElementById("gender").value
    let location = document.getElementById("location").value
    let message = document.getElementById("message").value
        // validate input value
    if (name.length < 3) {
        document.getElementById("name_error").innerHTML = "Please Insert Name! [Minimum Length 3]";
        error++
    } else {
        document.getElementById("name_error").innerHTML = "";
    }
    if (validateEmail(email)) {
        document.getElementById("email_error").innerHTML = "";
    } else {
        document.getElementById("email_error").innerHTML = "Please Insert The Correct Email Format! [username@gmail.com]";
        error++
    }
    if (gender == "") {
        document.getElementById("gender_error").innerHTML = "Please Select Gender!";
        error++
    } else {
        document.getElementById("gender_error").innerHTML = "";
    }
    if (location.length < 10) {
        document.getElementById("location_error").innerHTML = "Please Insert Location! [Minimum Length 10]";
        error++
    } else {
        document.getElementById("location_error").innerHTML = "";
    }
    if (message.length == 0) {
        document.getElementById("message_error").innerHTML = "Please Insert Message!";
        error++
    } else {
        document.getElementById("message_error").innerHTML = "";
    }
    if (error === 0) {
        alert("Form Submitted Successfully!")
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("gender").value = ""
        document.getElementById("location").value = ""
        document.getElementById("message").value = ""
    }
}