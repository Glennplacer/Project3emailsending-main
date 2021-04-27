//variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');



//event listeners

eventListeners();

function eventListeners() {
    //app init
    document.addEventListener('DOMContentLoaded', appInit);

    //validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}


//functions

//app initialization
function appInit() {
    //disable the send button on load
    sendBtn.disabled = true;
}
//validate the fields
function validateField() {
    let errors;

    //validate the length of the field
    validateLength(this);
}