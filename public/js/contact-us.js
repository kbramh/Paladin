const submitButtonValue = document.querySelector("#submitbutton");
const input = document.querySelector("#submit1");

function logButtonValue(e) {
  console.log(input.value);
}

submitButtonValue.addEventListener("click", logButtonValue);

const form = document.querySelector("#form");

//function onSubmit(); fixes a console refresh bug caused by the nature of the form element being used.

function onSubmit(e) {
  e.preventDefault();

  setTimeout(function () {
    input.value = "";
  });
}

form.addEventListener("submit", onSubmit);
