const submitButtonValue = document.querySelector<HTMLButtonElement>("#submitbutton");
const input = document.querySelector<HTMLInputElement>("#submit1");

function logButtonValue(e: Event) {
  console.log(input?.value);
}

submitButtonValue.addEventListener("click", logButtonValue);

const formSubmitButtonValue = document.querySelector("#form-submit-button");

//function onSubmit(); fixes a console refresh bug caused by the nature of the form element being used.

function onSubmit(e: Event) {
  e.preventDefault();

  setTimeout(function () {
    if (input) input.value = "";
  });
}

formSubmitButtonValue.addEventListener("submit", onSubmit);

//This file is not being used in our report fraud page at all.
