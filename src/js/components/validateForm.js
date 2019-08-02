function emailIsValid (email) {
    return 
}

function validateForm(e) {
    let mailField = document.querySelector('.mail-field');
    if(!(/\S+@\S+\.\S+/.test(mailField.value))){
        alert("Incorrectly entered email");
        mailField.classList.add("invalid");
        return false;
    }
    mailField.classList.remove("invalid");
    return true;
}