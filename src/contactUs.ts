const form = document.querySelector("#form")!;

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

function preventRefresh(e: Event) {
  e.preventDefault(); // Prevent page refresh
  logFields();
  clearForm();
}

form.addEventListener("submit", preventRefresh);
