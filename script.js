const form = document.getElementById("studentForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Redirect to success page
    window.location.href = "success.html";
});
