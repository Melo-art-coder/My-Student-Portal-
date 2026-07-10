// Grab the elements from the HTML
const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function(e) {
    // Stop the page from reloading when the form submits
    e.preventDefault();

    // Get the values from the inputs
    const name = document.getElementById("name").value;
    const matric = document.getElementById("matric").value;
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Create a new table row and insert the values safely
    const newRow = `
        <tr>
            <td>${name}</td>
            <td>${matric}</td>
            <td>${department}</td>
            <td>${level}</td>
            <td>${email}</td>
            <td>${phone}</td>
        </tr>
    `;

    // Append the row to the table body
    studentList.innerHTML += newRow;

    // Clear out the form inputs for the next student entry
    form.reset();
});
