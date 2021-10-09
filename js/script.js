const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

// submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

// check inputs function
function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // validation
    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email Address cannot be empty');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Your password must be at least 8 characters');
    } else if (passwordValue.search(/[a-z]/i) < 0) {
        setErrorFor(password, 'Your password must contain at least one letter');
    } else if (passwordValue.search(/[0-9]/) < 0) {
        setErrorFor(password, 'Your password must contain at least one digit');
    } else {
        setSuccessFor(password);
    }
}

// success & error functions
function setErrorFor(input, message) {
    const formInput = input.parentElement;
    const span = formInput.querySelector('span');
    const errors = [];

    span.innerText = message;
    formInput.classList.add('error-message');
    errors.push(message);

}

function setSuccessFor(input) {
    const formInput = input.parentElement;
    formInput.classList.remove('error-message');
    formInput.classList.remove('message');
    formInput.classList.add('success');
}

function isEmail(email) {
    return /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(email);
}