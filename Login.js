const passwordField = document.getElementById('password');
const signUpForm = document.querySelector('#signup form');
const signInForm = document.querySelector('#signIn form');

// Add event listener for sign-up form submission
signUpForm.addEventListener('submit', function (event) {
    if (!validatePassword(passwordField.value)) {
        event.preventDefault(); // Prevent form submission if password is invalid
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.');
    }
});

// Password validation function
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
document.getElementById('signUpButton').addEventListener('click', function () {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
});

document.getElementById('signInButton').addEventListener('click', function () {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('signIn').style.display = 'block';
});
