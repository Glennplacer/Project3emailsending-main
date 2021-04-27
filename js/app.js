//variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');



//event listeners

eventListeners();

function eventListeners() {
    //app init
    document.addEventListener('DOMContentLoaded', appInit);

    //validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //send email & reset button
    resetBtn.addEventListener('click', resetForm);
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

    //validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }

    //both will return errors, then check if theres any errors
    errors = document.querySelectorAll('.error');

    //check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0) {
            //the button should be enabled
            sendBtn.disabled = false;
        }
    }
}
//validate the length of the fields
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//validate email (checks for @ in the value)
 function validateEmail(field) {
    let emailText = field.value;
    //check if the emailText contain the @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
 }
 //reset the form
 function resetForm() {
    sendEmailForm.reset();
 }