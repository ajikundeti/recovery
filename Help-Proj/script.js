document.getElementById("tracker-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const date = document.getElementById("date").value;
    const mood = document.getElementById("mood").value;
    const triggers = document.getElementById("triggers").value;

    // Display values below the form
    const display = document.createElement("div");
    display.innerHTML = `
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Mood:</strong> ${mood}</p>
        <p><strong>Notes/Triggers:</strong> ${triggers}</p>
        <hr>
    `;
    document.querySelector("main").appendChild(display);

    // Clear the form
    document.getElementById("tracker-form").reset();
});
