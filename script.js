document.addEventListener('DOMContentLoaded', function () {
    const showPasswordBtn = document.querySelector('#showPasswordBtn');
    const passwordField = document.querySelector('input[type="password"]');
    const icon = document.querySelector('#eyeIcon');
    
    if (showPasswordBtn && passwordField && icon) {
        showPasswordBtn.addEventListener('click', function () {
            if (passwordField.type === 'password') {
                passwordField.type = 'text'; // Show password
                icon.classList.remove('fa-eye'); // Remove eye icon
                icon.classList.add('fa-eye-slash'); // Add eye-slash icon
            } else {
                passwordField.type = 'password'; // Hide password
                icon.classList.remove('fa-eye-slash'); // Remove eye-slash icon
                icon.classList.add('fa-eye'); // Add eye icon
            }
        });
    } 
});

// Form validation and submission handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const firstName = document.querySelector('input[type="text"]:nth-child(1)').value;
    const lastName = document.querySelector('input[type="text"]:nth-child(2)').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const terms = document.getElementById('terms').checked;

    if (!firstName || !lastName || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    alert('Account created successfully!');
    
    window.location.href = 'index.html';

});

// Google and Apple button functionality
document.querySelector('.google-bttn').addEventListener('click', function () {
    alert('Google Sign-In clicked!');
});

document.querySelector('.apple-bttn').addEventListener('click', function () {
    alert('Apple Sign-In clicked!');
});
