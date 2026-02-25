const submitButtonValue = document.querySelector('#submitbutton');
const input = document.querySelector('#submit1'); 

function logButtonValue(e) {
  console.log(input.value); 
}

submitButtonValue.addEventListener('click', logButtonValue);
