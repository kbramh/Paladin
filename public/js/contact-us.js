const form = document.querySelector("#form");
const submitButton = document.querySelector("#submitbutton");

function logAndClearFields() {
  const fields = form.querySelectorAll(".textcontent");

  fields.forEach((field, index) => {
    console.log(`Field ${index + 1}: ${field.value}`);
  });

  fields.forEach((field) => {
    field.value = "";
  });
}

function validateForm(e) {
  e.preventDefault(); // Prevent page refresh

  let hasError = false;

  // Get all our input/textarea fields
  const fields = form.querySelectorAll(".textcontent");

  // Reset borders first
  fields.forEach((field) => {
    field.style.borderColor = "";
  });

  // Check required fields
  fields.forEach((field) => {
    if (field.hasAttribute("required") && !field.value.trim()) {
      field.style.borderColor = "red";
      hasError = true;
    }
  });

  if (hasError) {
    // Find first empty required field and focus it
    const firstEmpty = Array.from(fields).find((f) => f.hasAttribute("required") && !f.value.trim());
    if (firstEmpty) firstEmpty.focus();

    // Show error message
    alert("Please fill in all required fields.");
  } else {
    // SUCCESS: log values + clear fields (your original intent)
    logAndClearFields();
    alert("Message sent! (This is where real submission would happen)");
    // Later you can replace the alert with actual fetch/email code
  }
}

// Attach to form submit (cleaner than button click for validation)
form.addEventListener("submit", validateForm);

// Optional: If you really want something extra on button click
submitButton.addEventListener("click", () => {
  console.log("Submit button was clicked");
});
