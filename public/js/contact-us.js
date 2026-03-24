const submitButtonValue = document.querySelector("#submitbutton");
const input = document.querySelector(".textcontent");

function logInputFieldValue(e) {
  console.log(input.value);
  console.log(document.querySelector(".textcontent:nth-child(2)").value);
  console.log(document.querySelector(".textcontent:nth-child(3)").value);
  console.log(document.querySelector(".textcontent:nth-child(4)").value);

  setTimeout(function () {
    input.value = "";
    document.querySelector(".textcontent:nth-child(2)").value = "";
    document.querySelector(".textcontent:nth-child(3)").value = "";
    document.querySelector(".textcontent:nth-child(4)").value = "";
  });
}

submitButtonValue.addEventListener("click", logInputFieldValue);

const form = document.querySelector("#form");

//function onSubmit(); fixes a console refresh bug caused by the nature of the form element being used.

function onSubmit(e) {
  e.preventDefault();
  const formFields = form.querySelectorAll(".textcontent");

  formFields.forEach((el) => {
    const value = el.value.trim();
    if (!value) {
      el.style.borderColor = "red";
      anyEmpty = true;
    } else {
      el.style.borderColor = "";
    }
  });

  if (anyEmpty === true) {
    const firstEmpty = Array.from(formFields).find((el) => !el.value.trim());
    firstEmpty.focus();
    return;
  }

  setTimeout(function () {
    document.querySelector(".textcontent").textContent = "";
  }, 100);
}

form.addEventListener("submit", onSubmit);
