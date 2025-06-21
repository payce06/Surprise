const VALID_USERNAME = "admin";
const VALID_PASSWORD = "1234";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error-message");

    if (user == VALID_USERNAME && pass == VALID_PASSWORD) {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("cool-thing").classList.remove("hidden");
        throwConfetti();
    } else {
        error.textContent = "Wrong credentials. Try Again!";
    }
}