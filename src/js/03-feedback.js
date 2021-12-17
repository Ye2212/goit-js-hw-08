import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");


const FORM_STATE = "feedback-form-state";
let formData = {};
formFillOut()

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit',  onFormSubmit)

function onInputChange(evt){

    formData[evt.target.name] = evt.target.value; //  formData.email = emailEl.value; formData.message = textareaEl.value;
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));
    console.log(formData);

}
function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(formData)
    console.log('Message sent!');
    evt.target.reset();
    localStorage.removeItem(FORM_STATE);
}

function formFillOut(){
const savedData = JSON.parse(localStorage.getItem(FORM_STATE));
if (savedData === null || savedData === undefined) {
    return
}
formData = savedData;

if(savedData){
    console.log(savedData);
    emailEl.value = savedData.email;
    textareaEl.value = savedData.message;
}
}
