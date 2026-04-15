const form = document.querySelector("#form")!;
const submitButton = document.querySelector("#submitbutton")!;

function logFields() {
  const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".textcontent");

  fields.forEach((field, index) => {
    console.log(`Field ${index + 1}: ${field.value}`);
  });
}

function clearForm() {
  const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".textcontent");

  fields.forEach((field) => {
    field.value = "";
  });
}

function validateForm(e: Event) {
  e.preventDefault(); // Prevent page refresh

  let hasError = false;

  const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".textcontent");

  fields.forEach((field) => {
    if (field.hasAttribute("required") && !field.value.trim()) {
      field.style.borderColor = "red";
      hasError = true;
    } else {
      field.style.borderColor = "";
    }
  });

  if (hasError) {
    const firstEmpty = Array.from(fields).find((f) => f.hasAttribute("required") && !f.value.trim());
    if (firstEmpty) firstEmpty.focus();

    alert("Please fill in all required fields.");
  } else {
    logFields();
    clearForm();
    alert("Message sent! (This is where real submission would happen)");
  }
}

function preventRefresh(e: Event) {
  e.preventDefault(); // Prevent page refresh
}

form.addEventListener("submit", preventRefresh);

submitButton.addEventListener("click", validateForm);
