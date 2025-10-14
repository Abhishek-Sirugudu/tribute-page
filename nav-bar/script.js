const button = document.querySelector("#theme-toggle");

const body = document.querySelector("body");

button.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    console.log("Theme has been changed");
});