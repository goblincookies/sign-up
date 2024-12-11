let validName = false;

// let labelName = "first & last name";
let userName = document.querySelector("#user-name");
let inputs = document.querySelectorAll("input");


for (let i =0; i< inputs.length; i++) {
    inputs[i].addEventListener("focusin", shiftLabel);
    inputs[i].addEventListener("focusout", validateField);

}

// userName.addEventListener("focusin", shiftLabel);

function shiftLabel(e) {
    let label = e.target.previousElementSibling;
    let input = e.target;
    label.classList.remove("hidden");
    label.classList.add("label-in");
    input.classList.remove("shift-up");
    e.target.placeholder = "";
}

function validationFailed(e) {
    let label = e.target.previousElementSibling;
    let fieldBorder = e.target.parentElement.parentElement;

    if (label.textContent.split("**").length < 2 ) {
        label.textContent += "**";
    }
    label.classList.remove("label-passed");
    fieldBorder.classList.remove("field-passed");
    label.classList.add("label-failed");
    fieldBorder.classList.add("field-failed");
}

function validationPassed(e) {
    let label = e.target.previousElementSibling;
    let fieldBorder = e.target.parentElement.parentElement;
    if (label.textContent.split("**").length > 1 ) {
        label.textContent = label.textContent.split("**")[0];
    }
    label.classList.remove("label-failed");
    fieldBorder.classList.remove("field-failed");
    label.classList.add("label-passed");
    fieldBorder.classList.add("field-passed");

}

function validateField(e) {
    //
    console.log(e.target.name);

    switch(e.target.name) {
        case "user-name":
            validName = validateName(e);
            break;
        case "user-email":
            validateName(e);
            break;
        case "user-phone":
            validateName(e);
            break;
        case "user-password-1":
            validateName(e);
            break;
    }
}

function validateName(e) {
    // FAIL
    console.log(e.target.value);
    if (e.target.value == "") {
        validationFailed(e);
        return false;
    }

    validationPassed(e);
    return true;
    // FAIL
}