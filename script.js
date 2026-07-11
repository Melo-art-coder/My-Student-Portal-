// Grab the elements from the HTML
const form = document.getElementById("studentForm");

form.addEventListener("submit", function(e) {
    // Stop the page from reloading
    e.preventDefault();

    // After registration, go to the success page
    window.location.href = "success.html";
});
