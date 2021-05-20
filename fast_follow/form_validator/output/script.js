const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const pw = document.getElementById("pw");
const pw2 = document.getElementById("pw2");

function showErrorMessage(node, message) {
    node.parentNode.querySelector("small").innerHTML = `<b style='color: red'>${message}</b>`;
}

function removeErrorMessage(node) {
    node.parentNode.querySelector("small").innerText = "";
}

function checkName() {
    if (requiredValue(name)) {
        return;
    }
}

function checkEmail(e) { 
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (requiredValue(email)) {
        return;
    }
    if (regex.test(email.value)) {
        removeErrorMessage(email);
    } else {
        showErrorMessage(email, "Wrong Email");
    }
}

function checkPW() {
    if (requiredValue(pw)) {
        return;
    }
    if (pwLengthCheck(pw)) {
        return;
    }
}

function checkPW2() {
    if (requiredValue(pw2)) {
        return;
    }
    if (pwLengthCheck(pw2)) {
        return;
    }
    if (pwConfirmCheck()) {
        return;
    }
}

function requiredValue(node) {
    if (node.value.trim() !== "") {
        removeErrorMessage(node);
        return false;
    } else {
        showErrorMessage(node, "Empty Value");
        return true;
    }
}

function pwLengthCheck(node) {
    const value = node.value.trim();
    if (value.length < 6) {
        showErrorMessage(node, "Password should be longer than 6 letters");
        return true;
    } else {
        removeErrorMessage(node);
        return false;
    }
}

function pwConfirmCheck() {
    if (pw.value !== pw2.value) {
        showErrorMessage(pw2, "Password is not same");
        return true;
    } else {
        removeErrorMessage(pw2);
        return false;
    }
}

function checkPasswordLength () {
    console.log("checkPasswordLength");
}

function confirmPassword () {
    console.log("confirmPassword");
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("submit");
    checkName();
    checkEmail();
    checkPW();
    checkPW2();
});