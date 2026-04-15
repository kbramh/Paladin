const submitButtonValue = document.querySelector("#submitbutton");
const input = document.querySelector("#submit1");

function logButtonValue(e: Event) {
  console.log(input.value);
}

submitButtonValue.addEventListener("click", logButtonValue);

const formSubmitButtonValue = document.querySelector("#form-submit-button");

//function onSubmit(); fixes a console refresh bug caused by the nature of the form element being used.

function onSubmit(e) {
  e.preventDefault();

  setTimeout(function () {
    input.value = "";
  });
}

formSubmitButtonValue.addEventListener("submit", onSubmit);
