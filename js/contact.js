const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const formSuccessMessage = document.querySelector(".success");

const buttonColor = document.querySelector(".cta-submit");


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validPattern = regEx.test(email);
    return validPattern;
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    console.log("validateForm"); 
}

form.addEventListener("submit", validateForm);


function formValidated() {
    if (checkLength(fullName.value, 0) && validateEmail(email.value) && checkLength(message.value, 24) === true) {
        formSuccessMessage.innerHTML = `<div><p class="formSuccess">${"You have successfully submitted the form."}</p></div>`;
        buttonColor.style.background = "rgba(77, 92, 53, 0.7)";
        buttonColor.style.border = "rgba(77, 92, 53, 0.7)";
        buttonColor.innerHTML = "Form submitted";
        form.reset();
    } 
}

form.addEventListener("submit", formValidated);
