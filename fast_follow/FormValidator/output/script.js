const form = document.getElementById("myForm");

function checkEmail (e) { 
    console.log("checkEmail");
    alert('hi', e);
    return true;
}

function checkPassword () {
    console.log("checkPassword");
}

function checkPassword2 () {
    console.log("checkPassword");
}

form.addEventListener("submit", function() {
    console.log("submit");
    checkEmail();
    checkPassword();
    checkPassword2();
});