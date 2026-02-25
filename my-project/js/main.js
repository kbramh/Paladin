const submitButtonValue = document.querySelector('#submitbutton'); 

function logButtonValue (e) {
    console.log(e)
}; 

submitButtonValue.addEventListener('click', logButtonValue); 