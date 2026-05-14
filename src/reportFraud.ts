const submitButtonValue = document.querySelector<HTMLButtonElement>("#submitbutton");
const input = document.querySelector<HTMLInputElement>("#submit1");

function logButtonValue(_e: Event) {
  console.log(input?.value);
}

if (submitButtonValue) {
  submitButtonValue.addEventListener("click", logButtonValue);
}

//function onSubmit(); fixes a console refresh bug caused by the nature of the form element being used.

function onSubmit(e: Event) {
  e.preventDefault();

  setTimeout(function () {
    if (input) input.value = "";
  });
}

if (submitButtonValue) {
  submitButtonValue.addEventListener("submit", onSubmit);
}

//This file is not being used in our report fraud page at all.
