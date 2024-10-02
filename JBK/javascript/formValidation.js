var a = "Basic Form Validation using Javascript"
console.log(a)

function checkEmail() {
    var uName = document.getElementById("userName").value
    var eMsg = document.getElementById("emailMsg")
    var emailRegex = /\S+@\S+\.\S+/.test(uName)
    if (emailRegex) {
        eMsg.innerHTML = "Email is Correct"
        eMsg.style.color = "blue"
        return true
    } else {
        eMsg.innerHTML = "Email is Incorrect"
        eMsg.style.color = "red"
        return false
    }
}

function checkMobile() {
    var mobileNo = document.getElementById("mobileNo").value
    var mMsg = document.getElementById("mobileMsg")
    var mobileRegex = /^[6-9]\d{9}$/.test(mobileNo)
    if (mobileRegex) {
        mMsg.innerHTML = "Mobile Number is Correct"
        mMsg.style.color = "blue"
        return true
    } else {
        mMsg.innerHTML = "Mobile Number is Incorrect"
        mMsg.style.color = "red"
        return false
    }
}

function checkPassword() {
    var password = document.getElementById("password").value
    var pMsg = document.getElementById("passwordMsg")
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    if (passwordRegex) {
        pMsg.innerHTML = "Password is Correct"
        pMsg.style.color = "blue"
        return true
    } else {
        pMsg.innerHTML = "Password is Incorrect. It should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character."
        pMsg.style.color = "red"
        return false
    }
}

function login() {
    if (checkEmail() && checkMobile() && checkPassword()) {
        window.open("/JBK/html/loginDone.html")
    } else {
        if (!checkEmail()) {
            alert("Email is Incorrect")
        }
        if (!checkMobile()) {
            alert("Mobile Number is Incorrect")
        }
        if (!checkPassword()) {
            alert("Password is Incorrect. It should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character.")
        }
    }
}