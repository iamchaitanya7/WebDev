// loginValidation.js

function check() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Chaitanya" && password == 987654321) {
        window.location.href = "/JBK/html/loginDone.html"
    } else {
        alert("Login Unsuccessful.!");
    }

    // Check if username or password is empty
    if (username === "" || password === "") {
        alert("Username and password cannot be empty.");
        return false;
    }

    // Check if username contains only letters and numbers
    var usernamePattern = /^[a-zA-Z0-9]+$/;
    if (!usernamePattern.test(username)) {
        alert("Username can only contain letters and numbers.");
        return false;
    }

    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Check if password contains at least one number
    var passwordPattern = /[0-9]/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one number.");
        return false;
    }
}
