const submitButtonValue = document.querySelector('#submitbutton');

function logButtonValue(e) {
  console.log(e.target.value);
}

submitButtonValue.addEventListener('click', logButtonValue);
