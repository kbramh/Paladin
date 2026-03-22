const submitButtonValue = document.querySelector("#submitbutton");
const input = document.querySelector(".textcontent");

function logInputFieldValue(e) {
  console.log(input.value);
  console.log(document.querySelector(".textcontent:nth-child(2)").value);

  e.preventDefault();

  setTimeout(function () {
    input.value = "";
    document.querySelector(".textcontent:nth-child(2)").value = "";
  });
}

submitButtonValue.addEventListener("click", logInputFieldValue);

const form = document.querySelector("#form");

//function onSubmit(); fixes a console refresh bug caused by the nature of the form element being used.

function onSubmit(e) {
  e.preventDefault();

  setTimeout(function () {
    input.value = "";
  });
}

form.addEventListener("submit", onSubmit);
