//variables
const sendBtn = document.getElementById('sendBtn');



//event listeners

eventListeners();

function eventListeners() {
    //app init
    document.addEventListener('DOMContentLoaded', appInit);
}


//functions

//app initialization
function appInit() {
    //disable the send button on load
    sendBtn.disabled = true;
}