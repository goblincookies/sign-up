// let validName = false;
// let validPhone = false;
// let validEmail = false;
// let validPassword=false;
// let labelName = "first & last name";
let userName = document.querySelector("#user-name");
let inputs = document.querySelectorAll("input");
let signUpForm = document.querySelector("#sign-up-form");

for (let i =0; i< inputs.length; i++) {
    inputs[i].addEventListener("focusin", enteringData);
    inputs[i].addEventListener("focusout", validateField);
}

signUpForm.addEventListener("submit", submitForm );


function submitForm(e) {
    // e.preventDefault();
    // let isValid = false;
    let v = 0;

    for (let i =0; i< inputs.length; i++) {
        if (validate(inputs[i])) {
            v+=1;
        }
    }
    
    // console.log(v, "are valid, out of", inputs.length);
    if (v != inputs.length) { e.preventDefault(); }
}

function enteringData(e) {
    shiftLabel(e.target);
}

function shiftLabel(eT) {
    let label = eT.previousElementSibling;
    let input = eT;
    label.classList.remove("hidden");
    label.classList.add("label-in");
    input.classList.remove("shift-up");
    eT.placeholder = "";
}

function validationFailed(eT) {
    // shift label
    shiftLabel(eT);

    let label = eT.previousElementSibling;
    let fieldBorder = eT.parentElement.parentElement;

    if (label.textContent.split("**").length < 2 ) {
        label.textContent += "**";
    }
    label.classList.remove("label-passed");
    fieldBorder.classList.remove("field-passed");
    label.classList.add("label-failed");
    fieldBorder.classList.add("field-failed");
}

function validationPassed(eT) {
    let label = eT.previousElementSibling;
    let fieldBorder = eT.parentElement.parentElement;
    if (label.textContent.split("**").length > 1 ) {
        label.textContent = label.textContent.split("**")[0];
    }
    label.classList.remove("label-failed");
    fieldBorder.classList.remove("field-failed");
    label.classList.add("label-passed");
    fieldBorder.classList.add("field-passed");

}

function validateField(e) {
    console.log(e.target.name);
    let valid = validate(e.target);
}

function validate(eT) {

    if(eT.value.length <= 1) {
        validationFailed(eT);
        return false;
    }
    console.log("length", eT.checkValidity());

    if (!eT.checkValidity()) {
        validationFailed(eT);
        return false;
    }
    validationPassed(eT);
    return true;
}